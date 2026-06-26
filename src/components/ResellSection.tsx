import { useMemo, useState } from "react";
import { Building2, CheckCircle2, ChevronLeft, ChevronRight, Home, MapPin, MessageCircle, Search, ShieldCheck } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";

const bilingual = (text: string) => text.split(" · ").join("\n");

const imageGrade = "contrast-[1.04] saturate-[1.08] brightness-[1.03]";

type ResellMedia = {
  title: string;
  src: string;
  note: string;
};

type ResellListing = {
  name: string;
  location: string;
  propertyType: string;
  status: string;
  price: string;
  rentalYield: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  ownership: string;
  address: string;
  mapQuery: string;
  summary: string;
  highlights: string[];
  transport: string[];
  lifestyle: string[];
  documents: string[];
  gallery: ResellMedia[];
};

const resellListings: ResellListing[] = [
  {
    name: "Bangkok Owner Resale Residence",
    location: "Bangkok CBD / Sukhumvit Corridor · 曼谷 CBD / Sukhumvit 生活軸線",
    propertyType: "Owner Resale Condominium · 屋主轉售公寓",
    status: "Available for private viewing · 可預約私人看屋",
    price: "Price on request · 價格請洽顧問",
    rentalYield: "Rental and resale review available · 可協助評估租金與轉售行情",
    size: "Final size subject to title deed · 面積以權狀為準",
    bedrooms: "1-2 Bedroom options · 一至兩房選項",
    bathrooms: "1-2 Bathrooms · 一至兩衛",
    ownership: "Foreign quota check required · 需確認外國人額度",
    address: "Bangkok, Thailand · 泰國曼谷",
    mapQuery: "Sukhumvit Bangkok condominium",
    summary:
      "This resell page is prepared for client-owned Bangkok condominium opportunities. Each unit should be reviewed by title deed, foreign quota, transfer fee, common fee record, rental history and building condition before reservation.\n\n此中古房頁面用於整理曼谷屋主轉售物件。每一戶建議在保留前確認權狀、外國人額度、過戶費、管理費紀錄、租金紀錄與大樓維護狀態。",
    highlights: [
      "Private owner resale selection · 屋主轉售精選",
      "Due diligence before reservation · 保留前協助查核資料",
      "Rental and exit strategy review · 協助評估出租與未來退場策略",
      "Negotiation support from offer to transfer · 從出價到過戶協助議價與流程",
    ],
    transport: [
      "Compare BTS / MRT walking distance · 比較 BTS / MRT 步行距離",
      "Review daily traffic and expressway access · 檢視日常交通與快速道路動線",
      "Check nearby office, school and hospital demand · 確認周邊辦公、學校與醫療需求",
    ],
    lifestyle: [
      "Building management and juristic office quality · 大樓管理與法人辦公室品質",
      "Lobby, pool, gym and common-area condition · 大廳、泳池、健身房與公設維護狀態",
      "Neighborhood retail, supermarket and restaurant access · 周邊超市、餐飲與日常機能",
    ],
    documents: [
      "Title deed copy · 權狀影本",
      "Foreign quota confirmation · 外國人額度確認",
      "Common fee / sinking fund record · 管理費與公共基金紀錄",
      "Utility and repair record · 水電與修繕紀錄",
      "Current tenant or rental history, if any · 現有租客或租金紀錄，如適用",
      "Transfer cost estimate · 過戶成本試算",
    ],
    gallery: [
      { title: "Living Room Mood · 客廳質感示意", src: property1, note: "Drive images can replace this cover · 可替換為 Drive 實際圖片" },
      { title: "Bedroom Mood · 臥室質感示意", src: property2, note: "Warm color grading applied · 已用暖調質感呈現" },
      { title: "Building Lifestyle · 大樓生活感", src: property3, note: "Optimized crop for website display · 網站顯示比例已優化" },
    ],
  },
];

