import { ISession } from './index.js';

export interface IGuestContext {
  email: string;
  emails?: string[];
  ref?: string;
  clientKey?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  firstName: string;
  lastName: string;
  gender: string;
  sessions?: ISession[];
}
