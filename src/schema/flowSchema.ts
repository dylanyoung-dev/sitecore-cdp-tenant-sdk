import { z } from 'zod';
import { FlowType } from '../models';

const FlowTypeValues = Object.values(FlowType) as [string, ...string[]];

const CreateFlowSchema = z.object({
  name: z.string().min(1, { message: 'name is a required field' }),
  friendlyId: z.string().min(1, { message: 'friendlyId is a required field' }),
  type: z.enum(FlowTypeValues),
  channels: z.string().min(1, { message: 'channels is a required field' }),
  //businessProcess: z.string(), (this should get calculated automatically by type)
  traffic: z.object({
    type: z.string(),
    weightingAlgorithm: z.string(),
    allocation: z.number(),
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
  transpiledVariants: z.string().optional(),
  status: z.string().optional(),
  schedule: z.object({
    type: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  }),
});

export const CreateExperienceSchema = CreateFlowSchema.extend({
  //subtype: z.string().optional(),     // Shouldn't be provided - Gets automatically set to 'experience'
  //businessProcess: z.string(),    // This will be calculated automatically based on other input
  traffic: z.object({
    type: z.string(),
    weightingAlgorithm: z.string(),
    allocation: z.number(),
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
  schedule: z.object({
    type: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  }),
  sampleSizeConfig: z.object({
    baseValue: z.number(),
    minimumDetectableDifference: z.number(),
    confidenceLevel: z.number(),
  }),
});

export const CreateExperimentSchema = CreateFlowSchema.extend({
  //subtype: z.string(),     // Gets automatically set to 'experiment' for this schema
  //businessProcess: z.string(), This will be calculated automatically based on other input
  traffic: z.object({
    type: z.string(),
    weightingAlgorithm: z.string(),
    allocation: z.number(),
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
  schedule: z.object({
    type: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  }),
  sampleSizeConfig: z.object({
    baseValue: z.number(),
    minimumDetectableDifference: z.number(),
    confidenceLevel: z.number(),
  }),
});
