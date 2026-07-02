import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import renovation3dAp from "@/assets/renovation/3d-ap-project.jpg";
import renovationLumpiniRiverside from "@/assets/renovation/lumpini-riverside-whole-room-renovation.jpg";
import renovationBathroom from "@/assets/renovation/lumpini-condo-renovation-bathroom.jpg";
import renovationStudioBeforeAfter from "@/assets/renovation/chatgpt-image-jun-29-2026-08-00-21-am.jpg";
import renovationLifeRama4 from "@/assets/renovation/3d-life-sukhunvit-rama4.jpg";
import renovationAshtonSilom1 from "@/assets/renovation/ashton-silom-whole-room-interior-design1.jpg";
import renovationAshtonSilom2 from "@/assets/renovation/ashton-silom-whole-room-interior-design-2.jpg";
import renovationLifeOneWireless from "@/assets/renovation/life-one-wireless-interior.jpg";

export const Route = createFileRoute("/renovation-maintenance")({
  head: () => ({
    meta: [
      { title: "Renovation & Maintenance · 裝潢翻新及維修 | KHANTHAROS PROPERTY" },
      {
        name: "description",
        content:
          "Renovation, maintenance, furnishing and property refresh service for Thailand homes. 裝潢翻新、維修保養、家具軟裝與出租出售前整理。",
      },
    ],
  }),
  component: RenovationMaintenance,
});

const lineAddUrl = "https://line.me/R/ti/p/@256ttfky";
const whatsAppUrl = "https://wa.me/66985973849";

const renovationSlides = [
  {
    title: "3D AP Project",
    tc: "3D 室內設計規劃",
    label: "3D design",
    image: renovation3dAp,
  },
  {
    title: "Lumpini Riverside",
    tc: "全室翻新前後對比",
    label: "Before & After",
    image: renovationLumpiniRiverside,
  },
  {
    title: "Bathroom Renovation",
    tc: "浴室翻新前後對比",
    label: "Bathroom upgrade",
    image: renovationBathroom,
  },
  {
    title: "Studio Refresh",
    tc: "套房裝潢前後對比",
    label: "Before & After",
    image: renovationStudioBeforeAfter,
  },
  {
    title: "Life Sukhumvit Rama 4",
    tc: "3D 室內設計規劃",
    label: "3D design",
    image: renovationLifeRama4,
  },
  {
    title: "Ashton Silom",
    tc: "全室裝潢翻新 01",
    label: "Before & After",
    image: renovationAshtonSilom1,
  },
  {
    title: "Ashton Silom",
    tc: "全室裝潢翻新 02",
    label: "Before & After",
    image: renovationAshtonSilom2,
  },
  {
    title: "Life One Wireless",
    tc: "室內裝潢前後對比",
    label: "Before & After",
    image: renovationLifeOneWireless,
  },
];

function RenovationMaintenance() {
  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlide = renovationSlides[slideIndex];
  const goSlide = (direction: number) => {
    setSlideIndex((current) => (current + direction + renovationSlides.length) % renovationSlides.length);
  };

  return (
    <main className="min-h-screen bg-background pt-28 text-foreground">
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.45em] text-brand-clay">
              Renovation & Maintenance · 裝潢翻新及維修
            </span>
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-brand-ink text-balance md:text-6xl">
              Make every property feel ready again.
            </h1>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest md:text-2xl">
              從小維修、浴室翻新到整室裝潢，讓房源重新回到最佳狀態。
            </p>
          </div>
          <p className="lg:col-span-5 text-sm leading-loose text-foreground/65 md:text-base">
            We coordinate design, renovation, furnishing, maintenance and owner reporting for Bangkok properties, from planning to completion.
            <span className="mt-2 block font-serif-tc">
              我們協助屋主處理設計規劃、裝潢翻新、家具配置、維修安排與進度回報，適合出租前整理、出售前提升質感，或長期代管維護。
            </span>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div className="border border-border bg-brand-ink p-4 md:p-5">
              <div className="relative mx-auto flex min-h-[220px] items-center justify-center bg-brand-ink md:min-h-[320px]">
                <img
                  src={activeSlide.image}
                  alt={`${activeSlide.title} renovation showcase`}
                  loading="lazy"
                  className="h-auto max-h-[240px] w-auto max-w-[82%] object-contain md:max-h-[320px] md:max-w-[72%]"
                />
                <button
                  type="button"
                  onClick={() => goSlide(-1)}
                  aria-label="Previous renovation image"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-brand-cream/95 text-2xl text-brand-ink transition-colors hover:bg-brand-sand"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goSlide(1)}
                  aria-label="Next renovation image"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-brand-cream/95 text-2xl text-brand-ink transition-colors hover:bg-brand-sand"
                >
                  ›
                </button>
              </div>
              <div className="mt-5 flex flex-col gap-3 border-t border-brand-cream/15 pt-5 text-brand-cream sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-sand">{activeSlide.label}</p>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl">{activeSlide.title}</h2>
                  <p className="mt-1 font-serif-tc text-sm text-brand-cream/75">{activeSlide.tc}</p>
                </div>
                <p className="font-display text-xl text-brand-sand">
                  {String(slideIndex + 1).padStart(2, "0")} / {String(renovationSlides.length).padStart(2, "0")}
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center gap-2">
              {renovationSlides.map((slide, index) => (
                <button
                  key={`${slide.title}-${index}`}
                  type="button"
                  onClick={() => setSlideIndex(index)}
                  aria-label={`View ${slide.title}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === slideIndex ? "bg-brand-forest" : "bg-border hover:bg-brand-clay"
                  }`}
                />
              ))}
            </div>
          </div>

          <form action={lineAddUrl} target="_blank" className="border border-border bg-brand-cream p-7 md:p-8 lg:col-span-4">
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.35em] text-brand-clay">
              Mandate Form · 委託表格
            </span>
            <h2 className="font-display text-3xl leading-tight text-brand-ink">Renovation Request</h2>
            <p className="mt-3 font-serif-tc text-sm leading-loose text-foreground/65">
              填寫需求後可直接透過 LINE 與我們確認細節。
            </p>
            <div className="mt-7 space-y-4">
              <input name="name" placeholder="Name · 姓名" className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
              <input name="contact" placeholder="Contact · 聯絡方式" className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
              <select name="location" className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option>Bangkok</option>
                <option>Phuket</option>
                <option>Others</option>
              </select>
              <select name="service" className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option>Interior Renovation · 室內翻新</option>
                <option>Maintenance · 維修保養</option>
                <option>Furnishing · 家具軟裝</option>
                <option>Inspection Before Rent/Sale · 出租出售前整理</option>
              </select>
              <textarea name="message" rows={4} placeholder="Property condition / budget / timeline · 房況、預算、時間" className="w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
              <button type="submit" className="w-full bg-brand-forest px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cream transition-colors hover:bg-brand-ink">
                Submit via LINE · 送出委託
              </button>
              <a href={whatsAppUrl} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center border border-brand-forest/30 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-forest transition-colors hover:bg-brand-forest hover:text-brand-cream">
                WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