function ListingCard({ listing, active, onSelect }: { listing: ResellListing; active: boolean; onSelect: () => void }) {
  const cover = listing.gallery[0].src;
  return (
    <button type="button" onClick={onSelect} className="group block w-full text-left">
      <article className={`border bg-background transition-colors ${active ? "border-brand-forest" : "border-border"}`}>
        <div className="relative overflow-hidden">
          <img src={cover} alt={listing.name} loading="lazy" className={`aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageGrade}`} />
          <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium whitespace-pre-line">{bilingual(listing.propertyType)}</div>
        </div>
        <div className="p-6">
          <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.24em] text-brand-clay font-medium">{bilingual(listing.location)}</p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-brand-ink">{listing.name}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/65 line-clamp-5">{bilingual(listing.summary)}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-brand-forest">
            <span className="border border-brand-forest/25 px-3 py-1">{listing.price.split(" · ")[0]}</span>
            <span className="border border-brand-forest/25 px-3 py-1">{listing.bedrooms.split(" · ")[0]}</span>
          </div>
        </div>
      </article>
    </button>
  );
}

function DetailHero({ listing }: { listing: ResellListing }) {
  return (
    <section className="overflow-hidden border border-border bg-background">
      <div className="grid gap-px bg-border lg:grid-cols-3">
        <div className="bg-background lg:col-span-2">
          <img src={listing.gallery[0].src} alt={listing.name} className={`h-full max-h-[640px] min-h-[380px] w-full object-cover ${imageGrade}`} />
        </div>
        <div className="grid gap-px bg-border">
          {listing.gallery.slice(1, 3).map((image) => (
            <img key={image.title} src={image.src} alt={image.title} className={`h-full min-h-48 w-full bg-background object-cover ${imageGrade}`} />
          ))}
        </div>
      </div>
      <div className="p-6 md:p-9">
        <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{bilingual(listing.status)}</p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.02] text-brand-ink">{listing.name}</h2>
        <p className="mt-5 max-w-4xl whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(listing.summary)}</p>
      </div>
    </section>
  );
}

function Snapshot({ listing }: { listing: ResellListing }) {
  const rows = [
    ["Price · 售價", listing.price],
    ["Rental Review · 租金評估", listing.rentalYield],
    ["Size · 面積", listing.size],
    ["Bedrooms · 房間", listing.bedrooms],
    ["Bathrooms · 衛浴", listing.bathrooms],
    ["Ownership · 產權", listing.ownership],
  ];
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Resell Snapshot</p>
      <h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">中古房資料速覽</h3>
      <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {rows.map(([label, value]) => (
          <div key={label} className="bg-brand-cream/30 p-5">
            <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.18em] text-brand-clay">{bilingual(label)}</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhotoGallery({ listing }: { listing: ResellListing }) {
  const [index, setIndex] = useState(0);
  const image = listing.gallery[index];
  const previous = () => setIndex((current) => (current === 0 ? listing.gallery.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === listing.gallery.length - 1 ? 0 : current + 1));
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Photo Gallery</p>
          <h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">房源圖片</h3>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={previous} aria-label="Previous image" className="grid h-10 w-10 place-items-center border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest"><ChevronLeft size={18} /></button>
          <button type="button" onClick={next} aria-label="Next image" className="grid h-10 w-10 place-items-center border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest"><ChevronRight size={18} /></button>
        </div>
      </div>
      <figure className="mt-6 overflow-hidden border border-border bg-brand-cream/25">
        <img src={image.src} alt={image.title} className={`aspect-[16/10] w-full object-cover ${imageGrade}`} />
        <figcaption className="border-t border-border bg-brand-cream/35 p-4">
          <p className="whitespace-pre-line font-serif-tc text-base leading-relaxed text-brand-ink">{bilingual(image.title)}</p>
          <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(image.note)}</p>
        </figcaption>
      </figure>
    </section>
  );
}

