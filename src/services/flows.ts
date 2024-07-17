import { Client } from '../client';
import { FlowDefinition } from '../models';
import { BaseService } from './base';

export class FlowService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

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

  public CreateExperience = async (flow: FlowDefinition): Promise<FlowDefinition | undefined> => {
    return;
  };

  public CreateExperiment = async (flow: FlowDefinition): Promise<FlowDefinition | undefined> => {
    return;
  };
}
