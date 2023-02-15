interface IConnection {
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
  inputMappings?: IInputMapping[];
  outputMappings?: IOutputMapping[];
  customHeaders?: ICustomHeader[];
  urlParameters?: IUrlParameter[];
  systemType: string;
  connectionTimeout: number;
  socketTimeout: number;
  icon: string;
}

interface IAuthType {
  authType: string;
}

interface IRequestType {
  requestType: string;
  connectionUrl: string;
  requestBody: string;
}

interface IInputMapping {}

interface IOutputMapping {
  label: string;
  outputReference: string;
  type: string;
}

interface ICustomHeader {
  name: string;
  value: string;
}

interface IUrlParameter {}

export {
  IConnection,
  IAuthType,
  IRequestType,
  IInputMapping,
  IOutputMapping,
  ICustomHeader,
  IUrlParameter,
};
