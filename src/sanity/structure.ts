import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteContent"]);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Sidinnehåll")
        .schemaType("siteContent")
        .child(
          S.document()
            .schemaType("siteContent")
            .documentId("siteContent")
            .title("Sidinnehåll")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId() ?? "")
      ),
    ]);
