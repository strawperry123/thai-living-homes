import { useMemo, useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";

const images = [property1, property2, property3];

type Project = {
  name: string;
  area: string;
  type: string;
  developer: string;
  status: string;
  ownership: string;
  size: string;
  address: string;
  mapQuery: string;
  description: string;
  highlights: string[];
  transport: string[];
  lifestyle: string[];
  floorPlans: string[];
  unitLayouts: string[];
};

const bangkokProjects: Project[] = [
  {
    name: "FLO by Sansiri",
    area: "Bangkok Riverside",
    type: "New Launch Condominium",
    developer: "Sansiri",
    status: "New launch / presale",
    ownership: "Freehold condominium",
    size: "Studio, 1-bedroom and family layouts, subject to availability",
    address: "Bangkok Riverside, Bangkok",
    mapQuery: "FLO by Sansiri Bangkok",
    description: "A riverside-focused residence by Sansiri, planned for buyers who want Bangkok city access with a softer residential atmosphere near the Chao Phraya lifestyle corridor.",
    highlights: ["Riverside lifestyle positioning", "Sansiri developer profile", "Suitable for lifestyle use and rental planning"],
    transport: ["Connects to Bangkok riverside roads and central business areas", "Suitable for buyers who want river lifestyle with city access", "Future riverside retail and hotel growth supports the district"],
    lifestyle: ["Riverside restaurants and hospitality", "Retail and community lifestyle destinations", "Calmer residential feel compared with inner Sukhumvit"],
    floorPlans: ["Typical residential floor plan", "Amenity floor concept", "Parking and lobby circulation plan"],
    unitLayouts: ["Studio / compact unit", "1-bedroom unit", "Larger residence layout"],
  },
  {
    name: "Life Sukhumvit - Rama 4",
    area: "Sukhumvit / Rama 4",
    type: "High-rise Condominium",
    developer: "AP Thailand",
    status: "Presale / new development",
    ownership: "Freehold condominium",
    size: "Compact city units to larger urban layouts",
    address: "Sukhumvit - Rama 4, Bangkok",
    mapQuery: "Life Sukhumvit Rama 4 Bangkok",
    description: "A city condominium around the Sukhumvit and Rama 4 corridor, designed for buyers who value transport access, business districts, and future urban growth.",
    highlights: ["Sukhumvit and Rama 4 connection", "Strong city rental catchment", "Urban lifestyle facilities"],
    transport: ["Access to Rama 4 and Sukhumvit corridors", "Convenient for CBD, Khlong Toei and Queen Sirikit Convention Centre areas", "Connects toward Thonglor, Ekkamai and Phrom Phong"],
    lifestyle: ["Close to central work and lifestyle districts", "Good fit for city professionals", "Rama 4 corridor continues to attract mixed-use development"],
    floorPlans: ["High-rise residential typical floor", "Facility floor", "Parking and entrance circulation"],
    unitLayouts: ["Studio / 1-bedroom", "1-bedroom plus", "2-bedroom city layout"],
  },
  {
    name: "Goodday Sukhumvit 93",
    area: "Sukhumvit 93",
    type: "Low-rise Condominium",
    developer: "Sansiri",
    status: "New launch / presale",
    ownership: "Freehold condominium",
    size: "Practical compact layouts",
    address: "Sukhumvit 93, Bangkok",
    mapQuery: "Goodday Sukhumvit 93 Bangkok",
    description: "A Sukhumvit 93 residence with approachable positioning, suited for buyers looking for an easy-to-understand Bangkok entry point with everyday convenience.",
    highlights: ["Sukhumvit neighborhood access", "Practical unit planning", "Good fit for first Bangkok property planning"],
    transport: ["Located in the Sukhumvit east-side residential corridor", "Access to On Nut and Bang Chak lifestyle areas", "Suitable for renters who commute along Sukhumvit"],
    lifestyle: ["Local markets, supermarkets and community retail", "Everyday residential convenience", "More approachable entry compared with prime inner Sukhumvit"],
    floorPlans: ["Low-rise typical floor", "Common area plan", "Building circulation plan"],
    unitLayouts: ["Studio unit", "1-bedroom unit", "1-bedroom plus unit"],
  },
  {
    name: "LOVE Charoen Nakhon",
    area: "Charoen Nakhon",
    type: "High-rise Condominium",
    developer: "Origin Property",
    status: "New launch / presale",
    ownership: "Freehold condominium",
    size: "City view and river-near layouts",
    address: "Charoen Nakhon, Bangkok",
    mapQuery: "LOVE Charoen Nakhon Bangkok",
    description: "A Charoen Nakhon project placed near Bangkok's expanding riverside lifestyle zone, where retail, transport, and residential demand continue to mature.",
    highlights: ["Riverside growth corridor", "Near Iconsiam lifestyle zone", "High-rise city living"],
    transport: ["Access to Charoen Nakhon and Krung Thon Buri areas", "Connects toward riverside retail and CBD routes", "Suitable for buyers watching riverside transformation"],
    lifestyle: ["Iconsiam and riverside hospitality", "Local food and heritage neighborhoods", "Growing mix of retail, transit and residential projects"],
    floorPlans: ["Typical tower floor", "Facility floor", "Drop-off and lobby plan"],
    unitLayouts: ["1-bedroom city view", "1-bedroom plus", "2-bedroom river-near layout"],
  },
  {
    name: "Ideo Sukhumvit Rama 4",
    area: "Sukhumvit / Rama 4",
    type: "Condominium",
    developer: "Ananda Development",
    status: "New development",
    ownership: "Freehold condominium",
    size: "Urban one-bedroom and two-bedroom planning",
    address: "Sukhumvit Rama 4, Bangkok",
    mapQuery: "Ideo Sukhumvit Rama 4 Bangkok",
    description: "A Rama 4 and Sukhumvit city project with Ananda's transit-oriented positioning, suitable for buyers who prioritize connectivity and rental depth.",
    highlights: ["Transit-oriented positioning", "Rama 4 urban growth", "Designed for city professionals"],
    transport: ["Connects to Sukhumvit, Rama 4 and expressway routes", "Convenient toward Khlong Toei, Ekkamai and Queen Sirikit areas", "Suitable for renters working around Sukhumvit and CBD"],
    lifestyle: ["Urban retail and food scene", "Close to parks, offices and lifestyle malls by car", "Good city-rental fundamentals"],
    floorPlans: ["Residential floor plan", "Facility floor plan", "Building master circulation"],
    unitLayouts: ["1-bedroom", "1-bedroom plus", "2-bedroom"],
  },
  {
    name: "Aspire Sukhumvit - Rama 4",
    area: "Sukhumvit / Rama 4",
    type: "Condominium",
    developer: "AP Thailand",
    status: "New development",
    ownership: "Freehold condominium",
    size: "Efficient city layouts",
    address: "Sukhumvit Rama 4, Bangkok",
    mapQuery: "Aspire Sukhumvit Rama 4 Bangkok",
    description: "A value-focused city residence in the Sukhumvit and Rama 4 area, balancing accessibility, facilities, and investment entry price considerations.",
    highlights: ["Sukhumvit-Rama 4 location", "Efficient investment layouts", "Good rental-demand fundamentals"],
    transport: ["Access to Rama 4, Sukhumvit and central Bangkok routes", "Convenient for CBD and east-side city movement", "Suitable for tenants who want practical commute options"],
    lifestyle: ["Everyday retail and food options nearby", "Urban facilities designed for practical living", "Positioning balances price and city location"],
    floorPlans: ["Building floor plan", "Facility floor plan", "Parking and lobby plan"],
    unitLayouts: ["Studio / compact unit", "1-bedroom", "2-bedroom"],
  },
  {
    name: "The Residences 38",
    area: "Thonglor",
    type: "Luxury Residence",
    developer: "ANANDA, BTS Group and Rabbit Holdings",
    status: "Completed",
    ownership: "Freehold condominium",
    size: "1-bedroom to penthouse residences",
    address: "Sukhumvit, Khlong Toei, Bangkok 10110",
    mapQuery: "The Residences 38 Bangkok",
    description: "A limited luxury residence near BTS Thong Lo, designed around privacy, hotel-style service, and prime Sukhumvit living for high-end owner-occupiers.",
    highlights: ["Near BTS Thong Lo", "Limited private residences", "Hotel-style management concept"],
    transport: ["Walkable to BTS Thong Lo", "Quick access to Sukhumvit Road and Rama 4", "Convenient toward Phrom Phong, Ekkamai and central Bangkok"],
    lifestyle: ["Thonglor restaurants and cafes", "Close to EmQuartier and lifestyle retail", "International schools and hospitals within driving distance"],
    floorPlans: ["36-storey residential planning", "Private residence floors", "Amenity and arrival plan"],
    unitLayouts: ["1-bedroom 55-75 sqm", "2-bedroom 91-252 sqm", "Penthouse residence planning"],
  },
  {
    name: "XT 10 Ekkamai",
    area: "Ekkamai",
    type: "Condominium",
    developer: "Sansiri",
    status: "Presale / new launch",
    ownership: "Freehold condominium",
    size: "City lifestyle layouts",
    address: "Ekkamai, Bangkok",
    mapQuery: "XT 10 Ekkamai Bangkok",
    description: "An Ekkamai project positioned for a younger urban lifestyle, with access to Sukhumvit, restaurants, community malls, and tenant demand from the east-side corridor.",
    highlights: ["Ekkamai lifestyle district", "Sukhumvit east-side access", "Suitable for rental-oriented buyers"],
    transport: ["Access to Ekkamai and Sukhumvit corridors", "Convenient toward Thonglor and Phra Khanong", "Strong tenant demand from the east-side city cluster"],
    lifestyle: ["Cafes, restaurants and community malls", "Ekkamai bus terminal and BTS area access", "Young professional lifestyle positioning"],
    floorPlans: ["Typical tower floor", "Lifestyle amenity floor", "Arrival and lobby plan"],
    unitLayouts: ["Studio", "1-bedroom", "2-bedroom"],
  },
  {
    name: "Porsche Design Tower Bangkok",
    area: "Thonglor",
    type: "Ultra Luxury Branded Residence",
    developer: "Ananda Development and Porsche Design",
    status: "Planned ultra-luxury development",
    ownership: "Luxury residential ownership, subject to sales terms",
    size: "Large sky villa residences",
    address: "Thonglor, Bangkok",
    mapQuery: "Porsche Design Tower Bangkok Thonglor",
    description: "A rare branded luxury tower in Thonglor, created for ultra-high-end buyers seeking privacy, design identity, and collectible real estate in Bangkok.",
    highlights: ["First Porsche Design Tower in Asia", "Thonglor luxury address", "Sky villa concept"],
    transport: ["Positioned in Bangkok's Thonglor luxury district", "Access to Sukhumvit, Ekkamai and Phrom Phong", "Designed for private high-end city living"],
    lifestyle: ["Branded residence experience", "Private sky villa positioning", "High-end dining, clubs and lifestyle nearby"],
    floorPlans: ["Sky villa floor plan", "Passion space / private garage concept", "Private amenity and service planning"],
    unitLayouts: ["Sky villa residence", "Duplex / multi-level residence", "Penthouse concept"],
  },
  {
    name: "COCO PARC",
    area: "Rama 4 / Lumpini",
    type: "Luxury Condominium",
    developer: "Ananda Development and Dusit International",
    status: "Completed / active sale",
    ownership: "Freehold condominium",
    size: "Urban luxury layouts",
    address: "Rama 4, Bangkok",
    mapQuery: "COCO PARC Bangkok",
    description: "A luxury residence close to Lumpini and Rama 4, positioned for buyers who want direct access to central business, green space, and established city infrastructure.",
    highlights: ["Near Lumpini and Rama 4", "Central city access", "Luxury city facilities"],
    transport: ["Close to MRT and Rama 4 corridor", "Convenient toward Sathorn, Silom and Sukhumvit", "Easy access to major office districts"],
    lifestyle: ["Lumpini park lifestyle", "Central business district convenience", "Luxury facilities and city services"],
    floorPlans: ["Tower floor plan", "Facility floor", "Arrival and parking plan"],
    unitLayouts: ["1-bedroom", "2-bedroom", "Large city residence"],
  },
  {
    name: "Supalai Icon Sathorn",
    area: "Sathorn",
    type: "Mixed-use Residence",
    developer: "Supalai",
    status: "Completed / active sale",
    ownership: "Freehold condominium",
    size: "City residence layouts",
    address: "Sathorn, Bangkok",
    mapQuery: "Supalai Icon Sathorn Bangkok",
    description: "A large-scale Sathorn address with mixed-use convenience, suited for buyers who value a recognized CBD location and established developer profile.",
    highlights: ["Sathorn CBD location", "Mixed-use convenience", "Recognized Thai developer"],
    transport: ["Access to Sathorn and Silom business districts", "Connects to Rama 4 and central routes", "Suitable for executive tenants and city residents"],
    lifestyle: ["CBD dining and retail", "Office district demand", "Large-scale mixed-use environment"],
    floorPlans: ["Mixed-use master plan", "Residential tower floor", "Amenity floor"],
    unitLayouts: ["1-bedroom", "2-bedroom", "Larger city residence"],
  },
  {
    name: "Sansiri Via 34",
    area: "Sukhumvit 34",
    type: "Low-rise Luxury Condominium",
    developer: "Sansiri",
    status: "Ready / resale and active opportunities",
    ownership: "Freehold condominium",
    size: "Private city residence layouts",
    address: "Sukhumvit 34, Bangkok",
    mapQuery: "Sansiri Via 34 Bangkok",
    description: "A private Sukhumvit 34 residence in a quieter pocket near Thonglor and Phrom Phong, suitable for buyers who prefer calm city living over high-density towers.",
    highlights: ["Sukhumvit 34 address", "Private residential atmosphere", "Near Thonglor and Phrom Phong"],
    transport: ["Access to Thonglor and Phrom Phong", "Convenient toward Sukhumvit and Rama 4", "Quiet residential pocket with city access"],
    lifestyle: ["Boutique residential character", "Nearby restaurants and lifestyle malls", "Good fit for self-use and long-stay tenants"],
    floorPlans: ["Low-rise residential floor", "Common area plan", "Parking and arrival plan"],
    unitLayouts: ["1-bedroom", "2-bedroom", "Private residence layouts"],
  },
];

const phuketProjects: Project[] = [
  {
    name: "Banyan Tree Beach Residences Oceanus",
    area: "Bang Tao / Laguna Phuket",
    type: "Beach Residence",
    developer: "Banyan Group",
    status: "Luxury resort residence",
    ownership: "Resort residence ownership, subject to project terms",
    size: "Large beach-oriented residence layouts",
    address: "Bang Tao, Phuket",
    mapQuery: "Banyan Tree Beach Residences Oceanus Phuket",
    description: "A premium beach residence concept under the Banyan Tree lifestyle umbrella, designed for buyers seeking resort living, privacy, and long-term Phuket asset value.",
    highlights: ["Bang Tao resort lifestyle", "Banyan Tree brand environment", "Beach residence positioning"],
    transport: ["Bang Tao and Laguna Phuket access", "Convenient toward beach clubs and resort districts", "Reach Phuket International Airport by car"],
    lifestyle: ["Beachfront and resort-style living", "Golf, wellness and hospitality ecosystem", "Strong holiday-home positioning"],
    floorPlans: ["Beach residence master plan", "Residential floor plan", "Resort amenity plan"],
    unitLayouts: ["Large residence", "Beach-oriented layout", "Private resort home planning"],
  },
  {
    name: "The Cube Amaze Phuket - Srisoonthorn",
    area: "Srisoonthorn, Thalang",
    type: "Low-rise Resort Condominium",
    developer: "Soken Development Group",
    status: "New project",
    ownership: "Condominium ownership, subject to quota availability",
    size: "S, M and L room plans",
    address: "Srisoonthorn Road, Thalang, Phuket",
    mapQuery: "The Cube Amaze Phuket Srisoonthorn",
    description: "A 7-storey low-rise resort condominium in Srisoonthorn, positioned for practical Phuket living with resort-style common areas and central island connectivity.",
    highlights: ["Srisoonthorn Road location", "2 buildings, 7 storeys", "386-unit project planning"],
    transport: ["Close to main road connection", "Convenient toward Thalang, Boat Avenue and Bang Tao", "Good central access for island living"],
    lifestyle: ["Low-rise resort-style design", "Functional common areas", "Practical entry point for Phuket property"],
    floorPlans: ["Master plan", "Building A / B floor plan", "Common area plan"],
    unitLayouts: ["S room plan", "M room plan", "L room plan"],
  },
  {
    name: "The Title Cielo Rawai",
    area: "Rawai",
    type: "Resort Condominium",
    developer: "Rhom Bho Property",
    status: "Ready / active sale focus",
    ownership: "Condominium ownership, subject to quota availability",
    size: "Resort-style layouts for holiday and rental use",
    address: "Rawai, Phuket",
    mapQuery: "The Title Cielo Rawai Phuket",
    description: "A Rawai-focused resort residence suitable for buyers who want a southern Phuket lifestyle, beach access, and a product that can serve both personal use and rental planning.",
    highlights: ["Rawai lifestyle location", "Main active-sale Phuket focus", "Resort-style condominium concept"],
    transport: ["Access to Rawai and Nai Harn lifestyle areas", "Convenient for southern Phuket beaches", "Suitable for holiday and long-stay rental demand"],
    lifestyle: ["Rawai seafood and beach lifestyle", "Nai Harn, Promthep and southern Phuket attractions", "Relaxed residential resort atmosphere"],
    floorPlans: ["Resort master plan", "Residential floor plan", "Common facility plan"],
    unitLayouts: ["Studio / 1-bedroom", "1-bedroom plus", "2-bedroom resort layout"],
  },
  {
    name: "KATA BELLO (The Title KataBello)",
    area: "Kata",
    type: "Resort Residence",
    developer: "Rhom Bho Property",
    status: "New / active project information",
    ownership: "Condominium ownership, subject to quota availability",
    size: "Holiday residence layouts",
    address: "Kata, Phuket",
    mapQuery: "The Title KataBello Phuket",
    description: "A Kata-area resort residence concept under The Title brand, suited for buyers who want a west-coast Phuket location with holiday appeal and rental potential.",
    highlights: ["Kata west-coast positioning", "The Title resort residence brand", "Lifestyle and rental-use planning"],
    transport: ["Access to Kata and Karon beaches", "Convenient toward Chalong and southern Phuket", "Appealing for west-coast holiday demand"],
    lifestyle: ["Kata beach lifestyle", "Tourism and long-stay demand", "Restaurants, cafes and resort services nearby"],
    floorPlans: ["Resort master plan", "Residential building floor", "Amenity plan"],
    unitLayouts: ["Studio / 1-bedroom", "Holiday residence layout", "Larger resort unit"],
  },
  {
    name: "The Title Heritage Bang Tao",
    area: "Bang Tao",
    type: "Resort Residence",
    developer: "Rhom Bho Property",
    status: "New / active project information",
    ownership: "Condominium ownership, subject to quota availability",
    size: "Resort-style residence layouts",
    address: "Bang Tao, Phuket",
    mapQuery: "The Title Heritage Bang Tao Phuket",
    description: "A Bang Tao residence concept designed around Phuket's established resort district, suitable for buyers prioritizing beach lifestyle, services, and long-term area growth.",
    highlights: ["Bang Tao resort district", "The Title brand environment", "Strong lifestyle and rental-demand area"],
    transport: ["Access to Bang Tao, Boat Avenue and Laguna", "Convenient toward Phuket International Airport", "Strong west-coast lifestyle corridor"],
    lifestyle: ["Beach clubs, restaurants and wellness", "Established foreign-owner and rental market", "Resort-style living environment"],
    floorPlans: ["Project master plan", "Residential floor plan", "Amenity and pool plan"],
    unitLayouts: ["Studio / 1-bedroom", "1-bedroom plus", "2-bedroom residence"],
  },
];

function PlanPreview({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-border bg-background p-5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-clay font-medium">{title}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 border border-border bg-brand-cream/40 p-3">
            <div className="h-12 w-12 shrink-0 border border-brand-clay/40 bg-background flex items-center justify-center font-display text-brand-clay">
              {String(index + 1).padStart(2, "0")}
            </div>
            <p className="font-serif-tc text-sm leading-relaxed text-foreground/70">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectAbout({ project }: { project: Project }) {
  return (
    <section className="mt-10 border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">About This Project · 關於本案</p>
      <div className="mt-5 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <h4 className="font-display text-3xl text-brand-ink leading-tight">{project.name}</h4>
          <p className="mt-5 font-serif-tc text-base leading-loose text-foreground/70">
            {project.description} KHANTHAROS 會從地段、交通、生活機能、房型規劃與未來轉售出租條件整理重點，協助客戶判斷是否符合自住、收租或資產配置需求。
          </p>
        </div>
        <div className="lg:col-span-5 grid gap-3">
          {[project.developer, project.area, project.status].map((item) => (
            <div key={item} className="border border-border bg-brand-cream/45 px-5 py-4 text-sm leading-relaxed text-brand-ink">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFaq({ project }: { project: Project }) {
  const faqs = [
    {
      question: "這個建案適合哪一類買方？",
      answer: `${project.name} 適合重視 ${project.area} 區域條件、希望比較自住舒適度與出租潛力的買方。實際是否適合，仍會依預算、持有時間與租金目標進一步評估。`,
    },
    {
      question: "產權與銷售狀態是什麼？",
      answer: `目前頁面整理的產權資訊為：${project.ownership}。建案狀態為：${project.status}。正式購買前仍需以開發商最新銷售資料與合約文件為準。`,
    },
    {
      question: "有哪些房型或格局可以參考？",
      answer: `目前整理的房型方向為：${project.size}。下方會持續補入樓層平面圖與單位格局圖，方便直接在本網站比較。`,
    },
    {
      question: "交通與生活機能如何？",
      answer: `${project.transport[0]}；生活機能方面，${project.lifestyle[0]}。我們會依客戶需求補充通勤、學校、醫院、商場與出租客群分析。`,
    },
  ];

  return (
    <section className="mt-8 border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Common Questions · 常見問題</p>
      <div className="mt-5 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border border-border bg-brand-cream/35 p-5">
            <summary className="cursor-pointer list-none font-serif-tc text-lg text-brand-ink flex items-center justify-between gap-4">
              <span>{faq.question}</span>
              <span className="text-brand-clay transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-loose text-foreground/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isActive, onSelect }: { project: Project; index: number; isActive: boolean; onSelect: () => void }) {
  return (
    <article className="group bg-background">
      <button type="button" onClick={onSelect} className="block w-full text-left">
        <div className="relative overflow-hidden">
          <img
            src={images[index % images.length]}
            alt={project.name}
            width={900}
            height={1120}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
          />
          <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium">
            {project.type}
          </div>
        </div>
        <div className={`border border-t-0 p-6 transition-colors ${isActive ? "border-brand-forest bg-brand-cream" : "border-border"}`}>
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{project.area}</p>
          <h3 className="mt-3 font-display text-2xl text-brand-ink leading-tight">{project.name}</h3>
          <p className="mt-4 font-serif-tc text-sm leading-loose text-foreground/65">
            {project.description}
          </p>
          <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand-forest font-medium">
            {isActive ? "Details Open · 詳情已展開" : "View Details · 查看詳情"}
          </div>
        </div>
      </button>
    </article>
  );
}

export function PreSellSection() {
  const [region, setRegion] = useState<"bangkok" | "phuket">("bangkok");
  const [page, setPage] = useState(1);
  const [selectedName, setSelectedName] = useState(bangkokProjects[0].name);
  const projects = region === "bangkok" ? bangkokProjects : phuketProjects;
  const pageSize = region === "bangkok" ? 6 : 5;
  const totalPages = Math.ceil(projects.length / pageSize);
  const visibleProjects = useMemo(() => projects.slice((page - 1) * pageSize, page * pageSize), [page, pageSize, projects]);
  const selectedProject = projects.find((project) => project.name === selectedName) || visibleProjects[0] || projects[0];
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selectedProject.mapQuery)}&output=embed`;

  const chooseRegion = (nextRegion: "bangkok" | "phuket") => {
    const nextProjects = nextRegion === "bangkok" ? bangkokProjects : phuketProjects;
    setRegion(nextRegion);
    setPage(1);
    setSelectedName(nextProjects[0].name);
  };

  const choosePage = (nextPage: number) => {
    const firstProject = projects[(nextPage - 1) * pageSize];
    setPage(nextPage);
    if (firstProject) {
      setSelectedName(firstProject.name);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">
              PreSell · 預售 / 新成屋
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">
              Curated new launches in Bangkok and Phuket.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-foreground/70">
              Project information is reorganized into our own advisory notes, so clients can compare every option directly on the KHANTHAROS website.
            </p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">
              建案資料整理成 KHANTHAROS 自己的顧問筆記，客戶可以直接在我們網站內比較，不需要跳到其他網站。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Project Collection · 建案列表</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-brand-ink">{region === "bangkok" ? "Bangkok" : "Phuket"}</h2>
            </div>
            <div className="flex border border-border w-full md:w-auto">
              <button
                onClick={() => chooseRegion("bangkok")}
                className={`flex-1 md:flex-none px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${region === "bangkok" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}
              >
                Bangkok
              </button>
              <button
                onClick={() => chooseRegion("phuket")}
                className={`flex-1 md:flex-none px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${region === "phuket" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}
              >
                Phuket
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={(page - 1) * pageSize + index}
                isActive={selectedProject.name === project.name}
                onSelect={() => setSelectedName(project.name)}
              />
            ))}
          </div>

          {selectedProject && (
            <section className="mt-12 border border-border bg-brand-cream p-8 md:p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Selected Project · 建案詳情</p>
                  <h3 className="mt-4 font-display text-4xl text-brand-ink leading-tight">{selectedProject.name}</h3>
                  <p className="mt-3 font-serif-tc text-xl text-brand-forest">{selectedProject.area}</p>
                  <p className="mt-6 text-sm leading-relaxed text-foreground/70">{selectedProject.description}</p>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
                  {[
                    ["Developer", selectedProject.developer],
                    ["Status", selectedProject.status],
                    ["Ownership", selectedProject.ownership],
                    ["Room Planning", selectedProject.size],
                    ["Address", selectedProject.address],
                    ["Project Type", selectedProject.type],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-background p-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-clay font-medium">{label}</p>
                      <p className="mt-3 text-sm leading-relaxed text-brand-ink">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {selectedProject.highlights.map((item) => (
                  <div key={item} className="border border-border bg-background px-5 py-4 font-serif-tc text-sm leading-loose text-foreground/70">
                    {item}
                  </div>
                ))}
              </div>

              <ProjectAbout project={selectedProject} />
              <ProjectFaq project={selectedProject} />

              <div className="mt-10 grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <PlanPreview title="Floor Plan · 樓層平面圖" items={selectedProject.floorPlans} />
                  <PlanPreview title="Unit Layout · 單位格局圖" items={selectedProject.unitLayouts} />
                </div>
                <div className="space-y-8">
                  <PlanPreview title="Transport · 交通" items={selectedProject.transport} />
                  <PlanPreview title="Lifestyle · 生活機能" items={selectedProject.lifestyle} />
                </div>
              </div>

              <div className="mt-10 overflow-hidden border border-border bg-background">
                <iframe
                  title={`${selectedProject.name} map`}
                  src={mapSrc}
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={lineUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center bg-[#06C755] px-7 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold text-white hover:bg-[#05b34d] transition-colors">
                  Ask on LINE · LINE 諮詢
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center bg-brand-forest px-7 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-cream hover:bg-brand-ink transition-colors">
                  Ask on WhatsApp · WhatsApp 諮詢
                </a>
              </div>
            </section>
          )}

          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-between border-t border-border pt-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                Page {page} of {totalPages}
                <span className="ml-3 font-serif-tc normal-case tracking-normal text-brand-clay">共 {projects.length} 個建案</span>
              </p>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => choosePage(pageNumber)}
                    className={`h-10 w-10 font-display text-sm transition-colors ${page === pageNumber ? "bg-brand-forest text-brand-cream" : "border border-border text-brand-ink hover:border-brand-forest"}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="fixed right-5 bottom-6 z-[70] flex flex-col gap-3">
        <a
          href={lineUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white shadow-lg hover:bg-[#05b34d] transition-colors"
        >
          LINE
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream shadow-lg hover:bg-brand-ink transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}
