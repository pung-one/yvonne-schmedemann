import { TermsAndConditionsPage } from "@/components/termsAndConditions/TermsAndConditionsPage";
import { Metadata } from "next";
import metadataImage from "@/public/metadata/metadataImage.png";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const metadata: Metadata = {
  title: "Datenschutz | Yvonne Schmedemann Photography",
  metadataBase: new URL("https://www.yvonneschmedemann.com/terms-conditions"),
  alternates: {
    canonical: "/",
  },
  description: "Datenschutz",
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
    title: "Datenschutz | Yvonne Schmedemann Photography",
    url: "https://www.yvonneschmedemann.com/terms-conditions",
    siteName: "Yvonne Schmedemann",
    type: "website",
    description: "Datenschutz",
    images: [
      {
        url: metadataImage.src,
      },
    ],
  },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
