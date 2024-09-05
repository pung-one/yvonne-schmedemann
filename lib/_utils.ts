import { Category } from "./types";

export function getCategoriesBlurDataUrl(category: Category) {
  switch (category) {
    case "portrait":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z3C+HgAGIwJPnkAzSQAAAABJRU5ErkJggg==";
    case "corporate":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    case "interior":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP878ZQDwAFVwHGaTllmwAAAABJRU5ErkJggg==";
    case "jewellery":
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0OvapHgAFxwJ7HTTxUwAAAABJRU5ErkJggg==";
    default:
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctWFzPQAGpwKOxCmJzwAAAABJRU5ErkJggg==";
  }
}

export function getCategoriesCursorDataUrl(category: Category | "all") {
  switch (category) {
    case "portrait":
      return 'data:image/svg+xml;utf8,<svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#ff00cf"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>';
    case "corporate":
      return 'data:image/svg+xml;utf8,<svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#00ff00"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>';
    case "interior":
      return 'data:image/svg+xml;utf8,<svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#ff4600"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>';
    case "jewellery":
      return 'data:image/svg+xml;utf8,<svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#42c6f2"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>';
    case "all":
      return 'data:image/svg+xml;utf8,<svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#9966ff"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path> </g></svg>';
  }
}

export function getCategoryColor(category: Category | "all" | "about") {
  switch (category) {
    case "portrait":
    case "about":
      return "#ff00cf";
    case "corporate":
      return "#00ff00";
    case "interior":
      return "#ff4600";
    case "jewellery":
      return "#42c6f2";
    case "all":
      return "#9966ff";
    default:
      return "black";
  }
}
