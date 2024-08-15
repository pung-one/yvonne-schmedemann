import { Detail } from "@/components/Detail/Detail";

export default function DetailPage({ params }: { params: { slug: string } }) {
  return <Detail slug={params.slug} />;
}
