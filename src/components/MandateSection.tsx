import { useState, type FormEvent } from "react";

const leadWebhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || import.meta.env.VITE_MANDATE_SHEET_WEBHOOK_URL || "";

const successMessage = "Thank you. We have received your request and will contact you soon.";
const successMessageTc = "謝謝您，我們已收到您的委託，將盡快與您聯繫。";

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

const requestTypes = ["Buying 買房", "Selling 賣房", "Rental 出租", "Property Management 代管", "Consultation 諮詢"];
const contactMethods = ["LINE", "WhatsApp", "Phone 電話", "Email", "Any 任一方式"];
const propertyLocations = ["Bangkok", "Phuket", "Others"];
const propertyTypes = ["Condominium 公寓", "Villa 別墅", "Land 土地", "Commercial 商用", "Factory 廠房", "Other 其他"];

function buildLeadPayload(form: HTMLFormElement) {
  const formData = new FormData(form);
  formData.set("submittedAt", new Date().toISOString());
  formData.set("sourcePage", "Mandate page / 委託頁");
  formData.set("status", "New / 已收到");
  return formData;
}

export function MandateSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "setup-needed" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!leadWebhookUrl) {
      setStatus("setup-needed");
      return;
    }

    try {
      setStatus("sending");
      await fetch(leadWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: buildLeadPayload(form),
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
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">Mandate · 委託</p>
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
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Website Request Form</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-brand-ink leading-tight">Submit your request</h2>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">填寫委託 / 諮詢表單</p>
            <p className="mt-6 text-sm leading-relaxed text-foreground/65">
              All submissions are saved to the same Google Sheet so no request is missed.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-8 border border-border bg-brand-cream p-8 md:p-10 grid md:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Request Type · 委託類型 *</span>
              <select required name="requestType" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option value="">Select 選擇</option>
                {requestTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Name · 客戶姓名 *</span>
              <input required name="name" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Phone · 電話 *</span>
              <input required name="phone" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">LINE ID · Line</span>
              <input name="lineId" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Email</span>
              <input type="email" name="email" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Preferred Contact · 希望聯繫方式</span>
              <select name="preferredContactMethod" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                {contactMethods.map((method) => <option key={method} value={method}>{method}</option>)}
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Budget · 預算</span>
              <input name="budget" placeholder="THB / USD / TWD" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Location Interest · 感興趣地區 *</span>
              <select required name="locationInterest" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option value="">Select 選擇</option>
                {propertyLocations.map((location) => <option key={location} value={location}>{location}</option>)}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Property Type · 房型需求</span>
              <select name="propertyType" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest">
                <option value="">Select 選擇</option>
                {propertyTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Message · 備註</span>
              <textarea name="message" rows={5} className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
            </label>

            <label className="md:col-span-2 flex gap-3 text-sm leading-relaxed text-foreground/70">
              <input required type="checkbox" name="agreement" value="Agreed" className="mt-1 h-4 w-4 accent-brand-forest" />
              <span>I agree that KHANTHAROS PROPERTY may contact me about this request. 我同意 KHANTHAROS PROPERTY 使用以上資料與我聯絡。</span>
            </label>

            <div className="md:col-span-2 flex flex-col gap-4">
              <button type="submit" disabled={status === "sending"} className="bg-brand-forest px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-brand-cream hover:bg-brand-ink transition-colors disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Submit Request · 送出委託"}
              </button>
              {status === "success" && (
                <div className="border border-brand-forest/20 bg-background px-5 py-4 text-sm leading-relaxed text-brand-forest">
                  <p>{successMessage}</p>
                  <p className="font-serif-tc">{successMessageTc}</p>
                </div>
              )}
              {status === "setup-needed" && <p className="text-sm font-serif-tc text-brand-clay">表單已做好，還需要在 Lovable 設定 Google Sheet Web App URL。</p>}
              {status === "error" && <p className="text-sm font-serif-tc text-red-700">送出失敗，請稍後再試，或直接透過 LINE / WhatsApp 聯繫我們。</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
