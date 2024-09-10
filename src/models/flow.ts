import { IHrefProp, ISampleSizeDefinition, ITemplateVariables } from '.';
import { IGoals } from './goal';
import { ITask } from './task';

export interface IFlowDefinition {
  name?: string;
  clientKey?: string;
  href?: string;
  ref?: string;
  modifiedByRef?: string;
  modifiedAt?: string;
  revision?: number;
  archived?: boolean;
  friendlyId?: string;
  dashboardLinks?: IDashboardLink;
  target?: IFlowTarget;
  type?: FlowType;
  subtype?: FlowSubType;
  channels?: FlowChannel[];
  triggers?: IFlowTrigger[];
  tags?: string[];
  goal?: IGoals;
  businessProcess?: FlowBusinessProcessType;
  traffic?: ITrafficDefinition;
  variants?: IFlowVariant[];
  transpiledVariants?: IFlowVariant[];
  status?: FlowStatus;
  schedule?: IScheduleDefinition;
  revisions?: IHrefProp;
  sampleSizeConfig?: ISampleSizeDefinition;
  notificationEnabled?: boolean;
}

export interface IFlowTarget {
  script: string;
  targetPages: IComparison[];
}

export interface IFlowTrigger {
  name: string;
  description: string;
  identifier: IComparison[];
}

export interface IComparison {
  operator: string;
  value: string;
}

export interface IDashboardLink {
  url: string;
  name: string;
}

export interface IFlowVariant {
  ref?: string;
  name?: string;
  description?: string;
  previewUrl?: string;
  image?: string;
  isControl?: boolean;
  assets?: IFlowAsset;
  templateVariables?: ITemplateVariables;
  tasks: ITask[];
}

export interface IFlowAsset {
  css: string;
  html: string;
  js: string;
}

export interface IScheduleDefinition {
  type?: string;
  startDate?: string;
  endDate?: string;
}

export enum FlowBusinessProcessType {
  Interactive = 'interactive_v1',
  Triggered = 'triggered_v1',
}

export enum FlowScheduleType {
  Simple = 'simpleSchedule',
}

export interface ITrafficDefinition {
  type?: TrafficDefinitionType;
  weightingAlgorithm?: WeightingAlgorithm;
  allocation?: number;
  allocationHigh?: number;
  allocationLow?: number;
  splits?: ISplitDefinition[];
  coupled?: boolean;
  modifiedAt?: string;
}

export enum TrafficDefinitionType {
  Simple = 'simpleTraffic',
  Advanced = 'advancedTraffic',
}

export interface ISplitDefinition {
  ref?: string;
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
