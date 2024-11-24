import { CategoryPage } from "@/components/Category/CategoryPage";
import { Category } from "@/lib/types";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export default async function Page({
  params,
}: {
  params: { category: Category };
}) {
  const projectsResponse = await fetch(
    cmsBaseUrl +
      `/api/projekts?filters[category][$eq]=${params.category}&sort=positionOnCategoryPage:asc&populate=*&pagination[pageSize]=100`
  );

  const projectsObject = await projectsResponse.json();

  return <CategoryPage projects={projectsObject.data} />;
}
