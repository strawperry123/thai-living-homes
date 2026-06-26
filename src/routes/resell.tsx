import { createFileRoute } from "@tanstack/react-router";
import { ResellSection } from "@/components/ResellSection";

export const Route = createFileRoute("/resell")({
  head: () => ({
    meta: [
      { title: "Resell 中古房 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Curated Bangkok resale condominium opportunities with buyer-side due diligence, title checks, quota review and transfer support.",
      },
    ],
  }),
  component: ResellSection,
});
