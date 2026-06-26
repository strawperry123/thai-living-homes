import { useMemo, useState } from "react";
import { Building2, CheckCircle2, ChevronLeft, ChevronRight, Home, MapPin, MessageCircle, Search, ShieldCheck } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";
const bilingual = (text: string) => text.split(" · ").join("\n");
const imageGrade = "contrast-[1.06] saturate-[1.1] brightness-[1.04]";

type ResellMedia = { title: string; src: string; note: string };
type ResellListing = {
  name: string;
  location: string;
  propertyType: string;
  status: string;
  price: string;
  transferFee: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  floor: string;
  view: string;
  furnishing: string;
  ownership: string;
  address: string;
  mapQuery: string;
  summary: string;
  thaiSummary: string;
  highlights: string[];
  transport: string[];
  lifestyle: string[];
  documents: string[];
  gallery: ResellMedia[];
};

const resellListings: ResellListing[] = [
  {
    name: "Wyne by Sansiri",
    location: "BTS Phra Khanong / Sukhumvit · BTS พระโขนง / 素坤逸生活圈",
    propertyType: "Owner Resale Condominium · 屋主轉售公寓",
    status: "For Sale · 現售中",
    price: "3.35M THB · 335 萬泰銖",
    transferFee: "Transfer fee 50/50 · 過戶費買賣雙方各半",
    size: "30 sq.m. · 30 平方米",
    bedrooms: "1 Bedroom · 一房",
    bathrooms: "1 Bathroom · 一衛",
    floor: "7th Floor · 7 樓",
    view: "Garden view · 花園景觀",
    furnishing: "Fully furnished with appliances · 家具家電齊全，可拎包入住",
    ownership: "Condominium resale, quota to be checked · 公寓轉售，外國人額度需查核",
    address: "Near BTS Phra Khanong, Sukhumvit, Bangkok · 曼谷 Sukhumvit，鄰近 BTS Phra Khanong",
    mapQuery: "Wyne by Sansiri BTS Phra Khanong Bangkok",
    summary:
      "For sale at Wyne by Sansiri, a compact 1-bedroom resale condominium near BTS Phra Khanong. The unit is on the 7th floor with garden view, fully furnished and equipped with electrical appliances, suitable for immediate move-in or rental planning.",
    thaiSummary:
      "ขายคอนโด Wyne by Sansiri 1 ห้องนอน ขนาด 30 ตร.ม. ชั้น 7 วิวสวน เฟอร์นิเจอร์และเครื่องใช้ไฟฟ้าครบ พร้อมย้ายเข้าอยู่ ใกล้ BTS พระโขนง ราคา 3.35 ล้านบาท ค่าโอน 50/50",
    highlights: [
      "1 Bedroom, 30 sq.m., efficient city layout · 一房 30 平方米，市中心實用格局",
      "7th floor garden view · 7 樓花園景觀",
      "Fully furnished and ready to move in · 家具家電齊全，可直接入住",
      "Near BTS Phra Khanong · 鄰近 BTS Phra Khanong",
      "Price 3.35M THB, transfer fee 50/50 · 售價 335 萬泰銖，過戶費 50/50",
    ],
    transport: [
      "BTS Phra Khanong access for Sukhumvit commuting · 可銜接 BTS Phra Khanong 與 Sukhumvit 通勤線",
      "Convenient access toward Ekkamai, Thong Lo and On Nut · 可往 Ekkamai、Thong Lo 與 On Nut",
      "Useful rental location for tenants working along Sukhumvit · 適合 Sukhumvit 沿線工作租客",
    ],
    lifestyle: [
      "Compact furnished unit for self-use or rental · 小坪數全配房，適合自住或出租",
      "Garden view improves daily living comfort · 花園景觀提升日常居住舒適度",
      "Nearby cafes, supermarkets and neighborhood services around Phra Khanong · Phra Khanong 周邊有咖啡廳、超市與日常機能",
    ],
    documents: [
      "Confirm title deed and exact registered size · 確認權狀與登記面積",
      "Check foreign quota before reservation · 保留前確認外國人額度",
      "Verify common fee, sinking fund and juristic office records · 確認管理費、公共基金與法人辦公室紀錄",
      "Confirm included furniture and electrical appliance list · 確認隨屋家具與家電清單",
      "Check room condition, air-conditioners, water heater and built-in furniture · 檢查房況、冷氣、熱水器與系統家具",
      "Transfer fee 50/50 to be written into the sale agreement · 過戶費 50/50 需寫入買賣合約",
    ],
    gallery: [
      { title: "Kitchen and Living Area · 廚房與客廳", src: property1, note: "Uploaded room photo available; waiting for public image asset URL · 已有實際照片，等待公開圖片資產 URL 後替換" },
      { title: "Bedroom · 臥室", src: property2, note: "Actual bedroom photos provided by owner · 已提供屋主實拍臥室照片" },
      { title: "Bathroom · 衛浴", src: property3, note: "Actual bathroom photos provided by owner · 已提供屋主實拍衛浴照片" },
    ],
  },
];

