import { createFileRoute } from "@tanstack/react-router";
import { FaqSection } from "@/components/FaqSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Common Question 常見問題 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Bilingual Thailand property FAQ covering foreign ownership, foreign quota, taxes, payment, financing, rental rules, and after-sales service.",
      },
    ],
  }),
  component: FaqSection,
});
