import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Micheal Khan — Full-Stack Software Developer",
    short_name: "Micheal Khan",
    description: "Portfolio of Micheal Khan, full-stack software developer in Jaipur, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e100f",
    theme_color: "#0e100f",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
