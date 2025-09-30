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
    utbildare[]{
      namn,
      beskrivning,
      "bildUrl": bild.asset->url
    }
  }
`;
