export type Projects = Project[];

export type LandingInfo = {
  id: number;
  attributes: {
    HeroText: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    HeroImageDesktop: {
      data: ImageData;
    };
    HeroImageMobile: {
      data: ImageData;
    };
  };
};

export type FormatImageData = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type ImageData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: FormatImageData;
      small: FormatImageData;
      medium: FormatImageData;
      large: FormatImageData;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  };
};

export type Category = "portrait" | "corporate" | "interior" | "jewellery";

export type Project = {
  id: number;
  attributes: {
    Titel: string;
    category: Category;
    positionOnCategoryPage?: number;
    Beschreibung: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    positionOnLandingPage?: number;
    fullscreen: boolean;
    involved: {
      id: number;
      Name: string;
      Rolle: string;
    }[];
    landingPageImage: {
      data: ImageData;
    };
    allPageImage: {
      data: ImageData;
    };
    Bilder: {
      data: ImageData[];
    };
  };
};

export type AboutData = {
  id: number;
  attributes: {
    bio: string;
    customers: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    portrait: {
      data: ImageData;
    };
    studioImage: {
      data: ImageData;
    };
  };
};
