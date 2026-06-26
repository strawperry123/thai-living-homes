import { useState } from "react";
import { ArrowLeft, ArrowRight, Building2, Home, MapPin, Maximize2, Train, Wallet } from "lucide-react";

const wyneKitchenLivingImage = "data:image/jpeg;base64,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";
const wyneBedroomImage = "data:image/jpeg;base64,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";
const wyneBathroomImage = "data:image/jpeg;base64,/9j/wgARCACgAHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAwIEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAABAgADBAUGBwgJCgv/xADDEQACAgEDAwMCAwUCBQIEBIcBAAIRAxASIQQgMUETBTAiMlEUQAYzI2FCFXFSNIFQJJGhQ7EWB2I1U/DRJWDBROFy8ReCYzZwJkVUkiei0ggJChgZGigpKjc4OTpGR0hJSlVWV1hZWmRlZmdoaWpzdHV2d3h5eoCDhIWGh4iJipCTlJWWl5iZmqCjpKWmp6ipqrCys7S1tre4ubrAwsPExcbHyMnK0NPU1dbX2Nna4OLj5OXm5+jp6vLz9PX29/j5+v/bAEMAFRUVFRUVJBUVJDMkJCQzRTMzMzNFV0VFRUVFV2hXV1dXV1doaGhoaGhoaH19fX19fZKSkpKSpKSkpKSkpKSkpP/bAEMBGRsbKicqSCcnSKx0X3SsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrP/aAAwDAQACEQMRAAABdDMNYIzCNtONtpFttWHLanUpmtowrAZR0JBGxnQIxp0YWhQ6VoUKMuaRl6nqCIoCFyYY3oaFJ5Mhu5CJK5UJKtjJlU05QRAm8KGY4VBoqZFTkUxSpSqtOito1PUEQJuE4DKSrUnaKVkqqZia2jVOS3q4QtAhNnTakyJZojJoihKpcjVSsnVFc9YV0yZgQm7ltTdSUGIkK6WsL2plaiGyHYar2xBR6eFJWG3ctqYoKMydKaS6ZqNbauIJ62G3MKMuulSqBDbuAUyEYFREiMpE4SdMGiY1EIEldDthIAdrTYOVTdC0kRlJB22qInVJRSb/2gAIAQEAAQUC7H+ZKvulnh98vAvh97FhNR/P1/mKfdTq6dsXq9D/ADSeP86WOLDVwB0/mS/Pt+XyHD+YLPYvy/miz3PAfzRZ4djwB++rh2LLH80v2fuD7o1eAeIeL1az94qdXXsjhw7r9lR17lq496uMvJ1Dq5FafcLVx+5VhbyDyDUqv3S1fzQ+4Wr+aH3C1dia/wA4s07nTsdPv//aAAgBAxEBPwH/AHtD/9oACAECEQE/Af8Ae0P/2gAIAQEABj8C/wBVa/75T93T+aP+o9f9QD/kUKf6qp/qDX/fRr/qn//EADMQAQADAAICAgICAwEBAAACCwERACExQVFhcYGRobHB8NEQ4fEgMEBQYHCAkKCwwNDg/9oACAEBAAE/IWt4f/kgUf8Ar/8AlAKZRKAH/Wt6qgnk9U55/wDwzZ//AAtf+GUXq+2WfF1sf8ixY/4j/j/wfQ1uGb65SPJPxZKosWP+dRY/415piDvalQmiF6qWNsf/AIOP+N5XP1q5Yu1q4vr7Mwl7/wDxv/PSvH/F6VJ//IBr/wA9P+BvG71Tr/8AG1/54/8AeS8L2f8A4lgmtf8Ajms2a6ms6f8A4lv4/wCP/HBqk/40/wCTZs2f+LX/AFreH/4JoXBTs3/k+LU6pvIf9a807+aBxZ93Vmx40IQf9wmyf9N5XlP/AMDWNe9msSyR/wDwP/4e3ig+PdWp+7D3eCcf9a/88z/j/wAf/wAm/wDPX/q9f/gj/wDEf+eFjv8A/JQ5/wCtHHdd5ppDRKLCsUSj/wDEX//aAAwDAQACEQMRAAAQraQa6coHu2465PTTiuqMJjps+YeycJE+rpVktRpU2HIk8ZtOK3CYGD7ciHim8GUIQIGESMssoMe5+qag/8QAMxEBAQEAAwABAgUFAQEAAQEJAQARITEQQVFhIHHwkYGhsdHB4fEwQFBgcICQoLDA0OD/2gAIAQMRAT8Q/wDxD/4H/wCnP4v/2gAIAQIRAT8Q/Hvh7tv4CSyfwkts/hPxsfiPwlln4+f/AKn4v//aAAgBAQABPxAU08/dP/wH/wCDDWyc1s0UZRLpYsf/AIWEoa3Kg/dMBseav/BTlgULAlLFG71WkAnVix/xQ/6StixY/wCDl9VI7Pi9tNgNoJKn4sUnDUZpRRUon/horzem5CwuVyUDu3kpGYvnl+Kt8ENHmuqUUFVdM/4Sm5ogeBfuzc0Hx5sVIx5jKFDIvO/x/wACosXnKB8qlP8AwX2fwbMp4vCEJzrQLcc+/VcAhC1A0DMfhp/1E2A/4n/I2zD+ZLpFRDxWyOrBzztyX+cNOb3eaMVZs0U0XKzzRagkqjijGwOKoD7/AN3umt4s1s/9Bl4XwlmzXPwVUqB1NjbO2Z/5NmPAX/ocaLGJpSCgmwOPFfyKu2ds1bNgf2r/AMDGiS9NgfVGvIrj8VdPkrqn/RLE9UQPOVr/AM8kr4+JLNWeasNeHyWGvy+KDkr8V6R/NTWL5oYQhud1XGCeHkrX/nN5R4VwNtDexYLK8PmpfMzT6D/iTUcUhj7s0uuS/X/H/umdCZsX5shUcHKZAwlIcKq5g8WdIn1Z0cNWVf8Aj/zzo/ILxXbBI5qVhDXPlRYZ9lDdPmuyP1Z3Sp/+B43neq3FKtyp4vHP/wCDv/xvG8aMXutTJcLPjCnH/Xw/6kYK1/4GNRAeZywDqKq8BwVynH/Wv/OKtaKL2XBUqeVglnRfVIJz/wDkIf/Z";

