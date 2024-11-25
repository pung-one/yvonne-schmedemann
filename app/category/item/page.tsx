import { DetailPage } from "@/components/Detail/DetailPage";
import { Metadata } from "next";
import metadataImage from "@/public/metadata/metadataImage.png";
import { useSearchParams } from "next/navigation";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const metadata: Metadata = {
  title: "Yvonne Schmedemann Photography",
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
    siteName: "Yvonne Schmedemann",
    type: "website",
    images: [
      {
        url: metadataImage.src,
      },
    ],
  },
};

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string; id?: string };
}) {
  const { id } = searchParams;

  // Fetch data using the id parameter
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;
  const projectsResponse = await fetch(
    `${cmsBaseUrl}/api/projekts/${id}?populate=*`,
    { cache: "no-store" }
  );
  const projectsObject = await projectsResponse.json();

  return <DetailPage project={projectsObject.data} />;
}
