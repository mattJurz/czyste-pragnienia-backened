import { list } from "@keystone-6/core";
import {
  checkbox,
  password,
  relationship,
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
    password: password(),
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
