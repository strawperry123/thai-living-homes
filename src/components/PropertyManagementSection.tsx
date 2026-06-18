import { useState, type FormEvent } from "react";

const googleSheetWebhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "";

const ownerChallenges = [
  {
    en: "You live overseas or are too busy to handle daily property issues.",
    tc: "人在海外或工作太忙，沒有時間處理房子的日常狀況。",
  },
  {
    en: "You want to lease the unit but are unsure about pricing, photos, or listing channels.",
    tc: "想出租，但不知道租金怎麼抓、照片怎麼拍、廣告怎麼上。",
  },
  {
    en: "After a tenant moves in, bills, repairs, and building notices still need follow-up.",
    tc: "租客入住後，水電、維修、管理處通知都需要有人協助。",
  },
  {
    en: "Move-out inspections, cleaning, and deposit settlement need someone on the ground.",
    tc: "退租時需要點交、清潔、押金結算，也希望有人把關。",
  },
];

const managementStages = [
  {
    title: "Before Leasing",
    tc: "出租前準備",
    items: [
      { en: "Review the unit condition and suggest a practical rental range.", tc: "檢查屋況，提供租金與出租準備建議。" },
      { en: "Prepare photos and listing details so the property is easier to market.", tc: "協助整理照片、刊登資訊，讓房源更容易被看見。" },
      { en: "Check empty-unit basics such as leakage, odor, dust, and appliances.", tc: "巡查空屋狀況，確認漏水、異味、灰塵與基本設備。" },
      { en: "Coordinate cleaning, air-conditioner service, repairs, and juristic office matters.", tc: "協調清潔、冷氣保養、維修與大樓管理處事項。" },
    ],
  },
  {
    title: "During Tenancy",
    tc: "出租期間管理",
    items: [
      { en: "Record furniture, meter readings, and key handover before move-in.", tc: "協助租客入住前確認家具、電表、水表與設備狀態。" },
      { en: "Follow rental payment status and update the owner clearly.", tc: "協助租金收款確認，並把付款狀況回報屋主。" },
      { en: "Act as the contact point between owner, tenant, building office, and agents.", tc: "作為屋主與租客、大樓管理處、合作仲介之間的溝通窗口。" },
      { en: "Handle repairs, internet, bills, and daily issues without long-distance stress.", tc: "處理維修、網路、帳單與日常突發問題，讓屋主不用遠端奔波。" },
    ],
  },
  {
    title: "After Move-Out",
    tc: "退租後處理",
    items: [
      { en: "Inspect the unit after move-out and note repairs or missing items.", tc: "協助退租點交，確認設備、家具與屋況是否需要修繕。" },
      { en: "Calculate final utilities and help with deposit settlement.", tc: "計算最後水電費與相關費用，協助押金結算。" },
      { en: "Arrange cleaning and repairs so the unit can return to market faster.", tc: "安排清潔與必要維修，讓房子能盡快重新出租。" },
      { en: "Assist with building office move-out procedures and documents.", tc: "協助大樓管理處退租登記與後續文件處理。" },
    ],
  },
];

const includedServices = [
  { en: "Key & Unit Care", tc: "鑰匙與屋況管理" },
  { en: "Tenant & Agent Communication", tc: "租客與仲介溝通" },
  { en: "CAM, Utility & Bill Reminders", tc: "管理費、水電與帳單提醒" },
  { en: "Repair & Cleaning Coordination", tc: "維修與清潔協調" },
  { en: "Move-In & Move-Out Checks", tc: "入住與退租點交" },
  { en: "Monthly Owner Updates", tc: "每月狀況回報" },
];

function encodeForm(form: HTMLFormElement) {
  const formData = new FormData(form);
  formData.append("submittedAt", new Date().toISOString());
  return formData;
}