function ListingCard({ listing, active, onSelect }: { listing: ResellListing; active: boolean; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} className="group block w-full text-left">
      <article className={`border bg-background transition-colors ${active ? "border-brand-forest" : "border-border"}`}>
        <div className="relative overflow-hidden">
          <img src={listing.gallery[0].src} alt={listing.name} loading="lazy" className={`aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageGrade}`} />
          <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium whitespace-pre-line">{bilingual(listing.propertyType)}</div>
          <div className="absolute bottom-4 left-4 bg-brand-forest px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream">{listing.price.split(" · ")[0]}</div>
        </div>
        <div className="p-6">
          <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.24em] text-brand-clay font-medium">{bilingual(listing.location)}</p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-brand-ink">{listing.name}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/65 line-clamp-5">{listing.summary}\n\n{listing.thaiSummary}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-brand-forest">
            <span className="border border-brand-forest/25 px-3 py-1">{listing.bedrooms.split(" · ")[0]}</span>
            <span className="border border-brand-forest/25 px-3 py-1">{listing.size.split(" · ")[0]}</span>
            <span className="border border-brand-forest/25 px-3 py-1">{listing.floor.split(" · ")[0]}</span>
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
        <div className="bg-background lg:col-span-2"><img src={listing.gallery[0].src} alt={listing.name} className={`h-full max-h-[640px] min-h-[380px] w-full object-cover ${imageGrade}`} /></div>
        <div className="grid gap-px bg-border">{listing.gallery.slice(1, 3).map((image) => <img key={image.title} src={image.src} alt={image.title} className={`h-full min-h-48 w-full bg-background object-cover ${imageGrade}`} />)}</div>
      </div>
      <div className="p-6 md:p-9">
        <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{bilingual(listing.status)}</p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.02] text-brand-ink">{listing.name}</h2>
        <p className="mt-5 max-w-4xl text-sm leading-loose text-foreground/70">{listing.summary}</p>
        <p className="mt-5 max-w-4xl text-sm leading-loose text-foreground/70">{listing.thaiSummary}</p>
      </div>
    </section>
  );
}

function Snapshot({ listing }: { listing: ResellListing }) {
  const rows = [["Price · 售價", listing.price], ["Transfer Fee · 過戶費", listing.transferFee], ["Size · 面積", listing.size], ["Bedrooms · 房間", listing.bedrooms], ["Floor / View · 樓層 / 景觀", `${listing.floor} · ${listing.view}`], ["Furnishing · 家具", listing.furnishing], ["Ownership · 產權", listing.ownership], ["Location · 位置", listing.address]];
  return <section className="border border-border bg-background p-6 md:p-8"><p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Resell Snapshot</p><h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">中古房資料速覽</h3><div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{rows.map(([label, value]) => <div key={label} className="bg-brand-cream/30 p-5"><p className="whitespace-pre-line text-[10px] uppercase tracking-[0.18em] text-brand-clay">{bilingual(label)}</p><p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p></div>)}</div></section>;
}

function PhotoGallery({ listing }: { listing: ResellListing }) {
  const [index, setIndex] = useState(0);
  const image = listing.gallery[index];
  const previous = () => setIndex((current) => (current === 0 ? listing.gallery.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === listing.gallery.length - 1 ? 0 : current + 1));
  return <section className="border border-border bg-background p-6 md:p-8"><div className="flex items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Photo Gallery</p><h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">房源圖片</h3></div><div className="flex gap-2"><button type="button" onClick={previous} aria-label="Previous image" className="grid h-10 w-10 place-items-center border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest"><ChevronLeft size={18} /></button><button type="button" onClick={next} aria-label="Next image" className="grid h-10 w-10 place-items-center border border-border text-brand-ink hover:border-brand-forest hover:text-brand-forest"><ChevronRight size={18} /></button></div></div><figure className="mt-6 overflow-hidden border border-border bg-brand-cream/25"><img src={image.src} alt={image.title} className={`aspect-[16/10] w-full object-cover ${imageGrade}`} /><figcaption className="border-t border-border bg-brand-cream/35 p-4"><p className="whitespace-pre-line font-serif-tc text-base leading-relaxed text-brand-ink">{bilingual(image.title)}</p><p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(image.note)}</p></figcaption></figure></section>;
}

