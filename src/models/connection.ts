export interface IConnection {
  clientKey?: string;
  href?: string;
  ref?: string;
  name: string;
  description: string;
  modifiedByRef: string;
  modifiedAt: string;
  revision: number;
  archived: boolean;
  auth: IAuthType;
  request: IRequestType;
  inputMappings?: InputMapping[];
  outputMappings?: IOutputMapping[];
  customHeaders?: ICustomHeader[];
  urlParameters?: IUrlParameter[];
  systemType: string;
  connectionTimeout: number;
  socketTimeout: number;
  icon: string;
}

export interface IAuthType {
  authType: string;
}

export interface IRequestType {
  requestType: string;
  connectionUrl: string;
  requestBody: string;
}

export interface InputMapping {}

export interface IOutputMapping {
  label: string;
  outputReference: string;
  type: string;
}

export interface ICustomHeader {
  name: string;
  value: string;
}

export interface IUrlParameter {}
