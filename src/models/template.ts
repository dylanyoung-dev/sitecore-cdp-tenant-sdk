export interface ITemplate {
  clientKey?: string;
  href?: string;
  ref?: string;
  name: string;
  description: string;
  modifiedByRef?: string;
  modifiedAt?: string;
  revision?: number;
  revisionComment?: string;
  archived?: boolean;
  friendlyId: string;
  type: string;
  status: string;
  icon: string;
  additionalFields?: {
    decisionOutputReference: string;
    decisionReturnType: string;
  };
  templateElements: ITemplateElement[];
  render?: boolean;
  defaultTemplate: boolean;
  tags?: string[];
  customTemplate?: boolean;
}

export interface ITemplateElement {
  id: string;
  template: string;
}

export interface ITestTemplateOutput {
  templates: ITemplateElement[];
}

export interface ITestTemplateRenderOutput {
  [key: string]: ITemplateElement[];
}

export enum TemplateType {
  Decision = 'DECISION',
  Web = 'WEB',
  Audience = 'AUDIENCE',
}
