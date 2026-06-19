import { useMemo, useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const lineUrl = "https://lin.ee/W1y4D20";
const whatsappUrl = "https://wa.me/66985973849";
const driveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
const bilingual = (text: string) => text.split(" · ").join("\n");
const fallbackImages = [property1, property2, property3];

type ProjectMedia = { title: string; src: string; note?: string };
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
  fees?: { management: string; sinking: string };
};

const mediaRows = (rows: string): ProjectMedia[] =>
  rows.trim().split("\n").filter(Boolean).map((row) => {
    const [title = "", id = "", note] = row.split("|");
    return { title, src: driveImage(id), note };
  });

const remoteRows = (rows: string): ProjectMedia[] =>
  rows.trim().split("\n").filter(Boolean).map((row) => {
    const [title = "", src = "", note] = row.split("|");
    return { title, src, note };
  });

const floGallery = remoteRows(`
FLO by Sansiri Exterior · FLO by Sansiri 外觀|https://www.shangherealestate.com/wp-content/uploads/2026/06/flo-by-sansiri-1.jpg|Project Image · 建案圖片
FLO Lifestyle Visual · FLO 生活意象|https://www.shangherealestate.com/wp-content/uploads/2026/06/public.avif|Project Image · 建案圖片
`);

const gooddayGallery = mediaRows(`
The Living Hall · 迎賓大廳|1qseLwXyGSlASj_jmLBhX6FoyotQdfOFF|Perspective · 建案示意圖
The Hive · 共享空間|1WovBzHVgJoAGACBttc-cJ0UxNLFW1e1M|Facilities · 公設示意圖
Goodday Club · 社交會所|1fJRxnfvur0CEuSIhQCikvDkfY-TgKVSF|Facilities · 公設示意圖
Mock Up Room · 樣品屋|1eX8qtRSEP2piDRE17VtQweYvaVwJPsuQ|Unit Interior · 室內示意圖
Swimming Pool · 泳池|1oZtmbCYfAsHMtBq9JdWx_F4AGS6dwKcq|Facilities · 公設示意圖
Top Facilities · 頂層公設|1xoSHlTG76tFMMEhgE__ARMGWpvJpzIvA|Facilities · 公設示意圖
`);

const ideoGallery = mediaRows(`
Drone Hero Shot · 空拍外觀|1nulkXgQomOLQ9-lfCULSDTIZawCAgD5v|Actual Photo · 實景照片
Hero Shot · 建案主視覺|1djv6D3i8nTkAtK3b_-q8Q1KmMkjWpyKP|Project Image · 建案圖片
Courtyard · 中庭|1IAiTv0qusKCYY67XKr95oL25IdcgOa3M|Project Image · 建案圖片
Pool · 泳池|15xtxYBT3jArDL-DxQtafSvUXnYB_rfC3|Facilities · 公設圖片
Sky Lounge · 空中休憩空間|1ptB3IlD4x_GfGw5LVL4BhzzeIWpPKaSX|Facilities · 公設圖片
Co-working · 共享辦公|15oJbOu9PkrD_TLFDW9S4wd6u0cDg7m4M3a|Facilities · 公設圖片
`);

const aspireGallery = mediaRows(`
Overall Day View · 建案日景外觀|1QWawt34GCJ38OjqZ6ikJGNIIHPiW3kL8|Perspective · 建案示意圖
Overall Night View · 建案夜景外觀|1HXK3QVTKx62lg6B5e8DbGptLDND5g3gX|Perspective · 建案示意圖
The Oasis · 綠意休憩空間|1eCWVoqk-4iI3p48sBAT25o3w__qzZeCy|Facilities · 公設示意圖
The Aspire Common · 共享公共空間|18ZKcGMUP93cLjFzXFvYwAamCb_sUoZxo|Facilities · 公設示意圖
`);

const residenceGallery = mediaRows(`
Building Hero Shot · 建築主視覺|13xuj7b6diCUNQYfiroRv4ugHQ4jvxXO-|Project Image · 建案圖片
Project Map · 建案位置圖|1EG7gkX_fckz5BoM5lye9lMq5N3bhCWdp|Map · 地圖
1BR Show Unit · 一房樣品屋|1tCfBaWNCwbNxO4N5VrDsPHi2x17xwSmD|Show Unit · 樣品屋
2BR Show Unit · 兩房樣品屋|1T74owAPiD7Hv-Olr2pSLVldkjQompQCr|Show Unit · 樣品屋
Facilities 01 · 公設實景 01|1j6WwPlxjIoozXqn5vFTwL-zw62BdFx-o|Facilities · 公設圖片
Facilities 02 · 公設實景 02|1y2P-hJnyy1yWoFgHpRbvhxBvCKe_Zw_u|Facilities · 公設圖片
`);

const porscheGallery = mediaRows(`
Porsche Design Tower · Porsche Design Tower 外觀|1TGRyRCT6TVXVWSuTCsIEXC9xCeGYHi58|Project Image · 建案圖片
The Crown Building · 皇冠建築意象|17tTcwz4azrYmgn_T5g-SGRCq0JlTbKDn|Project Image · 建案圖片
Duplex Living · 複式客廳|1BkxC1P4m8M12InSPHsyjgtNQ6bTdUXF5|Interior · 室內圖片
Passion Space · 私人超跑收藏空間|1ZnLxK6cfHcEXLRWYag3IiZz-qbbNYEjK|Facilities · 公設圖片
The Loop · The Loop 車道|1Q3A7pqrvjeIVpkl55Z9blT3OxyHZNAm-|Design Detail · 設計細節
`);

const cocoGallery = mediaRows(`
COCO PARC Hero · COCO PARC 主視覺|1IP1Hz0f82-FDRZp97bGw6qrEOPgse7k8|Project Image · 建案圖片
COCO PARC Exterior · COCO PARC 外觀|1BAVb8mA1pJsktNfXCCNhYbmZPjfji0Ke|Project Image · 建案圖片
Main Gate · 入口意象|1Vc9ERkqgua8ExkOT4TCWWSm7-_VfAmOo|Project Image · 建案圖片
Swimming Pool · 泳池|1VehfCSNyyPPUsN9QfbjJmPwUp13fY90x|Facilities · 公設圖片
Fitness · 健身房|1W56mQv6XXod5u2CpJdzXb_7Za_FxYy6K|Facilities · 公設圖片
COCO Map · 建案位置圖|11iDg3sRI-cmKK1fDGkOuU2YJDNwTudCT|Map · 地圖
`);

