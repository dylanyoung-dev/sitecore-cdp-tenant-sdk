import { z } from 'zod';
import { FlowType } from '../models';

const FlowTypeValues = Object.values(FlowType) as [string, ...string[]];

export const CreateExperimentSchema = z.object({
  name: z.string().min(1, { message: 'name must be at least 1 character long' }),
  friendlyId: z.string().min(1, { message: 'friendlyId must be at least 1 character long' }),
  type: z.enum(FlowTypeValues),
  subtype: z.string(),
  channels: z.string(),
  tags: z.array(z.string()),
  businessProcess: z.string(),
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
  transpiledVariants: z.string(),
  status: z.string(),
  schedule: z.object({
    type: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  }),
  revisions: z.object({
    href: z.string(),
  }),
  sampleSizeConfig: z.object({
    baseValue: z.number(),
    minimumDetectableDifference: z.number(),
    confidenceLevel: z.number(),
  }),
});
