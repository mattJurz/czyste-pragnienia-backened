import { list } from "@keystone-6/core";
import { integer, relationship, select, text } from "@keystone-6/core/fields";

export const Group = list({
  // TODO access:

  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: "textarea" } }),
    price: integer(),
    image: relationship({
      ref: "ProductImage.group",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
    participants: relationship({
      ref: "User.groupParticipants",
      many: true,
      hooks: {
        validate: (data) => {
          console.log(data);
        },
      },
    }),
    leaders: relationship({
      ref: "User.groupLeaders",
      many: true,
    }),
    participantLimit: integer(),
    // TODOL photo
  },
});
