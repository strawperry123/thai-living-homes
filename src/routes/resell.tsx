import { createFileRoute } from "@tanstack/react-router";
import { ResellSectionV2 } from "@/components/ResellSectionV2";

export const Route = createFileRoute("/resell")({
  head: () => ({
    meta: [
      { title: "Wyne by Sansiri 中古房 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "For sale Wyne by Sansiri, 1 bedroom 30 sq.m., 7th floor garden view, fully furnished, near BTS Phra Khanong.",
      },
    ],
  }),
  component: ResellSectionV2,
});
