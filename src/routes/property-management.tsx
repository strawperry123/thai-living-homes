import { createFileRoute } from "@tanstack/react-router";
import { PropertyManagementSection } from "@/components/PropertyManagementSection";

export const Route = createFileRoute("/property-management")({
  head: () => ({
    meta: [
      { title: "Property Management 房源管理 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Property management services for Thailand homeowners, including leasing preparation, tenant support, maintenance coordination, and move-out handling.",
      },
    ],
  }),
  component: PropertyManagementPage,
});

function PropertyManagementPage() {
  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <PropertyManagementSection />
    </main>
  );
}
