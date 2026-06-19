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

const projectStub = (name: string, area: string, type: string, developer: string, description: string): Project => ({
  name,
  area,
  type,
  developer,
  status: "New / active project information",
  ownership: "Freehold condominium, subject to project terms",
  size: "Project layouts and availability subject to latest sales materials",
  address: `${area}, Thailand`,
  mapQuery: `${name} ${area}`,
  description,
  highlights: ["Curated location", "Developer profile", "Suitable for lifestyle and rental planning"],
  transport: ["Access to nearby city routes", "Suitable for practical commute planning", "District demand to be reviewed by buyer profile"],
  lifestyle: ["Everyday retail and dining nearby", "Residential lifestyle environment", "Rental and long-stay demand to be reviewed"],
  floorPlans: ["Typical floor plan", "Facility floor", "Building circulation plan"],
  unitLayouts: ["1-bedroom", "1-bedroom plus", "2-bedroom"],
});

const bangkokProjects: Project[] = [
  projectStub("FLO by Sansiri", "Bangkok Riverside", "New Launch Condominium", "Sansiri", "A riverside-focused residence by Sansiri, planned for buyers who want Bangkok city access with a softer residential atmosphere near the Chao Phraya lifestyle corridor."),
  {
    name: "Life Rama 4 - Asoke",
    area: "Rama 4 / Asoke · 拉瑪四 / 阿索克",
    type: "Completed High-rise Condominium · 已完工高樓層公寓",
    developer: "AP ME 12 Co., Ltd. · AP 集團關係企業",
    status: "Ready project materials available · 已整理完整建案素材",
    ownership: "Freehold condominium, subject to foreign quota and contract terms · 永久產權公寓，外國人額度與合約條件以開發商文件為準",
    size: "1 building, 39 storeys; 1,237 residential units, 2 shops; approx. 496 parking lots · 1 棟 39 層，共 1,237 戶住宅、2 間商鋪，約 496 個車位",
    address: "Rama 4 Road, Khlong Toei, Bangkok 10110 · 曼谷 Khlong Toei 區 Rama 4 路 10110",
    mapQuery: "Life Rama 4 Asoke Rama 4 Road Khlong Toei Bangkok",
    description: "Life Rama 4 - Asoke is a large-scale city condominium by AP ME 12 on Rama 4 Road, Khlong Toei. The project is positioned for buyers who want a Bangkok CBD-fringe address with practical access toward Asoke, Sukhumvit, Queen Sirikit Convention Centre and Rama 4 business districts.\n\n本案位於曼谷 Rama 4 Road、Khlong Toei 區，由 AP ME 12 開發，為 39 層高樓層公寓。建案規劃住宅、商鋪、停車樓層、高樓層花園、泳池、健身房、蒸氣室與桑拿，適合重視市中心交通、出租需求與生活機能的買方。",
    highlights: [
      "CBD-fringe Rama 4 / Asoke location · Rama 4 / Asoke 城市核心外圍地段",
      "1,237 residential units plus 2 shops · 1,237 戶住宅加 2 間商鋪",
      "Maintenance fee 50 baht/sq.m./month; sinking fund 500 baht/sq.m. · 管理費 50 泰銖/平方公尺/月；公共基金 500 泰銖/平方公尺",
    ],
    transport: [
      "Convenient access toward Asoke, Sukhumvit, Queen Sirikit Convention Centre and central Bangkok · 可銜接 Asoke、Sukhumvit、詩麗吉皇后會議中心與曼谷市中心",
      "Suitable for tenants working around Rama 4, Sukhumvit, CBD and expressway-connected districts · 適合 Rama 4、Sukhumvit、CBD 與快速道路沿線工作客群",
      "Rama 4 is an important city corridor connecting office, convention, hospital and residential demand · Rama 4 是串聯辦公、會展、醫療與住宅需求的重要城市走廊",
    ],
    lifestyle: [
      "Facilities include 1st floor garden, 9th floor garden, 36th-39th floor gardens, swimming pool, fitness room, steam room and sauna room · 公設包含 1 樓花園、9 樓花園、36-39 樓高空花園、泳池、健身房、蒸氣室與桑拿",
      "Security includes 24-hour guards, CCTV at main entrance, lobby, parking area and passenger elevators, plus access control · 管理包含 24 小時保全、主要入口/大廳/停車區/電梯 CCTV 與門禁系統",
      "Close to city lifestyle, business, hospital and convention demand around Rama 4 and Sukhumvit · 鄰近 Rama 4 與 Sukhumvit 一帶的商務、醫療、會展與生活需求",
    ],
    floorPlans: ["Simplex Floorplan", "Simplex Typical Floor Plans", "Vertiplex Floorplan"],
    unitLayouts: ["Simplex Type A and B", "Vertiplex Type C to K", "Official floor and unit plans"],
    gallery: [
      { title: "Project Overview · 建案外觀概覽", src: driveImage("1AL9VvmNKpz3j0pfUSNJmVYRiypmYdYqh"), note: "Exterior reference · 外觀參考" },
      { title: "Swimming Pool & Jacuzzi · 泳池與按摩池", src: driveImage("1ugehNPxMVC6XUZPFG8HhKwMfi94fXX-Q"), note: "Facilities actual photo · 公設實景圖" },
      { title: "The Parlour · 迎賓客廳", src: driveImage("1Ou4F1SlN4YtX8p062UUojUOGE1k0tK5w"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Playfulness Bar · 休閒吧檯", src: driveImage("163BUYbpRLW48xMbEE2RvCBrAJ7N5SrTv"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Sky Studio · 空中共享空間", src: driveImage("1yM6XuDQC_WK3JjnzOrS7rT-h9BzTY4Ua"), note: "Facilities actual photo · 公設實景圖" },
      { title: "Benchakitti Park View · 班嘉奇蒂公園景觀", src: driveImage("1TCb-nj1qylcZ4ho3VBsreGFE0dkkJZv7"), note: "View reference · 景觀參考" },
    ],
    floorPlanImages: lifeRama4FloorPlanImages,
    unitPlanImages: lifeRama4UnitPlanImages,
  },
  projectStub("Goodday Sukhumvit 93", "Sukhumvit 93", "Low-rise Condominium", "Sansiri", "A Sukhumvit 93 residence with approachable positioning, suited for buyers looking for an easy-to-understand Bangkok entry point with everyday convenience."),
  projectStub("LOVE Charoen Nakhon", "Charoen Nakhon", "High-rise Condominium", "Origin Property", "A Charoen Nakhon project placed near Bangkok's expanding riverside lifestyle zone, where retail, transport, and residential demand continue to mature."),
  projectStub("Ideo Sukhumvit Rama 4", "Sukhumvit / Rama 4", "Condominium", "Ananda Development", "A Rama 4 and Sukhumvit city project with Ananda's transit-oriented positioning, suitable for buyers who prioritize connectivity and rental depth."),
  projectStub("Aspire Sukhumvit - Rama 4", "Sukhumvit / Rama 4", "Condominium", "AP Thailand", "A value-focused city residence in the Sukhumvit and Rama 4 area, balancing accessibility, facilities, and investment entry price considerations."),
  projectStub("The Residences 38", "Thonglor", "Luxury Residence", "ANANDA, BTS Group and Rabbit Holdings", "A limited luxury residence near BTS Thong Lo, designed around privacy, hotel-style service, and prime Sukhumvit living for high-end owner-occupiers."),
  projectStub("XT 10 Ekkamai", "Ekkamai", "Condominium", "Sansiri", "An Ekkamai project positioned for a younger urban lifestyle, with access to Sukhumvit, restaurants, community malls, and tenant demand from the east-side corridor."),
  projectStub("Porsche Design Tower Bangkok", "Thonglor", "Ultra Luxury Branded Residence", "Ananda Development and Porsche Design", "A rare branded luxury tower in Thonglor, created for ultra-high-end buyers seeking privacy, design identity, and collectible real estate in Bangkok."),
  projectStub("COCO PARC", "Rama 4 / Lumpini", "Luxury Condominium", "Ananda Development and Dusit International", "A luxury residence close to Lumpini and Rama 4, positioned for buyers who want direct access to central business, green space, and established city infrastructure."),
  projectStub("Supalai Icon Sathorn", "Sathorn", "Mixed-use Residence", "Supalai", "A large-scale Sathorn address with mixed-use convenience, suited for buyers who value a recognized CBD location and established developer profile."),
  projectStub("Sansiri Via 34", "Sukhumvit 34", "Low-rise Luxury Condominium", "Sansiri", "A private Sukhumvit 34 residence in a quieter pocket near Thonglor and Phrom Phong, suitable for buyers who prefer calm city living over high-density towers."),
];

const phuketProjects: Project[] = [
  projectStub("Banyan Tree Beach Residences Oceanus", "Bang Tao / Laguna Phuket", "Beach Residence", "Banyan Group", "A premium beach residence concept under the Banyan Tree lifestyle umbrella, designed for buyers seeking resort living, privacy, and long-term Phuket asset value."),
  projectStub("The Cube Amaze Phuket - Srisoonthorn", "Srisoonthorn, Thalang", "Low-rise Resort Condominium", "Soken Development Group", "A 7-storey low-rise resort condominium in Srisoonthorn, positioned for practical Phuket living with resort-style common areas and central island connectivity."),
  projectStub("The Title Cielo Rawai", "Rawai", "Resort Condominium", "Rhom Bho Property", "A Rawai-focused resort residence suitable for buyers who want a southern Phuket lifestyle, beach access, and a product that can serve both personal use and rental planning."),
  projectStub("KATA BELLO (The Title KataBello)", "Kata", "Resort Residence", "Rhom Bho Property", "A Kata-area resort residence concept under The Title brand, suited for buyers who want a west-coast Phuket location with holiday appeal and rental potential."),
  projectStub("The Title Heritage Bang Tao", "Bang Tao", "Resort Residence", "Rhom Bho Property", "A Bang Tao residence concept designed around Phuket's established resort district, suitable for buyers prioritizing beach lifestyle, services, and long-term area growth."),
];

function MediaGallery({ title, items, fit = "cover" }: { title: string; items?: ProjectMedia[]; fit?: "cover" | "contain" }) {
  if (!items?.length) return null;

  return (
    <section className="mt-10 bg-background p-5 md:p-7 border border-border">
      <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{bilingual(title)}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.src} className="overflow-hidden bg-brand-cream/35 border border-border">
            <div className="bg-background">
              <img src={item.src} alt={item.title} loading="lazy" className={`w-full aspect-[4/3] ${fit === "contain" ? "object-contain p-3" : "object-cover"}`} />
            </div>
            <figcaption className="p-4">
              <p className="whitespace-pre-line font-serif-tc text-sm text-brand-ink leading-relaxed">{bilingual(item.title)}</p>
              {item.note && <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(item.note)}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ImageCarousel({ title, items }: { title: string; items?: ProjectMedia[] }) {
  const [index, setIndex] = useState(0);
  if (!items?.length) return null;
  const item = items[index];
  const previous = () => setIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === items.length - 1 ? 0 : current + 1));

  return (
    <section className="bg-background border border-border p-5 md:p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">{bilingual(title)}</p>
          <p className="mt-2 text-xs text-foreground/55">{index + 1} / {items.length}</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={previous} aria-label="Previous image" className="h-10 w-10 border border-border text-xl text-brand-ink hover:border-brand-forest hover:text-brand-forest">‹</button>
          <button type="button" onClick={next} aria-label="Next image" className="h-10 w-10 border border-border text-xl text-brand-ink hover:border-brand-forest hover:text-brand-forest">›</button>
        </div>
      </div>
      <figure className="mt-5 overflow-hidden border border-border bg-brand-cream/25">
        <div className="bg-background">
          <img src={item.src} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-contain p-3" />
        </div>
        <figcaption className="border-t border-border bg-brand-cream/35 p-4">
          <p className="whitespace-pre-line font-serif-tc text-base text-brand-ink leading-relaxed">{bilingual(item.title)}</p>
          {item.note && <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(item.note)}</p>}
        </figcaption>
      </figure>
    </section>
  );
}

