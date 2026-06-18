const faqCategories = [
  {
    title: "Ownership & Legal Basics",
    tc: "持有權與法規",
    items: [
      {
        q: "Can foreigners buy property in Thailand?",
        qTc: "外國人可以在泰國買房嗎？",
        a: "Yes. Foreign buyers can legally own condominium units under freehold title, as long as the unit is within the building's foreign ownership quota.",
        aTc: "可以。外國買家可依法持有公寓永久產權，但該戶必須在大樓外籍配額內。土地或透天住宅通常不能由外國人以個人名義直接持有。",
      },
      {
        q: "What is Foreign Quota?",
        qTc: "什麼是外籍配額？",
        a: "In a condominium building, up to 49% of the total saleable area may be held by foreign owners under freehold title.",
        aTc: "泰國公寓大樓最多 49% 面積可由外籍人士持有永久產權。購買前應確認該戶是否仍有外籍配額，並保留書面確認。",
      },
      {
        q: "Does buying property give me a visa or residency?",
        qTc: "買房會附帶簽證或居留權嗎？",
        a: "No. Buying property is separate from visa status. Long-term stay usually requires a separate visa application.",
        aTc: "不會。泰國買房不等於移民，也不自動取得長期居留。若想長住泰國，需另外評估退休簽、LTR、DTV 或其他簽證。",
      },
      {
        q: "Can a Thai condo be inherited?",
        qTc: "泰國公寓可以繼承給子女嗎？",
        a: "A legally owned foreign-quota condominium can generally be inherited, but the heirs still need to follow Thai legal and land office procedures.",
        aTc: "可以，但需依泰國法律程序辦理。建議購屋後與泰國律師確認遺囑或繼承安排，讓海外資產傳承更清楚。",
      },
    ],
  },
  {
    title: "Costs & Taxes",
    tc: "費用與稅務",
    items: [
      {
        q: "What extra costs should I budget for when buying?",
        qTc: "除了房價，還有哪些費用？",
        a: "Common costs include transfer fee, sinking fund, common area management fee, and in some cases legal or agency service fees.",
        aTc: "常見費用包含過戶費、一次性大樓維修基金、物業管理費，以及視情況產生的律師或服務費。實際金額會依建案與合約而不同。",
      },
      {
        q: "Is annual property tax high in Thailand?",
        qTc: "泰國房產持有稅高嗎？",
        a: "For most residential condominiums, annual holding costs are generally considered low compared with many other markets.",
        aTc: "多數住宅公寓的年度持有成本相對低。不過稅率仍可能因房產用途、估值與政府規定調整，購買前建議以最新資料試算。",
      },
      {
        q: "What is CAM Fee?",
        qTc: "什麼是 CAM Fee 物業管理費？",
        a: "CAM Fee is the building's common area maintenance fee, used for security, cleaning, facilities, elevators, and general building operations.",
        aTc: "CAM Fee 類似管理費，用於保全、清潔、公設維護、電梯保養與大樓日常營運，通常依每平方公尺計算並按月或預繳收取。",
      },
      {
        q: "What costs apply when selling later?",
        qTc: "未來出售房子會有哪些稅費？",
        a: "Selling costs may include transfer-related fees, withholding tax, stamp duty, or specific business tax depending on the holding period and transaction details.",
        aTc: "出售時可能有過戶相關費用、預扣所得稅、印花稅或特種商業稅。實際負擔需依持有年限、土地廳估價與買賣合約判斷。",
      },
    ],
  },
  {
    title: "Payment & Purchase Process",
    tc: "付款與購買流程",
    items: [
      {
        q: "Can I pay with Thai baht already in Thailand?",
        qTc: "可以直接用泰國本地泰銖買外籍配額房嗎？",
        a: "For foreign-quota condominium purchases, funds usually need to be remitted from overseas in foreign currency and supported by bank documentation.",
        aTc: "購買外籍配額公寓時，通常需從泰國境外匯入外幣，並取得銀行外匯證明供土地廳過戶使用。",
      },
      {
        q: "Can foreigners get a mortgage in Thailand?",
        qTc: "外國人可以在泰國銀行貸款嗎？",
        a: "It is possible in limited cases, but approval is usually stricter for foreigners without Thai income or a work permit.",
        aTc: "有少數方案可評估，但對沒有泰國收入或工作證的外國人來說，審核通常較嚴格，利率與成數也需個案確認。",
      },
      {
        q: "How does presale payment usually work?",
        qTc: "泰國預售屋付款流程通常怎麼走？",
        a: "Presale projects often begin with a booking fee, followed by contract payment and construction-stage installments, with the balance due at transfer.",
        aTc: "通常先付訂金，再付簽約金與工程期款，完工過戶時支付尾款。比例會依建商與專案不同而變化。",
      },
      {
        q: "Are Thai condos sold with decoration?",
        qTc: "泰國新建案通常含裝潢嗎？",
        a: "Many new condominiums are delivered fully fitted, including flooring, bathroom fixtures, kitchen, and air conditioning. Furniture packages vary by project.",
        aTc: "多數新建案會含基本裝修、衛浴、廚具與冷氣；是否含家具、家電，需看合約與建商交付清單。",
      },
    ],
  },
  {
    title: "Rental & After-Sales Service",
    tc: "出租與售後服務",
    items: [
      {
        q: "Can I use my condo for Airbnb?",
        qTc: "泰國公寓可以做 Airbnb 日租嗎？",
        a: "Short-term rentals can be restricted by Thai hotel law and building rules. Long-term rental is usually the safer and more stable route.",
        aTc: "短租可能受到飯店法與大樓規約限制。若以投資出租為目的，通常建議以月租或長租方式規劃，較穩定也較安全。",
      },
      {
        q: "What rental yield can I expect?",
        qTc: "泰國房產租金投報率大約多少？",
        a: "Rental yield depends on location, building quality, unit layout, purchase price, and tenant demand. Central Bangkok units often perform differently by station and project.",
        aTc: "投報率會受地點、建案品質、坪數格局、購入成本與租客需求影響。曼谷市中心不同捷運站與建案之間差異很大，建議用實際租金案例評估。",
      },
      {
        q: "What if I am not in Thailand for handover or leasing?",
        qTc: "我人不在泰國，交屋與出租怎麼辦？",
        a: "A local team can assist with inspection, handover, furnishing coordination, tenant sourcing, rent follow-up, and ongoing property management.",
        aTc: "可由在地團隊協助驗屋、交屋、家具安排、招租、收租確認與後續代管，讓海外屋主不用每件事親自飛來處理。",
      },
      {
        q: "Do I need to buy a parking space separately?",
        qTc: "泰國公寓需要另外買停車位嗎？",
        a: "Most condominium parking is part of common property rather than a separately titled space, but allocation rules vary by building.",
        aTc: "多數泰國公寓停車位屬於公共設施，不像台灣常見獨立產權車位。但每棟大樓車位比例與使用規則不同，購買前仍需確認。",
      },
    ],
  },
];

