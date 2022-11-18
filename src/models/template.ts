export interface Template {
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
  templateElements: TemplateElement[];
  render?: boolean;
  defaultTemplate: boolean;
  tags?: string[];
  customTemplate?: boolean;
}

export interface TemplateElement {
  id: string;
  template: string;
}

export enum TemplateType {
  Decision = 'DECISION',
  Web = 'WEB',
  Audience = 'AUDIENCE',
}
