import { useState, type FormEvent } from "react";

const mandateWebhookUrl = import.meta.env.VITE_MANDATE_SHEET_WEBHOOK_URL || import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "";

const mandateSteps = [
  {
    en: "Tell us your goal",
    tc: "告訴我們您的委託需求",
    desc: "Sale, rental, resale, new launch, or property management. We first clarify what you want to achieve.",
    descTc: "無論是出售、出租、中古屋、預售新案或物業管理，我們會先確認您的目標與時程。",
  },
  {
    en: "Review the property",
    tc: "評估物件狀況",
    desc: "We look at location, building, condition, market price, rental demand, and owner expectations.",
    descTc: "我們會整理地點、大樓條件、屋況、市場價格、租賃需求與屋主期待。",
  },
  {
    en: "Prepare the listing plan",
    tc: "制定曝光與成交策略",
    desc: "Photos, positioning, pricing, buyer or tenant profile, and communication plan are arranged clearly.",
    descTc: "包含照片、定位、價格、客群、廣告曝光與後續溝通方式，都會先規劃清楚。",
  },
  {
    en: "Follow up until completion",
    tc: "一路追蹤到完成",
    desc: "We help coordinate viewings, negotiation, paperwork, handover, and after-service communication.",
    descTc: "我們協助帶看、議價、文件、交屋或入住，並持續更新進度。",
  },
];

const propertyLocations = ["Thailand", "Taiwan", "Malaysia", "Dubai", "Abu Dhabi", "Vietnam", "Japan", "United Kingdom", "Other"];
const propertyTypes = ["Condominium 公寓", "Villa 別墅", "Land 土地", "Commercial 商用", "Factory 廠房", "Other 其他"];

function encodeForm(form: HTMLFormElement) {
  const formData = new FormData(form);
  formData.append("submittedAt", new Date().toISOString());
  formData.append("source", "Mandate page");
  return formData;
}

export function MandateSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "setup-needed" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!mandateWebhookUrl) {
      setStatus("setup-needed");
      return;
    }

    try {
      setStatus("sending");
      await fetch(mandateWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: encodeForm(form),
      });
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">
              Mandate · 委託
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">
              Entrust your property to a team that stays close to the details.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-foreground/70">
              Whether you plan to sell, lease, or manage a property in Thailand, we help organize the process with clear communication and practical market advice.
            </p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">
              不論您想出售、出租或委託管理泰國物件，我們協助整理流程、評估市場，並用清楚的進度回報陪您完成每一步。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {mandateSteps.map((step, index) => (
              <article key={step.en} className="bg-background p-8">
                <p className="font-display text-2xl text-brand-clay">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-8 font-display text-2xl text-brand-ink leading-tight">{step.en}</h2>
                <p className="mt-2 font-serif-tc text-lg text-brand-forest">{step.tc}</p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/65">{step.desc}</p>
                <p className="mt-3 font-serif-tc text-sm leading-loose text-foreground/70">{step.descTc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">
              Sale / Rental Mandate
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-brand-ink leading-tight">
              Submit your mandate request
            </h2>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">
              填寫出售 / 出租委託表單
            </p>
            <p className="mt-6 text-sm leading-relaxed text-foreground/65">
              Fill in the basic information below. Our advisor will review your property and contact you for the next step.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-8 border border-border bg-brand-cream p-8 md:p-10 grid md:grid-cols-2 gap-5">
            <input type="hidden" name="serviceNeed" value="Mandate" />

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Name · 姓名 *</span>
              <input required name="name" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Need · 需求 *</span>
              <select required name="mandateType" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option value="">Select 選擇</option>
                <option value="Sell">Sell 出售</option>
                <option value="Rent">Rent 出租</option>
                <option value="Sell and Rent">Sell and Rent 出售與出租</option>
                <option value="Property Management">Property Management 房源管理</option>
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Phone · 電話 *</span>
              <input required name="phone" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Email · 電子信箱 *</span>
              <input required type="email" name="email" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Line ID</span>
              <input name="lineId" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Wechat</span>
              <input name="wechat" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Whatsapp</span>
              <input name="whatsapp" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Property Location · 物件所在地 *</span>
              <select required name="propertyLocation" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option value="">Select 選擇</option>
                {propertyLocations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Property Type · 物件類型</span>
              <select name="propertyType" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option value="">Select 選擇</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Expected Price · 期望價格</span>
              <input name="expectedPrice" placeholder="THB / USD / TWD" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block md:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Property Details · 物件補充說明</span>
              <textarea name="details" rows={5} className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="md:col-span-2 flex gap-3 text-sm leading-relaxed text-foreground/70">
              <input required type="checkbox" name="agreement" value="Agreed" className="mt-1 h-4 w-4 accent-brand-forest" />
              <span>I agree that KHANTHAROS PROPERTY may contact me about this mandate request. 我同意 KHANTHAROS PROPERTY 使用以上資料與我聯絡。</span>
            </label>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-brand-forest px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-brand-cream hover:bg-brand-ink transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Submit Mandate · 送出委託"}
              </button>
              {status === "success" && <p className="text-sm font-serif-tc text-brand-forest">已收到您的委託需求，我們會盡快與您聯絡。</p>}
              {status === "setup-needed" && <p className="text-sm font-serif-tc text-brand-clay">表單已做好，還需要設定 Google Sheet 連接網址。</p>}
              {status === "error" && <p className="text-sm font-serif-tc text-red-700">送出時發生問題，請稍後再試或直接用 LINE 聯絡我們。</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
