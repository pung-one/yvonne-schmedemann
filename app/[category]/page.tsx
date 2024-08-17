import { Category } from "@/lib/types";

export default function CorporatePage({
  params,
}: {
  params: { category: Category };
}) {
  console.log("detail params", params);
  return <h1>corporate Page</h1>;
}
