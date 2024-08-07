"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export type RequestData = {
  data: Project[];
  metaData: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type LandingGif = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      ImageOrGif: {
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
  meta: {};
};

export type ImageData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: any;
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

export type Project = {
  id: number;
  attributes: {
    Titel: string;
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

export const RequestContext = createContext<{
  projects: RequestData | undefined;
  landingGif: LandingGif | undefined;
}>({
  projects: undefined,
  landingGif: undefined,
});

export function RequestWrapper({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<RequestData>();
  const [landingGif, setLandingGif] = useState();

  useEffect(() => {
    async function getData() {
      const landingGifResponse = await fetch(
        "http://localhost:1337/api/landing-page-image-gif?populate=*"
      );
      const landingGifObj = await landingGifResponse.json();

      setLandingGif(landingGifObj);

      const projectsResponse = await fetch(
        "http://localhost:1337/api/projekts?populate=*"
      );
      const projectsObj = await projectsResponse.json();

      setProjects(projectsObj);
    }

    getData();
  }, []);

  return (
    <RequestContext.Provider
      value={{ projects: projects, landingGif: landingGif }}
    >
      {children}
    </RequestContext.Provider>
  );
}
