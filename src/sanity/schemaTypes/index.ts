import { type SchemaTypeDefinition } from "sanity";
import { pris } from "./pris";
import omOss from "./omOss";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pris, omOss],
};
