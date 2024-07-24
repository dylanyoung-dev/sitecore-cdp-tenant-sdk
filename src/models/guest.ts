export interface IGuestContext {
  channel: string;
  guest: IGuest;
}

export interface IGuest {
  email: string;
  emails: string[];
  ref: string;
  sessions: ISession[];
  orders: IOrder[];
  segmentMemberships: ISegmentMembership[];
}

export interface ISession {}

export interface IOrder {}

export interface ISegmentMembership {}
