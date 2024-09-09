export interface IHrefProp {
  href: string;
  archived: boolean;
}

export interface ISampleSizeDefinition {
  baseValue?: number;
  minimumDetectableDifference?: number;
  confidenceLevel?: number;
}

export interface ITemplateVariables {
  [key: string]: string;
}
