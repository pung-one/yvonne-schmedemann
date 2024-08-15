import { Category } from "@/components/RequestWrapper";

export function getCategoriesDataUrl(category: Category) {
  switch (category) {
    case "portrait":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z3C+HgAGIwJPnkAzSQAAAABJRU5ErkJggg==";
    case "corporate":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)";
    case "interior":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP878ZQDwAFVwHGaTllmwAAAABJRU5ErkJggg==";
    case "published":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0OvapHgAFxwJ7HTTxUwAAAABJRU5ErkJggg==";
    default:
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctWFzPQAGpwKOxCmJzwAAAABJRU5ErkJggg==";
  }
}
