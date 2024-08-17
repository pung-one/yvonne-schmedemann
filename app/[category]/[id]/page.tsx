import { DetailPage } from "@/components/Detail/DetailPage";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export default async function Page({ params }: { params: { id: string } }) {
  const projectsResponse = await fetch(
    cmsBaseUrl + `/api/projekts/${params.id}?populate=*`
  );

  const projectsObject = await projectsResponse.json();
  return <DetailPage project={projectsObject.data} />;
}
