# Sitecore Personalize Tenant SDK

Welcome to the Javascript based SDK for using the Sitecore Personalize Tenant/Admin APIs. This repository is useful if you want to create integrations with these APIs. This repository is used by many other repositories such as the Serializer for CDP/Personalize, and many Automation Testing scripts.

## Getting Started

To get started using this SDK, you should first install the package as a dependency in your Node project:

```bash
> npm install sitecore-personalize-tenant-sdk
```

Once it's installed you'll need to initialize the client:

```javascript
import { Client, RegionOptions } from 'sitecore-personalize-tenant-sdk';

let client: Client;
client = new Client({
  clientId: '<ClientId>',
  clientSecret: '<ClientSecret>',
  region: RegionOptions.EU,
});
```

## Development / Contributions
