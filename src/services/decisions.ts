import { BaseService, Client } from '../client';
import {
  IDecisionDebugResponse,
  IDecisionModelDefinition,
  IDecisionModelVariant,
  IGuestContext,
} from '../models';

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
   * @returns Promise<IDecisionModelDefinition[] | undefined> Returns an array of Decision Model Definitions
   */
  public GetAll = async (): Promise<IDecisionModelDefinition[] | undefined> => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions`);

      if (response.ok) {
        let decisions: IDecisionModelDefinition[] =
          (await response.json()) as IDecisionModelDefinition[];

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
   * @returns Promise<IDecisionModelDefinition | undefined> Returns a decision object
   */
  public GetDecisionDefinitionByRef = async (
    decisionRef: string
  ): Promise<IDecisionModelDefinition | undefined> => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions/${decisionRef}`);

      if (response.ok) {
        let decision: IDecisionModelDefinition =
          (await response.json()) as IDecisionModelDefinition;

        return decision;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Get decision variants
   * @param {string} decisionRef
   *        Pass in a decision variant reference (Id or FriendlyId) to get a specific decision model variant
   * @returns Promise<IDecisionModelVariant[] | undefined> Returns an array of Decision Model Variants
   */
  public GetDecisionVariants = async (
    decisionRef: string
  ): Promise<IDecisionModelVariant[] | undefined> => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions/${decisionRef}/variants`);

      if (response.ok) {
        let variants: IDecisionModelVariant[] = (await response.json()) as IDecisionModelVariant[];

        return variants;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Test a decision model
   * @param {IGuestContext} guestContext
   *        Pass in a guest context object
   * @param {string} decisionModelRef
   *        Pass in a decision model reference (Id or FriendlyId)
   * @param {string} decisionModelVariantRef
   *       Pass in a decision model variant reference (Id or FriendlyId)
   * @returns Promise<IDecisionDebugResponse | undefined> Returns a decision debug response object
   */
  public TestDecisionModelVariant = async (
    guestContext: IGuestContext,
    decisionModelRef: string,
    decisionModelVariantRef: string
  ): Promise<IDecisionDebugResponse | undefined> => {
    try {
      const response = await this.Post(`v2/testDecisionModel`, {
        context: guestContext,
        decisionModelRef: decisionModelRef,
        decisionModelVariantRef: decisionModelVariantRef,
      });

      if (response.ok) {
        let debugResponse: IDecisionDebugResponse =
          (await response.json()) as IDecisionDebugResponse;

        return debugResponse;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
