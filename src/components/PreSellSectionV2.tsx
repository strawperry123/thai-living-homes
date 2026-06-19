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
  fees?: {
    management: string;
    sinking: string;
  };
};

const mediaRows = (rows: string): ProjectMedia[] =>
  rows
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((row) => {
      const [title = "", id = "", note] = row.split("|");
      return { title, src: driveImage(id), note };
    });

const mediaUrlRows = (rows: string): ProjectMedia[] =>
  rows
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((row) => {
      const [title = "", src = "", note] = row.split("|");
      return { title, src, note };
    });

const floGallery = mediaUrlRows(`
FLO by Sansiri Exterior · FLO by Sansiri 外觀|https://www.shangherealestate.com/wp-content/uploads/2026/06/flo-by-sansiri-1.jpg|Project Image · 建案圖片
FLO Lifestyle Visual · FLO 生活意象|https://www.shangherealestate.com/wp-content/uploads/2026/06/public.avif|Project Image · 建案圖片
`);

const floFloorPlanImages = mediaUrlRows(`
2nd-4th Floor Plan · 2-4 樓平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.22.41.jpg.webp|Floor Plan · 樓層平面圖
5th Floor Plan · 5 樓平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.22.48.jpg|Floor Plan · 樓層平面圖
6th-19th Floor Plan · 6-19 樓平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.22.54.jpg.webp|Floor Plan · 樓層平面圖
20th Floor Plan · 20 樓平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.23.00-1.jpg.webp|Floor Plan · 樓層平面圖
21st Floor Plan · 21 樓平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.23.06.jpg.webp|Floor Plan · 樓層平面圖
22nd Floor Plan · 22 樓平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.23.13.jpg.webp|Floor Plan · 樓層平面圖
Rooftop Floor Plan · 頂層平面圖|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.23.20.jpg.webp|Floor Plan · 樓層平面圖
`);

const floUnitPlanImages = mediaUrlRows(`
Studio / 1 Bedroom S · Studio / 一房 S|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.41.44.png.webp|Unit Plan · 單位格局圖
1 Bedroom · 一房|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.42.09.jpg.webp|Unit Plan · 單位格局圖
1 Bedroom Plus · 一房 Plus|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.42.18.jpg.webp|Unit Plan · 單位格局圖
2 Bedroom · 兩房|https://shangherealestate.com/wp-content/uploads/2026/06/截圖-2026-06-18-15.42.30.jpg.webp|Unit Plan · 單位格局圖
`);

const gooddayGallery = mediaRows(`
The Living Hall · 迎賓大廳|1qseLwXyGSlASj_jmLBhX6FoyotQdfOFF|Perspective · 建案示意圖
The Living Hall 02 · 迎賓大廳 02|1WRtKc0ZMfudKIh_FTNKJOzf72aXUsp4m|Perspective · 建案示意圖
The Hive · 共享空間|1WovBzHVgJoAGACBttc-cJ0UxNLFW1e1M|Facilities · 公設示意圖
Goodday Club · 社交會所|1fJRxnfvur0CEuSIhQCikvDkfY-TgKVSF|Facilities · 公設示意圖
Good Health · 健康空間|127jUNE6GxtDWsI-rT0ziKaAi-GdF2o56|Facilities · 公設示意圖
Mock Up Room · 樣品屋|1eX8qtRSEP2piDRE17VtQweYvaVwJPsuQ|Unit Interior · 室內示意圖
Swimming Pool 01 · 泳池|1oZtmbCYfAsHMtBq9JdWx_F4AGS6dwKcq|Facilities · 公設示意圖
Top Facilities · 頂層公設|1xoSHlTG76tFMMEhgE__ARMGWpvJpzIvA|Facilities · 公設示意圖
`);

const gooddayFloorPlanImages = mediaRows(`
1st Layout · 1 樓總配置圖|1uIVVf-xvNEVUyfxa5nrz5wms-aSCfl2f|Floor Plan · 樓層平面圖
2nd Layout · 2 樓總配置圖|1wMqTftWesvBMtQRGh65h_TWfJ8izWeHz|Floor Plan · 樓層平面圖
3rd-8th Layout · 3-8 樓總配置圖|1CdfpUsEn-WpujVjn3mfK1-Dcf3FY0dHB|Floor Plan · 樓層平面圖
Building A 2nd Floor · A 棟 2 樓|1obcjP9Jt3QXxDRtzKaPANB-cWVuYdBFk|Floor Plan · 樓層平面圖
Building A 3rd Floor · A 棟 3 樓|1e_h0ZLSnhSONs4VIgz1GMI_zeUeukfVz|Floor Plan · 樓層平面圖
Building A 4th-8th Floor · A 棟 4-8 樓|1xTHTO8ocH5VB7LtCSb_bsM4-yPGYFGvb|Floor Plan · 樓層平面圖
Building B 2nd Floor · B 棟 2 樓|1meBA9CCIDkPUyl4mjnm2RdGIKFWTfym8|Floor Plan · 樓層平面圖
Building B 3rd-7th Floor · B 棟 3-7 樓|17AVc2aHEMtqWS7pnQpSWXiKgJ-tpZaee|Floor Plan · 樓層平面圖
Building C 2nd-8th Floor · C 棟 2-8 樓|1jmD27PvvdwOoFsZrNRmwpXjOXGpRX97k|Floor Plan · 樓層平面圖
`);

const gooddayUnitPlanImages = mediaRows(`
Unit Type A1 · A1 戶型|1v8re2a6FkUqYftTqiU1JM7uDvWVYsYOh|Unit Plan · 單位格局圖
Unit Type A2 · A2 戶型|1LAwQ-sDkj3N217KQPk8sdyBHQFo_Q3L0|Unit Plan · 單位格局圖
Unit Type B1 · B1 戶型|1PHFZRXbRP7qDUI4GYddLlm6qbDA-X6xM|Unit Plan · 單位格局圖
Unit Type B2 · B2 戶型|1_V_rdnVOuF9oKeW9S4wd6u0cDg7m4M3a|Unit Plan · 單位格局圖
Unit Type B3 · B3 戶型|1-EyxCoEwQLbn3gU9H5iZtnAy6ZIkfJG-|Unit Plan · 單位格局圖
`);

const cocoGallery = mediaRows(`
COCO PARC Hero · COCO PARC 主視覺|1IP1Hz0f82-FDRZp97bGw6qrEOPgse7k8|Project Image · 建案圖片
COCO PARC Exterior · COCO PARC 外觀|1BAVb8mA1pJsktNfXCCNhYbmZPjfji0Ke|Project Image · 建案圖片
Main Gate · 入口意象|1Vc9ERkqgua8ExkOT4TCWWSm7-_VfAmOo|Project Image · 建案圖片
Podium Garden · 平台花園|1S0fvAMwwdG0Ee3Q80m_CBgH_sjfx_fqb|Facilities · 公設圖片
Swimming Pool · 泳池|1VehfCSNyyPPUsN9QfbjJmPwUp13fY90x|Facilities · 公設圖片
Fitness · 健身房|1W56mQv6XXod5u2CpJdzXb_7Za_FxYy6K|Facilities · 公設圖片
Lobby Communal · 迎賓公共空間|1PVRBE8zyFlwaZ20Q-xotJ40rKJeP30qS|Facilities · 公設圖片
Show Unit Living · 樣品屋客廳|1m5LimcNboOOxv1_4_KWp1MCXhx_kMjBc|Show Unit · 樣品屋
Show Unit Bedroom · 樣品屋臥室|161BXc7igffL1wqx9hS_PwAU31X-dJwq4|Show Unit · 樣品屋
COCO Map · 建案位置圖|11iDg3sRI-cmKK1fDGkOuU2YJDNwTudCT|Map · 地圖
`);

