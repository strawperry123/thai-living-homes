import { useMemo, useState } from "react";
import { wyneInfoCardImage } from "@/assets/resell/wyne-by-sansiri/wyne-info-card";
import { okaHausMorePhoto } from "@/assets/resell/oka-haus/more-photo";
import { resellHeroImage } from "@/assets/resell/resell-hero";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";
const okaHausInstagramUrl = "https://www.instagram.com/p/DaDfRJOAfIy/?img_index=1";
const bilingual = (text: string) => text.split(" · ").join("\n");

type GalleryImage = { title: string; zh: string; image: string; href?: string; contactHref?: string };
type ResellProject = {
  name: string;
  area: string;
  price: string;
  summary: string;
  summaryZh: string;
  cover: string;
  tag: string;
  detailPrice: string;
  gallery: GalleryImage[];
  specs: string[][];
  overviewEn: string[];
  overviewZh: string[];
  highlights: string[];
  nearbyPlaces: string[];
  furnishingNotes: string[];
  buyerNotes: string[];
};

const resellProjects: ResellProject[] = [
  {
    name: "Wyne by Sansiri",
    area: "Phra Khanong / Sukhumvit · 帕卡農 / 素坤逸",
    price: "3.35M THB · 335 萬泰銖",
    summary: "1 Bedroom · 30 sq.m. · 7th Floor Garden View",
    summaryZh: "一房 · 30 平方米 · 7 樓園景 · 家具家電齊全",
    cover: wyneInfoCardImage,
    tag: "For Sale · 出售",
    detailPrice: "For Sale · 3.35M THB",
    gallery: [
      { title: "Wyne by Sansiri", zh: "更多照片與物件資訊", image: wyneInfoCardImage, contactHref: "#resell-contact-options" },
    ],
    specs: [
      ["Layout · 格局", "1 Bedroom · 一房"],
      ["Size · 面積", "30 sq.m. · 30 平方米"],
      ["Floor · 樓層", "7th Floor · 7 樓"],
      ["View · 景觀", "Garden View · 園景"],
      ["Furniture · 家具", "Fully-furnished · 家具家電齊全"],
      ["Transit · 交通", "BTS Phra Khanong · BTS 帕卡農站"],
      ["Price · 售價", "3.35M THB · 335 萬泰銖"],
      ["Transfer Fee · 過戶費", "50 / 50 · 買賣雙方各半"],
    ],
    overviewEn: [
      "Wyne by Sansiri is a ready-to-move resale condominium on Sukhumvit, close to BTS Phra Khanong.",
      "This 30 sq.m. one-bedroom unit is on the 7th floor with garden view and comes fully furnished with electrical appliances.",
    ],
    overviewZh: [
      "Wyne by Sansiri 位於素坤逸生活圈，鄰近 BTS Phra Khanong。",
      "此戶為 30 平方米一房，位於 7 樓園景，家具家電齊全，可直接入住或出租。",
    ],
    highlights: [
      "Ready-to-move fully furnished unit · 家具家電齊全，可直接入住",
      "Good rental demand near BTS Phra Khanong · 鄰近 BTS 帕卡農站，出租需求穩定",
      "Compact 30 sq.m. layout for own stay or investment · 30 平方米精簡格局，適合自住或投資",
      "Transfer fee 50/50 · 過戶費買賣雙方各半",
    ],
    nearbyPlaces: [
      "BTS Phra Khanong · BTS 帕卡農站",
      "Sukhumvit Road · 素坤逸主幹道",
      "W District lifestyle area · W District 生活商圈",
      "Ekkamai / Thonglor lifestyle zone · Ekkamai / Thonglor 生活圈",
    ],
    furnishingNotes: [
      "Bed and wardrobe · 床組與衣櫃",
      "Sofa and living area furniture · 沙發與客廳家具",
      "Kitchen counter and selected appliances · 廚房檯面與部分家電",
      "Move-in condition, viewing by appointment · 可入住狀態，實地看屋需預約",
    ],
    buyerNotes: [
      "Price: 3.35M THB · 售價：335 萬泰銖",
      "Transfer fee: 50/50 · 過戶費：買賣雙方各半",
      "Availability subject to owner confirmation · 物件狀態以屋主確認為準",
      "Viewing by appointment · 實地看屋請提前預約",
    ],
  },
  {
    name: "OKA HAUS Sukhumvit 36",
    area: "Sukhumvit 36 / Rama 4 · 素坤逸 36 / Rama 4",
    price: "6.90M THB · 690 萬泰銖",
    summary: "2 Bedrooms · 2 Bathrooms · 50 sq.m. · High Floor Corner Unit",
    summaryZh: "兩房兩衛 · 50 平方米 · 高樓層邊間 · 浴缸 · 河景",
    cover: okaHausMorePhoto,
    tag: "For Sale / Rent · 出售 / 出租",
    detailPrice: "For Sale · 6.90M THB",
    gallery: [
      { title: "More Photos on Instagram", zh: "點擊查看 IG 更多照片", image: okaHausMorePhoto, href: okaHausInstagramUrl },
    ],
    specs: [
      ["Layout · 格局", "2 Bedrooms, 2 Bathrooms · 兩房兩衛"],
      ["Size · 面積", "50 sq.m. · 50 平方米"],
      ["Floor · 樓層", "High Floor · 高樓層"],
      ["Unit Type · 戶型", "Corner Unit · 邊間"],
      ["View · 景觀", "Chao Phraya River View · 湄南河景"],
      ["Bathroom · 衛浴", "Bathtub Included · 含浴缸"],
      ["Price · 售價", "6.90M THB · 690 萬泰銖"],
      ["Transfer Fee · 過戶費", "50 / 50 · 買賣雙方各半"],
    ],
    overviewEn: [
      "OKA HAUS Sukhumvit 36 is a resale and rental condominium in the Sukhumvit 36 lifestyle area, with convenient access to Rama 4 and central Sukhumvit.",
      "This 50 sq.m. high-floor corner unit offers two bedrooms, two bathrooms, a bathtub, river view, and furniture with electrical appliances as shown in the photos.",
    ],
    overviewZh: [
      "OKA HAUS Sukhumvit 36 位於素坤逸 36 生活圈，可銜接 Rama 4 與素坤逸核心區，適合自住、出租或資產配置。",
      "此戶為 50 平方米兩房兩衛，高樓層邊間，含浴缸，可看湄南河景，家具家電依照片配置。",
    ],
    highlights: [
      "High-floor corner unit with river view · 高樓層邊間，可看湄南河景",
      "2 bedrooms and 2 bathrooms in 50 sq.m. · 50 平方米兩房兩衛",
      "Bathtub included in the bathroom · 衛浴含浴缸",
      "Available for sale or rent in 2026 · 2026 年可出售或出租",
    ],
    nearbyPlaces: [
      "Sukhumvit 36 · 素坤逸 36",
      "Rama 4 Road · Rama 4 主幹道",
      "Thonglor / Ekkamai lifestyle zone · Thonglor / Ekkamai 生活圈",
      "Central Sukhumvit access · 可銜接素坤逸核心區",
    ],
    furnishingNotes: [
      "Furniture and appliances as shown in photos · 家具家電依照片配置",
      "Kitchen with refrigerator and washing machine · 廚房含冰箱與洗衣機",
      "Bedrooms with built-in storage · 臥室含收納櫃體",
      "Viewing and rental terms subject to owner confirmation · 看屋與租賃條件以屋主確認為準",
    ],
    buyerNotes: [
      "Sale price: 6.90M THB · 售價：690 萬泰銖",
      "Commission included in sale price · 售價已含佣金",
      "Transfer fee: 50/50 · 過戶費買賣雙方各半",
      "Sale or rent availability subject to owner confirmation · 出售 / 出租狀態以屋主確認為準",
    ],
  },
];