const xt10Gallery = mediaRows(`
Overall Building · 建案整體外觀|1g5UKQwklHZmd1S4Gju3LPKRmUM01X4Jr|Project Image · 建案圖片
Center Courtyard · 中庭花園|1X9-jVyNqmWpZnL7ElE2K1eLk9GnxnlnX|Project Image · 建案圖片
The Arrival · 迎賓入口|1rXdlpQ9RWTSwPWTq3SXy-cVzx-ZXm5Os|Facilities · 公設圖片
The Arcade · The Arcade 公共空間|1ZYIHFPWXGWFjUr_EAg5WPCxL9x4xBtlI|Facilities · 公設圖片
The Club Bar · The Club 酒吧|13_OjmDEkv9l0Koxinpd0JCPhKAv8rfyc|Facilities · 公設圖片
The Club Sky Lounge · The Club 空中 Lounge|1de8R9wUz4rLby8SyEz5j4GJnu-v7OU-H|Facilities · 公設圖片
The Community Desk · 共享辦公桌|1Twavg829U0iwJZaz5s4dhixoCuvb8tCc|Facilities · 公設圖片
The Day Lounge Building A · A 棟 Day Lounge|1BGcidttBdfEyGQOfeUv9alVd1O3j0yBB|Facilities · 公設圖片
The Gym Building B · B 棟健身房|1zJn8K097EKHQE33C0rgCFb_Em0VO9utJ|Facilities · 公設圖片
The Paw Park · 寵物公園|1nws3y3HjiM7Ieyl-0egmgBt1NE1UqCuw|Facilities · 公設圖片
The Pool · 泳池|1rhguJ30IeZOtFpc0Q0rh4-P-9M__fEfd|Facilities · 公設圖片
XT Club Day · XT Club 日景|1x7WlfIsQ7I_tczUxvf8xFHhXEpwpYBvi|Facilities · 公設圖片
XT10 Map 01 · XT10 區域地圖 01|1dn6dGk6NnBUAyFuLTot_93qafFSO8xbC|Map · 地圖
XT10 Map 02 · XT10 區域地圖 02|18YT-nkP230LexDg6vLCewY7OghDfnLGR|Map · 地圖
`);

const xt10FloorPlanImages = mediaRows(`
Tower A Floor 3 · A 棟 3 樓|1oFrRhL5JTqoV8GTs2EXsHkib11u7UkHx|Floor Plan · 樓層平面圖
Tower A Floor 6 · A 棟 6 樓|1Z6o6ytGQOLRclVFOMb7rV51YAQ3Va2Jj|Floor Plan · 樓層平面圖
Tower A Floor 8 · A 棟 8 樓|1spoLrf_kcxuN73P5ZmL-Tczw-k0WRgZC|Floor Plan · 樓層平面圖
Tower A Floor 19 · A 棟 19 樓|1DiZQOOVCe8EX2DOO-8q_Rx1BpiO8037_|Floor Plan · 樓層平面圖
Tower A Floor 22 · A 棟 22 樓|12mKi6v2yWNK3FMjCOYNbauJgv4OS6gwL|Floor Plan · 樓層平面圖
Tower B Floor 8 · B 棟 8 樓|1GgjmOt0MVSiydW3GZWHb2_Jjcip90gED|Floor Plan · 樓層平面圖
Tower B Floor 10 · B 棟 10 樓|16V-XO6BCNTqqI81f_B6olt_psq9keeeI|Floor Plan · 樓層平面圖
Tower B Floor 15 · B 棟 15 樓|1gapKb4Rz9KSjvdEKCHfPhuQUGFsRCB7H|Floor Plan · 樓層平面圖
Tower B Floor 21 · B 棟 21 樓|1MgcEuYUyrt7bltmNBOARhiy1ipofWfi0|Floor Plan · 樓層平面圖
Tower B Floor 25 · B 棟 25 樓|1HyCjWTIk-8KJus0UYmJYeNrMdDyK3EPU|Floor Plan · 樓層平面圖
`);

