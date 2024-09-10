export interface ITask {
  implementation: string;
  input: ITaskInput;
}

export interface ITaskInput {
  inputType: string;
}

export interface ITemplateRenderTaskInput extends ITaskInput {
  type: string;
  template: string;
}

export interface IConditionsTaskInput extends ITaskInput {
  rules: IRule[];
}

export interface IDecisionModelTaskInput extends ITaskInput {
  decisionModelRefs: string[];
}

export interface IRule {
  id: string;
  ruleData: IRuleData;
}

export interface IRuleData {
  expression: string;
}

export enum ImplementationType {
  Template = 'templateRenderTask',
  Conditions = 'conditionsTask',
  DecisionModel = 'decisionModelTask',
}

export enum TaskInputType {
  Template = 'templateRenderTaskInput',
  Conditions = 'conditionsTaskInput',
  DecisionModel = 'decisionModelTaskInput',
}
