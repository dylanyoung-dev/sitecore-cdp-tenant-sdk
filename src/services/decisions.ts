import { BaseService, Client, DecisionModelDefinition } from '../client';

/**
 * This is the Decision Service
 * @param {Client} client Sitecore Personalize Client
 */
export class DecisionService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Get all decisions
   * @returns Promise<DecisionModelDefinition[]> Returns an array of Decision Model Definitions
   */
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

  /**
   * Get a decision by reference
   * @param {string} decisionRef
   *        Pass in a decision reference (Id or FriendlyId) to get a specific decision
   * @returns Promise<DecisionModelDefinition> Returns a decision object
   */
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
