export interface IDecisionModelDefinition {
  clientKey?: string;
  href?: string;
  ref?: string;
  name: string;
  revision: number;
  archived: boolean;
  deploymentConfiguration: IDeploymentConfiguration;
  tags: string[];
  variants: {
    href: string;
  };
  revisions: {
    href: string;
  };
  sampleSizeCConfig: {
    baseValue: string;
    minimumDetectableEffect: string;
    confidenceLevel: string;
  };
}

export interface IDeploymentConfiguration {
  variants: IDeployVariant[];
}

export interface IDeployVariant {
  variantRef: string;
  split: number;
  status: string;
  control: boolean;
  variantRevision: number;
}

export interface IDecisionModelVariant {
  clientKey?: string;
  href?: string;
  ref?: string;
  name: string;
  modifiedByRef?: string;
  modifiedAt?: string;
  revision?: number;
  archived?: boolean;
  decisionModelDefinitionRef: string;
  definition: string;
  transpiledDefinition: string;
  revisions: {
    href: string;
  };
  templateVariables: string;
  inProduction?: boolean;
}

export interface IDecisionModelRevision {
  name: string;
}

export interface IDecisionModelVariantTestResult {
  decisionModelName: string;
  decisionModelRef: string;
  decisionModelVariantName: string;
  decisionModelVariantRef: string;
  decisionModelVariantRevision: number;
  error: false;
  debug: IDecisionDebugResponse;
  decisionModelResultNodes: IDecisionModelResultNode[];
}

export interface IDecisionDebugResponse {
  bucket: string;
  logs: string;
}

export interface IDecisionModelResultNode {
  id: string;
  name: string;
  error: boolean;
  type: string;
  executionTime: number;
  dependentNodes: string[];
  outputs: any;
}
