// -----------------------------
// Typer för "Om oss"-sidan
// -----------------------------
export type Utbildare = {
  namn: string;
  beskrivning: string;
  bildUrl: string;
};

export type OmOssData = {
  title: string;
  intro: string;
  utbildare: Utbildare[];
};

export const omOssQuery = `
  *[_type == "omOss"][0]{
    title,
    intro,
    utbildare[] {
      namn,
      beskrivning,
      "bildUrl": bild.asset->url
    }
  }
`;

// -----------------------------
// Typer för utbildningstillfällen
// -----------------------------
export type Utbildningstillfalle = {
  _id: string;
  title: string;
  description: string;
  date: string; // ISO-string från Sanity
  price: string;
};

export const utbildningstillfallenQuery = `
  *[_type == "utbildningstillfalle" && date > now()] | order(date asc) {
    _id,
    title,
    description,
    date,
    price
  }
`;

// -----------------------------
// Typer för Nyheter
// -----------------------------
export type News = {
  _id: string;
  title: string;
  body: string;
  date: string;
};

export const allNewsQuery = `
  *[_type == "news"] | order(date desc) {
    _id,
    title,
    body,
    date
  }
`;

// -----------------------------
// Typer för Bildgalleri
// -----------------------------
export type GalleryImage = {
  _id: string;
  title: string;
  imageUrl: string;
};

export const galleryQuery = `
  *[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url
  }
`;
