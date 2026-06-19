import { createFileRoute } from "@tanstack/react-router";
import { PreSellSectionV3 } from "@/components/PreSellSectionV3";

export const Route = createFileRoute("/presell")({
  head: () => ({
    meta: [
      { title: "PreSell 預售/新成屋 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Curated Bangkok and Phuket presale and new launch property projects for lifestyle and investment planning.",
      },
    ],
  }),
  component: PreSellSectionV3,
});
