import { cloudinaryImage } from "@keystone-6/cloudinary";
import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  apiKey: process.env.CLOUDINARY_API_KEY || "",
  apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  folder: process.env.CLOUDINARY_API_FOLDER,
};
export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text(),
    product: relationship({ ref: "Product.photo" }),
    group: relationship({ ref: "Group.image" }),
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "product"],
    },
  },
});