function ProjectCard({ project, index, isActive, onSelect }: { project: Project; index: number; isActive: boolean; onSelect: () => void }) {
  return (
    <article className="group bg-background">
      <button type="button" onClick={onSelect} className="block w-full text-left">
        <div className="relative overflow-hidden">
          <img src={project.gallery?.[0]?.src || images[index % images.length]} alt={project.name} width={900} height={1120} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out" />
          <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium whitespace-pre-line">{bilingual(project.type)}</div>
        </div>
        <div className={`border border-t-0 p-6 transition-colors ${isActive ? "border-brand-forest bg-brand-cream" : "border-border"}`}>
          <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{bilingual(project.area)}</p>
          <h3 className="mt-3 font-display text-2xl text-brand-ink leading-tight">{project.name}</h3>
          <p className="mt-4 whitespace-pre-line font-serif-tc text-sm leading-loose text-foreground/65">{bilingual(project.description)}</p>
          <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand-forest font-medium">{isActive ? "Details Open · 詳情已展開" : "View Details · 查看詳情"}</div>
        </div>
      </button>
    </article>
  );
}

function DetailHero({ project }: { project: Project }) {
  const cover = project.gallery?.[0]?.src || property1;
  const stats = [
    ["Status", project.status],
    ["Tower", project.size.split(";")[0]],
    ["Units", project.size.split(";")[1] || project.size],
    ["Parking", project.size.split(";")[2] || "Project parking plan"],
    ["Ownership", project.ownership],
    ["Developer", project.developer],
  ];

  return (
    <section className="bg-background border border-border overflow-hidden">
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-7 p-6 md:p-9">
          <div className="inline-flex bg-brand-forest text-brand-cream px-4 py-2 text-[10px] uppercase tracking-[0.28em] font-semibold">{project.status.split(" · ")[0]}</div>
          <h3 className="mt-6 font-display text-4xl md:text-6xl text-brand-ink leading-[1.02]">{project.name}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(project.address)}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-brand-forest">
            <span>{project.developer.split(" · ")[0]}</span>
            <span>BTS / MRT city access</span>
            <span>Rama 4 corridor</span>
          </div>
        </div>
        <div className="lg:col-span-5 bg-brand-cream/75 p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-border">
          <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Project Snapshot</p>
          <h4 className="mt-2 font-serif-tc text-2xl text-brand-forest">建案速覽</h4>
          <div className="mt-6 grid grid-cols-2 gap-px bg-border">
            {stats.map(([label, value]) => (
              <div key={label} className="bg-background p-4 min-h-24">
                <p className="text-[10px] uppercase tracking-[0.18em] text-brand-clay">{label}</p>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <a href={lineUrl} target="_blank" rel="noreferrer" className="bg-[#06C755] px-5 py-4 text-center text-[11px] uppercase tracking-[0.2em] font-semibold text-white">LINE</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-brand-forest px-5 py-4 text-center text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-cream">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-px bg-border">
        <div className="lg:col-span-2 bg-background"><img src={cover} alt={project.name} className="w-full h-full min-h-[360px] max-h-[620px] object-cover" /></div>
        <div className="grid grid-rows-2 gap-px bg-border">
          {(project.gallery || []).slice(1, 3).map((image) => <img key={image.src} src={image.src} alt={image.title} className="w-full h-full min-h-44 object-cover bg-background" />)}
        </div>
      </div>
    </section>
  );
}

function ProjectOverview({ project }: { project: Project }) {
  const rows = [
    ["Developer · 發展商", project.developer],
    ["Ownership · 產權類型", project.ownership],
    ["Room Planning · 戶型規劃", project.size],
    ["Address · 建案地址", project.address],
    ["Management Fee · 管理費", "50 baht/sq.m./month · 50 泰銖/平方公尺/月"],
    ["Sinking Fund · 公共基金", "500 baht/sq.m. · 500 泰銖/平方公尺"],
  ];

  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Project Brief</p>
      <h4 className="mt-2 font-serif-tc text-2xl text-brand-forest">建案速覽</h4>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {rows.map(([label, value]) => (
          <div key={label} className="bg-brand-cream/30 p-5">
            <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.18em] text-brand-clay">{bilingual(label)}</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectHighlights({ project }: { project: Project }) {
  const [tab, setTab] = useState<"intro" | "developer" | "lifestyle">("intro");
  const tabs = [
    { key: "intro" as const, label: "建案簡介" },
    { key: "developer" as const, label: "建商介紹" },
    { key: "lifestyle" as const, label: "生活機能" },
  ];
  const text = {
    intro: `${project.name} is arranged as a city-residence option for clients who want Rama 4 access with a strong rental-use logic. The project scale, facilities and upper-floor common areas make it easier to compare for both self-use and investment planning.\n\n${project.name} 適合想要卡位 Rama 4 城市走廊、同時重視出租邏輯的買方。建案規模、公設配置與高樓層公共空間完整，適合拿來比較自住、長租與資產配置。`,
    developer: `${project.developer} is connected with the AP development ecosystem, one of Thailand's well-known residential developers. Buyers still need to confirm final sales documents, quota and transfer conditions before purchase.\n\n${project.developer} 屬於 AP 開發體系，AP 是泰國市場能見度高的住宅開發商之一。正式購買前仍需確認最新報價、外國人額度、合約與過戶條件。`,
    lifestyle: `${project.lifestyle.join("\n\n")}\n\n${project.transport.join("\n\n")}`,
  };

  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">建案亮點 HIGHLIGHTS</h4>
      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button key={item.key} type="button" onClick={() => setTab(item.key)} className={`px-5 py-3 text-sm font-serif-tc transition-colors ${tab === item.key ? "bg-brand-forest text-brand-cream" : "border border-border text-brand-ink hover:border-brand-forest"}`}>{item.label}</button>
        ))}
      </div>
      <p className="mt-6 whitespace-pre-line text-sm leading-loose text-foreground/75">{bilingual(text[tab])}</p>
      <div className="mt-7 grid md:grid-cols-3 gap-4">
        {project.highlights.map((item) => <div key={item} className="whitespace-pre-line bg-brand-cream/40 border border-border p-5 text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}
      </div>
    </section>
  );
}

function PlanShowcase({ project }: { project: Project }) {
  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">樓層平面圖 & 單位格局圖</h4>
      <p className="mt-3 text-sm leading-relaxed text-foreground/60">Floor Plan 整層樓配置 · Unit Plan 各戶格局</p>
      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <ImageCarousel title="Floor Plan · 樓層平面圖" items={project.floorPlanImages} />
        <ImageCarousel title="Unit Plan · 單位格局圖" items={project.unitPlanImages} />
      </div>
    </section>
  );
}

function Facilities() {
  const items = ["Swimming Pool · 泳池", "Fitness Room · 健身房", "Sky Garden · 空中花園", "Steam / Sauna · 蒸氣室 / 桑拿", "Lobby & Lounge · 大廳與休憩空間", "24h Security · 24 小時保全"];
  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">公共設施</h4>
      <p className="mt-3 text-sm leading-relaxed text-foreground/60">Selected facilities based on the project materials · 依建案素材整理主力公設</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {items.map((item) => <div key={item} className="bg-brand-cream/35 p-5 text-sm whitespace-pre-line text-brand-ink">{bilingual(item)}</div>)}
      </div>
    </section>
  );
}