const xt10UnitPlanImages = mediaRows(`
Simplex 1A · 平層 1A 戶型|1A8AlX2Z9pm30nxBSDdXrhGxsRV3n9nIh|Unit Plan · 單位格局圖
Simplex 1Am · 平層 1Am 戶型|1kW-c_di6U-A_YKpmb_HlSBP22wFdK0Lg|Unit Plan · 單位格局圖
Simplex 1B · 平層 1B 戶型|13B-rWK49RDe5my0Hhmp1QvhAr2TuUq3K|Unit Plan · 單位格局圖
Simplex 1Bm · 平層 1Bm 戶型|1GlxJ45jyR02iUbw1udktCtkeFwKZtAM3|Unit Plan · 單位格局圖
Simplex 1C-1 · 平層 1C-1 戶型|1yLYtwF7WkPGlnScH-c4MSjUawi9z8P_7|Unit Plan · 單位格局圖
Simplex 1C-1m · 平層 1C-1m 戶型|1h917zDT7Pbf5BhCZxmy7Z5aGMmjbZxIN|Unit Plan · 單位格局圖
Simplex 1C-2 · 平層 1C-2 戶型|1Z_hUSRugmxu6YVe0wqhlMpuu1JjxhtAw|Unit Plan · 單位格局圖
Simplex 1C · 平層 1C 戶型|1ouAvRzDqWuqgjeN_MNw7TcuyZeZIV9nc|Unit Plan · 單位格局圖
Simplex 1Cm · 平層 1Cm 戶型|1R9k9G8MCtVOSYalLHf1SMgLsCjQhey88|Unit Plan · 單位格局圖
Simplex 2A-1 · 平層 2A-1 戶型|1jbeiiCd-emaPfnNaJ3rjXWmdqq8ReKWD|Unit Plan · 單位格局圖
Simplex 2A-2 · 平層 2A-2 戶型|1ORVY0AVag_W5arDtNpzt6Qs0f_KBJhy-|Unit Plan · 單位格局圖
Simplex 2A · 平層 2A 戶型|1BFGrd2PPMauYhYiN5CbAPrMJaK_6FX4l|Unit Plan · 單位格局圖
Simplex 2Am · 平層 2Am 戶型|1Tzx0Qrwh31gvV0uE8_xPbHE39Z-Nm1H3|Unit Plan · 單位格局圖
Simplex 2B · 平層 2B 戶型|1vCRdEbzrIj5hqNfddhQ23HI79RKxBzpR|Unit Plan · 單位格局圖
Simplex 2C · 平層 2C 戶型|1cYigx9jvpnOXjDs4W9dPKX67f4sboWHQ|Unit Plan · 單位格局圖
Simplex 2Cm · 平層 2Cm 戶型|1177104pNiiPNIL7KkZR9sX0UXtEvqIm6|Unit Plan · 單位格局圖
Simplex 2D · 平層 2D 戶型|1d_XuqxyKLD1qOQu9efoslVBUL-i4xkun|Unit Plan · 單位格局圖
Simplex 3A · 平層 3A 戶型|1K_hMh59Hw-wj58nLsYex-7M3Jq_6C38q|Unit Plan · 單位格局圖
Simplex 3B · 平層 3B 戶型|1Wg4L8SOFbAdzSGO5vb-TgFZ_CcZYQ_Fi|Unit Plan · 單位格局圖
Simplex 3C · 平層 3C 戶型|1FOxgT_p0fWJPIlNMeVy1lQI0aKTEtaGa|Unit Plan · 單位格局圖
Simplex 3D · 平層 3D 戶型|1o9aXLxzB_4io5hOI2UzZMWkfI8xO_yZ-|Unit Plan · 單位格局圖
Simplex 3E · 平層 3E 戶型|1XZt0EmfDDw7AfG1YhtH8rmaFTRoL41Ws|Unit Plan · 單位格局圖
Simplex 3F · 平層 3F 戶型|1Pd1ezijdS-Bqd1LAUjXyh07oijjjWJ9x|Unit Plan · 單位格局圖
Simplex 3G · 平層 3G 戶型|1Jn-yLP4EC2S_eOBFjyzFdvtiHX0kc3bA|Unit Plan · 單位格局圖
Simplex 3H · 平層 3H 戶型|1E4riAMvWE4Z1i_ZmvmmCBfMpe9quMaKx|Unit Plan · 單位格局圖
Loft 1D Garden · Loft 1D 花園戶型|1kTf7Rf82Xnsouv3f8bbJQS79kNHF2u5_|Unit Plan · 單位格局圖
Loft 1D · Loft 1D 戶型|1G8HZV1r-Y-7Spy29p2O9XIONpfFfMHAq|Unit Plan · 單位格局圖
Loft 1Dm Garden · Loft 1Dm 花園戶型|1esjnFhDRz2gkbxl8QTkRn4dEMrWMxTWx|Unit Plan · 單位格局圖
Loft 1Dm · Loft 1Dm 戶型|1WNvJbOnWg32Fz6DoYew4-YPbrjWokVtX|Unit Plan · 單位格局圖
Loft 1E Garden · Loft 1E 花園戶型|1EhtTvWMPN2PC-sXCo7EtOQ9I5I085vJU|Unit Plan · 單位格局圖
Loft 1E · Loft 1E 戶型|14d1YHmqCfTbKdProJLQ6iRpae3Jaxaoy|Unit Plan · 單位格局圖
Loft 1Em · Loft 1Em 戶型|184WujNZBK7sq-BpeUGz03Dtt0_boCmKa|Unit Plan · 單位格局圖
Loft 1F-1 · Loft 1F-1 戶型|1yvbiAT5tyF3gKCM1CNC0RpReKRMk3cSK|Unit Plan · 單位格局圖
Loft 1F Garden · Loft 1F 花園戶型|1u2OdmU_8VwefDcMUFsVpVG9r89jDGYVd|Unit Plan · 單位格局圖
Loft 1F · Loft 1F 戶型|1YysTv3iyw_tbhwj3jMZJLnceDMm4qOMT|Unit Plan · 單位格局圖
Loft 1Fm Garden · Loft 1Fm 花園戶型|1GgQVt8nEy1ouwtgNjqFfWKEsPl58aS_w|Unit Plan · 單位格局圖
Loft 1Fm · Loft 1Fm 戶型|1LfxcOgWM76EdGntTWaL43Ikw_9HnDVSD|Unit Plan · 單位格局圖
Loft 1G-1 · Loft 1G-1 戶型|1Br_2yI4q9I0jyMCfPjK6vV2ctfWGQnVV|Unit Plan · 單位格局圖
Loft 1G-2 · Loft 1G-2 戶型|1rGVoe7LjjyrQvII4Jnsw7xwwYWcExUoG|Unit Plan · 單位格局圖
Loft 1G-3 · Loft 1G-3 戶型|1rUAByzOpFUZ6q5g3aa9JV9J2Q7OOKVZU|Unit Plan · 單位格局圖
Loft 1G · Loft 1G 戶型|1GOybta6At3SQzS2lOrDHkK8dcd-sfCOG|Unit Plan · 單位格局圖
Loft 1Gm · Loft 1Gm 戶型|1TMkQQ1yCaQs62fSbujvaCjCHeRBy6CSY|Unit Plan · 單位格局圖
Loft 1H · Loft 1H 戶型|1ma0nh1ztoEuCSFfj7xoaKdGCZ3sJFO5r|Unit Plan · 單位格局圖
Loft 1Hm Garden · Loft 1Hm 花園戶型|1O_webrtKEfcnGFMtGXk5guq5pII7X1Xp|Unit Plan · 單位格局圖
Loft 1Hm · Loft 1Hm 戶型|1kqYskIckz3OZ0kDWt4o1knuns_bUOGIB|Unit Plan · 單位格局圖
Loft 2E · Loft 2E 戶型|1_vp6M0AeFhQNZSXsA-GUALP9x1O_hLvE|Unit Plan · 單位格局圖
`);

