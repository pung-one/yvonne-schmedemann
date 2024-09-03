import { Landing } from "@/components/Landing/Landing";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export default async function Home() {
  const landingInfoResponse = await fetch(
    cmsBaseUrl + "/api/landing-page?populate=*"
  );
  const landingInfoObject = await landingInfoResponse.json();

  const projectsResponse = await fetch(
    cmsBaseUrl +
      "/api/projekts?filters[positionOnLandingPage][$notNull]=true&populate=*&sort=positionOnLandingPage:asc",
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
