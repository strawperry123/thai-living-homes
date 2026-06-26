import { createFileRoute } from "@tanstack/react-router";
import { WyneResellSection } from "@/components/WyneResellSection";

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
  component: WyneResellSection,
});
