import { useMemo, useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";

const images = [property1, property2, property3];

const bangkokProjects = [
  { name: "FLO by Sansiri", area: "Bangkok Riverside", type: "New Launch", link: "https://www.shangherealestate.com/property/flo-by-sansiri/" },
  { name: "Life Sukhumvit - Rama 4", area: "Sukhumvit / Rama 4", type: "Condominium", link: "https://www.shangherealestate.com/property/life-sukhumvit-rama-4/" },
  { name: "Goodday Sukhumvit 93", area: "Sukhumvit 93", type: "Condominium", link: "https://www.shangherealestate.com/property/goodday-sukhumvit-93/" },
  { name: "LOVE Charoen Nakhon", area: "Charoen Nakhon", type: "Condominium", link: "https://www.shangherealestate.com/property/love-charoen-nakhon/" },
  { name: "Ideo Sukhumvit Rama 4", area: "Sukhumvit / Rama 4", type: "Condominium", link: "https://www.shangherealestate.com/property/ideo-sukhumvit-rama-4/" },
  { name: "Aspire Sukhumvit - Rama 4", area: "Sukhumvit / Rama 4", type: "Condominium", link: "https://www.shangherealestate.com/property/aspire-sukhumvit-rama-4/" },
  { name: "The Residences 38", area: "Thonglor", type: "Luxury Residence", link: "https://www.throneproperty.com/the-residences-38" },
  { name: "XT 10 Ekkamai", area: "Ekkamai", type: "Condominium", link: "https://www.throneproperty.com/xt-10-ekkamai" },
  { name: "Porsche Design Tower Bangkok", area: "Thonglor", type: "Ultra Luxury", link: "https://www.throneproperty.com/porsche-design-tower-bangkok" },
  { name: "COCO PARC", area: "Rama 4 / Lumpini", type: "Condominium", link: "https://www.throneproperty.com/coco-parc" },
  { name: "Supalai Icon Sathorn", area: "Sathorn", type: "Mixed-use Residence", link: "https://www.shangherealestate.com/property/supalai-icon-sathorn/" },
  { name: "Sansiri Via 34", area: "Sukhumvit 34", type: "Condominium", link: "https://nvtproperty.com/guest/project/building/qn6r0" },
];

const phuketProjects = [
  { name: "Banyan Tree Beach Residences Oceanus", area: "Bang Tao", type: "Beach Residence", link: "https://maxrealtytaiwan.com/condominium/banyan-tree-beach-residences-oceanus/" },
  { name: "The Cube Amaze Phuket - Srisoonthorn", area: "Srisoonthorn", type: "Condominium", link: "https://www.thecubeamazephuket.com/" },
  { name: "The Title Cielo Rawai", area: "Rawai", type: "Ready / Active Sale", link: "https://line.me/R/ti/p/@256ttfky" },
  { name: "KATA BELLO (The Title KataBello)", area: "Kata", type: "Resort Residence", link: "https://line.me/R/ti/p/@256ttfky" },
  { name: "The Title Heritage Bang Tao", area: "Bang Tao", type: "Resort Residence", link: "https://line.me/R/ti/p/@256ttfky" },
];

function ProjectCard({ project, index }: { project: typeof bangkokProjects[number]; index: number }) {
  return (
    <article className="group bg-background">
      <a href={project.link} target="_blank" rel="noreferrer" className="block">
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
        <div className="border border-t-0 border-border p-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{project.area}</p>
          <h3 className="mt-3 font-display text-2xl text-brand-ink leading-tight">{project.name}</h3>
          <p className="mt-4 font-serif-tc text-sm leading-loose text-foreground/65">
            精選預售 / 新成屋建案，適合自住、度假生活與長期資產配置評估。
          </p>
          <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand-forest font-medium">
            View Project · 查看建案
          </div>
        </div>
      </a>
    </article>
  );
}

export function PreSellSection() {
  const [region, setRegion] = useState<"bangkok" | "phuket">("bangkok");
  const [page, setPage] = useState(1);
  const projects = region === "bangkok" ? bangkokProjects : phuketProjects;
  const pageSize = region === "bangkok" ? 6 : 5;
  const totalPages = Math.ceil(projects.length / pageSize);
  const visibleProjects = useMemo(() => projects.slice((page - 1) * pageSize, page * pageSize), [page, pageSize, projects]);

  const chooseRegion = (nextRegion: "bangkok" | "phuket") => {
    setRegion(nextRegion);
    setPage(1);
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
              A focused collection of new and upcoming projects selected for location, lifestyle value, developer quality, and long-term potential.
            </p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">
              精選曼谷與普吉島預售 / 新成屋建案，依地段、生活方式、建商品質與長期價值整理推薦。
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
              <ProjectCard key={project.name} project={project} index={(page - 1) * pageSize + index} />
            ))}
          </div>

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
                    onClick={() => setPage(pageNumber)}
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
