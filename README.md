# Sitecore Personalize Tenant SDK

Welcome to the Javascript based SDK for using the Sitecore Personalize Tenant/Admin APIs. This repository is useful if you want to create integrations with these APIs. This repository is used by many other repositories such as the Serializer for CDP/Personalize, and many Automation Testing scripts.

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

await client.Authenticate();

let response = await client.Templates.GetAllTemplates(TemplateType.Web);
```

This module is built with ESM in mind and doesn't currently support CJS.

## Development / Contributions

You can get setup for local development by cloning the repository and running the following commands:

```
$ npm install

$ npm run dev
```

This will start the app in the current terminal window, where changes to the current files, will be reflected immediately (via a watch command with tsup).

## Release