function AdvisoryBlocks({ listing }: { listing: ResellListing }) {
  const groups = [{ icon: ShieldCheck, title: "Due Diligence · 購買前查核", items: listing.documents }, { icon: MapPin, title: "Transport · 交通條件", items: listing.transport }, { icon: Home, title: "Lifestyle · 生活機能", items: listing.lifestyle }];
  return <section className="grid gap-5 lg:grid-cols-3">{groups.map((group) => { const Icon = group.icon; return <div key={group.title} className="border border-border bg-background p-6"><Icon className="text-brand-forest" size={24} /><h3 className="mt-4 whitespace-pre-line font-serif-tc text-xl leading-relaxed text-brand-ink">{bilingual(group.title)}</h3><div className="mt-5 space-y-3">{group.items.map((item) => <div key={item} className="flex gap-3 text-sm leading-loose text-foreground/70"><CheckCircle2 className="mt-1 shrink-0 text-brand-clay" size={16} /><span className="whitespace-pre-line">{bilingual(item)}</span></div>)}</div></div>; })}</section>;
}

function ResellProcess() {
  const steps = [["01", "Viewing · 預約看屋", "Confirm viewing time, room condition and included furniture.\n確認看屋時間、房況與隨屋家具。"], ["02", "Document Check · 文件查核", "Check title deed, owner identity, foreign quota and juristic office records.\n確認權狀、屋主身分、外國人額度與法人辦公室紀錄。"], ["03", "Offer · 出價議價", "Write price, deposit, transfer fee 50/50 and included appliance list clearly.\n清楚寫明價格、訂金、過戶費 50/50 與家電清單。"], ["04", "Transfer · 過戶交屋", "Coordinate Land Office transfer, payment, keys and utility handover.\n協調土地廳過戶、付款、鑰匙與水電交接。"]];
  return <section className="border border-border bg-background p-6 md:p-8"><p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Buying Process</p><h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">中古房購買流程</h3><div className="mt-7 grid gap-px bg-border md:grid-cols-4">{steps.map(([number, title, body]) => <div key={number} className="bg-brand-cream/35 p-5"><p className="font-display text-3xl text-brand-clay">{number}</p><h4 className="mt-4 whitespace-pre-line font-serif-tc text-lg leading-relaxed text-brand-ink">{bilingual(title)}</h4><p className="mt-3 whitespace-pre-line text-sm leading-loose text-foreground/65">{bilingual(body)}</p></div>)}</div></section>;
}

export function ResellSectionV2() {
  const [query, setQuery] = useState("");
  const [selectedName, setSelectedName] = useState(resellListings[0].name);
  const filtered = useMemo(() => { const normalized = query.trim().toLowerCase(); if (!normalized) return resellListings; return resellListings.filter((listing) => `${listing.name} ${listing.location} ${listing.summary} ${listing.thaiSummary}`.toLowerCase().includes(normalized)); }, [query]);
  const selected = resellListings.find((listing) => listing.name === selectedName) || filtered[0] || resellListings[0];
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selected.mapQuery)}&output=embed`;

  return <main className="min-h-screen bg-background pt-20 text-foreground font-sans"><section className="bg-brand-cream py-24 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">Resell · 中古房</p><h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">Wyne by Sansiri resale near BTS Phra Khanong.</h1></div><div className="lg:col-span-5"><p className="text-base leading-relaxed text-foreground/70">A ready 1-bedroom resale unit with garden view, full furniture and appliance package, positioned for self-use or rental planning.</p><p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">一房 30 平方米，7 樓花園景觀，家具家電齊全，適合自住或出租規劃。</p></div></div></section><section className="py-14 md:py-20"><div className="mx-auto max-w-7xl px-6 md:px-10"><div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Available Collection · 可售物件</p><h2 className="mt-3 font-display text-4xl text-brand-ink">Resell Listings</h2></div><label className="flex w-full items-center gap-3 border border-border bg-background px-4 py-3 md:max-w-sm"><Search size={18} className="text-brand-clay" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search area or project" className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40" /></label></div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{filtered.map((listing) => <ListingCard key={listing.name} listing={listing} active={selected.name === listing.name} onSelect={() => setSelectedName(listing.name)} />)}</div><section className="mt-12 space-y-6 scroll-mt-24" id="selected-resell"><DetailHero listing={selected} /><Snapshot listing={selected} /><PhotoGallery listing={selected} /><AdvisoryBlocks listing={selected} /><section className="overflow-hidden border border-border bg-background"><div className="grid lg:grid-cols-2"><div className="p-6 md:p-8"><Building2 className="text-brand-forest" size={28} /><h3 className="mt-4 font-serif-tc text-2xl text-brand-ink">位置與區域判斷</h3><p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(selected.address)}</p><div className="mt-6 flex flex-wrap gap-3"><a href={lineUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white"><MessageCircle size={16} />LINE</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream"><MessageCircle size={16} />WhatsApp</a></div></div><iframe title={`${selected.name} map`} src={mapSrc} className="min-h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section><ResellProcess /></section></div></section></main>;
}
