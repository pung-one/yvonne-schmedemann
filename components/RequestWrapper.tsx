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
    Bilder: {
      data: ImageData[];
    };
  };
};

export const RequestContext = createContext<RequestData | undefined>(undefined);

export function RequestWrapper({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<RequestData>();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://localhost:1337/api/projekts?populate=*"
      );
      const resObj = await response.json();

      setProjects(resObj);
    }

    getData();
  }, []);

  return (
    <RequestContext.Provider value={projects}>
      {children}
    </RequestContext.Provider>
  );
}
