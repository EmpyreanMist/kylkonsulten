import { defineField, defineType } from "sanity";

export default defineType({
  name: "utbildningstillfalle",
  title: "Utbildningstillfälle",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Beskrivning",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Datum",
      type: "datetime",
    }),
    defineField({
      name: "price",
      title: "Pris",
      type: "string",
    }),
  ],
});
