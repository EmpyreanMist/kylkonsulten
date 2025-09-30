import { defineType } from "sanity";

export default defineType({
  name: "news",
  title: "Nyheter",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "body",
      title: "Text",
      type: "text",
    },
    {
      name: "date",
      title: "Datum",
      type: "datetime",
    },
  ],
});
