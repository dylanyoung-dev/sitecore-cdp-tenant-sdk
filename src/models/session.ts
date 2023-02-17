export interface ISession {
  ref: string;
  clientKey: string;
  createdAt: Date;
  modifiedAt: Date;
  guestRef: string;
  flowExecutionRef: string;
  status: string;
  sessionType: string;
  startedAt: Date;
  endedAt: Date;
  duration: number;
  channel: string;
  events: IEvent[];
  timeslotId: string;
  timeslotDesc: string;
}

export interface IEvent {
  ref: string;
  clientKey: string;
  createdAt: Date;
  modifiedAt: Date;
  type: string;
  status: string;
  channel: string;
  sessionRef: string;
  flowExecutionRef: string;
  arbitraryData: any;
}
