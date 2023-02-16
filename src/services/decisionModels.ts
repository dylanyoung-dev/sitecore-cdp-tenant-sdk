import { IClientInitOptions, IDecisionModelDefinition, IResponse } from '../models/index.js';
import { BaseService } from './index.js';

export class DecisionModelDefinitionService extends BaseService {
  constructor(options: IClientInitOptions) {
    super(options);
  }

  public GetAll = async () => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions`);

      if (response.ok) {
        let decisionDefinitions: IResponse<IDecisionModelDefinition[]> =
          (await response.json()) as IResponse<IDecisionModelDefinition[]>;

        return decisionDefinitions;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public GetById = async (id: string) => {
    try {
      const response = await this.Get(`v2/decisionModelDefinitions/${id}`);

      if (response.ok) {
        let decisionDefinition: IDecisionModelDefinition =
          (await response.json()) as IDecisionModelDefinition;

        return decisionDefinition;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public Test = async () => {};
}
