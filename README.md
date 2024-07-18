# Sitecore Personalize Tenant SDK

Welcome to the Javascript based SDK for using the Sitecore Personalize Tenant/Admin APIs. This repository is useful if you want to create integrations with these APIs. This repository is used by many other repositories such as the Serializer for CDP/Personalize, Automation Testing Scripts and some AI powered integrations I'm working on. Currently this only supports the Cloud Portal for Sitecore CDP/P.

## Getting Started

To get started using this SDK, you should first install the package as a dependency in your Node project:

```bash
> npm install sitecore-personalize-tenant-sdk
```

Once it's installed you'll need to initialize the client:

```javascript
import { Client, RegionOptions, TemplateType } from 'sitecore-personalize-tenant-sdk';

let client: Client;
client = new Client({
  clientId: '<ClientId>',
  clientSecret: '<ClientSecret>',
  region: RegionOptions.EU,
});

let response = await client.Templates.GetAll(TemplateType.Web);
```

This module is built to support ESM and CommonJS.

## Development / Contributions

You can get setup for local development by cloning the repository and running the following commands:

```
$ npm install

$ npm run dev
```

This will start the app in the current terminal window, where changes to the current files, will be reflected immediately (via a watch command with tsup).

## Release
