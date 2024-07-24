import { z } from 'zod';

export const CreateExperimentSchema = z.object({
  name: z.string(),
  modifiedByRef: z.string(),
  modifiedAt: z.string(),
  revision: z.number(),
  friendlyId: z.string(),
  type: z.string(),
  subtype: z.string(),
  channels: z.string(),
  triggers: z.string(),
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