export function PropertyManagementSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "setup-needed" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!googleSheetWebhookUrl) {
      setStatus("setup-needed");
      return;
    }

    try {
      setStatus("sending");
      await fetch(googleSheetWebhookUrl, {
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
    <section id="property-management" className="scroll-mt-24 bg-background py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-[10px] tracking-[0.45em] uppercase text-brand-clay font-medium block mb-6">
              Property Management · 房源管理
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.08] tracking-tight text-brand-ink text-balance">
              Let your Thailand home stay cared for, even when you are away.
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-foreground/70">
              We help overseas owners manage leasing, repairs, tenant communication, and move-out checks with clear updates and local follow-up.
            </p>
            <p className="mt-5 font-serif-tc text-lg leading-loose text-brand-forest/85">
              房子交給我們照看，出租、維修、租客溝通與退租點交，都有人在泰國幫您處理。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#property-management-form"
                className="inline-flex justify-center bg-brand-forest px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-brand-cream hover:bg-brand-ink transition-colors"
              >
                Request Management · 填寫託管需求
              </a>
              <a
                href="https://line.me/R/ti/p/@256ttfky"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center border border-brand-forest/25 px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-brand-forest hover:border-brand-forest transition-colors"
              >
                LINE Consultation · LINE 諮詢
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-14">
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {ownerChallenges.map((item) => (
                <div key={item.en} className="bg-brand-cream p-8">
                  <p className="text-sm leading-relaxed text-brand-ink/75">{item.en}</p>
                  <p className="mt-3 font-serif-tc text-base leading-loose text-brand-forest">{item.tc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border" id="services">
              {managementStages.map((stage) => (
                <article key={stage.title} className="bg-background p-8">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">{stage.title}</p>
                  <h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">{stage.tc}</h3>
                  <ul className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/70">
                    {stage.items.map((item) => (
                      <li key={item.en} className="border-t border-border pt-4">
                        <span className="block text-brand-ink/80">{item.en}</span>
                        <span className="mt-2 block font-serif-tc text-brand-forest/85">{item.tc}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="bg-brand-forest p-8 md:p-10 text-brand-cream">
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-sand/85 font-medium">
                What We Handle · 我們可以協助
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {includedServices.map((service) => (
                  <div key={service.en} className="border border-brand-cream/15 px-5 py-4">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-brand-sand/85">{service.en}</span>
                    <span className="mt-2 block font-serif-tc text-sm text-brand-cream/85">{service.tc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="property-management-form" className="scroll-mt-28 border border-border bg-brand-cream p-8 md:p-10">
              <div className="max-w-2xl">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">
                  Management Request · 託管諮詢
                </p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-brand-ink tracking-tight">
                  Tell us about your property
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                  Leave your contact details and property information. Our advisor will review your needs and follow up with you.
                </p>
                <p className="mt-2 font-serif-tc text-base leading-loose text-brand-forest/80">
                  留下您的聯絡方式與物件狀況，我們會再與您確認託管需求。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-5">
                <input type="hidden" name="serviceNeed" value="Property Management" />
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Name · 姓名 *</span>
                  <input required name="name" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Phone · 聯絡電話 *</span>
                  <input required name="phone" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Email · 電子信箱 *</span>
                  <input required type="email" name="email" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">LINE ID</span>
                  <input name="lineId" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">WhatsApp</span>
                  <input name="whatsapp" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">WeChat · 微信</span>
                  <input name="wechat" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Property Name · 物業名稱</span>
                  <input name="propertyName" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Location · 物件區域</span>
                  <input name="propertyLocation" placeholder="Bangkok, Phuket, Pattaya..." className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-ink/70">Details · 詳細描述</span>
                  <textarea name="details" rows={5} className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-forest" />
                </label>
                <label className="md:col-span-2 flex gap-3 text-sm leading-relaxed text-foreground/70">
                  <input required type="checkbox" name="agreement" value="Agreed" className="mt-1 h-4 w-4 accent-brand-forest" />
                  <span>I agree that KHANTHAROS PROPERTY may contact me about this request. 我同意 KHANTHAROS PROPERTY 使用以上資料與我聯絡。</span>
                </label>
                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-brand-forest px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-brand-cream hover:bg-brand-ink transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Submit Request · 送出需求"}
                  </button>
                  {status === "success" && (
                    <p className="text-sm font-serif-tc text-brand-forest">已收到您的需求，我們會盡快與您聯絡。</p>
                  )}
                  {status === "setup-needed" && (
                    <p className="text-sm font-serif-tc text-brand-clay">表單已做好，還需要設定 Google Sheet 連接網址。</p>
                  )}
                  {status === "error" && (
                    <p className="text-sm font-serif-tc text-red-700">送出時發生問題，請稍後再試或直接用 LINE 聯絡我們。</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
