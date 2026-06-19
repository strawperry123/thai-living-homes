import { useMemo, useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";
const driveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
const bilingual = (text: string) => text.split(" · ").join("\n");

const images = [property1, property2, property3];

type ProjectMedia = {
  title: string;
  src: string;
  note?: string;
};

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
  gallery?: ProjectMedia[];
  floorPlanImages?: ProjectMedia[];
  unitPlanImages?: ProjectMedia[];
};

const lifeRama4FloorPlanImages: ProjectMedia[] = [
  { title: "1st Layout Combine · 1 樓整體平面圖", src: driveImage("1TCedySR8iIf9MCYdMNa1Fq__bQqf3Ag_"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "2nd Mezzanine · 2 樓夾層平面圖", src: driveImage("1-PRz35yL6os6CAwUdO728bhj8q1mgrS-"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "2nd Parking · 2 樓停車層", src: driveImage("1prkp3I7p3-5KZwY2YgeFahz8LYCiy-cP"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "3rd Parking · 3 樓停車層", src: driveImage("1QilRlMB0tj1qytf5admSzPpn9_hhDEaS"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "4th Parking · 4 樓停車層", src: driveImage("1zTyck17FKc5qD-C9uqrqI5kCEePZeIEi"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "5th and 7th Parking · 5 / 7 樓停車層", src: driveImage("1CodhIq6bRZD9--25Ep5rj91JQ6MT-p8V"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "6th Parking · 6 樓停車層", src: driveImage("1rvSPPFGt95rOseHqnsG-wV_BISJhQ4GJ"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "8th Parking · 8 樓停車層", src: driveImage("1UCsLRZW1DEZtYSXOE8Tb2GAUIEhdxkxi"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "10th Typical Floor Plan · 10 樓標準層平面圖", src: driveImage("1ojSiaHrnZ_2GXN2ZHmQXTovjPaDo9vy-"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
  { title: "11th-14th Typical Floor Plan · 11-14 樓標準層平面圖", src: driveImage("1fhVdq6Emj3qF3W1COj_LNv-naQYnBPzz"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
  { title: "15th-24th Typical Floor Plan · 15-24 樓標準層平面圖", src: driveImage("1US2z1qN2bCE6lk197AGcl0QHritTkbtl"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "25th-32nd Typical Floor Plan · 25-32 樓標準層平面圖", src: driveImage("1DhEo6ozWTU5_x9RQq_nhbLKa30eLkKkk"), note: "Simplex Floorplan · Simplex 樓層圖" },
  { title: "33rd-35th Lower · 33-35 樓下層", src: driveImage("1p09MVy1u2SZBpfzJ9HlvESoeC6UKAdxB"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
  { title: "33rd-35th Upper · 33-35 樓上層", src: driveImage("1IUcpXR3gesfJocEJfvhGl0WOquArsCIY"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
  { title: "36th Lower · 36 樓下層", src: driveImage("1m_9IbLm9UHaKkaS_x9eFhxaKzud2CtCv"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
  { title: "36th Upper · 36 樓上層", src: driveImage("1D7mWwr3Vb6Bt5mlJi-VHMcfXKOGLCt9g"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
  { title: "37th Floor · 37 樓平面圖", src: driveImage("1DLUX1mBqntpgfKtRaUm9jDYGO2N79FPu"), note: "Vertiplex Floorplan · Vertiplex 樓層圖" },
];

const lifeRama4UnitPlanImages: ProjectMedia[] = [
  { title: "Type A - L9-11-A1 · A 戶型 L9-11-A1", src: driveImage("1UYntSozif_9r9Vr155ALtaL9FIJYtIVN"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-12-A2M · A 戶型 L9-12-A2M", src: driveImage("1X6XFBCZF4qv66wiyvkAsi5r7YJSG3uGE"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-13-A2 · A 戶型 L9-13-A2", src: driveImage("1SVZwPscIVONGn9wGp_DmYw5dqo23hiJ2"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-14-A2M · A 戶型 L9-14-A2M", src: driveImage("1zjygs6Z6RgByhTQeMEskdgRqDgaHUPJl"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-30-A5M · A 戶型 L9-30-A5M", src: driveImage("1JA3WS47cc5f26HYGF8wSbKTm0x7beWu-"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-31-A3 · A 戶型 L9-31-A3", src: driveImage("1HSJ7KkZp-qqUMNsPs9wBotxp9BRlzZNy"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-32-A5 · A 戶型 L9-32-A5", src: driveImage("1iRMS_uDQ5-nfzoZyqO00esFM2ehZdaUj"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L9-33-A4 · A 戶型 L9-33-A4", src: driveImage("17qq_FTBlF6UZ3aj_8O6YEBX1kLbWQJlI"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-11-A1 · A 戶型 L10-11-A1", src: driveImage("1bU_u938BVMsefJyl3CEQsb5rtRASY4UP"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-12-A2M · A 戶型 L10-12-A2M", src: driveImage("1QlW2Iz8Bz66I9g9fTRJ_jv8o-NZlysBd"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-13-A2 · A 戶型 L10-13-A2", src: driveImage("1Fs1NAOcX7Eg9MbVxl41Nmn6K6zUah0ns"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-14-A2M · A 戶型 L10-14-A2M", src: driveImage("1lwIyKpY2UUsnZtUA-qJxv0WEaWp2nmHA"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-25-A6 · A 戶型 L10-25-A6", src: driveImage("1NJxsBG_S-hq_BCE8RiTIi6zaNjrhK2L4"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-30-A5M · A 戶型 L10-30-A5M", src: driveImage("142UygqxJEocVq5NFZqDqbIK1QOpp4nLu"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-31-A3 · A 戶型 L10-31-A3", src: driveImage("1A30rHgqDgtUlJ4IsPjqlJh-sIuWqbguJ"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-32-A5 · A 戶型 L10-32-A5", src: driveImage("16ZyK1oJbS0EHaa9oZ80yoa8jRS7mKDW2"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type A - L10-33-A4 · A 戶型 L10-33-A4", src: driveImage("12hFhiFz3bWL9SyOdKti-tsVbP9AEfM8g"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L10-01-B1 · B 戶型 L10-01-B1", src: driveImage("1L9HQs9zOgemt4bhx48AInUhGiQSxJ8Pi"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L10-02-B3 · B 戶型 L10-02-B3", src: driveImage("1E3XBGpLWsS5RIIT5Y8ZsOA58T1YAHFSf"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L11-41-B6 · B 戶型 L11-41-B6", src: driveImage("1390FMczW97L_DjMa5y66qA_mxuAsPgHv"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L11-45-B7 · B 戶型 L11-45-B7", src: driveImage("1L3xJsLxViCKJnpux2E_qTq33Q-YeRS2F"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L11-46-B8 · B 戶型 L11-46-B8", src: driveImage("1bhlsmYyKHPYj15DiRNGzCOZcp6RrZAMk"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L25-25-B9 · B 戶型 L25-25-B9", src: driveImage("1oWRXwTUOZu5PuAwtx8sRAZv1Js7F4v_9"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L25-30-B2 · B 戶型 L25-30-B2", src: driveImage("1fgyi-m__Q3DRncmsFX_-oitsmbneysHR"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L25-31-B4M · B 戶型 L25-31-B4M", src: driveImage("1VXwNmq2mt4yQACkFsvWd9K468iyRxvMo"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L25-32-B4 · B 戶型 L25-32-B4", src: driveImage("1K93b_kor145M9V3oCBQpvqd8Wzv05xGe"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type B - L25-33-B5 · B 戶型 L25-33-B5", src: driveImage("1f0qT9JKismgpsVCtHvTBvN2Hg7Sq6WnW"), note: "Simplex layout · Simplex 單位格局圖" },
  { title: "Type C - L33-14-C4M · C 戶型 L33-14-C4M", src: driveImage("1T4e5g942FzNsXnPV2d77wsf49NBs7INX"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - D12M-43 · D 戶型 D12M-43", src: driveImage("1KQ0x4EVXyT4dy9hqr6Pc9oEbs3opsZp6"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-15/17/19/21-D13 · D 戶型 L33-15/17/19/21-D13", src: driveImage("1e_d9Ar1wQ6u6OueuqdyQDxU73Iuj-4ys"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-16/18/20/22-D13M · D 戶型 L33-16/18/20/22-D13M", src: driveImage("14XhhxLkCE44D66oNy_rBlENmA1KZ-f-D"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-23-D14 · D 戶型 L33-23-D14", src: driveImage("1k4rOBWxjxF9_dK5CSuPiMRRCA54qLkjO"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-26-D15M · D 戶型 L33-26-D15M", src: driveImage("11Q5RAZrRR01ST0J-4AeSVpiuB4gbEadq"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-27-D15 · D 戶型 L33-27-D15", src: driveImage("1CVEI6G83Va9QhWPfeuBS6Pqia3mL8VPv"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-28-D16 · D 戶型 L33-28-D16", src: driveImage("1FoRiH002j6i2MBPgX3zsbnyDWGAZclUG"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type D - L33-29-D17 · D 戶型 L33-29-D17", src: driveImage("17doy55zUg4YKmjgYjPfUqRZoooYhSE-U"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type E - L33-04/06/08-E6M · E 戶型 L33-04/06/08-E6M", src: driveImage("1ChM9zmR7hWR4hHdvAlKGy6KWybOcBsig"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type E - L33-09-E7 · E 戶型 L33-09-E7", src: driveImage("134J9hDUkXYk3qiJzNVZMryhmQSR_iKFB"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type E - L33-42/44-E8 · E 戶型 L33-42/44-E8", src: driveImage("1s5KFtA29-dfN1tQkCaf0kHJ6Xup23SjR"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type E - L33-43-E8M · E 戶型 L33-43-E8M", src: driveImage("1yGHlwsGayar1VTsF7NrGyYt9bkZiw4P6"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type F - L33-37/39-F5M · F 戶型 L33-37/39-F5M", src: driveImage("1JCASApDRukyq958Vm9zlByV0g-usp8af"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
  { title: "Type K - L33-40-K2 · K 戶型 L33-40-K2", src: driveImage("10JPoC6kQZsD1v0Xh3ygqWA4TojfIQQ6z"), note: "Vertiplex layout · Vertiplex 單位格局圖" },
];

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
    name: "Life Rama 4 - Asoke",
    area: "Rama 4 / Asoke · 拉瑪四 / 阿索克",
    type: "High-rise Condominium · 高樓層公寓",
    developer: "AP ME 12 Co., Ltd. · AP 集團關係企業",
    status: "Official project details and sales materials available · 已整理官方建案資料與銷售素材",
    ownership: "Freehold condominium, subject to foreign quota and contract terms · 永久產權公寓，外國人額度與合約條件以開發商文件為準",
    size: "1 building, 39 storeys; 1,237 residential units, 2 shops; approx. 496 parking lots · 1 棟 39 層，共 1,237 戶住宅、2 間商鋪，約 496 個車位",
    address: "Rama 4 Road, Khlong Toei, Bangkok 10110 · 曼谷 Khlong Toei 區 Rama 4 路 10110",
    mapQuery: "Life Rama 4 Asoke Rama 4 Road Khlong Toei Bangkok",
    description: "Life Rama 4 - Asoke is a 39-storey city condominium by AP ME 12 on Rama 4 Road, Khlong Toei. The project combines a large residential scale, parking podium, upper-floor gardens, pool, fitness, steam and sauna facilities, with practical access to Rama 4, Asoke and the Khlong Toei business corridor.\n\n本案位於曼谷 Rama 4 Road、Khlong Toei 區，由 AP ME 12 開發，為 39 層高樓層公寓。建案規劃住宅、商鋪、停車樓層、高樓層花園、泳池、健身房、蒸氣室與桑拿，適合重視市中心交通、出租需求與生活機能的買方。",
    highlights: [
      "Project land area: 5-2-7.5 Rai · 基地面積 5-2-7.5 Rai",
      "1,237 residential units plus 2 shops · 1,237 戶住宅加 2 間商鋪",
      "Maintenance fee 50 baht/sq.m./month; sinking fund 500 baht/sq.m. · 管理費 50 泰銖/平方公尺/月；公共基金 500 泰銖/平方公尺",
    ],
    transport: [
      "Located on Rama 4 Road in Khlong Toei with convenient access toward Asoke, Sukhumvit, Queen Sirikit Convention Centre and central Bangkok · 位於 Khlong Toei 的 Rama 4 Road，可銜接 Asoke、Sukhumvit、詩麗吉皇后會議中心與曼谷市中心",
      "Suitable for tenants working around Rama 4, Sukhumvit, CBD and expressway-connected districts · 適合 Rama 4、Sukhumvit、CBD 與快速道路沿線工作客群",
      "The Drive folder includes a location map file for onsite project reference · Drive 素材內含 location map，可作為建案位置參考",
    ],
    lifestyle: [
      "Facilities include 1st floor garden, 9th floor garden, 36th-39th floor gardens, swimming pool, fitness room, steam room and sauna room · 公設包含 1 樓花園、9 樓花園、36-39 樓高空花園、泳池、健身房、蒸氣室與桑拿",
      "Security includes 24-hour guards, CCTV at main entrance, lobby, parking area and passenger elevators, plus access control · 管理包含 24 小時保全、主要入口/大廳/停車區/電梯 CCTV 與門禁系統",
      "Building systems include 7 passenger elevators, 1 fireman elevator, backup generator support, fire protection system, fiber optic telephone system and digital TV · 建物配置 7 部客梯、1 部消防電梯、備用發電、消防系統、光纖與數位電視系統",
    ],
    floorPlans: [
      "Simplex Floorplan: 1st, 2nd-Mezzanine, 2nd Parking, 3rd Parking, 4th Parking, 5th/7th Parking, 6th Parking and 8th Parking · Simplex 樓層圖：1F、2F/夾層、2F 停車、3F 停車、4F 停車、5F/7F 停車、6F 停車與 8F 停車",
      "Simplex Typical Floor Plans: 11th-14th, 15th-24th and 25th-32nd · Simplex 標準層：11-14F、15-24F、25-32F",
      "Vertiplex Floorplan: 10th, 11th-14th, 33rd-35th lower/upper, 36th lower/upper and 37th · Vertiplex 樓層圖：10F、11-14F、33-35F 下層/上層、36F 下層/上層與 37F",
    ],
    unitLayouts: [
      "Simplex layout folders: Type A and B · Simplex 房型圖分類：A、B 戶型",
      "Vertiplex layout folders: Type C, D, E, F, G, H, I, J and K · Vertiplex 房型圖分類：C、D、E、F、G、H、I、J、K 戶型",
      "Project files also include E-Brochure, facilities actual photos, mock-up photos, view images, specifications PDF and foreign buyer guidance PDFs · 素材另含電子型錄、公設實景圖、樣品屋照片、景觀圖、建材規格 PDF 與外國人購屋指南 PDF",
    ],
    gallery: [
      { title: "The Parlour · 迎賓客廳", src: driveImage("1Ou4F1SlN4YtX8p062UUojUOGE1k0tK5w"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Playfulness Bar · 休閒吧檯", src: driveImage("163BUYbpRLW48xMbEE2RvCBrAJ7N5SrTv"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Sky Studio · 空中共享空間", src: driveImage("1yM6XuDQC_WK3JjnzOrS7rT-h9BzTY4Ua"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Swimming Pool & Jacuzzi · 泳池與按摩池", src: driveImage("1ugehNPxMVC6XUZPFG8HhKwMfi94fXX-Q"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Project Overview · 建案外觀概覽", src: driveImage("1AL9VvmNKpz3j0pfUSNJmVYRiypmYdYqh"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Benchakitti Park View · 班嘉奇蒂公園景觀", src: driveImage("1TCb-nj1qylcZ4ho3VBsreGFE0dkkJZv7"), note: "View reference · 景觀參考" },
    ],
    floorPlanImages: lifeRama4FloorPlanImages,
    unitPlanImages: lifeRama4UnitPlanImages,
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

function MediaGallery({ title, items, fit = "cover" }: { title: string; items?: ProjectMedia[]; fit?: "cover" | "contain" }) {
  if (!items?.length) return null;

  return (
    <section className="mt-10 border border-border bg-background p-6 md:p-8">
      <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{bilingual(title)}</p>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <figure key={item.src} className="border border-border bg-brand-cream/35 overflow-hidden">
            <div className="bg-background">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className={`w-full aspect-[4/3] ${fit === "contain" ? "object-contain p-3" : "object-cover"}`}
              />
            </div>
            <figcaption className="p-4">
              <p className="whitespace-pre-line font-serif-tc text-base text-brand-ink leading-relaxed">{bilingual(item.title)}</p>
              {item.note && <p className="mt-2 whitespace-pre-line text-xs uppercase tracking-[0.16em] text-brand-clay">{bilingual(item.note)}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function TextColumns({ transport, lifestyle }: { transport: string[]; lifestyle: string[] }) {
  const groups = [
    { title: "Transport", subtitle: "交通", items: transport },
    { title: "Lifestyle", subtitle: "生活機能", items: lifestyle },
  ];

  return (
    <section className="mt-10 grid lg:grid-cols-2 gap-6">
      {groups.map((group) => (
        <div key={group.title} className="border border-border bg-background p-6 md:p-8">
          <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{group.title}</p>
          <p className="mt-1 font-serif-tc text-xl text-brand-forest">{group.subtitle}</p>
          <div className="mt-5 grid gap-4">
            {group.items.map((item) => (
              <div key={item} className="whitespace-pre-line border border-border bg-brand-cream/35 p-4 text-sm leading-loose text-foreground/70">
                {bilingual(item)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function ProjectAbout({ project }: { project: Project }) {
  return (
    <section className="mt-10 border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">About This Project</p>
      <p className="mt-1 font-serif-tc text-xl text-brand-forest">關於本案</p>
      <div className="mt-5 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <h4 className="font-display text-3xl text-brand-ink leading-tight">{project.name}</h4>
          <p className="mt-5 whitespace-pre-line font-serif-tc text-base leading-loose text-foreground/70">
            {bilingual(project.description)}
          </p>
          <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm leading-loose text-foreground/70">
            <p>KHANTHAROS reviews location, transportation, lifestyle, layout planning, and future rental or resale conditions before recommending a project.</p>
            <p className="font-serif-tc">KHANTHAROS 會從地段、交通、生活機能、房型規劃與未來轉售出租條件整理重點，協助客戶判斷是否符合自住、收租或資產配置需求。</p>
          </div>
        </div>
        <div className="lg:col-span-5 grid gap-3">
          {[project.developer, project.area, project.status].map((item) => (
            <div key={item} className="whitespace-pre-line border border-border bg-brand-cream/45 px-5 py-4 text-sm leading-relaxed text-brand-ink">
              {bilingual(item)}
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
      question: "Who is this project suitable for? · 這個建案適合哪一類買方？",
      answer: `${project.name} is suitable for buyers who value the ${project.area} location and want to compare lifestyle comfort with rental potential.\n\n${project.name} 適合重視 ${project.area} 區域條件、希望比較自住舒適度與出租潛力的買方。實際是否適合，仍會依預算、持有時間與租金目標進一步評估。`,
    },
    {
      question: "What is the ownership and sales status? · 產權與銷售狀態是什麼？",
      answer: `Ownership information: ${project.ownership}. Current project status: ${project.status}.\n\n目前頁面整理的產權資訊為：${project.ownership}。建案狀態為：${project.status}。正式購買前仍需以開發商最新銷售資料與合約文件為準。`,
    },
    {
      question: "What layouts are available for reference? · 有哪些房型或格局可以參考？",
      answer: `Current layout summary: ${project.size}.\n\n目前整理的房型方向為：${project.size}。下方會持續補入樓層平面圖與單位格局圖，方便直接在本網站比較。`,
    },
    {
      question: "How are the transportation and lifestyle facilities? · 交通與生活機能如何？",
      answer: `${project.transport[0]}\n\n${project.lifestyle[0]}\n\n我們也會依客戶需求補充通勤、學校、醫院、商場與出租客群分析。`,
    },
  ];

  return (
    <section className="mt-8 border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Common Questions</p>
      <p className="mt-1 font-serif-tc text-xl text-brand-forest">常見問題</p>
      <div className="mt-5 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border border-border bg-brand-cream/35 p-5">
            <summary className="cursor-pointer list-none font-serif-tc text-lg text-brand-ink flex items-center justify-between gap-4">
              <span className="whitespace-pre-line">{bilingual(faq.question)}</span>
              <span className="text-brand-clay transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(faq.answer)}</p>
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
            src={project.gallery?.[0]?.src || images[index % images.length]}
            alt={project.name}
            width={900}
            height={1120}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
          />
          <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium whitespace-pre-line">
            {bilingual(project.type)}
          </div>
        </div>
        <div className={`border border-t-0 p-6 transition-colors ${isActive ? "border-brand-forest bg-brand-cream" : "border-border"}`}>
          <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{bilingual(project.area)}</p>
          <h3 className="mt-3 font-display text-2xl text-brand-ink leading-tight">{project.name}</h3>
          <p className="mt-4 whitespace-pre-line font-serif-tc text-sm leading-loose text-foreground/65">
            {bilingual(project.description)}
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

  const scrollToDetails = () => {
    window.setTimeout(() => {
      document.getElementById("selected-project")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const chooseProject = (projectName: string) => {
    setSelectedName(projectName);
    scrollToDetails();
  };

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
                onSelect={() => chooseProject(project.name)}
              />
            ))}
          </div>

          {selectedProject && (
            <section id="selected-project" className="scroll-mt-24 mt-12 border border-border bg-brand-cream p-8 md:p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Selected Project</p>
                  <p className="mt-1 font-serif-tc text-xl text-brand-forest">建案詳情</p>
                  <h3 className="mt-4 font-display text-4xl text-brand-ink leading-tight">{selectedProject.name}</h3>
                  <p className="mt-3 whitespace-pre-line font-serif-tc text-xl text-brand-forest">{bilingual(selectedProject.area)}</p>
                  <p className="mt-6 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(selectedProject.description)}</p>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
                  {[
                    ["Developer · 開發商", selectedProject.developer],
                    ["Status · 建案狀態", selectedProject.status],
                    ["Ownership · 產權", selectedProject.ownership],
                    ["Room Planning · 房型規劃", selectedProject.size],
                    ["Address · 地址", selectedProject.address],
                    ["Project Type · 建案類型", selectedProject.type],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-background p-5">
                      <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.22em] text-brand-clay font-medium">{bilingual(label)}</p>
                      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {selectedProject.highlights.map((item) => (
                  <div key={item} className="whitespace-pre-line border border-border bg-background px-5 py-4 font-serif-tc text-sm leading-loose text-foreground/70">
                    {bilingual(item)}
                  </div>
                ))}
              </div>

              <MediaGallery title="Project Images · 建案圖片" items={selectedProject.gallery} />
              <MediaGallery title="Unit Layout Images · 單位格局圖" items={selectedProject.unitPlanImages} fit="contain" />
              <ProjectAbout project={selectedProject} />
              <ProjectFaq project={selectedProject} />
              <TextColumns transport={selectedProject.transport} lifestyle={selectedProject.lifestyle} />
              <MediaGallery title="Floor Plan Images · 樓層平面圖" items={selectedProject.floorPlanImages} fit="contain" />

              <div className="mt-10 overflow-hidden border border-border bg-background">
                <iframe
                  title={`${selectedProject.name} map`}
                  src={mapSrc}
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
