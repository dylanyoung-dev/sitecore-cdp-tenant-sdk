import { Client } from '../client';
import { FlowDefinition } from '../models';
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
   * @returns Promise<FlowDefinition[]> Returns an array of flows
   * @throws Error
   *        Throws an error if the request fails
   */
  public GetAll = async (): Promise<FlowDefinition[] | undefined> => {
    try {
      const response = await this.Get(`v3/flowDefinitions`);

      if (response.ok) {
        let flows: FlowDefinition[] = (await response.json()) as FlowDefinition[];

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
   * @returns Promise<FlowDefinition> Returns a flow object
   */
  public GetByRef = async (flowRef: string): Promise<FlowDefinition | undefined> => {
    try {
      const response = await this.Get(`v3/flowDefinitions/${flowRef}`);

      if (response.ok) {
        let flow: FlowDefinition = (await response.json()) as FlowDefinition;

        return flow;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Create an experience
   * @param {FlowDefinition} flow
   *        Pass in a flow definition to create an experience
   * @returns Promise<FlowDefinition> Returns a flow object
   * @todo Not Implemented - Do not use
   */
  public CreateExperience = async (flow: FlowDefinition): Promise<FlowDefinition | undefined> => {
    return;
  };

  /**
   * Create an experiment
   * @param {FlowDefinition} flow
   *        Pass in a flow definition to create an experiment
   * @returns Promise<FlowDefinition> Returns a flow object
   * @todo Not Implemented - Do not use
   */
  public CreateExperiment = async (flow: FlowDefinition): Promise<FlowDefinition | undefined> => {
    return;
  };
}
