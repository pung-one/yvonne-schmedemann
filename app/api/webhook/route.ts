import { revalidatePath } from "next/cache";

const secret = process.env.STRAPI_WEBHOOK_SECRET;

export async function POST(request: Request) {
  if (secret !== request.headers.get("authorization")) {
    return new Response("Go hook up with someone else.", {
      status: 401,
    });
  }

  try {
    const data = await request.json();

    const changedModel = data?.model;
    const entry = data?.entry;

    if (changedModel === "projekt") {
      revalidatePath(`/${entry.category}`);
      revalidatePath(`/${entry.category}/${entry.id}`);
      if (entry.positionOnLandingPage) {
        revalidatePath("/");
      }
    } else if (changedModel === "about-page") {
      revalidatePath("/about");
    } else if (changedModel === "landing-page") {
      revalidatePath("/");
    }

    return new Response("Successfully revalidated request.", {
      status: 200,
    });
  } catch (error) {
    return new Response("Revalidating requests did not work.", {
      status: 500,
    });
  }
}
