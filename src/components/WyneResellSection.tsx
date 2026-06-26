import { useMemo, useState } from "react";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";

const wyneKitchenImage = "data:image/jpeg;base64,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";

const gallery = [
  { title: "Kitchen and Living Area", zh: "廚房與客廳", image: wyneKitchenImage },
  { title: "Living Area", zh: "客廳與工作區", image: wyneLivingImage },
  { title: "Bedroom", zh: "臥室", image: wyneBedroomImage },
  { title: "Bedroom Storage", zh: "臥室收納", image: wyneBedroomMirrorImage },
  { title: "Bathroom Shower", zh: "衛浴淋浴區", image: wyneBathroomImage },
  { title: "Bathroom Vanity", zh: "衛浴洗手台", image: wyneBathroomVanityImage },
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

function bilingual(text: string) {
  return text.split(" · ").join("\n");
}

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
            <p className="text-base leading-relaxed text-foreground/70">Owner listings are reorganized into KHANTHAROS advisory pages, so clients can review photos, price and key details directly on our website.</p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">屋主委託物件整理成 KHANTHAROS 自己的中古房頁面，客戶可直接在我們網站內看照片、價格與重點資料。</p>
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
                <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Selected Property</p>
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
