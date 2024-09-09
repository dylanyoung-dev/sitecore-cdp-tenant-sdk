export interface IGoalCalculation {
  type: string;
  calculation: string;
  target: string;
  result: number;
  goalValueAttribute?: string;
}

export interface IPageParameter {
  matchCondition: string;
  parameterString: string;
}

export interface IEventType {
  matchCondition: string;
  matchString: string;
}

export interface IGoal {
  type: string;
  name: string;
  friendlyId: string;
  ref: string;
  description: string;
  goalCalculation: IGoalCalculation;
  pageParameters?: IPageParameter[];
  eventType?: IEventType;
}

export interface IGoals {
  primary: IGoal;
  secondary: IGoal[];
}
