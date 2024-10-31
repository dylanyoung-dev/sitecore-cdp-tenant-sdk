# Working with Templates

If you haven't done so already, you must have initialized your `Personalize Client`, which you can learn more about here: [Getting Started](./getting-started.md). Currently there is support for the following Templates in Sitecore Personalize:

- JS Modules
- Web Templates
- Decision Templates
- Conditions

There are two types of templates in Sitecore Personalize:

1. **Snippet Templates**: These templates act like snippets. When used, the contents of the template (such as HTML, CSS, etc.) are copied to the new item using the template.
2. **Linked Templates**: These templates maintain a direct link between the template and the items using that template.

These two styles impact the level of control you have. For example, modifying a `Web Template` will not change existing experiences that used that template. To apply changes everywhere, you must update both the template and the experiences that used it.

# Fields

Below is a list of fields for the Templates, with a brief description explaining its usage.

| Field Name | Description              | Is Required |
| ---------- | ------------------------ | ----------- |
| name       | The name of the template | Yes         |

# Examples

Below are some examples on how you would make template changes.

## Creating Templates

To create different types of Templates, follow the examples below:

`Web Template`:

```typescript

```

## Reading Templates

## Updating Templates

## Deleting Templates
