import { type SchemaTypeDefinition } from "sanity";

import { pris } from "./pris";
import omOss from "./omOss";
import utbildningstillfalle from "./utbildningstillfallen";
import news from "./news";
import galleryImage from "./galleryImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pris, omOss, utbildningstillfalle, news, galleryImage],
};
