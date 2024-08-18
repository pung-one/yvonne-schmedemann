import { AllPage } from "@/components/All/AllPage";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export default async function Page() {
  const projectsResponse = await fetch(cmsBaseUrl + `/api/projekts?populate=*`);

  const projectsObject = await projectsResponse.json();

  return <AllPage projects={projectsObject.data} />;
}
