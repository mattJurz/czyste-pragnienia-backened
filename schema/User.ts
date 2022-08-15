import { list } from "@keystone-6/core";
import {
  checkbox,
  password,
  relationship,
  select,
  text,
} from "@keystone-6/core/fields";
import { permissions, rules } from '../access';

export const User = list({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // only people with the permission can delete themselves!
    // You can't delete yourself
    delete: permissions.canManageUsers,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({
      validation: { isRequired: true }, 
      isIndexed: "unique",
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    role: relationship({
      ref: "Role.users",
    }),
    password: password(),
    groupParticipants: relationship({ ref: "Group.participants", many: true }),
    groupLeaders: relationship({
      ref: "Group.leaders",
      many: true,
    }),

  },
});
