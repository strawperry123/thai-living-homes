const beliefs = [
  {
    en: "Curated, not crowded",
    tc: "重質不重量",
    text: "We do not chase a large inventory. We focus on properties with clear location value, lifestyle quality, and long-term potential.",
    textTc: "我們不追求大量物件，而是專注挑選真正值得關注的機會。",
  },
  {
    en: "Local judgment",
    tc: "在地判斷",
    text: "Every recommendation reflects our view on neighborhood growth, building quality, rental demand, and future value.",
    textTc: "每一個推薦物件，都代表我們對地段、生活方式、投資價值與未來發展的判斷。",
  },
  {
    en: "Long-term service",
    tc: "長期陪伴",
    text: "From selection and viewing to handover, management, rental, and resale, we stay with clients beyond the first transaction.",
    textTc: "從選案、看屋、交屋、代管、出租到轉售，我們陪伴的不只是一次交易。",
  },
  {
    en: "Clear communication",
    tc: "資訊透明",
    text: "We make market information, rental expectations, and service steps clear, so each decision is easier to compare and trust.",
    textTc: "市場資訊、租金行情與服務流程清楚說明，讓每一次決策都更容易比較與信任。",
  },
];

const serviceFlow = [
  { n: "01", en: "Consultation", tc: "需求諮詢", desc: "Budget, purpose, lifestyle, and investment direction are clarified first." },
  { n: "02", en: "Viewing", tc: "實地看屋", desc: "We arrange local viewings, building checks, and neighborhood review." },
  { n: "03", en: "Contract", tc: "簽約付款", desc: "Contract, payment schedule, foreign transfer documents, and next steps are organized." },
  { n: "04", en: "Handover", tc: "驗屋交屋", desc: "Inspection, defect follow-up, handover, and title transfer support." },
  { n: "05", en: "Management", tc: "代租代管", desc: "Tenant matching, rent follow-up, repairs, bills, and owner updates." },
  { n: "06", en: "Resale", tc: "二手轉售", desc: "Exit timing, pricing strategy, listing preparation, and buyer matching." },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/KhantharosProperty/" },
  { label: "Instagram", href: "https://www.instagram.com/khantharos_thai_property/" },
  { label: "LINE", href: "https://lin.ee/W1y4D20" },
  { label: "WhatsApp", href: "https://wa.me/66985973849" },
];

export function AboutSection() {
  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-ink py-28 md:py-36 text-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-sand font-medium">
              About Us · 關於我們
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-balance">
              A property advisor should be more than a salesperson.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="font-serif-tc text-2xl leading-loose text-brand-cream/90">
              我們相信，好的房產顧問不只是銷售者，更是策展者。
            </p>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-brand-cream/70">
              Like a curator selecting meaningful works for an audience, we select spaces and assets that deserve attention, ownership, and long-term confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-serif-tc text-2xl md:text-3xl leading-loose text-brand-ink text-balance">
            每一個推薦的物件，都代表我們對地段、生活方式、投資價值與未來發展的判斷。因此，我們不追求大量物件，而是專注於挑選真正值得關注的機會。
          </p>
          <div className="mt-10 w-16 h-px bg-brand-clay" />
          <p className="mt-10 text-base md:text-lg leading-relaxed text-foreground/70 max-w-3xl">
            Every recommendation carries our judgment on location, lifestyle, investment value, and future growth. We believe clients deserve carefully selected opportunities, not a long list of unfocused choices.
          </p>
          <p className="mt-6 font-serif-tc text-xl leading-loose text-brand-forest/85">
            如同策展人為觀眾挑選作品，我們為客戶挑選值得擁有的空間與資產。
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">
              Our Principles · 我們的堅持
            </p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-brand-ink tracking-tight text-balance">
              We help clients own assets with real long-term value.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {beliefs.map((item) => (
              <article key={item.en} className="bg-brand-cream p-8 hover:bg-background transition-colors">
                <p className="text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{item.en}</p>
                <h3 className="mt-3 font-serif-tc text-2xl text-brand-forest">{item.tc}</h3>
                <p className="mt-6 text-sm leading-relaxed text-foreground/65">{item.text}</p>
                <p className="mt-4 font-serif-tc text-sm leading-loose text-foreground/70">{item.textTc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">
                Complete Service Flow · 完整服務流程
              </p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-brand-ink tracking-tight">
                From first call to asset exit.
              </h2>
              <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">
                從初次諮詢到資產退場，每一步都有我們陪伴。
              </p>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-border">
              {serviceFlow.map((step) => (
                <article key={step.n} className="bg-background p-8">
                  <p className="font-display text-2xl text-brand-clay">{step.n}</p>
                  <h3 className="mt-6 font-display text-2xl text-brand-ink">{step.en}</h3>
                  <p className="mt-1 font-serif-tc text-lg text-brand-forest">{step.tc}</p>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/65">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-forest py-24 md:py-32 text-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-sand font-medium">
              Dual Office Support · 雙辦公室配置
            </p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl tracking-tight text-balance">
              Taiwan-side contact, Thailand-side field service.
            </h2>
            <p className="mt-6 font-serif-tc text-xl leading-loose text-brand-cream/85">
              台灣客戶在地接洽，泰國現場實地服務。
            </p>
          </div>

          <div className="lg:col-span-7 border border-brand-cream/15 p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-sand font-medium">
              Bangkok Office
            </p>
            <h3 className="mt-3 font-serif-tc text-3xl text-brand-cream">曼谷辦公室</h3>
            <address className="mt-8 not-italic space-y-5 text-sm md:text-base leading-relaxed text-brand-cream/78">
              <p>2823/3 Rama IV Rd, Khlong Tan, Khlong Toei, Bangkok 10110</p>
              <p className="font-serif-tc">實地看屋請提前預約</p>
              <p>Consultation: +66 985973849 / +66 624892930</p>
              <p>Viewing Hours: Monday to Saturday, 10:00-18:00</p>
              <p>Email: khantharos.adm@gmail.com</p>
            </address>
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border border-brand-cream/20 px-6 py-3 text-[10px] uppercase tracking-[0.22em] font-medium text-brand-cream/85 hover:bg-brand-cream hover:text-brand-forest transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
