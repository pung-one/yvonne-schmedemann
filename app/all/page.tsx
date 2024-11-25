import { AllPage } from "@/components/All/AllPage";
import { Metadata } from "next";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const metadata: Metadata = {
  title: "All Projects | Yvonne Schmedemann Photography",
  metadataBase: new URL("https://www.yvonneschmedemann.com/all"),
  alternates: {
    canonical: "/",
  },
  description: "See all projects by photographer Yvonne Schmedemann.",
  category: "photography",
  authors: [
    { name: "Yvonne Schmedemann" },
    { name: "Paul Ungerer", url: "https://github.com/pung-one" },
  ],
  keywords: [
    "Yvonne Schmedemann",
    "Yvonne",
    "Schmedemann",
    "Hamburg",
    "Fotografie",
    "Photography",
    "Bilder",
    "Fotos",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "All Projects | Yvonne Schmedemann Photography",
    url: "https://www.yvonneschmedemann.com/all",
    siteName: "Yvonne Schmedemann",
    type: "website",
    description: "See all projects by photographer Yvonne Schmedemann.",
  },
};

export default async function Page() {
  const projectsResponse = await fetch(
    cmsBaseUrl + `/api/projekts?populate=*&pagination[pageSize]=100`
  );

  const projectsObject = await projectsResponse.json();

  return <AllPage projects={projectsObject?.data} />;
}