const cocoFloorPlanImages = mediaRows(`
B1 Floor Plan · B1 樓平面圖|1bc8ih2o9NC-3kyYecCxytx6XhM8S2Wxy|Floor Plan · 樓層平面圖
1st Floor Plan · 1 樓平面圖|13ehYPyWSkbmuYf4q2Mz-UVPIDl9LjJGl|Floor Plan · 樓層平面圖
2nd Floor Plan · 2 樓平面圖|1Remv_St0S6kf17jJxuNyCKDtFwRnaGxr|Floor Plan · 樓層平面圖
3rd Floor Plan · 3 樓平面圖|1xT-8MxyflzM2P0inl6FuB1Tj6hk7DBc5|Floor Plan · 樓層平面圖
4th Floor Plan · 4 樓平面圖|1Cp826xcBXql_ZCU5lDIynpUyU_wNo6Zg|Floor Plan · 樓層平面圖
5th Floor Plan · 5 樓平面圖|1un8_lccqbxZFYSqbIy7FY-8op303Ijwq|Floor Plan · 樓層平面圖
6th Floor Plan · 6 樓平面圖|1Kt94t5a7Amb59F4EUT_Qf99x2L1FkS9d|Floor Plan · 樓層平面圖
7th Floor Plan · 7 樓平面圖|1Nn1QblMg4Mu2dpr0zDMKR82JtdBKJcHZ|Floor Plan · 樓層平面圖
8th Floor Plan · 8 樓平面圖|1FKUM0iL7Uhq1lEqyOsUgZO_2UMMz3Hg-|Floor Plan · 樓層平面圖
10th-22nd Floor Plan · 10-22 樓平面圖|1gB9deGo9VkwBl81ZyGs3aEDk_UvN894_|Floor Plan · 樓層平面圖
23rd-29th Floor Plan · 23-29 樓平面圖|18D6whw_69oDCnuoVp505A0x_jqI7sgyk|Floor Plan · 樓層平面圖
Roof Plan · 屋頂層平面圖|1LH2MUAGHIFpWa7096se4k_UBXqlU1Iqf|Floor Plan · 樓層平面圖
`);

const cocoUnitPlanImages = mediaRows(`
A1-1 Type · A1-1 戶型|1_zD2sy8IkaxwENSwPpGoCLQFU4JLeWlq|Unit Plan · 單位格局圖
A1-2 Type · A1-2 戶型|1_kO9S6anVicbkHfh2TfysHeL9gP3WA2F|Unit Plan · 單位格局圖
B1 Type · B1 戶型|1RSkRvlIVHfFPUySwjh9XOKCYO3jIkBfB|Unit Plan · 單位格局圖
B2 Type · B2 戶型|1DflKn_uMEUs-yoPpOHZDx8_PJ-eP3_KZ|Unit Plan · 單位格局圖
B3 Type · B3 戶型|1pLdi6-9WoEkLGZeEB-rmVIeUMXhc-3UQ|Unit Plan · 單位格局圖
C1 Type · C1 戶型|1LQh9WB_2VG4pp9pYSMPlwW8Lx7GUmao0|Unit Plan · 單位格局圖
D1 Type · D1 戶型|1pHziYotIXdvF_moSle4gJaEuD5hjamAs|Unit Plan · 單位格局圖
E1 Type · E1 戶型|1AvJsDiKA_xE9qb2JBXqrVCxo8ur_6tVt|Unit Plan · 單位格局圖
Penthouse 35 PH1 · 35 樓 Penthouse 1|1mQtsthQkFDFfumheV4qWDul0R7W0ySOo|Unit Plan · 單位格局圖
Penthouse 36 PH2 · 36 樓 Penthouse 2|1nE6BmtjLgcaxJRCfH6AK-30WPU1i1A4L|Unit Plan · 單位格局圖
`);

const residenceGallery = mediaRows(`
Building Hero Shot · 建築主視覺|13xuj7b6diCUNQYfiroRv4ugHQ4jvxXO-|Project Image · 建案圖片
Project Map · 建案位置圖|1EG7gkX_fckz5BoM5lye9lMq5N3bhCWdp|Map · 地圖
1BR Show Unit 01 · 一房樣品屋 01|1tCfBaWNCwbNxO4N5VrDsPHi2x17xwSmD|Show Unit · 樣品屋
1BR Show Unit 02 · 一房樣品屋 02|11qoZxdxJyXu4R-skZ2TZyzLlgWT6dcw7|Show Unit · 樣品屋
2BR Show Unit 01 · 兩房樣品屋 01|1T74owAPiD7Hv-Olr2pSLVldkjQompQCr|Show Unit · 樣品屋
2BR Show Unit 02 · 兩房樣品屋 02|1ZN6fUj4XZRGwcGvUDxuEqwYd0giCuvSE|Show Unit · 樣品屋
Facilities 01 · 公設實景 01|1j6WwPlxjIoozXqn5vFTwL-zw62BdFx-o|Facilities · 公設圖片
Facilities 02 · 公設實景 02|1y2P-hJnyy1yWoFgHpRbvhxBvCKe_Zw_u|Facilities · 公設圖片
Facilities 03 · 公設實景 03|1uEr9rzgdPibyUuR_qY4lTjH4H48YmOXx|Facilities · 公設圖片
`);

const residenceFloorPlanImages = mediaRows(`
Ground Floor Lobby · G 樓大廳|1clAgQSsYmdamUKcUGP9YbPbdeBy3-vNM|Floor Plan PDF · 樓層平面圖 PDF
10th Floor Facility · 10 樓公設|1X-DBvjDRHvMCCDTQV5qYyuHircN1H0V4|Floor Plan PDF · 樓層平面圖 PDF
11th Floor F&B · 11 樓餐飲樓層|1qTAqe4PJJrrM1rZePfzETjyF-woFpfl2|Floor Plan PDF · 樓層平面圖 PDF
24th Floor 1-2BR · 24 樓 1-2 房|1bFY0jSMSDyI1GpP5Abj9IQnP24EMoGJz|Floor Plan PDF · 樓層平面圖 PDF
25th Floor 1-2BR · 25 樓 1-2 房|1XWyhG3jbqzWEt9YBb7hoRcL_SAE6tNQG|Floor Plan PDF · 樓層平面圖 PDF
26-31st Floor 1-2BR · 26-31 樓 1-2 房|1a2rYK34ztwbib8ohLDfuhpbLPRg-zUhf|Floor Plan PDF · 樓層平面圖 PDF
32nd Floor 3-4BR · 32 樓 3-4 房|110Xpg-s5lTi7ItI3HOKnIHvxxSwsZ2wj|Floor Plan PDF · 樓層平面圖 PDF
35-36th Floor PH · 35-36 樓 Penthouse|1l_ok18imT2e7i5kfqrlskERjGUgST3ZI|Floor Plan PDF · 樓層平面圖 PDF
`);

const residenceUnitPlanImages = mediaRows(`
1BR A 65 sq.m · 一房 A 65 平方米|1PCqNl8PN-3C2p2Y3rkwbTdzTWj4nsMK8|Unit Layout PDF · 單位格局圖 PDF
1BR B 75.5 sq.m · 一房 B 75.5 平方米|1yi8Ax5gbXpT6zpcAs6_1YnsYCd9xpeA-|Unit Layout PDF · 單位格局圖 PDF
1BR C 57 sq.m · 一房 C 57 平方米|1Mh6qDPm26kBiCW4ImguZbw6A2k-zvBdd|Unit Layout PDF · 單位格局圖 PDF
2BR A 84.5 sq.m · 兩房 A 84.5 平方米|1o-msXod2vREhOqFwPHues0lcBwQC1cpE|Unit Layout PDF · 單位格局圖 PDF
2BR D 124 sq.m · 兩房 D 124 平方米|1f9AWOaXGzTILlv-VfDmoCtplr37XogWh|Unit Layout PDF · 單位格局圖 PDF
3BR A 171.5 sq.m · 三房 A 171.5 平方米|1leF8VfomXOZybNDytjcH7XS5QUnH5IoB|Unit Layout PDF · 單位格局圖 PDF
4BR A 210 sq.m · 四房 A 210 平方米|1IrdFzAFI1e2kbT6RgQTczVfNtC2l7JH6|Unit Layout PDF · 單位格局圖 PDF
Penthouse 426.5 sq.m · Penthouse 426.5 平方米|1uBhWV3ReLA_mXEcV9SRNQVTvjzbuwSLH|Unit Layout PDF · 單位格局圖 PDF
`);

