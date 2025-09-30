import { defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Bildgalleri",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Bildtitel",
      type: "string",
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
