import { Landing } from "@/components/Landing/Landing";
import { Metadata } from "next";
import metadataImage from "@/public/metadata/metadataImage.png";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const metadata: Metadata = {
  title: "Yvonne Schmedemann Photography",
  metadataBase: new URL("https://www.yvonneschmedemann.com/"),
  alternates: {
    canonical: "/",
  },
  description:
    "Explore the work of the Hamburg based photographer Yvonne Schmedemann.",
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
    title: "Yvonne Schmedemann Photography",
    url: "https://www.yvonneschmedemann.com/",
    siteName: "Yvonne Schmedemann",
    type: "website",
    description:
      "Explore the work of Hamburg based photographer Yvonne Schmedemann.",
    images: [
      {
        url: metadataImage.src,
      },
    ],
  },
};

export default async function Home() {
  const landingInfoResponse = await fetch(
    cmsBaseUrl + "/api/landing-page?populate=*"
  );
  const landingInfoObject = await landingInfoResponse.json();

  const projectsResponse = await fetch(
    cmsBaseUrl +
      "/api/projekts?filters[positionOnLandingPage][$notNull]=true&populate=*&sort=positionOnLandingPage:asc&pagination[pageSize]=100",
    { next: { tags: ["landing-page"] } }
  );
  const projectsObject = await projectsResponse.json();

  return (
    <Landing
      landingInfo={landingInfoObject.data}
      projects={projectsObject.data}
    />
  );
}