const ideoGallery = mediaRows(`
Drone Hero Shot 1 · 空拍外觀 01|1nulkXgQomOLQ9-lfCULSDTIZawCAgD5v|Actual Photo · 實景照片
Drone Hero Shot 2 · 空拍外觀 02|1bpic_y4HMhC7AIvcDY49kXKTobdeGqda|Actual Photo · 實景照片
Hero Shot · 建案主視覺|1djv6D3i8nTkAtK3b_-q8Q1KmMkjWpyKP|Project Image · 建案圖片
Courtyard · 中庭|1IAiTv0qusKCYY67XKr95oL25IdcgOa3M|Project Image · 建案圖片
Pool · 泳池|15xtxYBT3jArDL-DxQtafSvUXnYB_rfC3|Facilities · 公設圖片
Sky Lounge · 空中休憩空間|1ptB3IlD4x_GfGw5LVL4BhzzeIWpPKaSX|Facilities · 公設圖片
Co-working · 共享辦公|15oJbOu9PkrD_TLFDW9pV_DmAcbp-sACf|Facilities · 公設圖片
Lobby · 大廳|1gac7__QJrIvbjAbaig6iE26bJC9yl2DM|Facilities · 公設圖片
`);

const ideoFloorPlanImages = mediaRows(`
1st Floor Plan · 1 樓平面圖|1PY_D_eMl9TSFKD5-yDLVIvC-CuWpw2E7|Floor Plan · 樓層平面圖
6th Floor Plan · 6 樓平面圖|1fbilLre-iRkfS1Wrx8hDk4nJIJxvirWs|Floor Plan · 樓層平面圖
7th Floor Plan · 7 樓平面圖|1grXAqjVL7xFqPeBSNce5ZqFusoVBSTjD|Floor Plan · 樓層平面圖
8th-30th Floor Plan · 8-30 樓平面圖|1TTeWYX0KdP8ub6CzsIK-u8XLIVbnRKK9|Floor Plan · 樓層平面圖
31st Floor Plan · 31 樓平面圖|1gogG-WH2-pAR4pul0XrF4lV090gkyRun|Floor Plan · 樓層平面圖
32nd Floor Plan · 32 樓平面圖|1cZEIN21tDTFK_65wldrPejM6u2u8Ds69|Floor Plan · 樓層平面圖
Rooftop Floor Plan · 屋頂層平面圖|17oYss8LiaPB-1UIqcXtCVAR1_CGSp3QD|Floor Plan · 樓層平面圖
`);

const ideoUnitPlanImages = mediaRows(`
1 Bed New Series · 一房新系列|1y5_CFSD0ebKAH9SiJ68_haDJb8SCy6L1|Unit Plan · 單位格局圖
A1-1 · A1-1 戶型|15RW9Xcw03JyRUq1uyD9up4UcLysG5PlU|Unit Plan · 單位格局圖
A1-2L · A1-2L 戶型|18lIUMwcUz231_u6vckcfs8iCvWto-4RH|Unit Plan · 單位格局圖
B1-1 · B1-1 戶型|1PthdV2DGGwlJAzQWIM6Jcca24fcfgTr7|Unit Plan · 單位格局圖
B2-1 · B2-1 戶型|1LWOHwzCYh_4DflJgNBTHKDU3pGyIRZSB|Unit Plan · 單位格局圖
C1 · C1 戶型|1yyLz_MXCHXwRHi7N6hy93YJgv9yehvdR|Unit Plan · 單位格局圖
C2-1 · C2-1 戶型|1zXe_UPGRobzJ6HTeqg1r3hgGJ52LincO|Unit Plan · 單位格局圖
Penthouse A · Penthouse A|1TU6Cx7dy8L6NfOQodPrKI-hugd3u4q97|Unit Plan · 單位格局圖
Penthouse C · Penthouse C|1-jB5AaYcJW3PMh46leRQNXXqsVulL4bG|Unit Plan · 單位格局圖
`);

const porscheGallery = mediaRows(`
Porsche Design Tower · Porsche Design Tower 外觀|1TGRyRCT6TVXVWSuTCsIEXC9xCeGYHi58|Project Image · 建案圖片
The Crown Building · 皇冠建築意象|17tTcwz4azrYmgn_T5g-SGRCq0JlTbKDn|Project Image · 建案圖片
Duplex Living · 複式客廳|1BkxC1P4m8M12InSPHsyjgtNQ6bTdUXF5|Interior · 室內圖片
Kinetic Move · Kinetic Move 陽台系統|1W1yfguYCnA3r8bIM4vShuI1ssvStWOcU|Design Detail · 設計細節
Mission R Podium · Mission R Podium|1G_dlOwxtQjf_FQ5vvrzpqXOS2JgTDEGQ|Project Image · 建案圖片
Passion Space · 私人超跑收藏空間|1ZnLxK6cfHcEXLRWYag3IiZz-qbbNYEjK|Facilities · 公設圖片
The Loop 1 · The Loop 車道 01|1Q3A7pqrvjeIVpkl55Z9blT3OxyHZNAm-|Design Detail · 設計細節
The Loop 2 · The Loop 車道 02|16QZmoEg7OSqHLn4zWWfiR8lbNVuKn75a|Design Detail · 設計細節
Event Photo 01 · 發表會照片 01|1QMYgX_qHYUoJUNLr8muJ-tRr0fnt0lAp|Event Photo · 活動照片
Event Photo 02 · 發表會照片 02|1tyRge4q0u7BGnTuBA8Czr9Rg5opda9U4|Event Photo · 活動照片
`);

