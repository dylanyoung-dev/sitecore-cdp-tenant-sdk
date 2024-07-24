import { z } from 'zod';
import { Client } from '../client';
import { IFlowDefinition } from '../models';
import { CreateExperimentSchema } from '../schema';
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
   * @returns Promise<IFlowDefinition[] | undefined> Returns an array of flows
   * @throws Error
   *        Throws an error if the request fails
   */
  public GetAll = async (): Promise<IFlowDefinition[] | undefined> => {
    try {
      const response = await this.Get(`v3/flowDefinitions`);

      if (response.ok) {
        let flows: IFlowDefinition[] = (await response.json()) as IFlowDefinition[];

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
   * Create an experience
   * @param {IFlowDefinition} flow
   *        Pass in a flow definition to create an experience
   * @returns Promise<IFlowDefinition | undefined> Returns a flow object
   * @todo Not Implemented - Do not use
   */
  public CreateExperience = async (flow: IFlowDefinition): Promise<IFlowDefinition | undefined> => {
    try {
      const response = await this.Post(`v3/flowDefinitions`, flow);

      if (response.ok) {
        let flow: IFlowDefinition = (await response.json()) as IFlowDefinition;

        return flow;
      }
    } catch (ex) {
      throw new Error(ex as string);
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
}
