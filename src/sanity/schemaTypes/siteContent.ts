import { defineArrayMember, defineField, defineType } from "sanity";

import { defaultSiteContent } from "../lib/siteContent";

const linkFields = [
  defineField({
    name: "label",
    title: "Text",
    type: "string",
  }),
  defineField({
    name: "href",
    title: "Länk",
    type: "string",
  }),
];

const categoryOptions = [
  { title: "Examinationsavgifter", value: "Examination" },
  { title: "Grundutbildning", value: "Grundutbildning" },
  { title: "Preparandkurser", value: "Preparand" },
  { title: "Säkerhetsutbildningar", value: "Säkerhetsutbildning" },
  { title: "Övrigt", value: "Övrigt" },
];

export default defineType({
  name: "siteContent",
  title: "Sidinnehåll",
  type: "document",
  initialValue: defaultSiteContent,
  groups: [
    { name: "global", title: "Globalt" },
    { name: "start", title: "Startsida" },
    { name: "contact", title: "Kontakt" },
    { name: "otherPages", title: "Övriga sidor" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "global",
      fields: [
        defineField({ name: "title", title: "Webbplatstitel", type: "string" }),
        defineField({
          name: "description",
          title: "Meta-beskrivning",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "navbar",
      title: "Meny",
      type: "object",
      group: "global",
      fields: [
        defineField({ name: "brandName", title: "Namn i menyn", type: "string" }),
        defineField({ name: "logoAlt", title: "Alt-text för logotyp", type: "string" }),
        defineField({ name: "menuLabel", title: "Mobilmeny titel", type: "string" }),
        defineField({
          name: "openMenuLabel",
          title: "Tillgänglighetstext: öppna meny",
          type: "string",
        }),
        defineField({
          name: "closeMenuLabel",
          title: "Tillgänglighetstext: stäng meny",
          type: "string",
        }),
        defineField({
          name: "links",
          title: "Menylänkar",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "link",
              title: "Länk",
              fields: linkFields,
            }),
          ],
        }),
        defineField({
          name: "mobileCtaLabel",
          title: "Knapptext i mobilmeny",
          type: "string",
        }),
        defineField({
          name: "mobileCtaHref",
          title: "Knapplänk i mobilmeny",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "text", title: "Text före länk", type: "text" }),
        defineField({ name: "linkLabel", title: "Länktext", type: "string" }),
        defineField({ name: "linkHref", title: "Länkadress", type: "url" }),
        defineField({ name: "linkSuffix", title: "Text efter länk", type: "text" }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primär knapptext",
          type: "string",
        }),
        defineField({
          name: "primaryCtaHref",
          title: "Primär knapplänk",
          type: "string",
        }),
        defineField({
          name: "secondaryCtaLabel",
          title: "Sekundär knapptext",
          type: "string",
        }),
        defineField({
          name: "secondaryCtaHref",
          title: "Sekundär knapplänk",
          type: "string",
        }),
        defineField({
          name: "highlights",
          title: "Punkter",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "mission",
      title: "Vårt uppdrag",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({
          name: "paragraphs",
          title: "Textstycken",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
        }),
      ],
    }),
    defineField({
      name: "exams",
      title: "Examinationer",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "intro", title: "Introtext", type: "text" }),
        defineField({
          name: "cards",
          title: "Kort",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "examCard",
              title: "Kort",
              fields: [
                defineField({ name: "title", title: "Rubrik", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "prices",
      title: "Priser",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "footnote", title: "Fotnot", type: "text" }),
        defineField({
          name: "categoryLabels",
          title: "Kategorirubriker",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "priceCategoryLabel",
              title: "Kategorirubrik",
              fields: [
                defineField({
                  name: "category",
                  title: "Kategori",
                  type: "string",
                  options: { list: categoryOptions },
                }),
                defineField({ name: "label", title: "Rubrik", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "prepCourses",
      title: "Preparandkurser",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text" }),
      ],
    }),
    defineField({
      name: "upcomingEvents",
      title: "Kommande utbildningar",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({
          name: "emptyText",
          title: "Text när inga utbildningar finns",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Kontaktformulär",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({
          name: "recipientEmail",
          title: "Mottagande e-postadress",
          type: "string",
        }),
        defineField({
          name: "defaultSubject",
          title: "Förvalt ärende",
          type: "string",
        }),
        defineField({
          name: "subjectPrefix",
          title: "Ämnesrad prefix",
          type: "string",
        }),
        defineField({
          name: "subjectOptions",
          title: "Ärendealternativ",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "form",
          title: "Fälttexter",
          type: "object",
          fields: [
            defineField({
              name: "namePlaceholder",
              title: "Namn",
              type: "string",
            }),
            defineField({
              name: "phonePlaceholder",
              title: "Telefon",
              type: "string",
            }),
            defineField({
              name: "emailPlaceholder",
              title: "E-post",
              type: "string",
            }),
            defineField({
              name: "messagePlaceholder",
              title: "Meddelande",
              type: "text",
            }),
          ],
        }),
        defineField({ name: "buttonLabel", title: "Knapptext", type: "string" }),
        defineField({ name: "footnote", title: "Fotnot", type: "text" }),
      ],
    }),
    defineField({
      name: "aboutPreview",
      title: "Om oss-teaser",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text" }),
        defineField({ name: "ctaLabel", title: "Knapptext", type: "string" }),
        defineField({ name: "ctaHref", title: "Knapplänk", type: "string" }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Bokningspuff",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text" }),
        defineField({ name: "buttonLabel", title: "Knapptext", type: "string" }),
        defineField({ name: "buttonHref", title: "Knapplänk", type: "string" }),
      ],
    }),
    defineField({
      name: "faq",
      title: "Vanliga frågor",
      type: "object",
      group: "start",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({
          name: "items",
          title: "Frågor",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "faqItem",
              title: "Fråga",
              fields: [
                defineField({
                  name: "question",
                  title: "Fråga",
                  type: "string",
                }),
                defineField({ name: "answer", title: "Svar", type: "text" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "location",
      title: "Plats och karta",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({ name: "name", title: "Platsnamn", type: "string" }),
        defineField({ name: "address", title: "Adress", type: "string" }),
        defineField({ name: "mapsLabel", title: "Google Maps-länktext", type: "string" }),
        defineField({ name: "mapsUrl", title: "Google Maps-länk", type: "url" }),
        defineField({ name: "embedSrc", title: "Inbäddad kartlänk", type: "url" }),
        defineField({ name: "iframeTitle", title: "Kartans titel", type: "string" }),
      ],
    }),
    defineField({
      name: "newsPage",
      title: "Nyhetssidan",
      type: "object",
      group: "otherPages",
      fields: [
        defineField({ name: "title", title: "Rubrik", type: "string" }),
        defineField({
          name: "emptyText",
          title: "Text när inga nyheter finns",
          type: "string",
        }),
        defineField({
          name: "galleryTitle",
          title: "Bildgalleriets rubrik",
          type: "string",
        }),
        defineField({
          name: "emptyGalleryText",
          title: "Text när inga bilder finns",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "footer",
      title: "Sidfot",
      type: "object",
      group: "global",
      fields: [
        defineField({ name: "locationTitle", title: "Platsrubrik", type: "string" }),
        defineField({ name: "address", title: "Adress", type: "string" }),
        defineField({ name: "contactTitle", title: "Kontaktrubrik", type: "string" }),
        defineField({ name: "phone", title: "Telefon", type: "string" }),
        defineField({ name: "email", title: "E-post", type: "string" }),
        defineField({ name: "ccEmail", title: "CC e-post", type: "string" }),
        defineField({
          name: "educatorsTitle",
          title: "Utbildarrubrik",
          type: "string",
        }),
        defineField({
          name: "educators",
          title: "Examinatörer och utbildare",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Sidinnehåll" };
    },
  },
});
