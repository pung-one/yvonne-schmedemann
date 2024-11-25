import { CategoryPage } from "@/components/Category/CategoryPage";
import { Category } from "@/lib/types";
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
  searchParams: { category?: string };
}) {
  const category = searchParams.category;

  const projectsResponse = await fetch(
    `${cmsBaseUrl}/api/projekts?filters[category][$eq]=${category}&sort=positionOnCategoryPage:asc&populate=*&pagination[pageSize]=100`,
    { cache: "no-store" }
  );

  const projectsObject = await projectsResponse.json();

  return <CategoryPage projects={projectsObject.data} />;
}