const bangkokProjects: Project[] = [
  {
    name: "FLO by Sansiri",
    area: "Khlong San / Chao Phraya · 空訕 / 昭披耶河岸",
    type: "Pre-sale Riverside Condominium · 預售河岸生活公寓",
    developer: "Sansiri Holding Six Co., Ltd. · Sansiri 關係企業",
    status: "Expected completion Dec 2025 · 預計 2025 年 12 月完工",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "1 residential building, 22 storeys, 508 units · 1 棟 22 層，共 508 戶",
    address: "Somdet Chao Phraya Road, Khlong San, Bangkok · 曼谷 Khlong San 區 Somdet Chao Phraya Road",
    mapQuery: "FLO by Sansiri Khlong San Bangkok",
    description:
      "FLO by Sansiri is a 22-storey condominium in Khlong San, created around the Work-Life Flow concept. It is about 350 meters from BTS Gold Line Khlong San Station and close to ICONSIAM, the Chao Phraya riverside, galleries, cafes and restaurants.\n\nFLO by Sansiri 位於曼谷 Khlong San，為 22 層河岸生活型公寓，主打 Work-Life Flow 概念。建案距 BTS 金線 Khlong San 站約 350 米，鄰近 ICONSIAM、昭披耶河岸生活圈、藝廊、咖啡廳與餐飲聚落。",
    highlights: ["350 meters to BTS Gold Line Khlong San · 距 BTS 金線 Khlong San 約 350 米", "Near ICONSIAM and Chao Phraya riverside lifestyle · 鄰近 ICONSIAM 與昭披耶河岸生活圈", "Sansiri riverside lifestyle positioning · Sansiri 河岸生活品牌定位"],
    transport: ["BTS Gold Line Khlong San around 350 meters · BTS 金線 Khlong San 約 350 米", "ICONSIAM around 950 meters · ICONSIAM 約 950 米", "Convenient access toward Charoen Nakhon and CBD connections · 可銜接 Charoen Nakhon 與市中心交通"],
    lifestyle: ["Facilities include lobby, Garden Bloc, Creative Art Space, Sky Bar, gym, river-view deck and swimming pool · 公設包含大廳、Garden Bloc、Creative Art Space、Sky Bar、健身房、河景平台與泳池", "River-view lifestyle with hotels, cafes and cultural venues nearby · 河岸生活圈，鄰近飯店、咖啡廳與文化場域", "Suitable for buyers wanting a different identity from inner Sukhumvit · 適合想要不同於 Sukhumvit 市中心風格的買方"],
    floorPlans: ["2nd-4th floor", "5th floor", "6th-19th floor", "20th-22nd floor", "Rooftop"],
    unitLayouts: ["1 Bedroom 24.50-34.75 sq.m", "2 Bedroom 46.00-64.00 sq.m", "High ceiling options"],
    gallery: floGallery,
    floorPlanImages: floFloorPlanImages,
    unitPlanImages: floUnitPlanImages,
  },
  {
    name: "Life Rama 4 - Asoke",
    area: "Rama 4 / Asoke · 拉瑪四 / 阿索克",
    type: "High-rise Condominium · 高樓層公寓",
    developer: "AP ME 12 Co., Ltd. · AP 集團關係企業",
    status: "Ready project materials available · 已整理建案素材",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "1 building, 39 storeys, 1,237 residential units and 2 shops · 1 棟 39 層，共 1,237 戶住宅與 2 間商鋪",
    address: "Rama 4 Road, Khlong Toei, Bangkok 10110 · 曼谷 Khlong Toei 區 Rama 4 路 10110",
    mapQuery: "Life Rama 4 Asoke Bangkok",
    description:
      "Life Rama 4 - Asoke is a large AP city condominium positioned for buyers who want Rama 4, Asoke, Sukhumvit and Queen Sirikit Convention Centre access.\n\nLife Rama 4 - Asoke 位於 Rama 4 / Asoke 生活圈，適合重視市中心交通、出租需求與生活機能的買方。",
    highlights: ["CBD-fringe Rama 4 / Asoke location · Rama 4 / Asoke 城市核心外圍地段", "Large-scale AP project · AP 大型高樓層建案", "Management fee 50 THB/sq.m./month · 管理費 50 泰銖/平方公尺/月"],
    transport: ["Access toward Asoke, Sukhumvit and Queen Sirikit Convention Centre · 可銜接 Asoke、Sukhumvit 與詩麗吉皇后會議中心", "Rama 4 business and medical corridor · Rama 4 商務與醫療走廊", "Suitable for long-stay tenants working in central Bangkok · 適合曼谷市中心長租客群"],
    lifestyle: ["Facilities include gardens, swimming pool, gym, steam and sauna · 公設包含花園、泳池、健身房、蒸氣室與桑拿", "Close to Rama 4 and Sukhumvit lifestyle demand · 鄰近 Rama 4 與 Sukhumvit 生活需求", "Useful for lifestyle and rental comparison · 適合自住與出租比較"],
    floorPlans: ["Simplex floor plans", "Vertiplex floor plans", "Facility floors"],
    unitLayouts: ["Simplex Type A and B", "Vertiplex Type C to K", "Official unit layouts"],
    gallery: mediaRows(`
Project Overview · 建案外觀概覽|1AL9VvmNKpz3j0pfUSNJmVYRiypmYdYqh|Exterior reference · 外觀參考
Swimming Pool & Jacuzzi · 泳池與按摩池|1ugehNPxMVC6XUZPFG8HhKwMfi94fXX-Q|Facilities actual photo · 公設實景圖
The Parlour · 迎賓客廳|1Ou4F1SlN4YtX8p062UUojUOGE1k0tK5w|Facilities actual photo · 公設實景圖
Sky Studio · 空中共享空間|1yM6XuDQC_WK3JjnzOrS7rT-h9BzTY4Ua|Facilities actual photo · 公設實景圖
`),
    fees: { management: "50 THB/sq.m./month · 50 泰銖/平方公尺/月", sinking: "500 THB/sq.m. · 500 泰銖/平方公尺" },
  },
  {
    name: "Goodday Sukhumvit 93",
    area: "Sukhumvit 93 / Bang Chak · 素坤逸 93 / Bang Chak",
    type: "Low-rise Condominium · 低樓層生活公寓",
    developer: "AP (Thailand) · AP 泰國",
    status: "Completed Q2 2026 · 2026 年 Q2 完工",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "3 buildings, 8 storeys, 604 residential units and 1 shop · 3 棟 8 層，共 604 戶住宅與 1 間商鋪",
    address: "Sukhumvit 93, Bang Chak, Phra Khanong, Bangkok 10260 · 曼谷 Phra Khanong 區 Bang Chak，Sukhumvit 93",
    mapQuery: "Goodday Sukhumvit 93 Bangkok",
    description:
      "Goodday Sukhumvit 93 is an AP low-rise condominium positioned as an accessible first Bangkok property with furnished units and practical facilities.\n\nGoodday Sukhumvit 93 是 AP 推出的低樓層住宅產品，定位為較容易入手的曼谷首購 / 入門投資選項，主打實用交屋配置與年輕生活風格。",
    highlights: ["Starting reference from 1.86M THB · 參考起價約 186 萬泰銖起", "BTS Bang Chak around 1.2 km · 距 BTS Bang Chak 約 1.2 公里", "Fully furnished concept · Fully Furnished 概念"],
    transport: ["7-Eleven around 50 meters · 7-11 約 50 米", "BTS Bang Chak around 1.2 km · BTS Bang Chak 約 1.2 公里", "True Digital Park around 2.5 km · True Digital Park 約 2.5 公里"],
    lifestyle: ["Facilities include 24-hour fitness, 20-meter saltwater pool, co-working and green court · 公設包含 24 小時健身房、20 米鹽水泳池、共享辦公與綠化中庭", "Practical neighborhood retail for long-stay tenants · 周邊日常機能適合長住型租客", "Good entry price for Bangkok comparison · 曼谷入門價格帶具比較性"],
    floorPlans: ["1st layout", "2nd layout", "3rd-8th layout", "Building A/B/C plans"],
    unitLayouts: ["1 Bedroom 26 sq.m", "1 Bedroom Plus 35 sq.m", "A1, A2, B1, B2, B3"],
    gallery: gooddayGallery,
    floorPlanImages: gooddayFloorPlanImages,
    unitPlanImages: gooddayUnitPlanImages,
    fees: { management: "36 THB/sq.m./month · 36 泰銖/平方公尺/月", sinking: "550 THB/sq.m. · 550 泰銖/平方公尺" },
  },
  {
    name: "Ideo Sukhumvit Rama 4",
    area: "Phra Khanong / Rama 4 · 帕卡農 / 拉瑪四",
    type: "High-rise Condominium · 高樓層公寓",
    developer: "ANANDA · ANANDA 開發商",
    status: "Expected handover Dec 2024 · 預計 2024 年 12 月交屋",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "32 storeys, 642 residential units plus 3 shops · 32 層，共 642 戶住宅與 3 間商鋪",
    address: "3675 Phichai Sawat Alley, Phra Khanong, Khlong Toei, Bangkok · 曼谷 Khlong Toei 區 Phra Khanong",
    mapQuery: "IDEO Sukhumvit Rama 4 Phra Khanong Bangkok",
    description:
      "IDEO Sukhumvit Rama 4 is a mid-to-high-end ANANDA project close to BTS Phra Khanong, designed around greenery, co-working, semi-outdoor activity areas, pool and city convenience.\n\nIDEO Sukhumvit Rama 4 是 ANANDA 旗下中高端產品，鄰近 BTS Phra Khanong，結合綠意、公設、共享工作空間與 Rama 4 / Sukhumvit 生活機能。",
    highlights: ["BTS Phra Khanong around 350 meters · 距 BTS Phra Khanong 約 350 米", "642 units plus 3 shops · 642 戶住宅加 3 間商鋪", "Management fee 55 THB/sq.m./month · 管理費 55 泰銖/平方公尺/月"],
    transport: ["BTS Phra Khanong around 350 meters · BTS Phra Khanong 約 350 米", "1 stop to Ekkamai, 2 stops to Thong Lo · 1 站到 Ekkamai，2 站到 Thong Lo", "Direct access toward Sukhumvit and Rama 4 roads · 可銜接 Sukhumvit 與 Rama 4 主要道路"],
    lifestyle: ["Facilities include co-working, semi-outdoor sport court, floating pavilion, 24-hour gym, waterfall landscape and pool · 公設包含共享辦公、半戶外運動場、漂浮亭、24 小時健身房、瀑布造景與泳池", "Near W District, Summer Hill and Phra Khanong cafes · 鄰近 W District、Summer Hill 與 Phra Khanong 咖啡生活圈", "Suitable for self-use and rental planning · 適合自住與出租規劃"],
    floorPlans: ["1st floor", "6th floor", "7th floor", "8th-30th floor", "31st-32nd floor", "Rooftop"],
    unitLayouts: ["Studio 29.5 sq.m", "1 Bedroom 34.5 sq.m", "1 Bedroom Plus 44 sq.m", "2 Bedroom 65-75 sq.m"],
    gallery: ideoGallery,
    floorPlanImages: ideoFloorPlanImages,
    unitPlanImages: ideoUnitPlanImages,
    fees: { management: "55 THB/sq.m./month · 55 泰銖/平方公尺/月", sinking: "500 THB/sq.m. · 500 泰銖/平方公尺" },
  },
  {
    name: "Aspire Sukhumvit - Rama 4",
    area: "Rama 4 / Phra Khanong · 拉瑪四 / 帕卡農",
    type: "Ready High-rise Condominium · 已完工高樓層公寓",
    developer: "AP (Thailand) · AP 泰國",
    status: "Ready to move, completed 2025 · 2025 年已完工可交屋",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "1 building, 38 storeys, 1,323 residential units and 2 shops · 1 棟 38 層，共 1,323 戶住宅與 2 間商鋪",
    address: "Rama 4 Road, Phra Khanong, Khlong Toei, Bangkok · 曼谷 Khlong Toei 區 Phra Khanong，Rama 4 Road",
    mapQuery: "Aspire Sukhumvit Rama 4 Bangkok",
    description:
      "Aspire Sukhumvit - Rama 4 is a ready high-rise AP project near BTS Phra Khanong, combining city access, shared facilities and 4.4-meter Vertiplex layouts.\n\nAspire Sukhumvit - Rama 4 鄰近 BTS Phra Khanong，由 AP 開發，結合市區通勤、公設機能與 4.4 米挑高 Vertiplex 房型。",
    highlights: ["BTS Phra Khanong around 600 meters · 距 BTS Phra Khanong 約 600 米", "Simplex and Vertiplex layouts · 平層與挑高 Vertiplex 房型", "Starting reference from 3.4M THB · 參考起價約 340 萬泰銖起"],
    transport: ["BTS Phra Khanong around 600 meters · BTS Phra Khanong 約 600 米", "W District around 650 meters · W District 約 650 米", "Gateway Ekkamai around 1.5 km · Gateway Ekkamai 約 1.5 公里"],
    lifestyle: ["Facilities include infinity pool, fitness, sky garden, rooftop garden and lobby · 公設包含無邊際泳池、健身房、空中花園、屋頂花園與大廳", "Vertiplex layouts create more vertical volume · Vertiplex 挑高格局增加空間感", "Useful Rama 4 / Sukhumvit rental comparison · 適合 Rama 4 / Sukhumvit 出租比較"],
    floorPlans: ["Ground and facility plans", "Typical floor plans", "Rooftop floor plan"],
    unitLayouts: ["Studio 24 sq.m", "1-Bed 26.5-34 sq.m", "2-Bed 50-55 sq.m", "Vertiplex 25-52 sq.m"],
    gallery: mediaRows(`
Overall Day View · 建案日景外觀|1QWawt34GCJ38OjqZ6ikJGNIIHPiW3kL8|Perspective · 建案示意圖
Overall Night View · 建案夜景外觀|1HXK3QVTKx62lg6B5e8DbGptLDND5g3gX|Perspective · 建案示意圖
The Oasis · 綠意休憩空間|1eCWVoqk-4iI3p48sBAT25o3w__qzZeCy|Facilities · 公設示意圖
The Aspire Common · 共享公共空間|18ZKcGMUP93cLjFzXFvYwAamCb_sUoZxo|Facilities · 公設示意圖
`),
    fees: { management: "45 THB/sq.m./month · 45 泰銖/平方公尺/月", sinking: "450 THB/sq.m. · 450 泰銖/平方公尺" },
  },
  {
    name: "The Residences 38",
    area: "Thonglor / Sukhumvit 38 · 通羅 / 素坤逸 38",
    type: "Ultra Luxury Residence · 頂奢豪宅",
    developer: "ANANDA, BTS Group and Rabbit Holdings · ANANDA、BTS 集團與 Rabbit Holdings",
    status: "Completed · 已完工",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "36 storeys, 171 units, 56 units released for sale · 36 層，共 171 戶，可售住宅 56 戶",
    address: "Sukhumvit 38, Phra Khanong, Khlong Toei, Bangkok 10110 · 曼谷 Khlong Toei 區 Sukhumvit 38",
    mapQuery: "The Residences 38 Sukhumvit 38 Bangkok",
    description:
      "The Residences 38 is a limited ultra-luxury residence in Thonglor, about 40 meters from BTS Thong Lo, with hotel-style service operated by La Clef under Ascott.\n\nThe Residences 38 位於曼谷 Thonglor 核心地段，距 BTS Thong Lo 約 40 米，限量私宅並由 Ascott 旗下 La Clef 提供飯店式管理服務。",
    highlights: ["Around 40 meters to BTS Thong Lo · 距 BTS Thong Lo 約 40 米", "Limited private residence with hotel-style management · 限量私宅與飯店式管理", "Unit choices from 1BR to penthouse · 房型涵蓋一房至 Penthouse"],
    transport: ["BTS Thong Lo around 1 minute walk · BTS Thong Lo 約 1 分鐘步行", "Easy access to Thonglor, Ekkamai and Phrom Phong · 可快速銜接 Thonglor、Ekkamai 與 Phrom Phong", "Near Sukhumvit Road, Rama 4 and expressway connections · 鄰近 Sukhumvit、Rama 4 與快速道路連結"],
    lifestyle: ["Near Marché Thonglor, K Village, EM District and Donki Mall · 鄰近 Marché Thonglor、K Village、EM District 與 Donki Mall", "Close to Samitivej, Sukhumvit and Bangkok hospitals · 鄰近三美泰、Sukhumvit 與 Bangkok Hospital", "Suitable for privacy-focused owner-occupiers and high-end asset allocation · 適合重視隱私的自住買方與高端資產配置"],
    floorPlans: ["10th facility floor", "24th-31st 1-2BR floors", "32nd-34th 3-4BR floors", "35th-36th penthouse floors"],
    unitLayouts: ["1BR 55-75 sq.m", "2BR 91-252 sq.m", "3BR 172 sq.m", "4BR 209 sq.m", "Penthouse 426 sq.m"],
    gallery: residenceGallery,
    floorPlanImages: residenceFloorPlanImages,
    unitPlanImages: residenceUnitPlanImages,
  },
  {
    name: "XT 10 Ekkamai",
    area: "Ekkamai Soi 10-12 / Sukhumvit 63 · Ekkamai 10-12 巷 / 素坤逸 63",
    type: "Pre-sale Lifestyle Condominium · 預售生活型公寓",
    developer: "Sansiri · Sansiri 開發商",
    status: "Expected completion Q2 2029 · 預計 2029 年 Q2 交屋",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "Tower A 28 storeys, Tower B 29 storeys, 933 units · A 棟 28 層、B 棟 29 層，共 933 戶",
    address: "Ekkamai Soi 10-12, Sukhumvit 63, Bangkok · 曼谷 Ekkamai 10-12 巷，Sukhumvit 63",
    mapQuery: "XT 10 Ekkamai Bangkok",
    description:
      "XT 10 Ekkamai is a Sansiri project designed around a co-sharing ecosystem for younger urban residents, remote workers and lifestyle buyers. It offers shared work spaces, gaming and leisure areas, rooftop pool and flexible city living.\n\nXT 10 Ekkamai 是 Sansiri 為新世代城市客群與遠端工作者打造的共創共享生活宅，規劃共享辦公、電競休閒、高空泳池與彈性生活空間。",
    highlights: ["Starting reference from 4.5M THB · 參考起價約 450 萬泰銖起", "Donki Mall Thonglor around 150 meters · 距 Donki Mall Thonglor 約 150 米", "Tower B includes pet-friendly planning · B 棟規劃寵物友善設定"],
    transport: ["BTS Ekkamai around 1.5 km · BTS Ekkamai 約 1.5 公里", "BTS Thong Lor around 1 km · BTS Thong Lor 約 1 公里", "Easy access to Ekkamai and Thonglor lifestyle corridor · 可銜接 Ekkamai 與 Thonglor 生活軸線"],
    lifestyle: ["Facilities include gym, sky garden, spa, rooftop garden, co-working and rooftop pool · 公設包含健身房、空中花園、SPA、屋頂花園、共享辦公與高空泳池", "Residents can use selected XT shared facilities through Sansiri's ecosystem · 住戶可透過 XT 系列共享公設概念延伸生活圈", "Suitable for younger tenants and lifestyle-driven investors · 適合年輕租客與生活型投資買方"],
    floorPlans: ["Tower A typical floor", "Tower B typical floor", "Facility floors", "Rooftop"],
    unitLayouts: ["1 Bedroom 24.75-35.75 sq.m", "2 Bedrooms 44.75-60.75 sq.m", "Loft / high-ceiling options"],
    gallery: mediaRows(`
XT 10 Ekkamai Reference Image · XT 10 Ekkamai 參考圖|1QWawt34GCJ38OjqZ6ikJGNIIHPiW3kL8|Temporary visual · 暫用視覺圖
Ekkamai Lifestyle Reference · Ekkamai 生活圈參考|18ZKcGMUP93cLjFzXFvYwAamCb_sUoZxo|Temporary visual · 暫用視覺圖
`),
    fees: { management: "55 THB/sq.m./month · 55 泰銖/平方公尺/月", sinking: "500 THB/sq.m. · 500 泰銖/平方公尺" },
  },
  {
    name: "Porsche Design Tower Bangkok",
    area: "Thonglor / Sukhumvit 38 · 通羅 / 素坤逸 38",
    type: "Ultra Luxury Branded Residence · 頂級品牌豪宅",
    developer: "Porsche Design & ANANDA · Porsche Design 與 ANANDA",
    status: "Pre-sale, expected completion end of 2028 · 預售中，預計 2028 年底完工",
    ownership: "Freehold residence, subject to contract terms · 永久產權住宅，依合約條件為準",
    size: "21 storeys, 22 residences, duplex and sky villa 525-1,135 sq.m · 21 層，僅 22 戶，複式與空中別墅 525-1,135 平方米",
    address: "11, 29 Sukhumvit 38 Alley, Phra Khanong, Khlong Toei, Bangkok 10110 · 曼谷 Khlong Toei 區 Sukhumvit 38 Alley 11, 29",
    mapQuery: "Porsche Design Tower Bangkok Sukhumvit 38",
    description:
      "Porsche Design Tower Bangkok is Asia's first Porsche Design residential tower and one of the brand's rare global residences. It combines private residences, passion spaces for supercars, The Loop automotive ramp and a highly distinctive design language.\n\nPorsche Design Tower Bangkok 是亞洲首座 Porsche Design 住宅大樓，全球亦屬稀有作品。建案結合超豪宅私宅、超跑收藏空間 Passion Space、The Loop 車道與鮮明的 Porsche 設計語彙。",
    highlights: ["Asia's first Porsche Design residential tower · 亞洲首座 Porsche Design 住宅大樓", "Only 22 residences · 全案僅 22 戶", "Private pools and Passion Space concept · 私人泳池與 Passion Space 超跑收藏空間"],
    transport: ["Thonglor / Sukhumvit 38 location · Thonglor / Sukhumvit 38 地段", "Walking access toward BTS Thong Lo area · 可銜接 BTS Thong Lo 生活圈", "Around 30 minutes to Suvarnabhumi Airport by car subject to traffic · 車程約 30 分鐘可往蘇凡納布機場，依交通為準"],
    lifestyle: ["Facilities include private lift, 25-meter pool area, fitness, spa, guest lounge and business lounge · 公設包含私人電梯、25 米泳池區、健身中心、水療、賓客休息室與商務休息室", "Each residence includes private pool planning and indoor-outdoor living concept · 每戶配置私人泳池規劃與室內外延伸生活概念", "Suitable for collectible real estate and ultra-high-end owner use · 適合收藏級不動產與頂級自住買方"],
    floorPlans: ["Private residence planning", "Passion Space", "The Loop", "The Crown"],
    unitLayouts: ["Duplex 525-1,135 sq.m", "Sky villa", "Private pool residence"],
    gallery: porscheGallery,
  },
  {
    name: "COCO PARC",
    area: "Rama 4 / Khlong Toei · 拉瑪四 / Khlong Toei",
    type: "Luxury Park-front Condominium · 公園第一排豪宅",
    developer: "ANANDA · ANANDA 開發商",
    status: "Completed · 成屋",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "37 storeys, 444 units, 269 parking spaces · 37 層，共 444 戶，269 個車位",
    address: "1150 Rama IV Road, Khlong Toei, Bangkok · 曼谷 Khlong Toei 區 Rama IV Road 1150",
    mapQuery: "COCO PARC Rama IV Khlong Toei Bangkok",
    description:
      "COCO PARC is a luxury park-front condominium on Rama 4 Road, directly connected to MRT Khlong Toei and positioned between Asoke, Silom-Sathorn and Rama 9 CBD demand. Dusit provides hotel-style property management services.\n\nCOCO PARC 位於 Rama 4 Road 公園第一排，連接 MRT Khlong Toei，承接 Asoke、Silom-Sathorn 與 Rama 9 三大 CBD 需求，並由 Dusit 都喜酒店集團提供飯店式物業管理服務。",
    highlights: ["Direct MRT Khlong Toei connection · MRT Khlong Toei 地鐵上蓋 / 近站連結", "Park-front views toward Benjakitti and Lumpini · 可享班嘉奇蒂與倫披尼公園綠意", "Dusit hotel-style property management · Dusit 都喜酒店式物業管理"],
    transport: ["MRT Khlong Toei at doorstep · MRT Khlong Toei 近站", "2 stops to Asoke / Sukhumvit interchange · 2 站可達 Asoke / Sukhumvit 轉乘", "Rama 4 corridor connects CBD, expressway and One Bangkok area · Rama 4 串聯 CBD、快速道路與 One Bangkok 區域"],
    lifestyle: ["Facilities include luxury lobby, spa, gym, pool, sky garden, salon, yoga room and rooftop lounge · 公設包含豪華大廳、SPA、健身房、泳池、空中花園、沙龍、瑜珈室與頂樓 Lounge", "Near Benjakitti Park, Lumpini Park and One Bangkok · 鄰近班嘉奇蒂公園、倫披尼公園與 One Bangkok", "Suitable for buyers wanting park view, MRT access and premium management · 適合重視公園景觀、MRT 交通與高端管理的買方"],
    floorPlans: ["B1 to roof floor plans", "10th-22nd typical floor", "23rd-29th typical floor", "Penthouse floors"],
    unitLayouts: ["Studio 25.5-27 sq.m", "1BR 34.5-48 sq.m", "1BR Plus 49.5 sq.m", "2BR 64.5-66.5 sq.m", "3BR 101.5-113.5 sq.m", "Penthouse 133.5-230 sq.m"],
    gallery: cocoGallery,
    floorPlanImages: cocoFloorPlanImages,
    unitPlanImages: cocoUnitPlanImages,
    fees: { management: "130 THB/sq.m./month · 130 泰銖/平方公尺/月", sinking: "1,000 THB/sq.m. · 1,000 泰銖/平方公尺" },
  },
];

