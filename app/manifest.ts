import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "./site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "متال بتن | تولید کننده تیرچه و خرپا صنعتی",
    short_name: "متال بتن",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0c1524",
    theme_color: "#0c1524",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
