import { useState, type FormEvent } from "react";

const googleSheetWebhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "";

const ownerChallenges = [
  "人在海外或工作太忙，沒有時間處理房子的日常狀況。",
  "想出租，但不知道租金怎麼抓、照片怎麼拍、廣告怎麼上。",
  "租客入住後，水電、維修、管理處通知都需要有人協助。",
  "退租時需要點交、清潔、押金結算，也希望有人把關。",
];

const managementStages = [
  {
    title: "Before Leasing",
    tc: "出租前準備",
    items: [
      "檢查屋況，提供租金與出租準備建議。",
      "協助整理照片、刊登資訊，讓房源更容易被看見。",
      "巡查空屋狀況，確認漏水、異味、灰塵與基本設備。",
      "協調清潔、冷氣保養、維修與大樓管理處事項。",
    ],
  },
  {
    title: "During Tenancy",
    tc: "出租期間管理",
    items: [
      "協助租客入住前確認家具、電表、水表與設備狀態。",
      "協助租金收款確認，並把付款狀況回報屋主。",
      "作為屋主與租客、大樓管理處、合作仲介之間的溝通窗口。",
      "處理維修、網路、帳單與日常突發問題，讓屋主不用遠端奔波。",
    ],
  },
  {
    title: "After Move-Out",
    tc: "退租後處理",
    items: [
      "協助退租點交，確認設備、家具與屋況是否需要修繕。",
      "計算最後水電費與相關費用，協助押金結算。",
      "安排清潔與必要維修，讓房子能盡快重新出租。",
      "協助大樓管理處退租登記與後續文件處理。",
    ],
  },
];

const includedServices = [
  "鑰匙與屋況管理",
  "租客與仲介溝通",
  "管理費、水電與帳單提醒",
  "維修與清潔協調",
  "入住與退租點交",
  "每月狀況回報",
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
            <p className="mt-6 font-serif-tc text-xl leading-loose text-brand-forest/85">
              房子交給我們照看，出租、維修、租客溝通與退租點交，都有人在泰國幫您處理。
            </p>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-foreground/70">
              我們協助海外屋主把房產管理變得簡單一點。從出租前的整理與行銷，到租客入住後的日常問題，再到退租後的清潔、維修和結算，我們用固定回報和清楚流程，讓您不需要隔著時差處理每個細節。
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
                <div key={item} className="bg-brand-cream p-8">
                  <p className="font-serif-tc text-base leading-loose text-brand-ink">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border" id="services">
              {managementStages.map((stage) => (
                <article key={stage.title} className="bg-background p-8">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">{stage.title}</p>
                  <h3 className="mt-2 font-serif-tc text-2xl text-brand-forest">{stage.tc}</h3>
                  <ul className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/70">
                    {stage.items.map((item) => (
                      <li key={item} className="border-t border-border pt-4">{item}</li>
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
                  <div key={service} className="border border-brand-cream/15 px-5 py-4 font-serif-tc text-sm text-brand-cream/85">
                    {service}
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
                <p className="mt-4 font-serif-tc text-base leading-loose text-foreground/65">
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
                  <span>我同意 KHANTHAROS PROPERTY 使用以上資料與我聯絡，並了解送出後將由顧問回覆。</span>
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
