import { z } from 'zod';
import {
  FlowBusinessProcessType,
  FlowChannel,
  FlowScheduleType,
  FlowStatus,
  FlowType,
  TrafficDefinitionType,
} from '../models';

const FlowTypeValues = Object.values(FlowType) as [string, ...string[]];
const FlowTrafficTypeValues = Object.values(TrafficDefinitionType) as [string, ...string[]];
const FlowStatusValues = Object.values(FlowStatus) as [string, ...string[]];
const FlowScheduleTypeValues = Object.values(FlowScheduleType) as [string, ...string[]];
const FlowChannelValues = Object.values(FlowChannel) as [string, ...string[]];
const FlowBusinessProcessTypeValue = Object.values(FlowBusinessProcessType) as [
  string,
  ...string[]
];

const CreateFlowSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'name is a required field' })
      .describe('The name of the flow'),
    friendlyId: z
      .string()
      .describe('The friendly id of the flow')
      .min(1, { message: 'friendlyId is a required field' })
      .regex(/^[a-z0-9_]*$/, { message: 'friendlyId must match "^[a-z0-9_]*$"' }),
    type: z.enum(FlowTypeValues, { errorMap: () => ({ message: 'type is a required field' }) }),
    channels: z
      .array(z.enum(FlowChannelValues))
      .min(1, { message: 'channels should contain atleast one channel' }),
    status: z.enum(FlowStatusValues, {
      errorMap: () => ({ message: 'status is a required field' }),
    }),
    schedule: z.object({
      type: z.enum(FlowScheduleTypeValues, {
        errorMap: () => ({ message: 'schedule.type is a required field' }),
      }),
      startDate: z
        .string()
        .min(1, { message: 'schedule.startDate is a required field - Should use ISO 8601 Format' }),
    }),
  })
  .strict()
  .passthrough();

export const CreateExperienceSchema = CreateFlowSchema.extend({
  // No differences for Experiences for Now
})
  .strict()
  .passthrough();

export const CreateExperimentSchema = CreateFlowSchema.extend({
  traffic: z.object({
    type: z.enum(FlowTrafficTypeValues, {
      errorMap: () => ({ message: 'traffic.type is a required field' }),
    }),
    weightingAlgorithm: z.string(),
    // not required for experiments allocation: z.number(),
    allocationHigh: z.number(),
    allocationLow: z.number(),
    splits: z.array(
      z.object({
        ref: z.string(),
        split: z.number(),
        lowSplit: z.number(),
        highSplit: z.number(),
      })
    ),
    coupled: z.boolean(),
    modifiedAt: z.string(),
  }),
  variants: z.any(),
  sampleSizeConfig: z.object({
    baseValue: z.number(),
    minimumDetectableDifference: z.number(),
    confidenceLevel: z.number(),
  }),
})
  .strict()
  .passthrough();
