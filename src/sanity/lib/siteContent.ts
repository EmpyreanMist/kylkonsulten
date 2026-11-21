export type NavLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  seo: {
    title: string;
    description: string;
  };
  navbar: {
    brandName: string;
    logoAlt: string;
    menuLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    links: NavLink[];
    mobileCtaLabel: string;
    mobileCtaHref: string;
  };
  hero: {
    title: string;
    text: string;
    linkLabel: string;
    linkHref: string;
    linkSuffix: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    highlights: string[];
  };
  mission: {
    title: string;
    paragraphs: string[];
  };
  exams: {
    title: string;
    intro: string;
    cards: Array<{
      title: string;
      text: string;
    }>;
  };
  prices: {
    title: string;
    footnote: string;
    categoryLabels: Array<{
      category: string;
      label: string;
    }>;
  };
  prepCourses: {
    title: string;
    text: string;
  };
  upcomingEvents: {
    title: string;
    emptyText: string;
  };
  contact: {
    title: string;
    recipientEmail: string;
    defaultSubject: string;
    subjectPrefix: string;
    subjectOptions: string[];
    form: {
      namePlaceholder: string;
      phonePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
    buttonLabel: string;
    footnote: string;
  };
  aboutPreview: {
    title: string;
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  location: {
    title: string;
    name: string;
    address: string;
    mapsLabel: string;
    mapsUrl: string;
    embedSrc: string;
    iframeTitle: string;
  };
  newsPage: {
    title: string;
    emptyText: string;
    galleryTitle: string;
    emptyGalleryText: string;
  };
  footer: {
    locationTitle: string;
    address: string;
    contactTitle: string;
    phone: string;
    email: string;
    ccEmail: string;
    educatorsTitle: string;
    educators: string[];
  };
};

export const defaultSiteContent: SiteContent = {
  seo: {
    title:
      "Kylkonsulten i Norr AB – Kylexaminationer Kat I–IV & Preparandkurser",
    description:
      "Praktiska och teoretiska examinationer på uppdrag av Incert. Vi erbjuder även preparandkurser samt Heta Arbeten, Lift och Fallskydd.",
  },
  navbar: {
    brandName: "Kylkonsulten i Norr AB",
    logoAlt: "Kylkonsulten i Norr AB",
    menuLabel: "Meny",
    openMenuLabel: "Öppna meny",
    closeMenuLabel: "Stäng meny",
    links: [
      { label: "Start", href: "/" },
      { label: "Examinationer", href: "/#examinationer" },
      { label: "Preparandkurser", href: "/#preparand" },
      { label: "Priser", href: "/#priser" },
      { label: "Kommande utbildningar", href: "/#UpcomingEvents" },
      { label: "Nyheter", href: "/nyheter" },
      { label: "Kontakt", href: "/#kontakt" },
      { label: "Om oss", href: "/om-oss" },
    ],
    mobileCtaLabel: "Boka / Skicka förfrågan",
    mobileCtaHref: "/#kontakt",
  },
  hero: {
    title: "Kylexaminationer i Norrbotten",
    text: "Vi utför kylexaminationer i Luleå på vårt av Incert godkända Examinationscenter. Incert är ackrediterat organ för kylcertifieringar så själva certifikatet söks via:",
    linkLabel: "incert.se",
    linkHref: "https://incert.se",
    linkSuffix: "som även tillhandahåller information.",
    primaryCtaLabel: "Boka / Skicka förfrågan",
    primaryCtaHref: "#kontakt",
    secondaryCtaLabel: "Läs mer",
    secondaryCtaHref: "#examinationer",
    highlights: [
      "Kat I, Kat II, Kat III, Kat IV",
      "Praktiska, teoretiska och lödprov",
      "Säkerhetsutbildningar: Heta Arbeten, Lift, Fallskydd",
    ],
  },
  mission: {
    title: "Vårt uppdrag",
    paragraphs: [
      "Som av Incert godkänt Examinationscenter utför vi praktiska och teoretiska examinationer, enligt gällande lagstiftning.",
      "Dessutom tillhandahåller vi preparandkurser inför proven och säkerhetsutbildningar som Heta Arbeten, Höga lyft och fallskydd. Självklart även andra kylutbildningar såsom Co2 etc.",
    ],
  },
  exams: {
    title: "Kylexaminationer Kat I–IV",
    intro:
      "Vi examinerar praktiskt och teoretiskt. Behörighetsomfattning enligt gällande regelverk.",
    cards: [
      { title: "Kat I", text: "Full behörighet. Praktiskt & teoretiskt prov." },
      {
        title: "Kat II",
        text: "Service/underhåll, viss begränsning i hantering.",
      },
      { title: "Kat III", text: "Läckagekontroll m.m. enligt regelverket." },
      { title: "Kat IV", text: "Återvinning av köldmedium." },
    ],
  },
  prices: {
    title: "Priser (exkl. moms)",
    footnote:
      "* Examinationer genomförs på uppdrag av Incert. Tider och omfattning enligt överenskommelse.",
    categoryLabels: [
      { category: "Examination", label: "Examinationsavgifter" },
      { category: "Grundutbildning", label: "Grundutbildning (Kat I & II)" },
      { category: "Preparand", label: "Preparandkurser" },
      { category: "Säkerhetsutbildning", label: "Säkerhetsutbildningar" },
      { category: "Övrigt", label: "Övriga kurser" },
    ],
  },
  prepCourses: {
    title: "Preparandkurser inför examination",
    text: "Vi erbjuder förberedande kurser i både teori och praktik så att du kan känna dig trygg inför provtillfället.",
  },
  upcomingEvents: {
    title: "Kommande utbildningar",
    emptyText: "Inga kommande utbildningstillfällen just nu.",
  },
  contact: {
    title: "Boka / Skicka förfrågan",
    recipientEmail: "kylkonsulteninorr@gmail.com",
    defaultSubject: "Kylexamination",
    subjectPrefix: "Förfrågan",
    subjectOptions: [
      "Kylexamination",
      "Preparandkurs",
      "Säkerhetsutbildningar – Heta Arbeten",
      "Säkerhetsutbildningar – Lift",
      "Säkerhetsutbildningar – Fallskydd",
      "Övrigt",
    ],
    form: {
      namePlaceholder: "Namn",
      phonePlaceholder: "Telefon",
      emailPlaceholder: "E-post",
      messagePlaceholder:
        "Beskriv ditt behov, önskat datum och antal personer.",
    },
    buttonLabel: "Skicka",
    footnote:
      "* Priser anges exkl. moms. Vi återkommer med bekräftelse och tider.",
  },
  aboutPreview: {
    title: "Om oss",
    text: "Vi på Kylkonsulten i Norr AB är specialiserade på kylutbildningar och examinationer på uppdrag av Incert. Våra utbildare har lång erfarenhet inom kyla, VVS och säkerhet och brinner för att skapa en trygg och professionell miljö för deltagarna.",
    ctaLabel: "Läs mer om oss",
    ctaHref: "/om-oss",
  },
  cta: {
    title: "Redo att boka?",
    text: "Säkra din plats för examination eller preparandkurs.",
    buttonLabel: "Skicka bokningsförfrågan",
    buttonHref: "#kontakt",
  },
  faq: {
    title: "Vanliga frågor",
    items: [
      {
        question: "Behöver jag tidigare erfarenhet?",
        answer:
          "Vi rekommenderar god teknisk bakgrund (t.ex. elektriker, VVS eller praktisk kylteknik). Vi anpassar upplägget efter dina förkunskaper.",
      },
      {
        question: "Var sker utbildningen?",
        answer: "På plats i Luleå, Midgårdsvägen 13.",
      },
      {
        question: "Kan ni hjälpa mig välja rätt kurs?",
        answer: "Ja – skriv dina mål i bokningsförfrågan så guidar vi dig.",
      },
      {
        question: "Får jag intyg?",
        answer:
          "Ja, efter godkända moment och prov får du underlag för certifiering.",
      },
    ],
  },
  location: {
    title: "Här finns vi",
    name: "Kylakademin i Norr",
    address: "Midgårdsvägen 13, 973 34 Luleå",
    mapsLabel: "Öppna i Google Maps",
    mapsUrl: "https://www.google.com/maps/place/Midgårdsvägen+13,+973+34+Luleå",
    embedSrc:
      "https://www.google.com/maps?q=Midgårdsvägen%2013,%20973%2034%20Luleå&output=embed",
    iframeTitle: "Karta – Kylakademin i Norr",
  },
  newsPage: {
    title: "Nyheter",
    emptyText: "Inga nyheter publicerade än.",
    galleryTitle: "Bildgalleri",
    emptyGalleryText: "Inga bilder uppladdade än.",
  },
  footer: {
    locationTitle: "Kylakademin i Norr",
    address: "Midgårdsvägen 13, Luleå",
    contactTitle: "Kontakt",
    phone: "070-474 51 02",
    email: "kylakademininorr@gmail.com",
    ccEmail: "WSutbildningar@gmail.com",
    educatorsTitle: "Examinatörer och utbildare",
    educators: ["Antero Ala-Kojola", "William Stålnacke"],
  },
};

export const siteContentQuery = `
  *[_type == "siteContent"][0]{
    seo,
    navbar {
      brandName,
      logoAlt,
      menuLabel,
      openMenuLabel,
      closeMenuLabel,
      links[] { label, href },
      mobileCtaLabel,
      mobileCtaHref
    },
    hero {
      title,
      text,
      linkLabel,
      linkHref,
      linkSuffix,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref,
      highlights
    },
    mission {
      title,
      paragraphs
    },
    exams {
      title,
      intro,
      cards[] { title, text }
    },
    prices {
      title,
      footnote,
      categoryLabels[] { category, label }
    },
    prepCourses,
    upcomingEvents,
    contact {
      title,
      recipientEmail,
      defaultSubject,
      subjectPrefix,
      subjectOptions,
      form,
      buttonLabel,
      footnote
    },
    aboutPreview,
    cta,
    faq {
      title,
      items[] { question, answer }
    },
    location,
    newsPage,
    footer {
      locationTitle,
      address,
      contactTitle,
      phone,
      email,
      ccEmail,
      educatorsTitle,
      educators
    }
  }
`;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeWithDefaults<T>(defaults: T, value: unknown): T {
  if (Array.isArray(defaults)) {
    return Array.isArray(value) && value.length > 0 ? (value as T) : defaults;
  }

  if (isRecord(defaults)) {
    const merged: Record<string, unknown> = { ...defaults };
    const source = isRecord(value) ? value : {};

    for (const key of Object.keys(defaults)) {
      merged[key] = mergeWithDefaults(
        defaults[key as keyof typeof defaults],
        source[key],
      );
    }

    return merged as T;
  }

  if (value === undefined || value === null || value === "") {
    return defaults;
  }

  return value as T;
}

export function resolveSiteContent(content?: Partial<SiteContent> | null) {
  return mergeWithDefaults(defaultSiteContent, content);
}