const phuketProjects: Project[] = [
  {
    name: "Banyan Tree Beach Residences Oceanus",
    area: "Bang Tao / Laguna Phuket · 邦濤 / Laguna Phuket",
    type: "Beach Residence · 海灘住宅",
    developer: "Banyan Group · Banyan Group",
    status: "Project information available · 建案資料整理中",
    ownership: "Subject to project terms · 依建案條件為準",
    size: "Beach residence collection · 海灘住宅產品",
    address: "Bang Tao, Phuket · 普吉島 Bang Tao",
    mapQuery: "Banyan Tree Beach Residences Oceanus Phuket",
    description: "A premium beach residence concept under the Banyan Tree lifestyle umbrella.\n\nBanyan Tree 旗下高端海灘住宅概念，適合重視度假生活、隱私與長期 Phuket 資產價值的買方。",
    highlights: ["Beach lifestyle · 海灘生活", "Banyan Tree brand halo · Banyan Tree 品牌題材", "Laguna / Bang Tao demand · Laguna / Bang Tao 區域需求"],
    transport: ["Bang Tao area access · Bang Tao 區域交通", "Laguna Phuket lifestyle district · Laguna Phuket 生活圈", "Airport access subject to traffic · 往機場車程依交通為準"],
    lifestyle: ["Resort living · 度假式生活", "Beach and services nearby · 鄰近海灘與服務機能", "Suitable for personal use and rental planning · 適合自用與出租規劃"],
    floorPlans: ["Project plan", "Typical floor", "Facility plan"],
    unitLayouts: ["Residence units", "Beachfront options", "Larger family layouts"],
  },
  {
    name: "The Cube Amaze Phuket - Srisoonthorn",
    area: "Srisoonthorn / Thalang · Srisoonthorn / Thalang",
    type: "Low-rise Resort Condominium · 低樓層度假公寓",
    developer: "Soken Development Group · Soken Development Group",
    status: "Project information available · 建案資料整理中",
    ownership: "Subject to project terms · 依建案條件為準",
    size: "Low-rise resort condominium · 低樓層度假型公寓",
    address: "Srisoonthorn, Thalang, Phuket · 普吉島 Thalang 區 Srisoonthorn",
    mapQuery: "The Cube Amaze Phuket Srisoonthorn",
    description: "A practical low-rise resort condominium in Srisoonthorn.\n\n位於 Srisoonthorn 的低樓層度假型公寓，適合重視入手門檻、島內交通與實用生活機能的買方。",
    highlights: ["Low-rise planning · 低樓層規劃", "Central island connectivity · 島內交通銜接", "Resort facilities · 度假式公設"],
    transport: ["Access to Thalang and Laguna areas · 可往 Thalang 與 Laguna 區域", "Useful for Phuket daily living · 適合普吉日常生活", "Airport access subject to traffic · 往機場車程依交通為準"],
    lifestyle: ["Resort-style common areas · 度假式公共空間", "Practical for own stay or rental · 適合自住與出租", "Nearby local services · 鄰近日常服務"],
    floorPlans: ["Typical floor", "Facility floor", "Master plan"],
    unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"],
  },
  {
    name: "The Title Cielo Rawai",
    area: "Rawai · 拉威",
    type: "Resort Condominium · 度假型公寓",
    developer: "Rhom Bho Property · Rhom Bho Property",
    status: "Project information available · 建案資料整理中",
    ownership: "Subject to project terms · 依建案條件為準",
    size: "Resort residence · 度假住宅",
    address: "Rawai, Phuket · 普吉島 Rawai",
    mapQuery: "The Title Cielo Rawai Phuket",
    description: "A Rawai-focused resort residence for southern Phuket lifestyle.\n\n位於 Rawai 的度假型住宅，適合重視南普吉生活、海灘機能與出租潛力的買方。",
    highlights: ["Rawai lifestyle · Rawai 生活圈", "Resort residence positioning · 度假住宅定位", "Suitable for own stay and rent · 適合自用與出租"],
    transport: ["Rawai and Nai Harn area access · 可銜接 Rawai 與 Nai Harn 區域", "Southern Phuket lifestyle · 南普吉生活圈", "Car / scooter lifestyle common · 當地多以汽車 / 機車移動"],
    lifestyle: ["Beach, cafes and long-stay demand · 海灘、咖啡廳與長住需求", "Resort common areas · 度假式公設", "Useful for winter-stay clients · 適合避寒長住客群"],
    floorPlans: ["Typical floor", "Facility plan", "Master plan"],
    unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"],
  },
  {
    name: "KATA BELLO (The Title KataBello)",
    area: "Kata · 卡塔",
    type: "Resort Residence · 度假住宅",
    developer: "Rhom Bho Property · Rhom Bho Property",
    status: "Project information available · 建案資料整理中",
    ownership: "Subject to project terms · 依建案條件為準",
    size: "Resort residence concept · 度假住宅產品",
    address: "Kata, Phuket · 普吉島 Kata",
    mapQuery: "The Title KataBello Phuket",
    description: "A Kata-area resort residence concept under The Title brand.\n\nThe Title 品牌於 Kata 區的度假住宅概念，適合重視西岸度假氛圍與出租需求的買方。",
    highlights: ["Kata west-coast appeal · Kata 西岸度假題材", "The Title brand · The Title 品牌", "Holiday rental demand · 度假出租需求"],
    transport: ["Kata and Karon area access · 可銜接 Kata 與 Karon 區域", "Beach lifestyle route · 海灘生活動線", "Airport access subject to traffic · 往機場車程依交通為準"],
    lifestyle: ["Beach, dining and tourist demand · 海灘、餐飲與旅遊需求", "Resort common areas · 度假式公設", "Suitable for holiday-use buyers · 適合度假自用買方"],
    floorPlans: ["Typical floor", "Facility plan", "Master plan"],
    unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"],
  },
  {
    name: "The Title Heritage Bang Tao",
    area: "Bang Tao · 邦濤",
    type: "Resort Residence · 度假住宅",
    developer: "Rhom Bho Property · Rhom Bho Property",
    status: "Project information available · 建案資料整理中",
    ownership: "Subject to project terms · 依建案條件為準",
    size: "Resort residence concept · 度假住宅產品",
    address: "Bang Tao, Phuket · 普吉島 Bang Tao",
    mapQuery: "The Title Heritage Bang Tao Phuket",
    description: "A Bang Tao residence concept in one of Phuket's established resort districts.\n\n位於 Bang Tao 的度假住宅產品，適合重視海灘生活、區域成長與長期資產配置的買方。",
    highlights: ["Bang Tao resort district · Bang Tao 度假生活圈", "Beach and service demand · 海灘與服務需求", "Long-term area growth · 區域長期成長性"],
    transport: ["Bang Tao and Laguna area access · 可銜接 Bang Tao 與 Laguna 區域", "Useful for beach lifestyle planning · 適合海灘生活規劃", "Airport access subject to traffic · 往機場車程依交通為準"],
    lifestyle: ["Beach clubs and resort services nearby · 鄰近海灘俱樂部與度假服務", "Suitable for personal use and rental · 適合自用與出租", "Popular long-stay Phuket area · 普吉長住熱門區域"],
    floorPlans: ["Typical floor", "Facility plan", "Master plan"],
    unitLayouts: ["Studio", "1 Bedroom", "2 Bedroom"],
  },
];

