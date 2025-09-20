import { defineType } from "sanity";

export const pris = defineType({
  name: "pris",
  title: "Pris",
  type: "document",
  fields: [
    {
      name: "kurs",
      title: "Kursnamn",
      type: "string",
    },
    {
      name: "pris",
      title: "Pris (exkl moms)",
      type: "number",
    },
    {
      name: "beskrivning",
      title: "Beskrivning",
      type: "text",
    },
    {
      name: "kategori",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Examinationsavgifter", value: "Examination" },
          { title: "Grundutbildning", value: "Grundutbildning" },
          { title: "Preparandkurser", value: "Preparand" },
          { title: "Säkerhetsutbildningar", value: "Säkerhetsutbildning" },
        ],
        layout: "radio",
      },
    },
  ],
});
