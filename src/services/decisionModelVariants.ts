import { BaseService, IClientInitOptions, IDecisionModelDefinition, IResponse } from "../client.js";


export class decisionModelVariants extends BaseService {
  constructor(options: IClientInitOptions) {
    super(options);
  }

  public GetAllByDefinition = async (definitionRef: string) => {
    try {
        const response = await this.Get(`v2/decisionModelDefinitions/${definitionRef}/variants`);
    
        if (response.ok) {
            let decisionDefinitions: IResponse<IDecisionModelDefinition[]> =
            (await response.json()) as IResponse<IDecisionModelDefinition[]>;
    
            return decisionDefinitions;
        }
    }
  };

  public GetById = async () => {};
}