function ProjectCard({ project, index, isActive, onSelect }: { project: Project; index: number; isActive: boolean; onSelect: () => void }) {
  const cover = project.gallery?.[0]?.src || images[index % images.length];
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
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-brand-forest">
          <span>{project.developer.split(" · ")[0]}</span>
          <span>{project.ownership.split(" · ")[0]}</span>
          <span>{project.area.split(" · ")[0]}</span>
        </div>
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
  const fees = project.fees || {
    management: "Subject to latest project documents · 以最新建案文件為準",
    sinking: "Subject to latest project documents · 以最新建案文件為準",
  };
  const rows = [
    ["Developer · 發展商", project.developer],
    ["Ownership · 產權類型", project.ownership],
    ["Project Scale · 建案規模", project.size],
    ["Address · 建案地址", project.address],
    ["Management Fee · 管理費", fees.management],
    ["Sinking Fund · 公共基金", fees.sinking],
  ];
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">Project Brief</p>
      <h4 className="mt-2 font-serif-tc text-2xl text-brand-forest">建案速覽</h4>
      <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
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

function MediaGallery({ title, items, fit = "cover" }: { title: string; items?: ProjectMedia[]; fit?: "cover" | "contain" }) {
  if (!items?.length) return null;
  return (
    <section className="border border-border bg-background p-5 md:p-7">
      <p className="whitespace-pre-line text-[10px] uppercase tracking-[0.32em] text-brand-clay font-medium">{bilingual(title)}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={`${item.src}-${item.title}`} className="overflow-hidden border border-border bg-brand-cream/35">
            <div className="bg-background"><img src={item.src} alt={item.title} loading="lazy" className={`aspect-[4/3] w-full ${fit === "contain" ? "object-contain p-3" : "object-cover"}`} /></div>
            <figcaption className="p-4">
              <p className="whitespace-pre-line font-serif-tc text-sm leading-relaxed text-brand-ink">{bilingual(item.title)}</p>
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
    <section className="border border-border bg-background p-5 md:p-6">
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
        <div className="bg-background"><img src={item.src} alt={item.title} loading="lazy" className="aspect-[4/3] w-full object-contain p-3" /></div>
        <figcaption className="border-t border-border bg-brand-cream/35 p-4">
          <p className="whitespace-pre-line font-serif-tc text-base leading-relaxed text-brand-ink">{bilingual(item.title)}</p>
          {item.note && <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.16em] text-brand-clay">{bilingual(item.note)}</p>}
        </figcaption>
      </figure>
    </section>
  );
}

function ProjectHighlights({ project }: { project: Project }) {
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">建案亮點 HIGHLIGHTS</h4>
      <p className="mt-6 whitespace-pre-line text-sm leading-loose text-foreground/75">{bilingual(project.description)}</p>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {project.highlights.map((item) => <div key={item} className="whitespace-pre-line border border-border bg-brand-cream/40 p-5 text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}
      </div>
    </section>
  );
}

function LocationSection({ project, mapSrc }: { project: Project; mapSrc: string }) {
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">地理位置與週邊機能</h4>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/60">{bilingual(project.address)}</p>
      <div className="mt-6 overflow-hidden border border-border bg-brand-cream/30"><iframe title={`${project.name} map`} src={mapSrc} className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      <div className="mt-5 grid gap-px bg-border md:grid-cols-2">
        {project.transport.concat(project.lifestyle).slice(0, 8).map((item) => <div key={item} className="whitespace-pre-line bg-brand-cream/35 p-5 text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}
      </div>
    </section>
  );
}

function Facilities({ project }: { project: Project }) {
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <h4 className="font-serif-tc text-3xl text-brand-ink">公共設施</h4>
      <p className="mt-3 text-sm leading-relaxed text-foreground/60">Selected facilities based on project materials · 依建案素材整理主力公設</p>
      <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {project.lifestyle.slice(0, 6).map((item) => <div key={item} className="whitespace-pre-line bg-brand-cream/35 p-5 text-sm leading-loose text-brand-ink">{bilingual(item)}</div>)}
      </div>
    </section>
  );
}

function ProjectFaq({ project }: { project: Project }) {
  const faqs = [
    {
      question: `What type of buyer is ${project.name} suitable for? · ${project.name} 適合哪一類買方？`,
      answer: `${project.name} is suitable for buyers who value ${project.area.split(" · ")[0]} and want to compare lifestyle comfort, long-term area demand and rental potential before making a decision.\n\n${project.name} 適合重視 ${project.area.split(" · ")[1] || project.area.split(" · ")[0]}、希望同時比較自住舒適度、區域長期需求與出租潛力的買方。`,
    },
    {
      question: "What should be confirmed before reservation? · 保留前需要確認什麼？",
      answer: "Confirm the latest available units, price list, foreign quota, payment schedule, transfer fees, furniture package and contract terms before reservation.\n\n保留前建議確認最新可售戶別、價格表、外國人額度、付款表、過戶費用、家具配套與合約條款。",
    },
    {
      question: "Can KHANTHAROS help compare this project with others? · KHANTHAROS 可以協助和其他建案比較嗎？",
      answer: "Yes. We can compare location, developer profile, rental audience, resale liquidity, total cost and practical ownership risks.\n\n可以。我們可協助比較地段、建商背景、租客客群、轉售流動性、總持有成本與實際持有風險。",
    },
  ];
  return (
    <section className="border border-border bg-background p-6 md:p-8">
      <h4 className="whitespace-pre-line font-serif-tc text-3xl text-brand-ink">{bilingual("Common Questions · 常見問題")}</h4>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="group py-5" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-tc text-lg text-brand-ink">
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
        {tabs.map((tab) => <button key={tab.key} type="button" onClick={() => setActiveTab(tab.key)} className={`shrink-0 px-5 py-3 text-sm font-serif-tc transition-colors ${activeTab === tab.key ? "bg-brand-forest text-brand-cream" : "text-brand-ink hover:bg-brand-cream"}`}>{tab.label}</button>)}
      </div>
      <div className="mt-6">
        {activeTab === "overview" && <ProjectOverview project={project} />}
        {activeTab === "images" && <MediaGallery title="Project Images · 建案圖片" items={project.gallery} />}
        {activeTab === "highlights" && <ProjectHighlights project={project} />}
        {activeTab === "plans" && <section className="border border-border bg-background p-6 md:p-8"><h4 className="font-serif-tc text-3xl text-brand-ink">樓層平面圖 & 單位格局圖</h4><p className="mt-3 text-sm leading-relaxed text-foreground/60">Floor Plan 整層樓配置 · Unit Plan 各戶格局</p><div className="mt-6 grid gap-6 lg:grid-cols-2"><ImageCarousel title="Floor Plan · 樓層平面圖" items={project.floorPlanImages} /><ImageCarousel title="Unit Plan · 單位格局圖" items={project.unitPlanImages} /></div></section>}
        {activeTab === "facilities" && <Facilities project={project} />}
        {activeTab === "location" && <LocationSection project={project} mapSrc={mapSrc} />}
        {activeTab === "faq" && <ProjectFaq project={project} />}
      </div>
    </div>
  );
}

export function PreSellSectionV2() {
  const [region, setRegion] = useState<"bangkok" | "phuket">("bangkok");
  const [selectedName, setSelectedName] = useState(bangkokProjects[0].name);
  const projects = region === "bangkok" ? bangkokProjects : phuketProjects;
  const selectedProject = useMemo(() => projects.find((project) => project.name === selectedName) || projects[0], [projects, selectedName]);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selectedProject.mapQuery)}&output=embed`;

  const chooseProject = (projectName: string) => {
    setSelectedName(projectName);
    window.setTimeout(() => document.getElementById("selected-project")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const chooseRegion = (nextRegion: "bangkok" | "phuket") => {
    const nextProjects = nextRegion === "bangkok" ? bangkokProjects : phuketProjects;
    setRegion(nextRegion);
    setSelectedName(nextProjects[0].name);
  };

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground font-sans">
      <section className="bg-brand-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-brand-clay font-medium">PreSell · 預售 / 新成屋</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04] tracking-tight text-brand-ink text-balance">Curated new launches in Bangkok and Phuket.</h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-foreground/70">Project information is reorganized into KHANTHAROS advisory notes, so clients compare projects directly on our website.</p>
            <p className="mt-5 font-serif-tc text-xl leading-loose text-brand-forest/85">建案資料整理成 KHANTHAROS 自己的顧問筆記，客戶可以直接在我們網站內比較，不需要跳到其他網站。</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-clay font-medium">Project Collection · 建案列表</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-brand-ink">{region === "bangkok" ? "Bangkok" : "Phuket"}</h2>
            </div>
            <div className="flex w-full border border-border md:w-auto">
              <button type="button" onClick={() => chooseRegion("bangkok")} className={`flex-1 px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors md:flex-none ${region === "bangkok" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}>Bangkok</button>
              <button type="button" onClick={() => chooseRegion("phuket")} className={`flex-1 px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors md:flex-none ${region === "phuket" ? "bg-brand-forest text-brand-cream" : "bg-background text-brand-ink hover:text-brand-forest"}`}>Phuket</button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} isActive={selectedProject.name === project.name} onSelect={() => chooseProject(project.name)} />)}
          </div>

          <section id="selected-project" className="mt-12 scroll-mt-24">
            <DetailHero project={selectedProject} />
            <ProjectDetailTabs project={selectedProject} mapSrc={mapSrc} />
          </section>
        </div>
      </section>

      <div className="fixed bottom-6 right-5 z-[70] flex flex-col gap-3">
        <a href={lineUrl} target="_blank" rel="noreferrer" className="bg-[#06C755] px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-white shadow-lg transition-colors hover:bg-[#05b34d]">LINE</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-brand-forest px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-cream shadow-lg transition-colors hover:bg-brand-ink">WhatsApp</a>
      </div>
    </main>
  );
}
