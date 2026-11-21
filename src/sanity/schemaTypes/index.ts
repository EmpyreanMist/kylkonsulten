import { type SchemaTypeDefinition } from "sanity";

import { pris } from "./pris";
import omOss from "./omOss";
import utbildningstillfalle from "./utbildningstillfallen";
import news from "./news";
import galleryImage from "./galleryImage";
import siteContent from "./siteContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteContent, pris, omOss, utbildningstillfalle, news, galleryImage],
};
