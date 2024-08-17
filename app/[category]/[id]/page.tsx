import { Detail } from "@/components/Detail/Detail";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("detail params", params);
  const projectsResponse = await fetch(
    cmsBaseUrl + `/api/projekts/${params.id}?populate=*`
  );

  const projectsObject = await projectsResponse.json();
  return <Detail project={projectsObject.data} />;
}
