import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import philosophyImg from "@/assets/philosophy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KHANTHAROS PROPERTY — 您在泰國置產與生活的專業夥伴" },
      {
        name: "description",
        content:
          "Boutique Thailand real estate consultancy. Premium properties, resale homes, property management and investment advisory. 專注泰國房地產、二手屋買賣、投資置產與房屋代管服務。",
      },
      { property: "og:title", content: "KHANTHAROS PROPERTY" },
      {
        property: "og:description",
        content: "Your trusted partner for living and investing in Thailand.",
      },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Properties", tc: "房源" },
  { label: "Management", tc: "代管" },
  { label: "Investment", tc: "投資" },
  { label: "About", tc: "關於" },
  { label: "Contact", tc: "聯絡" },
];

const services = [
  { n: "01", en: "Property Sales", tc: "新案銷售", desc: "Curated access to Thailand's premium new developments." },
  { n: "02", en: "Resale Homes", tc: "二手買賣", desc: "Expert negotiation for the secondary market." },
  { n: "03", en: "Management", tc: "房屋代管", desc: "Complete care for overseas owners." },
  { n: "04", en: "Investment", tc: "投資顧問", desc: "Yield-focused, data-driven advisory." },
  { n: "05", en: "After-Sales", tc: "售後支援", desc: "Long-term local guidance, beyond the signature." },
];

const properties = [
  {
    img: property1,
    location: "Thong Lo, Bangkok",
    locationTc: "曼谷 通羅",
    name: "The Marque Penthouse",
    price: "฿45,000,000",
    beds: "3 BEDROOMS",
    size: "240 SQM",
    tag: "Freehold",
  },
  {
    img: property2,
    location: "Riverside, Bangkok",
    locationTc: "曼谷 河濱",
    name: "Chao Phraya Residences",
    price: "฿42,000,000",
    beds: "3 BEDROOMS",
    size: "210 SQM",
    tag: "Riverfront",
  },
  {
    img: property3,
    location: "Sathorn, Bangkok",
    locationTc: "曼谷 沙吞",
    name: "Sathorn Sky Suite",
    price: "฿28,500,000",
    beds: "2 BEDROOMS",
    size: "165 SQM",
    tag: "Skyline View",
  },
  {
    img: property1,
    location: "Phrom Phong, Bangkok",
    locationTc: "曼谷 鵬蓬",
    name: "Emporium Garden Suite",
    price: "฿35,800,000",
    beds: "2 BEDROOMS",
    size: "138 SQM",
    tag: "Branded Residence",
  },
  {
    img: property2,
    location: "Asoke, Bangkok",
    locationTc: "曼谷 阿索克",
    name: "Asoke Grand Tower",
    price: "฿22,500,000",
    beds: "2 BEDROOMS",
    size: "98 SQM",
    tag: "High Floor",
  },
  {
    img: property3,
    location: "Ekkamai, Bangkok",
    locationTc: "曼谷 伊卡邁",
    name: "Ekkamai Loft Residence",
    price: "฿18,900,000",
    beds: "2 BEDROOMS",
    size: "92 SQM",
    tag: "Designer Loft",
  },
  {
    img: property1,
    location: "Ari, Bangkok",
    locationTc: "曼谷 阿黎",
    name: "Ari Hillside Villa",
    price: "฿52,000,000",
    beds: "4 BEDROOMS",
    size: "320 SQM",
    tag: "Private Pool",
  },
  {
    img: property2,
    location: "Chidlom, Bangkok",
    locationTc: "曼谷 奇隆",
    name: "Langsuan Park View",
    price: "฿38,500,000",
    beds: "3 BEDROOMS",
    size: "175 SQM",
    tag: "Park Frontage",
  },
  {
    img: property3,
    location: "Silom, Bangkok",
    locationTc: "曼谷 是隆",
    name: "Silom Heritage Suite",
    price: "฿15,800,000",
    beds: "1 BEDROOM",
    size: "72 SQM",
    tag: "Heritage Building",
  },
  {
    img: property1,
    location: "Ratchada, Bangkok",
    locationTc: "曼谷 拉差達",
    name: "Ratchada Sky Loft",
    price: "฿9,800,000",
    beds: "1 BEDROOM",
    size: "55 SQM",
    tag: "Investment",
  },
  {
    img: property2,
    location: "Sukhumvit 31, Bangkok",
    locationTc: "曼谷 素坤逸",
    name: "Sukhumvit Private Mansion",
    price: "฿68,000,000",
    beds: "4 BEDROOMS",
    size: "410 SQM",
    tag: "Single House",
  },
  {
    img: property3,
    location: "Sathorn, Bangkok",
    locationTc: "曼谷 沙吞",
    name: "Sathorn Riverside Duplex",
    price: "฿58,000,000",
    beds: "3 BEDROOMS",
    size: "265 SQM",
    tag: "Duplex",
  },
];

