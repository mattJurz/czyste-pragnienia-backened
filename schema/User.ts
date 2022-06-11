import { list } from "@keystone-6/core";
import {
  checkbox,
  password,
  relationship,
  select,
  text,
} from "@keystone-6/core/fields";

export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    // role: select({
    //   options: [
    //     { label: "client", value: "CLIENT" },
    //     { label: "participant", value: "PARTICIPANT" },
    //     { label: "group leader", value: "GROUP_LEADER" },
    //     { label: "admin", value: "ADMIN" },
    //     { label: "super admin", value: "SUPER_ADMIN" },
    //   ],
    //   defaultValue: "CLIENT",
    //   ui: {
    //     displayMode: "segmented-control",
    //   },
    // }),
    role: relationship({
      ref: "Role.users",
      many: true,
    }),
    password: password(),
    groupParticipants: relationship({ ref: "Group.participants", many: true }),
    groupLeaders: relationship({
      ref: "Group.leaders",
      many: true,
    }),
    //TODO, add roles, cart and orders
    // role: relationship({ ref: "Role.users" }),
    // authoredPosts: relationship({ ref: "Post.author", many: true }),
    // pollAnswers: relationship({
    //   ref: "PollAnswer.answeredByUsers",
    //   many: true,
    //   ui: {
    //     hideCreate: true,
    //     createView: { fieldMode: "hidden" },
    //   },
    // }),
  },
});
// export const Role = list({
//   fields: {
//     name: text(),
//     canManageContent: checkbox({ defaultValue: false }),
//     canManageUsers: checkbox({ defaultValue: false }),
//     users: relationship({ ref: "User.role", many: true }),
//   },
// });
