import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import wyneResellImage from "@/assets/resell/wyne-by-sansiri.jpg";
import okaHausResellImage from "@/assets/resell/oka-haus.jpg";
import siamese42ResellImage from "@/assets/resell/siamese-exclusive-42.jpg";

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

const lineAddUrl = "https://line.me/R/ti/p/@256ttfky";
const whatsAppUrl = "https://wa.me/66985973849";
const driveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

const services = [
  { n: "01", en: "Property Sales", tc: "新案銷售", desc: "Curated access to Thailand's premium new developments." },
  { n: "02", en: "Resale Homes", tc: "二手買賣", desc: "Expert negotiation for the secondary market." },
  { n: "03", en: "Management", tc: "房屋代管", desc: "Complete care for overseas owners." },
  { n: "04", en: "Investment", tc: "投資顧問", desc: "Yield-focused, data-driven advisory." },
  { n: "05", en: "After-Sales", tc: "售後支援", desc: "Long-term local guidance, beyond the signature." },
  { n: "06", en: "Renovation & Maintenance", tc: "裝潢翻新及維修房源", desc: "Renovation planning, repair coordination and furnishing support for owners." },
];

const storyPromise = "Every Home Has a Story. Every Story Deserves Someone You Can Trust.\n每一個家都有故事，而每一段故事，都值得一位值得信賴的夥伴。";

const journeyStories = [
  {
    id: "jason",
    n: "01",
    name: "Jason",
    title: "為了孩子，選擇曼谷",
    subtitle: "A new school, a new rhythm, a new family life.",
    location: "Ekkamai · Thong Lo · Phrom Phong",
    image: "https://source.unsplash.com/1200x900/?bangkok,family,school,home",
    quote: "如果每天都能在這裡上學就好了。",
    paragraphs: [
      "35 歲的 Jason 和太太原本住在台北，經營自己的公司，生活穩定，卻始終覺得孩子的成長環境可以有更多選擇。一次家庭旅行來到曼谷後，他們參觀了幾所國際學校，也走訪了 Ekkamai、Thong Lo 和 Phrom Phong 一帶。孩子一句簡單的話，深深留在他心裡。",
      "很多仲介介紹的是房價、坪數和投資報酬，但我們花了一整天陪他們走學校、搭 BTS、逛超市、體驗生活。我們相信，真正適合孩子的，不只是學校，而是每天都能從容地一起吃早餐、一起回家的生活。",
      "如今，他們一家已經在曼谷展開新的生活。每年看到孩子開心穿著校服的照片，我們都提醒自己，我們成交的不是一間房，而是一個家庭未來十幾年的幸福。",
    ],
  },
  {
    id: "david",
    n: "02",
    name: "David",
    title: "退休，不是人生的終點",
    subtitle: "A quieter chapter, with more life in every day.",
    location: "Sathorn · Silom · Riverside",
    image: "https://source.unsplash.com/1200x900/?bangkok,balcony,sunset,coffee",
    quote: "你們沒有急著賣房，而是真的陪我找到想過的人生。",
    paragraphs: [
      "58 歲的 David，在台灣努力工作了三十多年。退休後，他沒有急著享受，而是開始思考：人生還有沒有另一種可能？",
      "他不喜歡太安靜的退休生活，也不想每天待在家。他希望住在一個早上可以喝咖啡、下午散步、晚上和朋友聚餐的地方。我們陪著他走遍 Sathorn、Silom 和 Riverside，最後他站在 Sathorn 一棟公寓的陽台，看著夕陽灑在曼谷的天際線，只輕輕說了一句：就是這裡。",
      "現在的他，每天固定到熟悉的咖啡店，看書、健身、認識新朋友，生活比以前更充實。後來他也把朋友介紹給我們，因為他感受到的不是推銷，而是被理解。",
    ],
  },
  {
    id: "kevin",
    n: "03",
    name: "Kevin",
    title: "第二個家，不只是投資",
    subtitle: "Not a yield chart, but a place to breathe.",
    location: "Thong Lo · Ekkamai · Asok",
    image: "https://source.unsplash.com/1200x900/?bangkok,apartment,cafe,lifestyle",
    quote: "我不是來投資泰國，我只是找到另一個讓自己放鬆生活的地方。",
    paragraphs: [
      "香港創業家 Kevin 幾乎每個月都會飛到曼谷工作。以前，他總是住飯店，直到有一天他發現，一年有超過一百五十天都待在曼谷。",
      "他開始問自己：如果我這麼喜歡這座城市，為什麼不擁有一個真正屬於自己的家？我們沒有急著帶他看最新建案，而是陪他慢慢認識 Thong Lo、Ekkamai、Asok 不同街區的生活氛圍。",
      "他喜歡早晨咖啡香、下班後步行回家的感覺，也喜歡每個週末都能發現新的小店。最後，他選擇了一間不是投資報酬率最高，卻最符合自己生活方式的房子。",
    ],
  },
  {
    id: "emily",
    n: "04",
    name: "Emily",
    title: "有人出租，卻沒有人照顧",
    subtitle: "Management begins when someone notices the details.",
    location: "Bangkok Investment Home",
    image: "https://source.unsplash.com/1200x900/?condo,cleaning,interior,maintenance",
    quote: "我不是怕花錢，而是害怕沒有人真的替我照顧我的房子。",
    paragraphs: [
      "Emily 五年前在曼谷買了一間投資公寓，原本交給當地代管公司管理。每個月都有收到租金，她一直以為房子一切正常。",
      "直到租客退租，她親自飛來曼谷。一打開房門，映入眼簾的是發霉的牆壁、漏水的冷氣、受損的家具，甚至房子已經空置了好幾個月，卻從來沒有人主動通知她。",
      "後來，她找到我們。我們重新整理房屋、安排清潔、維修設備、重新拍攝出租照片，並建立固定巡房和照片回報制度。每一次看房、每一次維修、每一次租客入住，她都能第一時間收到完整報告。",
    ],
  },
  {
    id: "michael",
    n: "05",
    name: "Michael",
    title: "真正管理的，是信任",
    subtitle: "A home can be rented out, yet still be unseen.",
    location: "Bangkok Property Care",
    image: "https://source.unsplash.com/1200x900/?apartment,inspection,maintenance,home",
    quote: "以前，我只是擁有一間房子；現在，我擁有一群值得信任的人。",
    paragraphs: [
      "Michael 因為工作長期住在台灣，一年只有一兩次機會飛來曼谷。他一直相信，只要房子租得出去，就代表管理沒有問題。",
      "直到有一次，他臨時來檢查房子，才發現冷氣早已多年沒有保養，陽台堆滿雜物，浴室發霉，家具也因長期缺乏維護而逐漸損壞。原來，房子一直有人住，卻沒有人真正關心它的狀況。",
      "把房子交給我們後，我們安排固定巡房、設備保養、深度清潔、租客關懷，以及每月照片和影片回報。即使遠在台灣，他也能隨時知道房子的最新狀況。對我們來說，房屋管理從來不只是維修與出租，而是替每一位屋主守護他們在曼谷最重要的資產。",
    ],
  },
];

