import { cloudinaryImage } from "@keystone-next/cloudinary";
import { text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_CLOUD_NAME,
  apiSecret: process.env.CLOUDINARY_CLOUD_NAME,
  folder: "eCom",
}

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source'
    }),
    altTest: text(),
  },
});