const bangkokProjects: Project[] = [
  {
    name: "FLO by Sansiri", area: "Khlong San / Chao Phraya · 空訕 / 昭披耶河岸", type: "Pre-sale Riverside Condominium · 預售河岸生活公寓", developer: "Sansiri Holding Six Co., Ltd. · Sansiri 關係企業", status: "Expected completion Dec 2025 · 預計 2025 年 12 月完工", ownership: "Freehold condominium · 永久產權公寓", size: "1 building, 22 storeys, 508 units · 1 棟 22 層，共 508 戶", address: "Somdet Chao Phraya Road, Khlong San, Bangkok · 曼谷 Khlong San 區 Somdet Chao Phraya Road", mapQuery: "FLO by Sansiri Khlong San Bangkok", description: "FLO by Sansiri is a Khlong San riverside lifestyle condominium near BTS Gold Line and ICONSIAM.\n\nFLO by Sansiri 位於 Khlong San 河岸生活圈，鄰近 BTS 金線與 ICONSIAM。", highlights: ["Near BTS Gold Line · 鄰近 BTS 金線", "Near ICONSIAM · 鄰近 ICONSIAM", "Sansiri riverside positioning · Sansiri 河岸產品定位"], transport: ["BTS Gold Line Khlong San · BTS 金線 Khlong San", "ICONSIAM lifestyle district · ICONSIAM 生活圈", "Charoen Nakhon access · 可銜接 Charoen Nakhon"], lifestyle: ["Sky bar, gym and pool · Sky Bar、健身房與泳池", "Riverside cafes and galleries · 河岸咖啡廳與藝廊", "Suitable for self-use and rental · 適合自住與出租"], floorPlans: ["2nd-4th", "5th", "6th-19th", "Rooftop"], unitLayouts: ["1 Bedroom", "2 Bedroom", "High ceiling options"], gallery: floGallery
  },
  {
    name: "Life Rama 4 - Asoke", area: "Rama 4 / Asoke · 拉瑪四 / 阿索克", type: "High-rise Condominium · 高樓層公寓", developer: "AP ME 12 Co., Ltd. · AP 集團關係企業", status: "Ready project materials available · 已整理建案素材", ownership: "Freehold condominium · 永久產權公寓", size: "1 building, 39 storeys, 1,237 units and 2 shops · 1 棟 39 層，共 1,237 戶與 2 間商鋪", address: "Rama 4 Road, Khlong Toei, Bangkok 10110 · 曼谷 Khlong Toei 區 Rama 4 路 10110", mapQuery: "Life Rama 4 Asoke Bangkok", description: "Life Rama 4 - Asoke is positioned for buyers who want Rama 4, Asoke, Sukhumvit and Queen Sirikit Convention Centre access.\n\nLife Rama 4 - Asoke 適合重視 Rama 4、Asoke、Sukhumvit 與詩麗吉皇后會議中心交通的買方。", highlights: ["Rama 4 / Asoke CBD fringe · Rama 4 / Asoke 城市核心外圍", "Large AP project · AP 大型建案", "Strong rental comparison · 出租比較性高"], transport: ["Asoke and Sukhumvit access · 可銜接 Asoke 與 Sukhumvit", "Queen Sirikit Convention Centre area · 詩麗吉皇后會議中心生活圈", "Rama 4 corridor · Rama 4 走廊"], lifestyle: ["Gardens, pool, gym, steam and sauna · 花園、泳池、健身房、蒸氣室與桑拿", "CBD tenant demand · 市中心租客需求", "Useful for long-stay rental planning · 適合長租規劃"], floorPlans: ["Simplex", "Vertiplex", "Facility floors"], unitLayouts: ["Simplex Type A and B", "Vertiplex Type C to K"], gallery: mediaRows(`Project Overview · 建案外觀概覽|1AL9VvmNKpz3j0pfUSNJmVYRiypmYdYqh|Exterior reference · 外觀參考
Swimming Pool & Jacuzzi · 泳池與按摩池|1ugehNPxMVC6XUZPFG8HhKwMfi94fXX-Q|Facilities actual photo · 公設實景圖
The Parlour · 迎賓客廳|1Ou4F1SlN4YtX8p062UUojUOGE1k0tK5w|Facilities actual photo · 公設實景圖`), fees: { management: "50 THB/sq.m./month · 50 泰銖/平方公尺/月", sinking: "500 THB/sq.m. · 500 泰銖/平方公尺" }
  },
  {
    name: "Goodday Sukhumvit 93", area: "Sukhumvit 93 / Bang Chak · 素坤逸 93 / Bang Chak", type: "Low-rise Condominium · 低樓層生活公寓", developer: "AP (Thailand) · AP 泰國", status: "Completed Q2 2026 · 2026 年 Q2 完工", ownership: "Freehold condominium · 永久產權公寓", size: "3 buildings, 8 storeys, 604 units and 1 shop · 3 棟 8 層，共 604 戶與 1 間商鋪", address: "Sukhumvit 93, Bang Chak, Phra Khanong, Bangkok · 曼谷 Sukhumvit 93", mapQuery: "Goodday Sukhumvit 93 Bangkok", description: "Goodday Sukhumvit 93 is an AP low-rise condominium positioned as an accessible first Bangkok property.\n\nGoodday Sukhumvit 93 是 AP 低樓層住宅，定位為較容易入手的曼谷首購 / 入門投資選項。", highlights: ["Entry Bangkok budget · 曼谷入門價格帶", "Near Bang Chak area · 鄰近 Bang Chak 生活圈", "Fully furnished concept · Fully Furnished 概念"], transport: ["BTS Bang Chak area · BTS Bang Chak 區域", "True Digital Park access · 可銜接 True Digital Park", "Neighborhood services · 鄰近日常服務"], lifestyle: ["Fitness, pool and co-working · 健身房、泳池與共享辦公", "Practical long-stay demand · 實用長住需求", "Good first investment comparison · 適合首購投資比較"], floorPlans: ["Building A/B/C", "Typical floors"], unitLayouts: ["1 Bedroom", "1 Bedroom Plus", "A/B unit types"], gallery: gooddayGallery, fees: { management: "36 THB/sq.m./month · 36 泰銖/平方公尺/月", sinking: "550 THB/sq.m. · 550 泰銖/平方公尺" }
  },
  {
    name: "Ideo Sukhumvit Rama 4", area: "Phra Khanong / Rama 4 · 帕卡農 / 拉瑪四", type: "High-rise Condominium · 高樓層公寓", developer: "ANANDA · ANANDA 開發商", status: "Expected handover Dec 2024 · 預計 2024 年 12 月交屋", ownership: "Freehold condominium · 永久產權公寓", size: "32 storeys, 642 units plus 3 shops · 32 層，共 642 戶與 3 間商鋪", address: "Phra Khanong, Khlong Toei, Bangkok · 曼谷 Khlong Toei 區 Phra Khanong", mapQuery: "IDEO Sukhumvit Rama 4 Bangkok", description: "IDEO Sukhumvit Rama 4 is close to BTS Phra Khanong with greenery, co-working and Rama 4 / Sukhumvit access.\n\nIDEO Sukhumvit Rama 4 鄰近 BTS Phra Khanong，結合綠意、共享辦公與 Rama 4 / Sukhumvit 生活機能。", highlights: ["Near BTS Phra Khanong · 鄰近 BTS Phra Khanong", "ANANDA project · ANANDA 建案", "Rama 4 / Sukhumvit access · 可銜接 Rama 4 / Sukhumvit"], transport: ["BTS Phra Khanong · BTS Phra Khanong", "Ekkamai and Thong Lo access · 可往 Ekkamai 與 Thong Lo", "Rama 4 road access · Rama 4 道路連結"], lifestyle: ["Co-working and pool · 共享辦公與泳池", "W District nearby · 鄰近 W District", "Suitable for rental planning · 適合出租規劃"], floorPlans: ["1st", "6th", "7th", "8th-30th", "Rooftop"], unitLayouts: ["Studio", "1 Bedroom", "1 Bedroom Plus", "2 Bedroom"], gallery: ideoGallery, fees: { management: "55 THB/sq.m./month · 55 泰銖/平方公尺/月", sinking: "500 THB/sq.m. · 500 泰銖/平方公尺" }
  },
  {
    name: "Aspire Sukhumvit - Rama 4", area: "Rama 4 / Phra Khanong · 拉瑪四 / 帕卡農", type: "Ready High-rise Condominium · 已完工高樓層公寓", developer: "AP (Thailand) · AP 泰國", status: "Ready to move, completed 2025 · 2025 年已完工可交屋", ownership: "Freehold condominium · 永久產權公寓", size: "1 building, 38 storeys, 1,323 units and 2 shops · 1 棟 38 層，共 1,323 戶與 2 間商鋪", address: "Rama 4 Road, Phra Khanong, Bangkok · 曼谷 Rama 4 Road", mapQuery: "Aspire Sukhumvit Rama 4 Bangkok", description: "Aspire Sukhumvit - Rama 4 is a ready AP project near BTS Phra Khanong with Simplex and Vertiplex layouts.\n\nAspire Sukhumvit - Rama 4 是 AP 已完工建案，鄰近 BTS Phra Khanong，提供平層與 Vertiplex 挑高房型。", highlights: ["Near BTS Phra Khanong · 鄰近 BTS Phra Khanong", "Simplex and Vertiplex layouts · 平層與挑高房型", "Ready project · 已完工建案"], transport: ["BTS Phra Khanong area · BTS Phra Khanong 區域", "W District nearby · 鄰近 W District", "Gateway Ekkamai access · 可往 Gateway Ekkamai"], lifestyle: ["Infinity pool and sky garden · 無邊際泳池與空中花園", "Rooftop garden · 屋頂花園", "Useful Rama 4 rental comparison · 適合 Rama 4 出租比較"], floorPlans: ["Ground", "Typical", "Rooftop"], unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom", "Vertiplex"], gallery: aspireGallery, fees: { management: "45 THB/sq.m./month · 45 泰銖/平方公尺/月", sinking: "450 THB/sq.m. · 450 泰銖/平方公尺" }
  },
  {
    name: "The Residences 38", area: "Thonglor / Sukhumvit 38 · 通羅 / 素坤逸 38", type: "Ultra Luxury Residence · 頂奢豪宅", developer: "ANANDA, BTS Group and Rabbit Holdings · ANANDA、BTS 集團與 Rabbit Holdings", status: "Completed · 已完工", ownership: "Freehold condominium · 永久產權公寓", size: "36 storeys, 171 units · 36 層，共 171 戶", address: "Sukhumvit 38, Bangkok · 曼谷 Sukhumvit 38", mapQuery: "The Residences 38 Bangkok", description: "The Residences 38 is a limited ultra-luxury residence near BTS Thong Lo with hotel-style service.\n\nThe Residences 38 位於 Thonglor 核心地段，鄰近 BTS Thong Lo，提供飯店式管理服務。", highlights: ["Near BTS Thong Lo · 鄰近 BTS Thong Lo", "Limited private residence · 限量私宅", "Hotel-style management · 飯店式管理"], transport: ["BTS Thong Lo · BTS Thong Lo", "Thonglor and Ekkamai access · 可往 Thonglor 與 Ekkamai", "Sukhumvit Road · Sukhumvit 主要道路"], lifestyle: ["Privacy-focused residence · 重視隱私的私宅", "High-end amenities · 高端公設", "Suitable for premium asset allocation · 適合高端資產配置"], floorPlans: ["Facility floors", "Typical floors", "Penthouse floors"], unitLayouts: ["1 Bedroom", "2 Bedroom", "3 Bedroom", "Penthouse"], gallery: residenceGallery
  },
  {
    name: "XT 10 Ekkamai", area: "Ekkamai Soi 10-12 / Sukhumvit 63 · Ekkamai 10-12 巷 / 素坤逸 63", type: "Pre-sale Lifestyle Condominium · 預售生活型公寓", developer: "Sansiri · Sansiri 開發商", status: "Expected completion Q2 2029 · 預計 2029 年 Q2 交屋", ownership: "Freehold condominium · 永久產權公寓", size: "Tower A 28 storeys, Tower B 29 storeys, 933 units · A 棟 28 層、B 棟 29 層，共 933 戶", address: "Ekkamai Soi 10-12, Sukhumvit 63, Bangkok · 曼谷 Ekkamai 10-12 巷，Sukhumvit 63", mapQuery: "XT 10 Ekkamai Bangkok", description: "XT 10 Ekkamai is a Sansiri lifestyle condominium designed around co-sharing spaces, work-life facilities and younger urban residents.\n\nXT 10 Ekkamai 是 Sansiri 打造的生活型公寓，結合共享辦公、社交休閒、公設生活與年輕城市客群需求。", highlights: ["Donki Mall Thonglor nearby · 鄰近 Donki Mall Thonglor", "Tower B includes pet-friendly planning · B 棟規劃寵物友善設定", "Complete Drive project media added · 已補上完整 Drive 建案素材"], transport: ["BTS Ekkamai around 1.5 km · BTS Ekkamai 約 1.5 公里", "BTS Thong Lor around 1 km · BTS Thong Lor 約 1 公里", "Ekkamai and Thonglor lifestyle corridor · Ekkamai 與 Thonglor 生活軸線"], lifestyle: ["Gym, sky garden, spa and rooftop pool · 健身房、空中花園、SPA 與高空泳池", "Co-working and community spaces · 共享辦公與社群空間", "Suitable for younger tenants and lifestyle investors · 適合年輕租客與生活型投資買方"], floorPlans: ["Tower A floors 3, 6, 8, 19, 22", "Tower B floors 8, 10, 15, 21, 25"], unitLayouts: ["Simplex 1A-3H", "Loft 1D-2E", "Garden and mirror options"], gallery: xt10Gallery, floorPlanImages: xt10FloorPlanImages, unitPlanImages: xt10UnitPlanImages, fees: { management: "55 THB/sq.m./month · 55 泰銖/平方公尺/月", sinking: "500 THB/sq.m. · 500 泰銖/平方公尺" }
  },
  {
    name: "Porsche Design Tower Bangkok", area: "Thonglor / Sukhumvit 38 · 通羅 / 素坤逸 38", type: "Ultra Luxury Branded Residence · 頂級品牌豪宅", developer: "Porsche Design & ANANDA · Porsche Design 與 ANANDA", status: "Pre-sale, expected completion end of 2028 · 預售中，預計 2028 年底完工", ownership: "Freehold residence, subject to contract terms · 永久產權住宅，依合約條件為準", size: "21 storeys, 22 residences · 21 層，僅 22 戶", address: "Sukhumvit 38 Alley, Bangkok · 曼谷 Sukhumvit 38 Alley", mapQuery: "Porsche Design Tower Bangkok", description: "Porsche Design Tower Bangkok is Asia's first Porsche Design residential tower with private residences and collectible design.\n\nPorsche Design Tower Bangkok 是亞洲首座 Porsche Design 住宅大樓，結合品牌設計、私宅與收藏級資產定位。", highlights: ["Asia's first Porsche Design residential tower · 亞洲首座 Porsche Design 住宅大樓", "Only 22 residences · 全案僅 22 戶", "Private pools and Passion Space · 私人泳池與 Passion Space"], transport: ["Thonglor / Sukhumvit 38 · Thonglor / Sukhumvit 38", "BTS Thong Lo area · BTS Thong Lo 區域", "Airport access subject to traffic · 往機場車程依交通為準"], lifestyle: ["Private lift and pool · 私人電梯與泳池", "Spa and business lounge · 水療與商務休息室", "Ultra-high-end own use · 頂級自住需求"], floorPlans: ["Private residence", "Passion Space", "The Crown"], unitLayouts: ["Duplex", "Sky villa", "Private pool residence"], gallery: porscheGallery
  },
  {
    name: "COCO PARC", area: "Rama 4 / Khlong Toei · 拉瑪四 / Khlong Toei", type: "Luxury Park-front Condominium · 公園第一排豪宅", developer: "ANANDA · ANANDA 開發商", status: "Completed · 成屋", ownership: "Freehold condominium · 永久產權公寓", size: "37 storeys, 444 units · 37 層，共 444 戶", address: "Rama IV Road, Khlong Toei, Bangkok · 曼谷 Rama IV Road", mapQuery: "COCO PARC Bangkok", description: "COCO PARC is a luxury park-front condominium directly connected to MRT Khlong Toei.\n\nCOCO PARC 位於 Rama 4 Road 公園第一排，連接 MRT Khlong Toei。", highlights: ["MRT Khlong Toei connection · MRT Khlong Toei 連結", "Park-front positioning · 公園第一排", "Dusit hotel-style management · Dusit 飯店式管理"], transport: ["MRT Khlong Toei · MRT Khlong Toei", "Asoke / Sukhumvit access · 可往 Asoke / Sukhumvit", "Rama 4 corridor · Rama 4 走廊"], lifestyle: ["Pool, gym and sky garden · 泳池、健身房與空中花園", "Benjakitti and Lumpini nearby · 鄰近班嘉奇蒂與倫披尼公園", "Premium management · 高端管理服務"], floorPlans: ["B1 to roof", "Typical floors", "Penthouse floors"], unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Penthouse"], gallery: cocoGallery, fees: { management: "130 THB/sq.m./month · 130 泰銖/平方公尺/月", sinking: "1,000 THB/sq.m. · 1,000 泰銖/平方公尺" }
  }
];

