import { createFileRoute } from "@tanstack/react-router";
import { MandateSection } from "@/components/MandateSection";

export const Route = createFileRoute("/mandate")({
  head: () => ({
    meta: [
      { title: "Mandate 委託 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Submit a sale, rental, or property management mandate request for Thailand real estate with KHANTHAROS PROPERTY.",
      },
    ],
  }),
  component: MandateSection,
});
