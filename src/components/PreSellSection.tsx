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
  description: string;
  highlights: string[];
};

const bangkokProjects: Project[] = [
  {
    name: "FLO by Sansiri",
    area: "Bangkok Riverside",
    type: "New Launch Condominium",
    developer: "Sansiri",
    status: "New launch / presale",
    ownership: "Freehold condominium",
    size: "Studio to family layouts, subject to availability",
    description: "A riverside-focused new residence by Sansiri, positioned for buyers who want city access with a softer residential atmosphere near Bangkok's river lifestyle.",
    highlights: ["Riverside lifestyle positioning", "Developed by Sansiri", "Suitable for lifestyle use and long-term rental planning"],
  },
  {
    name: "Life Sukhumvit - Rama 4",
    area: "Sukhumvit / Rama 4",
    type: "High-rise Condominium",
    developer: "AP Thailand",
    status: "Presale / new development",
    ownership: "Freehold condominium",
    size: "Compact city units to larger urban layouts",
    description: "A city condominium around the Sukhumvit and Rama 4 corridor, designed for buyers who value transport access, business districts, and future urban growth.",
    highlights: ["Sukhumvit and Rama 4 connection", "Strong city rental catchment", "Urban lifestyle facilities"],
  },
  {
    name: "Goodday Sukhumvit 93",
    area: "Sukhumvit 93",
    type: "Low-rise Condominium",
    developer: "Sansiri",
    status: "New launch / presale",
    ownership: "Freehold condominium",
    size: "Practical compact layouts",
    description: "A Sukhumvit 93 residence with approachable positioning, suited for buyers looking for an easy-to-understand Bangkok entry point with everyday convenience.",
    highlights: ["Sukhumvit neighborhood access", "Practical unit planning", "Good fit for first Bangkok property planning"],
  },
  {
    name: "LOVE Charoen Nakhon",
    area: "Charoen Nakhon",
    type: "High-rise Condominium",
    developer: "Origin Property",
    status: "New launch / presale",
    ownership: "Freehold condominium",
    size: "City view and river-near layouts",
    description: "A Charoen Nakhon project placed near Bangkok's expanding riverside lifestyle zone, where retail, transport, and residential demand continue to mature.",
    highlights: ["Riverside growth corridor", "Near Iconsiam lifestyle zone", "High-rise city living"],
  },
  {
    name: "Ideo Sukhumvit Rama 4",
    area: "Sukhumvit / Rama 4",
    type: "Condominium",
    developer: "Ananda Development",
    status: "New development",
    ownership: "Freehold condominium",
    size: "Urban one-bedroom and two-bedroom planning",
    description: "A Rama 4 and Sukhumvit city project with Ananda's transit-oriented positioning, suitable for buyers who prioritize connectivity and rental depth.",
    highlights: ["Transit-oriented positioning", "Rama 4 urban growth", "Designed for city professionals"],
  },
  {
    name: "Aspire Sukhumvit - Rama 4",
    area: "Sukhumvit / Rama 4",
    type: "Condominium",
    developer: "AP Thailand",
    status: "New development",
    ownership: "Freehold condominium",
    size: "Efficient city layouts",
    description: "A value-focused city residence in the Sukhumvit and Rama 4 area, balancing accessibility, facilities, and investment entry price considerations.",
    highlights: ["Sukhumvit-Rama 4 location", "Efficient investment layouts", "Good rental-demand fundamentals"],
  },
  {
    name: "The Residences 38",
    area: "Thonglor",
    type: "Luxury Residence",
    developer: "ANANDA, BTS Group and Rabbit Holdings",
    status: "Completed",
    ownership: "Freehold condominium",
    size: "1-bedroom to penthouse residences",
    description: "A limited luxury residence near BTS Thong Lo, designed around privacy, hotel-style service, and prime Sukhumvit living for high-end owner-occupiers.",
    highlights: ["Near BTS Thong Lo", "Limited private residences", "Hotel-style management concept"],
  },
  {
    name: "XT 10 Ekkamai",
    area: "Ekkamai",
    type: "Condominium",
    developer: "Sansiri",
    status: "Presale / new launch",
    ownership: "Freehold condominium",
    size: "City lifestyle layouts",
    description: "An Ekkamai project positioned for a younger urban lifestyle, with access to Sukhumvit, restaurants, community malls, and tenant demand from the east-side corridor.",
    highlights: ["Ekkamai lifestyle district", "Sukhumvit east-side access", "Suitable for rental-oriented buyers"],
  },
  {
    name: "Porsche Design Tower Bangkok",
    area: "Thonglor",
    type: "Ultra Luxury Branded Residence",
    developer: "Ananda Development and Porsche Design",
    status: "Planned ultra-luxury development",
    ownership: "Luxury residential ownership, subject to sales terms",
    size: "Large sky villa residences",
    description: "A rare branded luxury tower in Thonglor, created for ultra-high-end buyers seeking privacy, design identity, and collectible real estate in Bangkok.",
    highlights: ["First Porsche Design Tower in Asia", "Thonglor luxury address", "Sky villa concept"],
  },
  {
    name: "COCO PARC",
    area: "Rama 4 / Lumpini",
    type: "Luxury Condominium",
    developer: "Ananda Development and Dusit International",
    status: "Completed / active sale",
    ownership: "Freehold condominium",
    size: "Urban luxury layouts",
    description: "A luxury residence close to Lumpini and Rama 4, positioned for buyers who want direct access to central business, green space, and established city infrastructure.",
    highlights: ["Near Lumpini and Rama 4", "Central city access", "Luxury city facilities"],
  },
  {
    name: "Supalai Icon Sathorn",
    area: "Sathorn",
    type: "Mixed-use Residence",
    developer: "Supalai",
    status: "Completed / active sale",
    ownership: "Freehold condominium",
    size: "City residence layouts",
    description: "A large-scale Sathorn address with mixed-use convenience, suited for buyers who value a recognized CBD location and established developer profile.",
    highlights: ["Sathorn CBD location", "Mixed-use convenience", "Recognized Thai developer"],
  },
  {
    name: "Sansiri Via 34",
    area: "Sukhumvit 34",
    type: "Low-rise Luxury Condominium",
    developer: "Sansiri",
    status: "Ready / resale and active opportunities",
    ownership: "Freehold condominium",
    size: "Private city residence layouts",
    description: "A private Sukhumvit 34 residence in a quieter pocket near Thonglor and Phrom Phong, suitable for buyers who prefer calm city living over high-density towers.",
    highlights: ["Sukhumvit 34 address", "Private residential atmosphere", "Near Thonglor and Phrom Phong"],
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
    description: "A premium beach residence concept under the Banyan Tree lifestyle umbrella, designed for buyers seeking resort living, privacy, and long-term Phuket asset value.",
    highlights: ["Bang Tao resort lifestyle", "Banyan Tree brand environment", "Beach residence positioning"],
  },
  {
    name: "The Cube Amaze Phuket - Srisoonthorn",
    area: "Srisoonthorn, Thalang",
    type: "Low-rise Resort Condominium",
    developer: "Soken Development Group",
    status: "New project",
    ownership: "Condominium ownership, subject to quota availability",
    size: "S, M and L room plans",
    description: "A 7-storey low-rise resort condominium in Srisoonthorn, positioned for practical Phuket living with resort-style common areas and central island connectivity.",
    highlights: ["Srisoonthorn Road location", "2 buildings, 7 storeys", "386-unit project planning"],
  },
  {
    name: "The Title Cielo Rawai",
    area: "Rawai",
    type: "Resort Condominium",
    developer: "Rhom Bho Property",
    status: "Ready / active sale focus",
    ownership: "Condominium ownership, subject to quota availability",
    size: "Resort-style layouts for holiday and rental use",
    description: "A Rawai-focused resort residence suitable for buyers who want a southern Phuket lifestyle, beach access, and a product that can serve both personal use and rental planning.",
    highlights: ["Rawai lifestyle location", "Main active-sale Phuket focus", "Resort-style condominium concept"],
  },
  {
    name: "KATA BELLO (The Title KataBello)",
    area: "Kata",
    type: "Resort Residence",
    developer: "Rhom Bho Property",
    status: "New / active project information",
    ownership: "Condominium ownership, subject to quota availability",
    size: "Holiday residence layouts",
    description: "A Kata-area resort residence concept under The Title brand, suited for buyers who want a west-coast Phuket location with holiday appeal and rental potential.",
    highlights: ["Kata west-coast positioning", "The Title resort residence brand", "Lifestyle and rental-use planning"],
  },
  {
    name: "The Title Heritage Bang Tao",
    area: "Bang Tao",
    type: "Resort Residence",
    developer: "Rhom Bho Property",
    status: "New / active project information",
    ownership: "Condominium ownership, subject to quota availability",
    size: "Resort-style residence layouts",
    description: "A Bang Tao residence concept designed around Phuket's established resort district, suitable for buyers prioritizing beach lifestyle, services, and long-term area growth.",
    highlights: ["Bang Tao resort district", "The Title brand environment", "Strong lifestyle and rental-demand area"],
  },
];

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
