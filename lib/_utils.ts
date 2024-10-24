import { useEffect, useState } from "react";
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

export function getCategoryColor(category: string) {
  if (category.includes("portrait") || category.includes("about")) {
    return "#ff00cf";
  } else if (category.includes("corporate")) {
    return "#00ff00";
  } else if (category.includes("interior")) {
    return "#ff4600";
  } else if (category.includes("jewellery")) {
    return "#42c6f2";
  } else if (category.includes("all")) {
    return "#9966ff";
  } else {
    return "black";
  }
}

export function useViewportWidth(initialWidth: number = 1079) {
  const [viewportWidth, setViewportWidth] = useState<number>(initialWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return viewportWidth;
}

export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : "initial";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [lock]);
}