export function WyneResellSection() {
  const [selectedName, setSelectedName] = useState(resellProjects[0].name);
  const [activeImage, setActiveImage] = useState(0);
  const selectedProject = useMemo(() => resellProjects.find((project) => project.name === selectedName) || resellProjects[0], [selectedName]);
  const currentImage = selectedProject.gallery[activeImage] || selectedProject.gallery[0];
  const hasImageSlider = selectedProject.gallery.length > 1;

  const chooseProject = (name: string) => {
    setSelectedName(name);
    setActiveImage(0);
    window.setTimeout(() => document.getElementById("selected-resell-property")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const moveImage = (direction: number) => {
    setActiveImage((activeImage + direction + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream pt-8 pb-12 md:pt-10 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden border border-border bg-background shadow-sm">
            <img
              src={resellHeroImage}
              alt="KHANTHAROS second-hand property buying and selling service"
              className="w-full object-contain"
              loading="eager"
            />
          </div>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={lineUrl} target="_blank" rel="noreferrer" className="inline-flex min-w-[190px] justify-center bg-[#06C755] px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold text-white shadow-md transition-colors hover:bg-[#05b34d]">LINE</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-w-[190px] justify-center bg-brand-forest px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold text-brand-cream shadow-md transition-colors hover:bg-brand-ink">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Property Collection · 物件列表</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-brand-ink">Bangkok Resell</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resellProjects.map((project) => (
              <article key={project.name} className="group bg-background">
                <button type="button" onClick={() => chooseProject(project.name)} className="block w-full text-left">
                  <div className="relative overflow-hidden bg-brand-cream/50">
                    <img src={project.cover} alt={project.name} loading="lazy" className="aspect-[4/3] w-full object-contain p-2 transition-transform duration-[1000ms] group-hover:scale-[1.02]" />
                    <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium">{project.tag}</div>
                  </div>
                  <div className={`border border-t-0 p-6 transition-colors ${selectedProject.name === project.name ? "border-brand-forest bg-brand-cream" : "border-border"}`}>
                    <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{bilingual(project.area)}</p>
                    <h3 className="mt-3 font-display text-2xl text-brand-ink leading-tight">{project.name}</h3>
                    <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/65">{bilingual(project.summary)}</p>
                    <p className="mt-3 font-serif-tc text-sm leading-loose text-foreground/65">{project.summaryZh}</p>
                    <p className="mt-5 text-lg font-semibold text-brand-forest">{project.price}</p>
                    <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand-forest font-medium">View Details · 查看詳情</div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          <section id="selected-resell-property" className="mt-12 scroll-mt-24">
            <div className="border border-border bg-background p-6 md:p-9">
              <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Selected Property · 建案詳情</p>
              <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <h3 className="font-display text-4xl md:text-6xl text-brand-ink leading-[1.02]">{selectedProject.name}</h3>
                  <p className="mt-4 text-xl text-brand-forest">{selectedProject.detailPrice}</p>
                </div>
                <div className="lg:col-span-5">
                  <div className="space-y-3 text-sm leading-loose text-foreground/70">
                    {selectedProject.overviewEn.map((item) => <p key={item}>{item}</p>)}
                  </div>
                  <div className="mt-5 space-y-3 font-serif-tc text-base leading-loose text-brand-ink/75">
                    {selectedProject.overviewZh.map((item) => <p key={item}>{item}</p>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {selectedProject.specs.map(([label, value]) => (
                <div key={label} className="bg-brand-cream/35 p-5">
                  <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.18em] text-brand-clay">{bilingual(label)}</p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-border bg-background p-5 md:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Photo Gallery · 實拍照片</p>
                  <h4 className="mt-3 whitespace-pre-line font-serif-tc text-3xl text-brand-ink">{bilingual(`${currentImage.title} · ${currentImage.zh}`)}</h4>
                  {hasImageSlider && <p className="mt-2 text-xs text-foreground/55">{activeImage + 1} / {selectedProject.gallery.length}</p>}
                </div>
                {hasImageSlider && (
                  <div className="flex gap-2">
                    <button type="button" onClick={() => moveImage(-1)} aria-label="Previous image" className="h-11 w-11 border border-border text-2xl text-brand-ink transition-colors hover:border-brand-forest hover:text-brand-forest">‹</button>
                    <button type="button" onClick={() => moveImage(1)} aria-label="Next image" className="h-11 w-11 border border-border text-2xl text-brand-ink transition-colors hover:border-brand-forest hover:text-brand-forest">›</button>
                  </div>
                )}
              </div>

              {currentImage.contactHref && (
                <a href={currentImage.contactHref} className="mt-6 inline-flex bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream transition-colors hover:bg-brand-ink">
                  更多信息
                </a>
              )}

              <figure className="mt-6 flex min-h-[260px] items-center justify-center overflow-hidden border border-border bg-brand-cream/25 p-3 md:min-h-[340px] md:p-5">
                {currentImage.href ? (
                  <a href={currentImage.href} target="_blank" rel="noreferrer" className="block">
                    <img src={currentImage.image} alt={currentImage.title} loading="lazy" className="max-h-[320px] w-auto max-w-full object-contain md:max-h-[400px]" />
                  </a>
                ) : (
                  <img src={currentImage.image} alt={currentImage.title} loading="lazy" className="max-h-[320px] w-auto max-w-full object-contain md:max-h-[400px]" />
                )}
              </figure>

              {hasImageSlider && (
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {selectedProject.gallery.map((image, index) => (
                    <button key={`${image.title}-${index}`} type="button" onClick={() => setActiveImage(index)} aria-label={`Show ${image.title}`} className={`overflow-hidden border bg-background p-1 text-left transition-colors ${activeImage === index ? "border-brand-forest" : "border-border hover:border-brand-clay"}`}>
                      <img src={image.image} alt={image.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                      <span className="mt-2 block whitespace-pre-line px-1 pb-1 text-[10px] leading-relaxed text-foreground/65">{bilingual(`${image.title} · ${image.zh}`)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <section className="border border-border bg-brand-cream/25 p-6 md:p-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">Highlights · 物件亮點</p>
                <ul className="mt-5 space-y-4 text-sm leading-loose text-brand-ink/80">
                  {selectedProject.highlights.map((item) => <li key={item} className="whitespace-pre-line">{bilingual(item)}</li>)}
                </ul>
              </section>

              <section className="border border-border bg-background p-6 md:p-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">Location · 周邊生活</p>
                <ul className="mt-5 space-y-4 text-sm leading-loose text-brand-ink/80">
                  {selectedProject.nearbyPlaces.map((item) => <li key={item} className="whitespace-pre-line">{bilingual(item)}</li>)}
                </ul>
              </section>

              <section className="border border-border bg-background p-6 md:p-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">Furniture & Appliances · 家具家電</p>
                <ul className="mt-5 space-y-4 text-sm leading-loose text-brand-ink/80">
                  {selectedProject.furnishingNotes.map((item) => <li key={item} className="whitespace-pre-line">{bilingual(item)}</li>)}
                </ul>
              </section>

              <section id="resell-contact-options" className="border border-border bg-brand-forest p-6 text-brand-cream md:p-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-cream/70 font-medium">Buyer Notes · 購買備註</p>
                <ul className="mt-5 space-y-4 text-sm leading-loose text-brand-cream/90">
                  {selectedProject.buyerNotes.map((item) => <li key={item} className="whitespace-pre-line">{bilingual(item)}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={lineUrl} target="_blank" rel="noreferrer" className="bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white transition-colors hover:bg-[#05b34d]">LINE</a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-brand-cream px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-forest transition-colors hover:bg-white">WhatsApp</a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>

      <div className="fixed bottom-6 right-5 z-[70] flex flex-col gap-3">
        <a href={lineUrl} target="_blank" rel="noreferrer" className="bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white shadow-lg transition-colors hover:bg-[#05b34d]">LINE</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream shadow-lg transition-colors hover:bg-brand-ink">WhatsApp</a>
      </div>
    </main>
  );
}
