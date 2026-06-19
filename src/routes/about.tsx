import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us 關於我們 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Learn about KHANTHAROS PROPERTY, a curated Thailand real estate advisor offering property selection, viewing, handover, management, rental, and resale support.",
      },
    ],
  }),
  component: AboutSection,
});
