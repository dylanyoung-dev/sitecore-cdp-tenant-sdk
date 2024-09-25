import { z } from 'zod';
import { Client } from '../client';
import {
  FlowBusinessProcessType,
  FlowSubType,
  FlowType,
  IDecisionModelTaskInput,
  IFlowDefinition,
  ImplementationType,
  IResponse,
  ITask,
  ITemplateRenderTaskInput,
  TaskInputType,
  TrafficDefinitionType,
  WeightingAlgorithm,
} from '../models';
import { CreateExperienceSchema, CreateExperimentSchema } from '../schema';
import { BaseService } from './base';

/**
 * This is the Flow Service
 * @param {Client} client Sitecore Personalize Client
 */
export class FlowService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Get all flows
   * @param {number} limit
   *        The number of flows to retrieve (default is 10)
   * @param {number} offset
   *        The offset for pagination (default is 0)
   * @returns Promise<IResponse<IFlowDefinition> | undefined> Returns an array of flows
   * @throws Error
   *        Throws an error if the request fails
   */
  public GetAll = async (
    limit: number = 10,
    offset: number = 0
  ): Promise<IResponse<IFlowDefinition> | undefined> => {
    try {
      const response = await this.Get(`v3/flowDefinitions?limit=${limit}&offset=${offset}`);

      if (response.ok) {
        let flows: IResponse<IFlowDefinition> =
          (await response.json()) as IResponse<IFlowDefinition>;

        return flows;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Get a flow by reference
   * @param {string} flowRef
   *        Pass in a flow reference (Id or FriendlyId) to get a specific flow
   * @returns Promise<IFlowDefinition | undefined> Returns a flow object
   */
  public GetByRef = async (flowRef: string): Promise<IFlowDefinition | undefined> => {
    try {
      const response = await this.Get(`v3/flowDefinitions/${flowRef}`);

      if (response.ok) {
        let flow: IFlowDefinition = (await response.json()) as IFlowDefinition;

        return flow;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Update a flow (Experience or Experiment)
   * @param {IFlowDefinition} flow
   *        Pass in a flow definition to update a flow
   * @returns Promise<IFlowDefinition | undefined> Returns a flow object
   */
  public Update = async (flow: IFlowDefinition): Promise<IFlowDefinition | undefined> => {
    try {
      const response = await this.Put(`v3/flowDefinitions/${flow.ref}`, flow);

      if (response.ok) {
        let flow: IFlowDefinition = (await response.json()) as IFlowDefinition;

        return flow;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Create an experience
   * @param {IFlowDefinition} flow
   *        Pass in a flow definition to create an experience
   * @returns Promise<IFlowDefinition | undefined> Returns a flow object
   * @todo Not Implemented - Do not use
   */
  public CreateExperience = async (flow: IFlowDefinition): Promise<IFlowDefinition | undefined> => {
    try {
      // Validate the Input Data using Zod
      const validatedData = CreateExperienceSchema.parse(flow);

      // Add default values for Experience before validation
      const mergedData = {
        ...validatedData,
        subtype: FlowSubType.Experience,
        businessProcess:
          validatedData.type === FlowType.Triggered
            ? FlowBusinessProcessType.Triggered
            : FlowBusinessProcessType.Interactive,
        traffic: {
          type: TrafficDefinitionType.Simple,
          allocation: 100,
          weightingAlgorithm: WeightingAlgorithm.UserDefined,
          splits: [],
        },
        variants: validatedData.variants ?? [],
        sampleSizeConfig: {
          baseValue: 0.02, // Default Value
          minimumDetectableDifference: 0.2, // Default Value
          confidenceLevel: 0.95, // Default Value
        },
      };

      const response = await this.Post(`v3/flowDefinitions`, mergedData);

      if (response.ok) {
        let flow: IFlowDefinition = (await response.json()) as IFlowDefinition;

        return flow;
      }
    } catch (ex) {
      if (ex instanceof z.ZodError) {
        console.error('Flow Definition failed validation: ', ex.errors);
      } else {
        throw new Error(ex as string);
      }
    }
  };

  /**
   * Create an experiment
   * @param {IFlowDefinition} flow
   *        Pass in a flow definition to create an experiment
   * @returns Promise<IFlowDefinition | undefined> Returns a flow object
   * @todo Not Implemented - Do not use
   */
  public CreateExperiment = async (flow: IFlowDefinition): Promise<IFlowDefinition | undefined> => {
    try {
      const validatedData = CreateExperimentSchema.parse(flow);

      const response = await this.Post(`v3/flowDefinitions`, validatedData);

      if (response.ok) {
        let flow: IFlowDefinition = (await response.json()) as IFlowDefinition;

        return flow;
      }
    } catch (ex) {
      if (ex instanceof z.ZodError) {
        console.error('Flow Definition failed validation: ', ex.errors);
      } else {
        throw new Error(ex as string);
      }
    }
  };

  /**
   * Create a template render task input
   * @param {string} type
   * @param {string} template
   * @returns {ITask} Returns a task object
   */
  public CreateTemplateRenderTaskInput(template: string): ITask {
    return {
      implementation: ImplementationType.Template,
      input: {
        inputType: TaskInputType.Template,
        type: 'application/json',
        template,
      } as ITemplateRenderTaskInput,
    };
  }

  /**
   * Create a decision model task input
   * @param {string[]} decisionModelRefs
   * @returns {ITask} Returns a task object
   */
  public CreateDecisionModelTaskInput(decisionModelRefs: string[]): ITask {
    return {
      implementation: ImplementationType.DecisionModel,
      input: {
        inputType: TaskInputType.DecisionModel,
        decisionModelRefs,
      } as IDecisionModelTaskInput,
    };
  }
}
