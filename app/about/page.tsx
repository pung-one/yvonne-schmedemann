import { AboutPage } from "@/components/About/AboutPage";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export default async function Page() {
  const aboutResponse = await fetch(cmsBaseUrl + `/api/about-page?populate=*`);

  const aboutObject = await aboutResponse.json();

  return <AboutPage aboutData={aboutObject.data} />;
}
