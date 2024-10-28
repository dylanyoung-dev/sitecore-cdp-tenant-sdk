# Getting Started

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
