import { IHrefProp } from '.';

export interface IFlowDefinition {
  name: string;
  clientKey: string;
  href: string;
  ref: string;
  modifiedByRef: string;
  modifiedAt: string;
  revision: number;
  archived: boolean;
  friendlyId: string;
  type: FlowType;
  subtype: FlowSubType;
  channels: FlowChannel;
  triggers: string; // TODO: Come back to this
  tags: string[];
  businessProcess: string; // possibly an enum
  traffic: ITrafficDefinition;
  variants: any; // TODO: Come back to this
  transpiledVariants: string;
  status: FlowStatus;
  schedule: IScheduleDefinition;
  revisions: IHrefProp;
  sampleSizeConfig: ISampleSizeDefinition;
}

export interface IScheduleDefinition {
  type: string;
  startDate: string;
  endDate: string;
}

export interface ITrafficDefinition {
  type: TrafficDefinitionType;
  weightingAlgorithm: WeightingAlgorithm;
  allocation: number;
  allocationHigh: number;
  allocationLow: number;
  splits: ISplitDefinition[];
  coupled: boolean;
  modifiedAt: string;
}

export enum TrafficDefinitionType {
  Simple = 'simpleTraffic',
  Advanced = 'advancedTraffic',
}

export interface ISplitDefinition {
  ref: string;
  split?: number;
  lowSplit?: number;
  highSplit?: number;
}

export enum WeightingAlgorithm {
  MultiArmBandit = 'MULTI_ARM_BANDIT',
  UserDefined = 'USER_DEFINED',
}

export enum FlowType {
  WebFlow = 'INTERACTIVE_WEB_FLOW',
  ApiFlow = 'INTERACTIVE_API_FLOW',
  Triggered = 'TRIGGERED_V3',
}

export enum FlowSubType {
  Experiment = 'EXPERIMENT',
  Experience = 'EXPERIENCE',
}

export enum FlowStatus {
  Draft = 'DRAFT',
  Publishing = 'PUBLISHING',
  Production = 'PRODUCTION',
  Scheduled = 'SCHEDULED',
  Live = 'LIVE',
  Paused = 'PAUSED',
  Completed = 'COMPLETED',
}

export enum FlowChannel {
  CallCenter = 'CALL_CENTER',
  Email = 'EMAIL',
  MobileApp = 'MOBILE_APP',
  MobileWeb = 'MOBILE_WEB',
  PushNotification = 'PUSH_NOTIFICATION',
  SMS = 'SMS',
  Web = 'WEB',
}

export interface ISampleSizeDefinition {
  baseValue: number;
  minimumDetectableDifference: number;
  confidenceLevel: number;
}
