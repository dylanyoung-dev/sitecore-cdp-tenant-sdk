export interface DecisionModelDefinition {
  clientKey?: string;
  href?: string;
  ref?: string;
  name: string;
  revision: number;
  archived: boolean;
  deploymentConfiguration: DeploymentConfiguration;
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

export interface DeploymentConfiguration {
  variants: DeployVariant[];
}

export interface DeployVariant {
  variantRef: string;
  split: number;
  status: string;
  control: boolean;
  variantRevision: number;
}

export interface DecisionModelVariant {
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

export interface DecisionModelRevision {
  name: string;
}