const gallery = [
  { title: "Kitchen and Living Area", zh: "廚房與客廳", image: wyneKitchenLivingImage },
  { title: "Bedroom", zh: "臥室", image: wyneBedroomImage },
  { title: "Bathroom", zh: "衛浴", image: wyneBathroomImage },
];

const specs = [
  { icon: Home, en: "1 Bedroom", zh: "一房格局" },
  { icon: Maximize2, en: "30 sq.m.", zh: "室內約 30 平方米" },
  { icon: Building2, en: "7th Floor", zh: "位於 7 樓" },
  { icon: Train, en: "Near BTS Phra Khanong", zh: "近 BTS Phra Khanong 站" },
];

export function WyneResellSection() {
  const [active, setActive] = useState(0);
  const current = gallery[active];

  const move = (direction: number) => {
    setActive((active + direction + gallery.length) % gallery.length);
  };

  return (
    <main className="bg-[#f7f3ec] text-[#2f2a24]">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-16">
        <div className="overflow-hidden rounded-md bg-white shadow-sm">
          <img src={wyneKitchenLivingImage} alt="Wyne by Sansiri kitchen and living area" className="h-[420px] w-full object-cover md:h-[620px]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a46f3c]">Owner Post · 屋主委託出售</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">For Sale Wyne by Sansiri</h1>
          <p className="mt-4 text-xl text-[#6b6257]">1 Bedroom · 30 sq.m. · 7th Floor Garden View</p>
          <p className="mt-2 text-lg text-[#6b6257]">一房 · 30 平方米 · 7 樓園景 · 全配家具家電</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-[#d9c7ad] bg-white p-5">
              <p className="text-sm text-[#8b7c69]">Selling Price · 售價</p>
              <p className="mt-2 text-3xl font-semibold">3.35M THB</p>
              <p className="text-sm text-[#8b7c69]">約 335 萬泰銖</p>
            </div>
            <div className="rounded-md border border-[#d9c7ad] bg-white p-5">
              <p className="text-sm text-[#8b7c69]">Transfer Fee · 過戶費</p>
              <p className="mt-2 text-3xl font-semibold">50 / 50</p>
              <p className="text-sm text-[#8b7c69]">買賣雙方各半</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://lin.ee/W1y4D20" className="rounded-md bg-[#2f2a24] px-6 py-3 text-sm font-semibold text-white">LINE Consultation</a>
            <a href="https://wa.me/66985973849" className="rounded-md border border-[#2f2a24] px-6 py-3 text-sm font-semibold">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {specs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.en} className="rounded-md bg-white p-5 shadow-sm">
                <Icon className="h-5 w-5 text-[#a46f3c]" />
                <p className="mt-4 font-semibold">{item.en}</p>
                <p className="text-sm text-[#786d5f]">{item.zh}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_0.85fr] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a46f3c]">Photo Gallery · 實拍照片</p>
            <h2 className="mt-3 text-3xl font-semibold">{current.title}</h2>
            <p className="text-[#786d5f]">{current.zh}</p>
            <div className="mt-6 overflow-hidden rounded-md border border-[#e8ddcf] bg-[#f7f3ec]">
              <img src={current.image} alt={`${current.title} at Wyne by Sansiri`} className="h-[460px] w-full object-cover" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button type="button" onClick={() => move(-1)} className="rounded-md border border-[#2f2a24] p-3" aria-label="Previous photo"><ArrowLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => move(1)} className="rounded-md border border-[#2f2a24] p-3" aria-label="Next photo"><ArrowRight className="h-4 w-4" /></button>
              <span className="text-sm text-[#786d5f]">{active + 1} / {gallery.length}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-md bg-[#f7f3ec] p-6">
              <h3 className="text-xl font-semibold">Listing Summary</h3>
              <p className="mt-3 leading-7 text-[#5f554b]">Fully furnished 1-bedroom unit on the 7th floor with garden view, ready for move-in. Located near BTS Phra Khanong, suitable for own stay or rental investment.</p>
              <h3 className="mt-6 text-xl font-semibold">物件摘要</h3>
              <p className="mt-3 leading-7 text-[#5f554b]">Wyne by Sansiri 一房中古物件，7 樓園景，家具與家電齊全，可直接入住。位置鄰近 BTS Phra Khanong，適合自住、出租收租或長期資產配置。</p>
            </div>
            <div className="rounded-md bg-[#2f2a24] p-6 text-white">
              <Wallet className="h-5 w-5 text-[#d8b27a]" />
              <p className="mt-4 text-2xl font-semibold">3.35 million THB</p>
              <p className="mt-2 text-sm text-[#dfd3c1]">Transfer fee shared 50/50 between buyer and seller. 過戶費買賣雙方各半。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a46f3c]">Location · 位置</p>
          <h2 className="mt-3 text-3xl font-semibold">BTS Phra Khanong Area</h2>
          <p className="mt-4 leading-7 text-[#5f554b]">Wyne by Sansiri sits in the Phra Khanong lifestyle corridor, with convenient access to Sukhumvit, Ekkamai and Thong Lo.</p>
          <p className="mt-3 leading-7 text-[#5f554b]">建案位於 Phra Khanong 生活圈，可快速連接 Sukhumvit、Ekkamai 與 Thong Lo，日常採買、通勤與租客需求都相對成熟。</p>
        </div>
        <div className="rounded-md bg-white p-6 shadow-sm">
          <MapPin className="h-5 w-5 text-[#a46f3c]" />
          <h3 className="mt-4 text-xl font-semibold">Viewing Arrangement · 看屋安排</h3>
          <p className="mt-3 text-[#5f554b]">Please contact KHANTHAROS PROPERTY to confirm availability, viewing time and ownership documents before making an offer.</p>
          <p className="mt-3 text-[#5f554b]">請先與 KHANTHAROS PROPERTY 聯繫確認物件狀態、看屋時間與產權文件，再安排出價。</p>
        </div>
      </section>
    </main>
  );
}