const phuketProjects: Project[] = [
  { name: "Banyan Tree Beach Residences Oceanus", area: "Bang Tao / Laguna Phuket · 邦濤 / Laguna Phuket", type: "Beach Residence · 海灘住宅", developer: "Banyan Group · Banyan Group", status: "Project information available · 建案資料整理中", ownership: "Subject to project terms · 依建案條件為準", size: "Beach residence collection · 海灘住宅產品", address: "Bang Tao, Phuket · 普吉島 Bang Tao", mapQuery: "Banyan Tree Beach Residences Oceanus Phuket", description: "A premium beach residence concept under the Banyan Tree lifestyle umbrella.\n\nBanyan Tree 旗下高端海灘住宅概念，適合重視度假生活、隱私與長期 Phuket 資產價值的買方。", highlights: ["Beach lifestyle · 海灘生活", "Banyan Tree brand halo · Banyan Tree 品牌題材", "Laguna / Bang Tao demand · Laguna / Bang Tao 區域需求"], transport: ["Bang Tao access · Bang Tao 區域交通", "Laguna Phuket lifestyle district · Laguna Phuket 生活圈", "Airport access subject to traffic · 往機場車程依交通為準"], lifestyle: ["Resort living · 度假式生活", "Beach and services nearby · 鄰近海灘與服務機能", "Suitable for personal use and rental planning · 適合自用與出租規劃"], floorPlans: ["Project plan", "Typical floor", "Facility plan"], unitLayouts: ["Residence units", "Beachfront options", "Family layouts"] },
  { name: "The Cube Amaze Phuket - Srisoonthorn", area: "Srisoonthorn / Thalang · Srisoonthorn / Thalang", type: "Low-rise Resort Condominium · 低樓層度假公寓", developer: "Soken Development Group · Soken Development Group", status: "Project information available · 建案資料整理中", ownership: "Subject to project terms · 依建案條件為準", size: "Low-rise resort condominium · 低樓層度假型公寓", address: "Srisoonthorn, Thalang, Phuket · 普吉島 Thalang 區 Srisoonthorn", mapQuery: "The Cube Amaze Phuket Srisoonthorn", description: "A practical low-rise resort condominium in Srisoonthorn.\n\n位於 Srisoonthorn 的低樓層度假型公寓，適合重視入手門檻、島內交通與實用生活機能的買方。", highlights: ["Low-rise planning · 低樓層規劃", "Central island connectivity · 島內交通銜接", "Resort facilities · 度假式公設"], transport: ["Thalang access · 可往 Thalang", "Laguna area access · 可往 Laguna", "Airport access subject to traffic · 往機場車程依交通為準"], lifestyle: ["Resort common areas · 度假式公共空間", "Practical own stay or rental · 適合自住與出租", "Nearby local services · 鄰近日常服務"], floorPlans: ["Typical floor", "Facility floor", "Master plan"], unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"] },
  { name: "The Title Cielo Rawai", area: "Rawai · 拉威", type: "Resort Condominium · 度假型公寓", developer: "Rhom Bho Property · Rhom Bho Property", status: "Project information available · 建案資料整理中", ownership: "Subject to project terms · 依建案條件為準", size: "Resort residence · 度假住宅", address: "Rawai, Phuket · 普吉島 Rawai", mapQuery: "The Title Cielo Rawai Phuket", description: "A Rawai-focused resort residence for southern Phuket lifestyle.\n\n位於 Rawai 的度假型住宅，適合重視南普吉生活、海灘機能與出租潛力的買方。", highlights: ["Rawai lifestyle · Rawai 生活圈", "Resort residence positioning · 度假住宅定位", "Suitable for own stay and rent · 適合自用與出租"], transport: ["Rawai and Nai Harn access · 可銜接 Rawai 與 Nai Harn", "Southern Phuket lifestyle · 南普吉生活圈", "Car / scooter lifestyle common · 當地多以汽車 / 機車移動"], lifestyle: ["Beach, cafes and long-stay demand · 海灘、咖啡廳與長住需求", "Resort common areas · 度假式公設", "Winter-stay demand · 避寒長住需求"], floorPlans: ["Typical floor", "Facility plan", "Master plan"], unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"] },
  { name: "KATA BELLO (The Title KataBello)", area: "Kata · 卡塔", type: "Resort Residence · 度假住宅", developer: "Rhom Bho Property · Rhom Bho Property", status: "Project information available · 建案資料整理中", ownership: "Subject to project terms · 依建案條件為準", size: "Resort residence concept · 度假住宅產品", address: "Kata, Phuket · 普吉島 Kata", mapQuery: "The Title KataBello Phuket", description: "A Kata-area resort residence concept under The Title brand.\n\nThe Title 品牌於 Kata 區的度假住宅概念，適合重視西岸度假氛圍與出租需求的買方。", highlights: ["Kata west-coast appeal · Kata 西岸度假題材", "The Title brand · The Title 品牌", "Holiday rental demand · 度假出租需求"], transport: ["Kata and Karon access · 可銜接 Kata 與 Karon", "Beach lifestyle route · 海灘生活動線", "Airport access subject to traffic · 往機場車程依交通為準"], lifestyle: ["Beach, dining and tourist demand · 海灘、餐飲與旅遊需求", "Resort common areas · 度假式公設", "Holiday-use buyers · 度假自用買方"], floorPlans: ["Typical floor", "Facility plan", "Master plan"], unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"] },
  { name: "The Title Heritage Bang Tao", area: "Bang Tao · 邦濤", type: "Resort Residence · 度假住宅", developer: "Rhom Bho Property · Rhom Bho Property", status: "Project information available · 建案資料整理中", ownership: "Subject to project terms · 依建案條件為準", size: "Resort residence concept · 度假住宅產品", address: "Bang Tao, Phuket · 普吉島 Bang Tao", mapQuery: "The Title Heritage Bang Tao Phuket", description: "A Bang Tao residence concept in one of Phuket's established resort districts.\n\n位於 Bang Tao 的度假住宅產品，適合重視海灘生活、區域成長與長期資產配置的買方。", highlights: ["Bang Tao resort district · Bang Tao 度假生活圈", "Beach and service demand · 海灘與服務需求", "Long-term area growth · 區域長期成長性"], transport: ["Bang Tao and Laguna access · 可銜接 Bang Tao 與 Laguna", "Beach lifestyle planning · 海灘生活規劃", "Airport access subject to traffic · 往機場車程依交通為準"], lifestyle: ["Beach clubs and resort services nearby · 鄰近海灘俱樂部與度假服務", "Suitable for personal use and rental · 適合自用與出租", "Popular long-stay Phuket area · 普吉長住熱門區域"], floorPlans: ["Typical floor", "Facility plan", "Master plan"], unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"] }
];

function ProjectCard({ project, index, isActive, onSelect }: { project: Project; index: number; isActive: boolean; onSelect: () => void }) {
  const cover = project.gallery?.[0]?.src || fallbackImages[index % fallbackImages.length];
  return (
    <article className="group bg-background">
      <button type="button" onClick={onSelect} className="block w-full text-left">
        <div className="relative overflow-hidden">
          <img src={cover} alt={project.name} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
          <div className="absolute left-4 top-4 bg-brand-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-forest font-medium whitespace-pre-line">{bilingual(project.type)}</div>
        </div>
        <div className={`border border-t-0 p-6 transition-colors ${isActive ? "border-brand-forest bg-brand-cream" : "border-border"}`}>
          <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.25em] text-brand-clay font-medium">{bilingual(project.area)}</p>
          <h3 className="mt-3 font-display text-2xl text-brand-ink leading-tight">{project.name}</h3>
          <p className="mt-4 whitespace-pre-line font-serif-tc text-sm leading-loose text-foreground/65 line-clamp-6">{bilingual(project.description)}</p>
          <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand-forest font-medium">{isActive ? "Details Open · 詳情已展開" : "View Details · 查看詳情"}</div>
        </div>
      </button>
    </article>
  );
}

function DetailHero({ project }: { project: Project }) {
  const cover = project.gallery?.[0]?.src || property1;
  return (
    <section className="overflow-hidden border border-border bg-background">
      <div className="p-6 md:p-9">
        <div className="inline-flex bg-brand-forest px-4 py-2 text-[10px] uppercase tracking-[0.28em] font-semibold text-brand-cream">{project.status.split(" · ")[0]}</div>
        <h3 className="mt-6 font-display text-4xl md:text-6xl text-brand-ink leading-[1.02]">{project.name}</h3>
        <p className="mt-4 max-w-4xl whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(project.address)}</p>
      </div>
      <div className="grid gap-px bg-border lg:grid-cols-3">
        <div className="bg-background lg:col-span-2"><img src={cover} alt={project.name} className="h-full max-h-[620px] min-h-[360px] w-full object-cover" /></div>
        <div className="grid gap-px bg-border">
          {(project.gallery || []).slice(1, 3).map((image) => <img key={image.src} src={image.src} alt={image.title} className="h-full min-h-44 w-full bg-background object-cover" />)}
        </div>
      </div>
    </section>
  );
}

function ProjectOverview({ project }: { project: Project }) {
  const fees = project.fees || { management: "Subject to latest project documents · 以最新建案文件為準", sinking: "Subject to latest project documents · 以最新建案文件為準" };
  const rows = [["Developer · 發展商", project.developer], ["Ownership · 產權類型", project.ownership], ["Project Scale · 建案規模", project.size], ["Address · 建案地址", project.address], ["Management Fee · 管理費", fees.management], ["Sinking Fund · 公共基金", fees.sinking]];
  return <section className="border border-border bg-background p-6 md:p-8"><p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Project Brief</p><h4 className="mt-2 font-serif-tc text-2xl text-brand-forest">建案速覽</h4><div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{rows.map(([label, value]) => <div key={label} className="bg-brand-cream/30 p-5"><p className="whitespace-pre-line text-[10px] uppercase tracking-[0.18em] text-brand-clay">{bilingual(label)}</p><p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{bilingual(value)}</p></div>)}</div></section>;
}

function MediaGallery({ title, items, fit = "cover" }: { title: string; items?: ProjectMedia[]; fit?: "cover" | "contain" }) {
  if (!items?.length) return null;
  return <section className="border border-border bg-background p-5 md:p-7"><p className="whitespace-pre-line text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{bilingual(title)}</p><div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <figure key={`${item.src}-${item.title}`} className="overflow-hidden border border-border bg-brand-cream/35"><div className="bg-background"><img src={item.src} alt={item.title} loading="lazy" className={`aspect-[4/3] w-full ${fit === "contain" ? "object-contain p-3" : "object-cover"}`} /></div><figcaption className="p-4"><p className="whitespace-pre-line font-serif-tc text-sm leading-relaxed text-brand-ink">{bilingual(item.title)}</p>{item.note && <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(item.note)}</p>}</figcaption></figure>)}</div></section>;
}

function ImageCarousel({ title, items }: { title: string; items?: ProjectMedia[] }) {
  const [index, setIndex] = useState(0);
  if (!items?.length) return null;
  const item = items[index];
  const previous = () => setIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  return <section className="border border-border bg-background p-5 md:p-6"><div className="flex items-end justify-between gap-4"><div><p className="whitespace-pre-line text-[10px] uppercase tracking-[0.28em] text-brand-clay font-medium">{bilingual(title)}</p><p className="mt-2 text-xs text-foreground/55">{index + 1} / {items.length}</p></div><div className="flex gap-2"><button type="button" onClick={previous} aria-label="Previous image" className="h-10 w-10 border border-border text-xl text-brand-ink hover:border-brand-forest hover:text-brand-forest">‹</button><button type="button" onClick={next} aria-label="Next image" className="h-10 w-10 border border-border text-xl text-brand-ink hover:border-brand-forest hover:text-brand-forest">›</button></div></div><figure className="mt-5 overflow-hidden border border-border bg-brand-cream/25"><div className="bg-background"><img src={item.src} alt={item.title} loading="lazy" className="aspect-[4/3] w-full object-contain p-3" /></div><figcaption className="border-t border-border bg-brand-cream/35 p-4"><p className="whitespace-pre-line font-serif-tc text-base leading-relaxed text-brand-ink">{bilingual(item.title)}</p>{item.note && <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(item.note)}</p>}</figcaption></figure></section>;
}

function ProjectHighlights({ project }: { project: Project }) {
  return <section className="border border-border bg-background p-6 md:p-8"><h4 className="font-serif-tc text-3xl text-brand-ink">建案亮點 HIGHLIGHTS</h4><p className="mt-6 whitespace-pre-line text-sm leading-loose text-foreground/75">{bilingual(project.description)}</p><div className="mt-7 grid gap-4 md:grid-cols-3">{project.highlights.map((item) => <div key={item} className="whitespace-pre-line border border-border bg-brand-cream/40 p-5 text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}</div></section>;
}

function LocationSection({ project, mapSrc }: { project: Project; mapSrc: string }) {
  return <section className="border border-border bg-background p-6 md:p-8"><h4 className="font-serif-tc text-3xl text-brand-ink">地理位置與週邊機能</h4><p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/60">{bilingual(project.address)}</p><div className="mt-6 overflow-hidden border border-border bg-brand-cream/30"><iframe title={`${project.name} map`} src={mapSrc} className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="mt-5 grid gap-px bg-border md:grid-cols-2">{project.transport.concat(project.lifestyle).slice(0, 8).map((item) => <div key={item} className="whitespace-pre-line bg-brand-cream/35 p-5 text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}</div></section>;
}

function ProjectFaq({ project }: { project: Project }) {
  const faqs = [
    { question: `What type of buyer is ${project.name} suitable for? · ${project.name} 適合哪一類買方？`, answer: `${project.name} is suitable for buyers who value ${project.area.split(" · ")[0]} and want to compare lifestyle comfort, long-term area demand and rental potential before making a decision.\n\n${project.name} 適合重視 ${project.area.split(" · ")[1] || project.area.split(" · ")[0]}、希望同時比較自住舒適度、區域長期需求與出租潛力的買方。` },
    { question: "What should be confirmed before reservation? · 保留前需要確認什麼？", answer: "Confirm the latest available units, price list, foreign quota, payment schedule, transfer fees, furniture package and contract terms before reservation.\n\n保留前建議確認最新可售戶別、價格表、外國人額度、付款表、過戶費用、家具配套與合約條款。" },
    { question: "Can KHANTHAROS help compare this project with others? · KHANTHAROS 可以協助和其他建案比較嗎？", answer: "Yes. We can compare location, developer profile, rental audience, resale liquidity, total cost and practical ownership risks.\n\n可以。我們可協助比較地段、建商背景、租客客群、轉售流動性、總持有成本與實際持有風險。" }
  ];
  return <section className="border border-border bg-background p-6 md:p-8"><h4 className="whitespace-pre-line font-serif-tc text-3xl text-brand-ink">{bilingual("Common Questions · 常見問題")}</h4><div className="mt-6 divide-y divide-border border-y border-border">{faqs.map((faq, index) => <details key={faq.question} className="group py-5" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-tc text-lg text-brand-ink"><span className="whitespace-pre-line">{bilingual(faq.question)}</span><span className="text-2xl text-brand-clay transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(faq.answer)}</p></details>)}</div></section>;
}

type DetailTab = "overview" | "images" | "highlights" | "plans" | "facilities" | "location" | "faq";

function ProjectDetailTabs({ project, mapSrc }: { project: Project; mapSrc: string }) {
  const [activeTab, setActiveTab] = useState<DetailTab>("overview");
  const tabs: { key: DetailTab; label: string }[] = [
    { key: "overview", label: "建案速覽" }, { key: "images", label: "建案圖片" }, { key: "highlights", label: "建案亮點" }, { key: "plans", label: "平面 / 格局" }, { key: "facilities", label: "公共設施" }, { key: "location", label: "位置機能" }, { key: "faq", label: "常見問題" }
  ];
  return <div className="mt-10"><div className="sticky top-20 z-20 flex gap-2 overflow-x-auto border border-border bg-background/95 p-2 backdrop-blur">{tabs.map((tab) => <button key={tab.key} type="button" onClick={() => setActiveTab(tab.key)} className={`shrink-0 px-5 py-3 text-sm font-serif-tc transition-colors ${activeTab === tab.key ? "bg-brand-forest text-brand-cream" : "text-brand-ink hover:bg-brand-cream"}`}>{tab.label}</button>)}</div><div className="mt-6">{activeTab === "overview" && <ProjectOverview project={project} />}{activeTab === "images" && <MediaGallery title="Project Images · 建案圖片" items={project.gallery} />}{activeTab === "highlights" && <ProjectHighlights project={project} />}{activeTab === "plans" && <section className="border border-border bg-background p-6 md:p-8"><h4 className="font-serif-tc text-3xl text-brand-ink">樓層平面圖 & 單位格局圖</h4><p className="mt-3 text-sm leading-relaxed text-foreground/60">Floor Plan 整層樓配置 · Unit Plan 各戶格局</p><div className="mt-6 grid gap-6 lg:grid-cols-2"><ImageCarousel title="Floor Plan · 樓層平面圖" items={project.floorPlanImages} /><ImageCarousel title="Unit Plan · 單位格局圖" items={project.unitPlanImages} /></div></section>}{activeTab === "facilities" && <MediaGallery title="Facilities / Lifestyle Images · 公設 / 生活圖片" items={project.gallery} />}{activeTab === "location" && <LocationSection project={project} mapSrc={mapSrc} />}{activeTab === "faq" && <ProjectFaq project={project} />}</div></div>;
}

export function PreSellSectionV3() {
  const [region, setRegion] = useState<"bangkok" | "phuket">("bangkok");
  const [selectedName, setSelectedName] = useState(bangkokProjects[0].name);
  const projects = region === "bangkok" ? bangkokProjects : phuketProjects;
  const selectedProject = useMemo(() => projects.find((project) => project.name === selectedName) || projects[0], [projects, selectedName]);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selectedProject.mapQuery)}&output=embed`;
  const chooseProject = (projectName: string) => { setSelectedName(projectName); window.setTimeout(() => document.getElementById("selected-project")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0); };
  const chooseRegion = (nextRegion: "bangkok" | "phuket") => { const nextProjects = nextRegion === "bangkok" ? bangkokProjects : phuketProjects; setRegion(nextRegion); setSelectedName(nextProjects[0].name); };

  return <main className="min-h-screen bg-background pt-20 text-foreground font-sans"><section className="bg-brand-cream py-28 md:py-36"><div className="mx-auto grid max-w-7xl items-end gap-12 px-6 md:px-10 lg:grid-cols-12"><div className="lg:col-span-7"><p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">PreSell · 預售 / 新成屋</p><h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">Curated new launches in Bangkok and Phuket.</h1></div><div className="lg:col-span-5"><p className="text-base leading-relaxed text-foreground/70">Project information is reorganized into KHANTHAROS advisory notes, so clients compare projects directly on our website.</p><p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">建案資料整理成 KHANTHAROS 自己的顧問筆記，客戶可以直接在我們網站內比較，不需要跳到其他網站。</p></div></div></section><section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-6 md:px-10"><div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Project Collection · 建案列表</p><h2 className="mt-4 font-display text-4xl md:text-5xl text-brand-ink">{region === "bangkok" ? "Bangkok" : "Phuket"}</h2></div><div className="flex w-full border border-border md:w-auto"><button type="button" onClick={() => chooseRegion("bangkok")} className={`flex-1 px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors md:flex-none ${region === "bangkok" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}>Bangkok</button><button type="button" onClick={() => chooseRegion("phuket")} className={`flex-1 px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors md:flex-none ${region === "phuket" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}>Phuket</button></div></div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} isActive={selectedProject.name === project.name} onSelect={() => chooseProject(project.name)} />)}</div><section id="selected-project" className="mt-12 scroll-mt-24"><DetailHero project={selectedProject} /><ProjectDetailTabs project={selectedProject} mapSrc={mapSrc} /></section></div></section><div className="fixed bottom-6 right-5 z-[70] flex flex-col gap-3"><a href={lineUrl} target="_blank" rel="noreferrer" className="bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white shadow-lg transition-colors hover:bg-[#05b34d]">LINE</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream shadow-lg transition-colors hover:bg-brand-ink">WhatsApp</a></div></main>;
}
