import { useMemo, useState } from "react";
import wyneKitchenImage from "@/assets/resell/wyne-by-sansiri/kitchen-living.jpg";
import wyneLivingImage from "@/assets/resell/wyne-by-sansiri/living-area.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";
const bilingual = (text: string) => text.split(" · ").join("\n");

const gallery = [
  { title: "Kitchen and Living Area", zh: "廚房與客廳", image: wyneKitchenImage },
  { title: "Living Area", zh: "客廳與工作區", image: wyneLivingImage },
  { title: "Bedroom", zh: "臥室", image: property3 },
  { title: "Bedroom Storage", zh: "臥室收納", image: wyneKitchenImage },
  { title: "Bathroom Shower", zh: "衛浴淋浴區", image: property2 },
  { title: "Bathroom Vanity", zh: "衛浴洗手台", image: property1 },
];

const resellProjects = [
  {
    name: "Wyne by Sansiri",
    area: "Phra Khanong / Sukhumvit · 帕卡農 / 素坤逸",
    price: "3.35M THB · 335 萬泰銖",
    summary: "1 Bedroom · 30 sq.m. · 7th Floor Garden View",
    summaryZh: "一房 · 30 平方米 · 7 樓園景 · 家具家電齊全",
    cover: wyneKitchenImage,
  },
];

const specs = [
  ["Layout · 格局", "1 Bedroom · 一房"],
  ["Size · 面積", "30 sq.m. · 30 平方米"],
  ["Floor · 樓層", "7th Floor · 7 樓"],
  ["View · 景觀", "Garden View · 園景"],
  ["Furniture · 家具", "Fully-furnished · 家具家電齊全"],
  ["Transit · 交通", "BTS Phra Khanong · BTS 帕卡農站"],
  ["Price · 售價", "3.35M THB · 335 萬泰銖"],
  ["Transfer Fee · 過戶費", "50 / 50 · 買賣雙方各半"],
];

export function WyneResellSection() {
  const [selectedName, setSelectedName] = useState(resellProjects[0].name);
  const [activeImage, setActiveImage] = useState(0);
  const selectedProject = useMemo(() => resellProjects.find((project) => project.name === selectedName) || resellProjects[0], [selectedName]);
  const currentImage = gallery[activeImage];

  const chooseProject = (name: string) => {
    setSelectedName(name);
    window.setTimeout(() => document.getElementById("selected-resell-property")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const moveImage = (direction: number) => {
    setActiveImage((activeImage + direction + gallery.length) % gallery.length);
  };

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">Resell · 中古房</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">Selected Bangkok resale homes.</h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-foreground/70">Resale listings are reorganized into KHANTHAROS advisory pages, so clients can review photos, price and key details directly on our website.</p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">中古房物件整理成 KHANTHAROS 自己的頁面，客戶可直接在我們網站內看照片、價格與重點資料。</p>
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
                  <div className="relative overflow-hidden">
                    <img src={project.cover} alt={project.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
                    <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium">For Sale · 出售</div>
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
            <div className="overflow-hidden border border-border bg-background">
              <div className="p-6 md:p-9">
                <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Selected Property · 建案詳情</p>
                <h3 className="mt-3 font-display text-4xl md:text-6xl text-brand-ink leading-[1.02]">{selectedProject.name}</h3>
                <p className="mt-4 text-xl text-brand-forest">For Sale · 3.35M THB</p>
                <p className="mt-3 max-w-4xl whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual("Fully furnished 1-bedroom unit near BTS Phra Khanong, suitable for own stay or rental investment. · 鄰近 BTS Phra Khanong 的一房中古物件，家具家電齊全，適合自住或出租收租規劃。")}</p>
              </div>
              <div className="grid gap-px bg-border lg:grid-cols-3">
                <div className="bg-background lg:col-span-2">
                  <img src={gallery[0].image} alt="Wyne by Sansiri" className="h-full max-h-[620px] min-h-[360px] w-full object-cover" />
                </div>
                <div className="grid gap-px bg-border">
                  {gallery.slice(1, 3).map((image) => <img key={image.title} src={image.image} alt={image.title} className="h-full min-h-44 w-full bg-background object-cover" />)}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {specs.map(([label, value]) => (
                <div key={label} className="bg-brand-cream/35 p-5">
                  <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.18em] text-brand-clay">{bilingual(label)}</p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-border bg-background p-5 md:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Photo Gallery · 實拍照片</p>
                  <h4 className="mt-3 whitespace-pre-line font-serif-tc text-3xl text-brand-ink">{bilingual(`${currentImage.title} · ${currentImage.zh}`)}</h4>
                  <p className="mt-2 text-xs text-foreground/55">{activeImage + 1} / {gallery.length}</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => moveImage(-1)} aria-label="Previous image" className="h-10 w-10 border border-border text-xl text-brand-ink hover:border-brand-forest hover:text-brand-forest">‹</button>
                  <button type="button" onClick={() => moveImage(1)} aria-label="Next image" className="h-10 w-10 border border-border text-xl text-brand-ink hover:border-brand-forest hover:text-brand-forest">›</button>
                </div>
              </div>
              <figure className="mt-5 overflow-hidden border border-border bg-brand-cream/25">
                <img src={currentImage.image} alt={currentImage.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </figure>
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
