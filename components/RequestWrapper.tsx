"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export type Projects = Project[];

export type LandingInfo = {
  id: number;
  attributes: {
    HeroText: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    HeroImage: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: {
            medium: {
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
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          provider_metadata: string;
          createdAt: string;
          updatedAt: string;
        };
      };
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

export type Category = "portrait" | "corporate" | "interior" | "published";

export type Project = {
  id: number;
  attributes: {
    Titel: string;
    slug: string;
    Category: Category;
    Beschreibung: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Kunde: string;
    HairMakeUp: string;
    Assistent: string;
    PositionOnLandingPage: string;
    Titelbild: {
      data: ImageData;
    };
    Bilder: {
      data: ImageData[];
    };
  };
};

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const RequestContext = createContext<{
  projects: Projects | undefined;
  landingInfo: LandingInfo | undefined;
  cmsBaseUrl: string | undefined;
}>({
  projects: undefined,
  landingInfo: undefined,
  cmsBaseUrl: cmsBaseUrl,
});

export function RequestWrapper({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Projects>();
  const [landingInfo, setLandingInfo] = useState();

  useEffect(() => {
    async function getData() {
      const landingGifResponse = await fetch(
        cmsBaseUrl + "/api/landing-page?populate=*"
      );
      const landingInfoObject = await landingGifResponse.json();

      setLandingInfo(landingInfoObject.data);

      const projectsResponse = await fetch(
        cmsBaseUrl + "/api/projekts?populate=*"
      );
      const projectsObj = await projectsResponse.json();

      setProjects(projectsObj.data);
    }

    getData();
  }, []);

  return (
    <RequestContext.Provider
      value={{
        projects: projects,
        landingInfo: landingInfo,
        cmsBaseUrl: cmsBaseUrl,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