function AdvisoryBlocks({ listing }: { listing: ResellListing }) {
  const groups = [
    { icon: ShieldCheck, title: "Due Diligence · 購買前查核", items: listing.documents },
    { icon: MapPin, title: "Transport · 交通條件", items: listing.transport },
    { icon: Home, title: "Lifestyle · 生活機能", items: listing.lifestyle },
  ];
  return (
    <section className="grid gap-5 lg:grid-cols-3">
      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <div key={group.title} className="border border-border bg-background p-6">
            <Icon className="text-brand-forest" size={24} />
            <h3 className="mt-4 whitespace-pre-line font-serif-tc text-xl leading-relaxed text-brand-ink">{bilingual(group.title)}</h3>
            <div className="mt-5 space-y-3">
              {group.items.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-loose text-foreground/70">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-clay" size={16} />
                  <span className="whitespace-pre-line">{bilingual(item)}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function ResellProcess() {
  const steps = [
    ["01", "Shortlist · 初選物件", "Review location, building quality, price range and resale potential.\n先比較地段、大樓品質、價格帶與未來轉售性。"],
    ["02", "Document Check · 文件查核", "Confirm title deed, owner identity, foreign quota, fee record and transfer terms.\n確認權狀、屋主身分、外國人額度、費用紀錄與過戶條件。"],
    ["03", "Offer & Negotiation · 出價議價", "Prepare offer, deposit terms, furniture list and handover details.\n整理出價、訂金條件、家具清單與交屋細節。"],
    ["04", "Transfer · 過戶交屋", "Coordinate Land Office transfer, payment, keys, utilities and rental plan.\n協調土地廳過戶、付款、鑰匙、水電與後續出租規劃。"],
  ];
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Buying Process</p>
      <h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">中古房購買流程</h3>
      <div className="mt-7 grid gap-px bg-border md:grid-cols-4">
        {steps.map(([number, title, body]) => (
          <div key={number} className="bg-brand-cream/35 p-5">
            <p className="font-display text-3xl text-brand-clay">{number}</p>
            <h4 className="mt-4 whitespace-pre-line font-serif-tc text-lg leading-relaxed text-brand-ink">{bilingual(title)}</h4>
            <p className="mt-3 whitespace-pre-line text-sm leading-loose text-foreground/65">{bilingual(body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ResellSection() {
  const [query, setQuery] = useState("");
  const [selectedName, setSelectedName] = useState(resellListings[0].name);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return resellListings;
    return resellListings.filter((listing) => `${listing.name} ${listing.location} ${listing.summary}`.toLowerCase().includes(normalized));
  }, [query]);
  const selected = resellListings.find((listing) => listing.name === selectedName) || filtered[0] || resellListings[0];
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selected.mapQuery)}&output=embed`;

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">Resell · 中古房</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">Curated resale homes with buyer-side due diligence.</h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-foreground/70">A resale unit is not only a price comparison. We review title, quota, building condition, rental demand and exit strategy before clients make an offer.</p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">中古房不是只比價格。我們會在出價前協助確認權狀、額度、大樓狀態、租賃需求與未來退場策略。</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Available Collection · 可售物件</p>
              <h2 className="mt-3 font-display text-4xl text-brand-ink">Resell Listings</h2>
            </div>
            <label className="flex w-full items-center gap-3 border border-border bg-background px-4 py-3 md:max-w-sm">
              <Search size={18} className="text-brand-clay" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search area or project" className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40" />
            </label>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((listing, index) => (
              <ListingCard key={listing.name} listing={listing} active={selected.name === listing.name} onSelect={() => setSelectedName(listing.name)} />
            ))}
          </div>

          <section className="mt-12 space-y-6 scroll-mt-24" id="selected-resell">
            <DetailHero listing={selected} />
            <Snapshot listing={selected} />
            <PhotoGallery listing={selected} />
            <AdvisoryBlocks listing={selected} />
            <section className="overflow-hidden border border-border bg-background">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 md:p-8">
                  <Building2 className="text-brand-forest" size={28} />
                  <h3 className="mt-4 font-serif-tc text-2xl text-brand-ink">位置與區域判斷</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(selected.address)}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={lineUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white"><MessageCircle size={16} />LINE</a>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream"><MessageCircle size={16} />WhatsApp</a>
                  </div>
                </div>
                <iframe title={`${selected.name} map`} src={mapSrc} className="min-h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </section>
            <ResellProcess />
          </section>
        </div>
      </section>
    </main>
  );
}
