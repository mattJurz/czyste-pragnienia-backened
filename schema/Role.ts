import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Role = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    users: relationship({ ref: "User.role", many: true }),
  },
});