const whyUs = [
  { n: "01", en: "Local Market Expertise", tc: "深耕泰國市場", desc: "Decades of presence across Bangkok, Phuket and the islands." },
  { n: "02", en: "Personalized Service", tc: "一對一專業服務", desc: "Every client works directly with our senior partners." },
  { n: "03", en: "Transparent Communication", tc: "資訊透明誠實", desc: "Full disclosure on taxes, fees and market risks." },
  { n: "04", en: "Quality Selection", tc: "嚴選優質房源", desc: "We curate ruthlessly — only the highest standard of living." },
  { n: "05", en: "Long-Term Support", tc: "完善售後支援", desc: "Our relationship begins at the signature, not ends." },
];

function Index() {
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(properties.length / PAGE_SIZE);
  const pagedProperties = useMemo(
    () => properties.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page],
  );
  const goToPage = (p: number) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    if (typeof document !== "undefined") {
      document.getElementById("properties")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.25em] font-medium text-brand-ink">
              KHANTHAROS
            </span>
            <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay mt-1">
              Property · 泰式安居
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] font-medium">
            {navItems.map((i) => (
              <a key={i.label} href="#" className="text-brand-ink/80 hover:text-brand-forest transition-colors">
                {i.label}
                <span className="ml-2 font-serif-tc text-brand-clay/70 normal-case tracking-normal">{i.tc}</span>
              </a>
            ))}
          </div>
          <button className="text-[11px] uppercase tracking-[0.25em] text-brand-forest font-medium">
            EN / 繁中
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen min-h-[680px] overflow-hidden flex items-end">
        <img
          src={heroImg}
          alt="Luxury Thai coastal villa at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/30 via-brand-ink/10 to-brand-ink/80" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pb-24 md:pb-32 text-brand-cream">
          <span className="text-[10px] tracking-[0.45em] uppercase text-brand-cream/80 mb-8 block">
            KHANTHAROS PROPERTY · est. Bangkok
          </span>
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-5xl text-balance">
            Find More Than a Property —{" "}
            <em className="italic font-light">Find Your Life in Thailand.</em>
          </h1>
          <p className="font-serif-tc text-2xl md:text-3xl mt-6 text-brand-cream/95 tracking-wide">
            尋找的不只是房子，而是在泰國的理想生活
          </p>
          <p className="mt-8 max-w-xl text-sm md:text-base text-brand-cream/75 leading-relaxed">
            Premium real estate, resale homes, and property management across Thailand —
            curated for the discerning client.
            <span className="block mt-2 font-serif-tc text-brand-cream/70">
              專注泰國房地產、二手屋買賣、投資置產與房屋代管服務。
            </span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#properties"
              className="px-10 py-4 bg-brand-cream text-brand-forest text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-brand-clay hover:text-brand-cream transition-all duration-500"
            >
              Browse Properties · 探索房源
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-brand-cream/40 text-brand-cream text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-brand-cream/10 transition-all duration-500"
            >
              Contact Us · 聯絡顧問
            </a>
          </div>
        </div>
      </header>

      {/* Philosophy */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay font-medium mb-8 block">
              Quality Over Quantity · 重質不重量
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-brand-ink text-balance">
              We curate{" "}
              <em className="italic font-light text-brand-forest">a few homes</em>{" "}
              with the care others reserve for one.
            </h2>
            <div className="mt-10 w-12 h-px bg-brand-clay" />
            <p className="mt-10 text-base text-foreground/75 leading-relaxed max-w-[58ch]">
              At KHANTHAROS PROPERTY, we focus on quality rather than quantity.
              We carefully select properties and provide personalised consultation
              to help every client make confident real estate decisions in Thailand.
            </p>
            <p className="mt-6 font-serif-tc text-base text-foreground/75 leading-loose max-w-[58ch]">
              KHANTHAROS PROPERTY 堅持「重質不重量」的服務理念，
              精選優質房源，提供專業顧問服務，
              協助客戶安心完成泰國置產規劃。
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={philosophyImg}
              alt="Architectural detail of a Thai residence"
              width={900}
              height={1120}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-forest/10 -z-10 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay font-medium block mb-4">
                Our Services · 服務項目
              </span>
              <h3 className="font-display text-4xl md:text-5xl text-brand-ink tracking-tight">
                Bespoke advisory, <em className="italic font-light text-brand-forest">end to end</em>.
              </h3>
            </div>
            <p className="font-serif-tc text-foreground/60 max-w-xs leading-relaxed">
              從選屋、議價、過戶到代管，<br />全程一對一陪伴。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-brand-cream p-10 hover:bg-background transition-colors group"
              >
                <div className="font-display text-brand-clay text-lg mb-10 group-hover:text-brand-forest transition-colors">
                  {s.n}
                </div>
                <h4 className="font-display text-2xl text-brand-ink leading-tight">{s.en}</h4>
                <p className="font-serif-tc text-base text-brand-forest/80 mt-1">{s.tc}</p>
                <p className="mt-6 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay font-medium block mb-4">
                Private Collection · 精選房源
              </span>
              <h3 className="font-display text-4xl md:text-5xl text-brand-ink tracking-tight">
                Featured Residences
              </h3>
            </div>
            <a
              href="#"
              className="hidden md:inline-block text-[11px] uppercase tracking-[0.25em] border-b border-brand-clay/40 pb-1 text-brand-ink hover:text-brand-forest hover:border-brand-forest transition-colors"
            >
              View All · 探索更多
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pagedProperties.map((p) => (
              <article key={p.name} className="group cursor-pointer">
                <div className="overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={900}
                    height={1120}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-brand-cream/95 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-forest font-medium">
                    {p.tag}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-brand-clay font-medium">
                    {p.location}{" "}
                    <span className="font-serif-tc tracking-normal normal-case text-brand-forest/70">
                      · {p.locationTc}
                    </span>
                  </p>
                  <div className="flex justify-between items-baseline mt-2">
                    <h4 className="font-display text-2xl text-brand-ink">{p.name}</h4>
                    <p className="font-display text-lg text-brand-forest">{p.price}</p>
                  </div>
                  <div className="flex gap-6 mt-4 text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                    <span>{p.beds}</span>
                    <span>{p.size}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/55">
              Showing {(page - 1) * PAGE_SIZE + 1}–
              {Math.min(page * PAGE_SIZE, properties.length)} of {properties.length}
              <span className="font-serif-tc text-brand-clay/80 ml-3 normal-case tracking-normal">
                · 共 {properties.length} 件房源
              </span>
            </p>
            <nav className="flex items-center gap-2" aria-label="Pagination">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="px-5 py-2 text-[10px] uppercase tracking-[0.25em] border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-brand-ink"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goToPage(n)}
                  aria-current={page === n ? "page" : undefined}
                  className={`w-10 h-10 text-[11px] tracking-[0.15em] font-display transition-colors ${
                    page === n
                      ? "bg-brand-forest text-brand-cream"
                      : "border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest"
                  }`}
                >
                  {String(n).padStart(2, "0")}
                </button>
              ))}
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="px-5 py-2 text-[10px] uppercase tracking-[0.25em] border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-brand-ink"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-brand-forest text-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-20">
            <span className="text-[10px] tracking-[0.45em] uppercase text-brand-sand/80 font-medium block mb-4">
              Why Khantharos · 為什麼選擇我們
            </span>
            <h3 className="font-display text-4xl md:text-5xl tracking-tight text-brand-cream text-balance">
              Trusted by clients who value{" "}
              <em className="italic font-light text-brand-sand">discretion</em>.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {whyUs.map((w) => (
              <div key={w.n} className="flex gap-6 border-t border-brand-cream/15 pt-8">
                <span className="font-display text-2xl text-brand-sand shrink-0">{w.n}</span>
                <div>
                  <h5 className="font-display text-xl text-brand-cream">
                    {w.en}
                    <span className="font-serif-tc text-base text-brand-sand/80 ml-3">/ {w.tc}</span>
                  </h5>
                  <p className="mt-3 text-sm text-brand-cream/70 leading-relaxed max-w-[48ch]">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 md:py-40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl text-brand-clay/50 font-display mb-6">"</div>
          <p className="font-display text-2xl md:text-3xl italic font-light leading-relaxed text-brand-ink text-balance">
            Working with Khantharos felt like having a trusted family member in Thailand.
            They didn't just sell us a home — they helped us begin a new life in Bangkok
            with honesty and grace.
          </p>
          <p className="mt-8 font-serif-tc text-lg text-foreground/70 leading-relaxed">
            「他們不只是房仲，更像是我們在泰國的家人。」
          </p>
          <div className="mt-12">
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-brand-ink">
              David & Mei Ling Chen
            </p>
            <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-foreground/45">
              Investors from Hong Kong · 香港投資客戶
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-brand-ink text-brand-cream pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="font-display text-4xl md:text-5xl leading-tight text-balance">
                Let's discuss your{" "}
                <em className="italic font-light text-brand-sand">Thailand journey</em>.
              </h3>
              <p className="font-serif-tc text-xl mt-4 text-brand-cream/80">
                與我們開始您的置產之旅
              </p>
              <div className="mt-12 flex flex-wrap gap-3">
                {["LINE", "WhatsApp", "WeChat", "Messenger"].map((c) => (
                  <button
                    key={c}
                    className="px-7 py-3 border border-brand-cream/20 text-[10px] uppercase tracking-[0.25em] font-medium text-brand-cream/85 hover:bg-brand-cream hover:text-brand-ink transition-all"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h6 className="text-[10px] tracking-[0.3em] uppercase text-brand-sand font-medium mb-6">
                  Studio · 辦公室
                </h6>
                <address className="not-italic text-sm text-brand-cream/70 leading-relaxed">
                  Thong Lo 13, Sukhumvit Road<br />
                  Bangkok, Thailand 10110<br />
                  <br />
                  hello@khantharos.com<br />
                  +66 (0) 2 123 4567
                </address>
              </div>
              <div>
                <h6 className="text-[10px] tracking-[0.3em] uppercase text-brand-sand font-medium mb-6">
                  Explore · 導覽
                </h6>
                <ul className="space-y-3 text-sm text-brand-cream/70">
                  {navItems.map((i) => (
                    <li key={i.label}>
                      <a href="#" className="hover:text-brand-cream transition-colors">
                        {i.label}{" "}
                        <span className="font-serif-tc text-brand-sand/70">· {i.tc}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-cream/40">
              © 2026 KHANTHAROS PROPERTY · All rights reserved.
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-cream/40">
              Licensed Real Estate Agency · Bangkok
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