const rentalPrinciples = [
  {
    en: "Trusted Professional Service",
    tc: "專業可靠的服務",
    desc: "Clear support from property search, viewing and negotiation to lease terms and handover.",
  },
  {
    en: "Customer Focused",
    tc: "以客戶為中心",
    desc: "We match each property to your lifestyle, business needs and investment purpose.",
  },
  {
    en: "Local Expertise You Can Rely On",
    tc: "在地專業，值得信賴",
    desc: "Neighborhood insight across Bangkok and Thailand helps you choose with confidence.",
  },
  {
    en: "International Clients Welcome",
    tc: "歡迎國際客戶",
    desc: "Bilingual communication and practical guidance for overseas tenants and investors.",
  },
];

const rentalConnectivity = [
  { en: "BTS Connectivity", tc: "BTS 捷運連接" },
  { en: "MRT Accessibility", tc: "MRT 地鐵連接" },
  { en: "Walkable Location", tc: "步行可達的便利生活圈" },
];

const rentalCategories = [
  { en: "Retail Shops", tc: "零售店舖" },
  { en: "Commercial Spaces", tc: "商業空間" },
  { en: "Offices", tc: "辦公室" },
  { en: "Office Buildings", tc: "辦公大樓" },
  { en: "Hotels", tc: "飯店" },
  { en: "Apartments", tc: "宿舍 / 公寓" },
  { en: "Residential Homes", tc: "住宅" },
  { en: "Factories & Warehouses", tc: "廠房 / 倉庫" },
  { en: "Residential Land", tc: "住宅用地" },
  { en: "Commercial Land", tc: "商業用地" },
  { en: "Industrial Land", tc: "工業用地" },
];

