import { BaseService, Client, DecisionModelDefinition } from '../client';

export class DecisionService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  public GetAll = async (): Promise<DecisionModelDefinition[] | undefined> => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions`);

      if (response.ok) {
        let decisions: DecisionModelDefinition[] =
          (await response.json()) as DecisionModelDefinition[];

        return decisions;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  public GetDecisionDefinitionByRef = async (
    decisionRef: string
  ): Promise<DecisionModelDefinition | undefined> => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions/${decisionRef}`);

      if (response.ok) {
        let decision: DecisionModelDefinition = (await response.json()) as DecisionModelDefinition;

        return decision;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