function LocationSection({ project, mapSrc }: { project: Project; mapSrc: string }) {
  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">地理位置與週邊機能</h4>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/60">{bilingual(project.address)}</p>
      <div className="mt-6 overflow-hidden border border-border bg-brand-cream/30">
        <iframe title={`${project.name} map`} src={mapSrc} className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="mt-5 grid md:grid-cols-2 gap-px bg-border">
        {project.transport.concat(project.lifestyle).slice(0, 6).map((item) => <div key={item} className="bg-brand-cream/35 p-5 whitespace-pre-line text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}
      </div>
    </section>
  );
}

function ProjectFaq({ project }: { project: Project }) {
  const isLife = project.name === "Life Rama 4 - Asoke";
  const faqs = isLife
    ? [
        { question: "這個建案和 Life Sukhumvit - Rama 4 有什麼不同？", answer: "兩者都屬於 Rama 4 / Sukhumvit 生活圈可比較的 AP 系列產品，但 Life Rama 4 - Asoke 更靠近 Queen Sirikit、Asoke 與 Khlong Toei 商務軸線，且已整理現有實景、公設與格局素材。Life Sukhumvit - Rama 4 則是更新一代、較靠 Phra Khanong / Sukhumvit 主幹道的新案定位。" },
        { question: "本案最主要的地段優勢是什麼？", answer: "本案的核心優勢在於 Rama 4 走廊，可往 Asoke、Sukhumvit、Queen Sirikit Convention Centre 與市中心商務區移動。對租客來說，這類位置同時吃到辦公、會展、醫療、商業與長租需求，比單純住宅區更有出租深度。" },
        { question: "以出租投資角度來看，這個案子適合嗎？", answer: "若買方目標是長租型現金流，本案的規模、公設、城市位置與 Rama 4 / Sukhumvit 客群都有可比較性。不過實際投報仍需依購入價格、樓層、房型、裝修狀況、管理費與當期租金行情試算，建議看完房型圖後再做個別評估。" },
        { question: "車位比例與大型社區規模會不會影響轉售？", answer: "本案約 496 個車位、1,237 戶住宅，屬於曼谷高樓層大型社區常見配置。大型社區的優點是公設完整、租客辨識度高，缺點是同案競爭也會較明顯，因此轉售時會更看重樓層、景觀、裝修與入手價格。" },
      ]
    : [
        { question: "Who is this project suitable for? · 這個建案適合哪一類買方？", answer: `${project.name} is suitable for buyers who value the ${project.area} location and want to compare lifestyle comfort with rental potential.\n\n${project.name} 適合重視 ${project.area} 區域條件、希望比較自住舒適度與出租潛力的買方。` },
        { question: "What should I confirm before purchase? · 購買前需要確認什麼？", answer: "Confirm updated pricing, quota, payment schedule, contract terms and transfer fees before making a decision.\n\n正式購買前建議確認最新價格、外國人額度、付款表、合約條款與過戶費用。" },
      ];

  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">關於本案 · 常見問題</h4>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="group py-5" open={index === 0}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-serif-tc text-lg text-brand-ink">
              <span className="whitespace-pre-line">{bilingual(faq.question)}</span>
              <span className="text-2xl text-brand-clay transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(faq.answer)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

type DetailTab = "overview" | "images" | "highlights" | "plans" | "facilities" | "location" | "faq";

function ProjectDetailTabs({ project, mapSrc }: { project: Project; mapSrc: string }) {
  const [activeTab, setActiveTab] = useState<DetailTab>("overview");
  const tabs: { key: DetailTab; label: string }[] = [
    { key: "overview", label: "建案速覽" },
    { key: "images", label: "建案圖片" },
    { key: "highlights", label: "建案亮點" },
    { key: "plans", label: "平面 / 格局" },
    { key: "facilities", label: "公共設施" },
    { key: "location", label: "位置機能" },
    { key: "faq", label: "常見問題" },
  ];

  return (
    <div className="mt-10">
      <div className="sticky top-20 z-20 flex gap-2 overflow-x-auto border border-border bg-background/95 p-2 backdrop-blur">
        {tabs.map((tab) => (
          <button key={tab.key} type="button" onClick={() => setActiveTab(tab.key)} className={`shrink-0 px-5 py-3 text-sm font-serif-tc transition-colors ${activeTab === tab.key ? "bg-brand-forest text-brand-cream" : "text-brand-ink hover:bg-brand-cream"}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "overview" && <ProjectOverview project={project} />}
        {activeTab === "images" && <MediaGallery title="Project Images · 建案圖片" items={project.gallery} />}
        {activeTab === "highlights" && <ProjectHighlights project={project} />}
        {activeTab === "plans" && <PlanShowcase project={project} />}
        {activeTab === "facilities" && <Facilities />}
        {activeTab === "location" && <LocationSection project={project} mapSrc={mapSrc} />}
        {activeTab === "faq" && <ProjectFaq project={project} />}
      </div>
    </div>
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
    if (firstProject) setSelectedName(firstProject.name);
  };

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">PreSell · 預售 / 新成屋</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">Curated new launches in Bangkok and Phuket.</h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-foreground/70">Project information is reorganized into our own advisory notes, so clients can compare every option directly on the KHANTHAROS website.</p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">建案資料整理成 KHANTHAROS 自己的顧問筆記，客戶可以直接在我們網站內比較，不需要跳到其他網站。</p>
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
              <button onClick={() => chooseRegion("bangkok")} className={`flex-1 md:flex-none px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${region === "bangkok" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}>Bangkok</button>
              <button onClick={() => chooseRegion("phuket")} className={`flex-1 md:flex-none px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${region === "phuket" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}>Phuket</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={(page - 1) * pageSize + index} isActive={selectedProject.name === project.name} onSelect={() => chooseProject(project.name)} />
            ))}
          </div>

          {selectedProject && (
            <section id="selected-project" className="scroll-mt-24 mt-12">
              <DetailHero project={selectedProject} />
              <ProjectDetailTabs project={selectedProject} mapSrc={mapSrc} />
            </section>
          )}

          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-between border-t border-border pt-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">Page {page} of {totalPages}<span className="ml-3 font-serif-tc normal-case tracking-normal text-brand-clay">共 {projects.length} 個建案</span></p>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button key={pageNumber} onClick={() => choosePage(pageNumber)} className={`h-10 w-10 font-display text-sm transition-colors ${page === pageNumber ? "bg-brand-forest text-brand-cream" : "border border-border text-brand-ink hover:border-brand-forest"}`}>{pageNumber}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="fixed right-5 bottom-6 z-[70] flex flex-col gap-3">
        <a href={lineUrl} target="_blank" rel="noreferrer" className="bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white shadow-lg hover:bg-[#05b34d] transition-colors">LINE</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream shadow-lg hover:bg-brand-ink transition-colors">WhatsApp</a>
      </div>
    </main>
  );
}
