import { AboutPage } from "@/components/About/AboutPage";
import { Metadata } from "next";
import metadataImage from "@/public/metadata/metadataImage.png";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const metadata: Metadata = {
  title: "About | Yvonne Schmedemann Photography",
  metadataBase: new URL("https://www.yvonneschmedemann.com/about"),
  alternates: {
    canonical: "/",
  },
  description: "Find out about photographer Yvonne Schmedemann.",
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
    title: "About | Yvonne Schmedemann Photography",
    url: "https://www.yvonneschmedemann.com/about",
    siteName: "Yvonne Schmedemann",
    type: "website",
    description: "Find out about photographer Yvonne Schmedemann.",
    images: [
      {
        url: metadataImage.src,
      },
    ],
  },
};

export default async function Page() {
  const aboutResponse = await fetch(cmsBaseUrl + `/api/about-page?populate=*`);

  const aboutObject = await aboutResponse.json();

  return <AboutPage aboutData={aboutObject.data} />;
}
