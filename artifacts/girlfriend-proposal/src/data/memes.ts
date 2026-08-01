import { CatMemeData } from "./types";

// Random cataas image paths with styling and width/height for standard sizing
export const getCatUrl = (tags: string = "", query: string = "") => {
  return `https://cataas.com/cat${tags ? `/${tags}` : ''}${query ? `?${query}` : ''}`;
};
