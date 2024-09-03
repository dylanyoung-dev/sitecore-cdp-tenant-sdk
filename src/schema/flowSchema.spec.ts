import { expect } from 'chai';
import { FlowChannel, FlowScheduleType, FlowStatus, FlowType, IFlowDefinition } from '../models';
import { CreateExperienceSchema } from './flowSchema';

describe('Flow Experience Input Schema', () => {
  let experienceDefinition: IFlowDefinition;

  beforeEach(() => {
    // Initialize the base experience definition before each test
    experienceDefinition = {
      name: 'Test API Experience',
      friendlyId: 'test_api_experience',
      type: FlowType.WebFlow,
      channels: [FlowChannel.Web],
      status: FlowStatus.Draft,
      schedule: {
        type: FlowScheduleType.Simple,
        startDate: new Date().toISOString(),
      },
    };
  });

  it('should return false for bad friendly id', () => {
    experienceDefinition.friendlyId = 'test-api-experience'; // Invalid friendlyId

    const validationResult = CreateExperienceSchema.safeParse(experienceDefinition);

    expect(validationResult.success).to.be.equal(false);
  });

  it('should return true for valid friendly id', () => {
    experienceDefinition.friendlyId = 'test_api_experience'; // Valid friendlyId

    const validationResult = CreateExperienceSchema.safeParse(experienceDefinition);

    expect(validationResult.success).to.be.equal(true);
  });

  it('should return false for missing name', () => {
    delete experienceDefinition.name; // Missing name

    const validationResult = CreateExperienceSchema.safeParse(experienceDefinition);

    expect(validationResult.success).to.be.equal(false);
  });
});