export function FaqSection() {
  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-forest py-28 md:py-36 text-brand-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-brand-sand font-medium">
            Common Question · 常見問題
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight tracking-tight">
            Thailand Property FAQ
          </h1>
          <p className="mt-5 font-serif-tc text-xl md:text-2xl text-brand-cream/85">
            泰國置產常見問題整理
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-brand-cream/70">
            Clear answers for buyers who want to understand ownership, fees, payment flow, rental rules, and after-sales support before making a decision.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-16">
          {faqCategories.map((category) => (
            <div key={category.title} className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">
                  {category.title}
                </p>
                <h2 className="mt-3 font-serif-tc text-3xl text-brand-forest">{category.tc}</h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {category.items.map((item, index) => (
                  <article key={item.q} className="border border-border bg-brand-cream p-6 md:p-7">
                    <div className="flex gap-4">
                      <span className="font-display text-lg text-brand-clay shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl text-brand-ink leading-snug">
                          {item.q}
                        </h3>
                        <p className="mt-1 font-serif-tc text-lg text-brand-forest">{item.qTc}</p>
                        <p className="mt-5 text-sm leading-relaxed text-foreground/70">{item.a}</p>
                        <p className="mt-3 font-serif-tc text-base leading-loose text-foreground/75">{item.aTc}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-brand-ink p-8 md:p-10 text-brand-cream flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-sand font-medium">
                Need a personal answer?
              </p>
              <p className="mt-3 font-serif-tc text-2xl">還有其他問題，歡迎直接諮詢我們。</p>
            </div>
            <a
              href="https://line.me/R/ti/p/@256ttfky"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center bg-[#06C755] px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold text-white hover:bg-[#05b34d] transition-colors"
            >
              Ask on LINE · LINE 諮詢
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
