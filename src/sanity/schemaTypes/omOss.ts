import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "omOss",
  title: "Om oss",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Introtext",
      type: "text",
    }),
    defineField({
      name: "utbildare",
      title: "Utbildare",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "person",
          title: "Utbildare",
          fields: [
            defineField({
              name: "namn",
              title: "Namn",
              type: "string",
            }),
            defineField({
              name: "beskrivning",
              title: "Beskrivning",
              type: "text",
            }),
            defineField({
              name: "bild",
              title: "Bild",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
  ],
});