const properties = [
  {
    img: "https://www.shangherealestate.com/wp-content/uploads/2026/06/flo-by-sansiri-1.jpg",
    href: "/presell",
    location: "Khlong San / Chao Phraya",
    locationTc: "空訕 / 昭披耶河岸",
    name: "FLO by Sansiri",
    price: "Pre-sale",
    beds: "1-2 BEDROOMS",
    size: "RIVERSIDE",
    tag: "PreSell",
  },
  {
    img: driveImage("1AL9VvmNKpz3j0pfUSNJmVYRiypmYdYqh"),
    href: "/presell",
    location: "Rama 4 / Asoke",
    locationTc: "拉瑪四 / 阿索克",
    name: "Life Rama 4 - Asoke",
    price: "PreSell / New Home",
    beds: "1-2 BEDROOMS",
    size: "CBD FRINGE",
    tag: "PreSell",
  },
  {
    img: driveImage("1qseLwXyGSlASj_jmLBhX6FoyotQdfOFF"),
    href: "/presell",
    location: "Sukhumvit 93 / Bang Chak",
    locationTc: "素坤逸 93 / Bang Chak",
    name: "Goodday Sukhumvit 93",
    price: "PreSell / New Home",
    beds: "1 BEDROOM+",
    size: "LOW-RISE",
    tag: "PreSell",
  },
  {
    img: driveImage("1nulkXgQomOLQ9-lfCULSDTIZawCAgD5v"),
    href: "/presell",
    location: "Phra Khanong / Rama 4",
    locationTc: "帕卡農 / 拉瑪四",
    name: "Ideo Sukhumvit Rama 4",
    price: "PreSell / New Home",
    beds: "STUDIO-2 BED",
    size: "HIGH-RISE",
    tag: "PreSell",
  },
  {
    img: driveImage("1QWawt34GCJ38OjqZ6ikJGNIIHPiW3kL8"),
    href: "/presell",
    location: "Rama 4 / Phra Khanong",
    locationTc: "拉瑪四 / 帕卡農",
    name: "Aspire Sukhumvit - Rama 4",
    price: "Ready Project",
    beds: "STUDIO-2 BED",
    size: "38 STOREYS",
    tag: "PreSell",
  },
  {
    img: driveImage("13xuj7b6diCUNQYfiroRv4ugHQ4jvxXO-"),
    href: "/presell",
    location: "Thonglor / Sukhumvit 38",
    locationTc: "通羅 / 素坤逸 38",
    name: "The Residences 38",
    price: "Ultra Luxury",
    beds: "1-3 BEDROOMS",
    size: "PRIVATE RESIDENCE",
    tag: "PreSell",
  },
  {
    img: driveImage("1g5UKQwklHZmd1S4Gju3LPKRmUM01X4Jr"),
    href: "/presell",
    location: "Ekkamai 10-12 / Sukhumvit 63",
    locationTc: "Ekkamai 10-12 / 素坤逸 63",
    name: "XT 10 Ekkamai",
    price: "Pre-sale",
    beds: "1-3 BEDROOMS",
    size: "933 UNITS",
    tag: "PreSell",
  },
  {
    img: driveImage("1TGRyRCT6TVXVWSuTCsIEXC9xCeGYHi58"),
    href: "/presell",
    location: "Thonglor / Sukhumvit 38",
    locationTc: "通羅 / 素坤逸 38",
    name: "Porsche Design Tower Bangkok",
    price: "Branded Residence",
    beds: "DUPLEX / VILLA",
    size: "22 RESIDENCES",
    tag: "PreSell",
  },
  {
    img: driveImage("1IP1Hz0f82-FDRZp97bGw6qrEOPgse7k8"),
    href: "/presell",
    location: "Rama 4 / Khlong Toei",
    locationTc: "拉瑪四 / Khlong Toei",
    name: "COCO PARC",
    price: "Ready Project",
    beds: "STUDIO-3 BED",
    size: "PARK FRONT",
    tag: "PreSell",
  },
  {
    img: wyneResellImage,
    href: "/resell",
    location: "Phra Khanong / Sukhumvit",
    locationTc: "帕卡農 / 素坤逸",
    name: "Wyne by Sansiri",
    price: "3.35M THB",
    beds: "1 BEDROOM",
    size: "30 SQ.M.",
    tag: "Resell",
  },
  {
    img: okaHausResellImage,
    href: "/resell",
    location: "Sukhumvit 36 / Rama 4",
    locationTc: "素坤逸 36 / Rama 4",
    name: "OKA HAUS Sukhumvit 36",
    price: "6.90M THB",
    beds: "2 BEDROOMS",
    size: "50 SQ.M.",
    tag: "Resell",
  },
  {
    img: siamese42ResellImage,
    href: "/resell",
    location: "Sukhumvit 42 / Ekkamai",
    locationTc: "素坤逸 42 / Ekkamai",
    name: "Siamese Exclusive Sukhumvit 42",
    price: "40.00M THB",
    beds: "4 BEDROOMS",
    size: "152 SQ.M.",
    tag: "Resell",
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
  const [selectedStoryId, setSelectedStoryId] = useState(journeyStories[0].id);
  const totalPages = Math.ceil(properties.length / PAGE_SIZE);
  const selectedStory = useMemo(
    () => journeyStories.find((story) => story.id === selectedStoryId) || journeyStories[0],
    [selectedStoryId],
  );
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
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex text-[11px] uppercase tracking-[0.25em] text-brand-forest font-medium">
              EN / 繁中
            </button>
            <a
              href={lineAddUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Add KHANTHAROS PROPERTY on LINE"
              className="inline-flex h-10 items-center justify-center bg-[#06C755] px-5 text-[11px] uppercase tracking-[0.22em] font-semibold text-white transition-colors hover:bg-[#05b34d]"
            >
              LINE
            </a>
          </div>
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

      {/* Client Journey */}
      <section id="client-journey" className="scroll-mt-24 bg-brand-cream py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay font-medium block mb-5">
                Bangkok Stories · 曼谷故事
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-brand-ink tracking-tight leading-[1.05] text-balance">
                Client Journey
              </h2>
              <p className="mt-5 font-serif-tc text-xl md:text-2xl text-brand-forest">
                每一位客戶尋找的，都不只是一間房子。
              </p>
            </div>
            <p className="lg:col-span-5 text-sm md:text-base text-foreground/65 leading-loose">
              These are fictional but familiar stories inspired by the questions overseas clients often ask before choosing a life, a second home, or a trusted team in Bangkok.
              <span className="mt-2 block font-serif-tc">以下人物為虛構故事，但都來自海外買家與屋主真實會遇到的心情與選擇。</span>
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-5">
            {journeyStories.map((story) => (
              <button
                key={story.id}
                type="button"
                onClick={() => setSelectedStoryId(story.id)}
                className={`group bg-background text-left transition-colors ${selectedStory.id === story.id ? "bg-brand-forest text-brand-cream" : "hover:bg-brand-cream"}`}
              >
                <img src={story.image} alt={`${story.name} Bangkok story`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <p className={`font-display text-lg ${selectedStory.id === story.id ? "text-brand-sand" : "text-brand-clay"}`}>{story.n}</p>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{story.name}</h3>
                  <p className={`mt-2 font-serif-tc text-sm leading-relaxed ${selectedStory.id === story.id ? "text-brand-cream/80" : "text-brand-forest"}`}>{story.title}</p>
                </div>
              </button>
            ))}
          </div>

          <article className="mt-12 overflow-hidden border border-border bg-background">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-5 bg-brand-ink">
                <img src={selectedStory.image} alt={`${selectedStory.name} client journey`} className="h-full min-h-[420px] w-full object-cover opacity-90" />
              </div>
              <div className="lg:col-span-7 p-7 md:p-12">
                <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">
                  <span>{selectedStory.n}</span>
                  <span>{selectedStory.location}</span>
                </div>
                <h3 className="mt-6 font-display text-4xl md:text-5xl text-brand-ink leading-tight">
                  {selectedStory.name}｜{selectedStory.title}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-brand-forest/70">
                  {selectedStory.subtitle}
                </p>
                <blockquote className="mt-8 border-l-2 border-brand-clay pl-6 font-serif-tc text-xl leading-loose text-brand-forest">
                  「{selectedStory.quote}」
                </blockquote>
                <div className="mt-8 space-y-5 font-serif-tc text-base leading-loose text-foreground/75">
                  {selectedStory.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-10 whitespace-pre-line border-t border-border pt-7 font-display text-2xl leading-relaxed text-brand-ink">
                  {storyPromise}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

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
      <section id="services" className="scroll-mt-24 py-32 bg-brand-cream">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
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

      {/* Rental */}
      <section id="rental" className="scroll-mt-24 bg-background py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay font-medium block mb-5">
                Rental Advisory · 出租服務
              </span>
              <h3 className="font-display text-4xl md:text-6xl text-brand-ink tracking-tight leading-[1.05] text-balance">
                Find the Right Property
              </h3>
              <p className="mt-3 font-serif-tc text-2xl md:text-3xl text-brand-forest tracking-wide">
                找到合適的物業
              </p>
              <p className="mt-8 max-w-2xl text-base text-foreground/70 leading-relaxed">
                For living, business & investment in Thailand. We help clients rent residential,
                commercial and investment properties with local market insight and clear bilingual support.
              </p>
              <p className="mt-4 max-w-2xl font-serif-tc text-base text-foreground/70 leading-loose">
                為生活、商業與投資在泰國尋找合適物業。從住宅、公寓、店鋪、辦公室到土地與倉儲，
                我們以在地經驗與中英文溝通，協助客戶快速篩選並安心決策。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={lineAddUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-[#06C755] px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold text-white transition-colors hover:bg-[#05b34d]"
                >
                  LINE · 立即諮詢
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-brand-forest/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-forest transition-colors hover:bg-brand-forest hover:text-brand-cream"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-brand-ink">
                <img
                  src={property2}
                  alt="Bangkok property near transit and lifestyle conveniences"
                  width={900}
                  height={1120}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover opacity-85"
                />
                <div className="absolute inset-x-0 bottom-0 bg-brand-ink/88 p-5 text-brand-cream backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-sand mb-4">
                    Transit Priority · 交通生活圈
                  </p>
                  <div className="grid gap-3">
                    {rentalConnectivity.map((item) => (
                      <div key={item.en} className="flex items-center justify-between border-t border-brand-cream/15 pt-3">
                        <span className="text-xs uppercase tracking-[0.18em]">{item.en}</span>
                        <span className="font-serif-tc text-sm text-brand-sand">{item.tc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {rentalPrinciples.map((item, index) => (
              <div key={item.en} className="bg-background p-8 md:p-9">
                <div className="font-display text-xl text-brand-clay mb-8">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="font-display text-2xl text-brand-ink leading-tight">{item.en}</h4>
                <p className="mt-2 font-serif-tc text-base text-brand-forest">{item.tc}</p>
                <p className="mt-5 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.35em] uppercase text-brand-clay font-medium block mb-4">
                Property Types · 物件類型
              </span>
              <h4 className="font-display text-3xl md:text-4xl text-brand-ink leading-tight text-balance">
                Residential, commercial and land leasing options.
              </h4>
              <p className="mt-5 font-serif-tc text-foreground/65 leading-loose">
                依照生活、商業營運與投資需求，協助媒合合適的出租物件與區域條件。
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
              {rentalCategories.map((item) => (
                <div key={item.en} className="bg-brand-cream px-5 py-6 min-h-28 flex flex-col justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-brand-ink leading-relaxed">
                    {item.en}
                  </span>
                  <span className="mt-4 font-serif-tc text-sm text-brand-forest">{item.tc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { img: property1, en: "Living", tc: "居住生活" },
              { img: property2, en: "Business", tc: "商業營運" },
              { img: property3, en: "Investment", tc: "投資配置" },
            ].map((item) => (
              <div key={item.en} className="relative overflow-hidden bg-brand-ink">
                <img
                  src={item.img}
                  alt={`${item.en} rental property in Thailand`}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover opacity-80 transition-transform duration-[900ms] hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-brand-ink/85 to-transparent text-brand-cream">
                  <p className="font-display text-2xl">{item.en}</p>
                  <p className="font-serif-tc text-sm text-brand-sand">{item.tc}</p>
                </div>
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
              href="/presell"
              className="hidden md:inline-block text-[11px] uppercase tracking-[0.25em] border-b border-brand-clay/40 pb-1 text-brand-ink hover:text-brand-forest hover:border-brand-forest transition-colors"
            >
              View All · 探索更多
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pagedProperties.map((p) => (
              <article key={p.name} className="group">
                <a href={p.href} className="block">
                  <div className="overflow-hidden relative bg-brand-cream/50">
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
                    <div className="flex justify-between items-baseline gap-4 mt-2">
                      <h4 className="font-display text-2xl text-brand-ink">{p.name}</h4>
                      <p className="font-display text-lg text-brand-forest text-right">{p.price}</p>
                    </div>
                    <div className="flex gap-6 mt-4 text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                      <span>{p.beds}</span>
                      <span>{p.size}</span>
                    </div>
                  </div>
                </a>
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
                <a
                  href={lineAddUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 border border-brand-cream/20 text-[10px] uppercase tracking-[0.25em] font-medium text-brand-cream/85 hover:bg-brand-cream hover:text-brand-ink transition-all"
                >
                  LINE
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 border border-brand-cream/20 text-[10px] uppercase tracking-[0.25em] font-medium text-brand-cream/85 hover:bg-brand-cream hover:text-brand-ink transition-all"
                >
                  WhatsApp
                </a>
                {["WeChat", "Messenger"].map((c) => (
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
