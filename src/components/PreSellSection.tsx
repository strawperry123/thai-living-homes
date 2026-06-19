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

const mediaFromEntries = (entries: [string, string, string?][]): ProjectMedia[] =>
  entries.map(([title, id, note]) => ({ title, src: driveImage(id), note }));

const lifeRama4FloorPlanImages = mediaFromEntries([
  ["1st Layout Combine · 1 樓整體平面圖", "1TCedySR8iIf9MCYdMNa1Fq__bQqf3Ag_", "Simplex Floorplan · Simplex 樓層圖"],
  ["2nd Mezzanine · 2 樓夾層平面圖", "1-PRz35yL6os6CAwUdO728bhj8q1mgrS-", "Simplex Floorplan · Simplex 樓層圖"],
  ["2nd Parking · 2 樓停車層", "1prkp3I7p3-5KZwY2YgeFahz8LYCiy-cP", "Simplex Floorplan · Simplex 樓層圖"],
  ["3rd Parking · 3 樓停車層", "1QilRlMB0tj1qytf5admSzPpn9_hhDEaS", "Simplex Floorplan · Simplex 樓層圖"],
  ["4th Parking · 4 樓停車層", "1zTyck17FKc5qD-C9uqrqI5kCEePZeIEi", "Simplex Floorplan · Simplex 樓層圖"],
  ["5th and 7th Parking · 5 / 7 樓停車層", "1CodhIq6bRZD9--25Ep5rj91JQ6MT-p8V", "Simplex Floorplan · Simplex 樓層圖"],
  ["6th Parking · 6 樓停車層", "1rvSPPFGt95rOseHqnsG-wV_BISJhQ4GJ", "Simplex Floorplan · Simplex 樓層圖"],
  ["8th Parking · 8 樓停車層", "1UCsLRZW1DEZtYSXOE8Tb2GAUIEhdxkxi", "Simplex Floorplan · Simplex 樓層圖"],
  ["10th Typical Floor Plan · 10 樓標準層平面圖", "1ojSiaHrnZ_2GXN2ZHmQXTovjPaDo9vy-", "Vertiplex Floorplan · Vertiplex 樓層圖"],
  ["11th-14th Typical Floor Plan · 11-14 樓標準層平面圖", "1fhVdq6Emj3qF3W1COj_LNv-naQYnBPzz", "Vertiplex Floorplan · Vertiplex 樓層圖"],
  ["15th-24th Typical Floor Plan · 15-24 樓標準層平面圖", "1US2z1qN2bCE6lk197AGcl0QHritTkbtl", "Simplex Floorplan · Simplex 樓層圖"],
  ["25th-32nd Typical Floor Plan · 25-32 樓標準層平面圖", "1DhEo6ozWTU5_x9RQq_nhbLKa30eLkKkk", "Simplex Floorplan · Simplex 樓層圖"],
  ["33rd-35th Lower · 33-35 樓下層", "1p09MVy1u2SZBpfzJ9HlvESoeC6UKAdxB", "Vertiplex Floorplan · Vertiplex 樓層圖"],
  ["33rd-35th Upper · 33-35 樓上層", "1IUcpXR3gesfJocEJfvhGl0WOquArsCIY", "Vertiplex Floorplan · Vertiplex 樓層圖"],
  ["36th Lower · 36 樓下層", "1m_9IbLm9UHaKkaS_x9eFhxaKzud2CtCv", "Vertiplex Floorplan · Vertiplex 樓層圖"],
  ["36th Upper · 36 樓上層", "1D7mWwr3Vb6Bt5mlJi-VHMcfXKOGLCt9g", "Vertiplex Floorplan · Vertiplex 樓層圖"],
  ["37th Floor · 37 樓平面圖", "1DLUX1mBqntpgfKtRaUm9jDYGO2N79FPu", "Vertiplex Floorplan · Vertiplex 樓層圖"],
]);

const lifeRama4UnitPlanImages = mediaFromEntries([
  ["Type A - L9-11-A1 · A 戶型 L9-11-A1", "1UYntSozif_9r9Vr155ALtaL9FIJYtIVN", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-12-A2M · A 戶型 L9-12-A2M", "1X6XFBCZF4qv66wiyvkAsi5r7YJSG3uGE", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-13-A2 · A 戶型 L9-13-A2", "1SVZwPscIVONGn9wGp_DmYw5dqo23hiJ2", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-14-A2M · A 戶型 L9-14-A2M", "1zjygs6Z6RgByhTQeMEskdgRqDgaHUPJl", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-30-A5M · A 戶型 L9-30-A5M", "1JA3WS47cc5f26HYGF8wSbKTm0x7beWu-", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-31-A3 · A 戶型 L9-31-A3", "1HSJ7KkZp-qqUMNsPs9wBotxp9BRlzZNy", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-32-A5 · A 戶型 L9-32-A5", "1iRMS_uDQ5-nfzoZyqO00esFM2ehZdaUj", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L9-33-A4 · A 戶型 L9-33-A4", "17qq_FTBlF6UZ3aj_8O6YEBX1kLbWQJlI", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-11-A1 · A 戶型 L10-11-A1", "1bU_u938BVMsefJyl3CEQsb5rtRASY4UP", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-12-A2M · A 戶型 L10-12-A2M", "1QlW2Iz8Bz66I9g9fTRJ_jv8o-NZlysBd", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-13-A2 · A 戶型 L10-13-A2", "1Fs1NAOcX7Eg9MbVxl41Nmn6K6zUah0ns", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-14-A2M · A 戶型 L10-14-A2M", "1lwIyKpY2UUsnZtUA-qJxv0WEaWp2nmHA", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-25-A6 · A 戶型 L10-25-A6", "1NJxsBG_S-hq_BCE8RiTIi6zaNjrhK2L4", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-30-A5M · A 戶型 L10-30-A5M", "142UygqxJEocVq5NFZqDqbIK1QOpp4nLu", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-31-A3 · A 戶型 L10-31-A3", "1A30rHgqDgtUlJ4IsPjqlJh-sIuWqbguJ", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-32-A5 · A 戶型 L10-32-A5", "16ZyK1oJbS0EHaa9oZ80yoa8jRS7mKDW2", "Simplex layout · Simplex 單位格局圖"],
  ["Type A - L10-33-A4 · A 戶型 L10-33-A4", "12hFhiFz3bWL9SyOdKti-tsVbP9AEfM8g", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L10-01-B1 · B 戶型 L10-01-B1", "1L9HQs9zOgemt4bhx48AInUhGiQSxJ8Pi", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L10-02-B3 · B 戶型 L10-02-B3", "1E3XBGpLWsS5RIIT5Y8ZsOA58T1YAHFSf", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L11-41-B6 · B 戶型 L11-41-B6", "1390FMczW97L_DjMa5y66qA_mxuAsPgHv", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L11-45-B7 · B 戶型 L11-45-B7", "1L3xJsLxViCKJnpux2E_qTq33Q-YeRS2F", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L11-46-B8 · B 戶型 L11-46-B8", "1bhlsmYyKHPYj15DiRNGzCOZcp6RrZAMk", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L25-25-B9 · B 戶型 L25-25-B9", "1oWRXwTUOZu5PuAwtx8sRAZv1Js7F4v_9", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L25-30-B2 · B 戶型 L25-30-B2", "1fgyi-m__Q3DRncmsFX_-oitsmbneysHR", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L25-31-B4M · B 戶型 L25-31-B4M", "1VXwNmq2mt4yQACkFsvWd9K468iyRxvMo", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L25-32-B4 · B 戶型 L25-32-B4", "1K93b_kor145M9V3oCBQpvqd8Wzv05xGe", "Simplex layout · Simplex 單位格局圖"],
  ["Type B - L25-33-B5 · B 戶型 L25-33-B5", "1f0qT9JKismgpsVCtHvTBvN2Hg7Sq6WnW", "Simplex layout · Simplex 單位格局圖"],
  ["Type C - L33-14-C4M · C 戶型 L33-14-C4M", "1T4e5g942FzNsXnPV2d77wsf49NBs7INX", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - D12M-43 · D 戶型 D12M-43", "1KQ0x4EVXyT4dy9hqr6Pc9oEbs3opsZp6", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-15/17/19/21-D13 · D 戶型 L33-15/17/19/21-D13", "1e_d9Ar1wQ6u6OueuqdyQDxU73Iuj-4ys", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-16/18/20/22-D13M · D 戶型 L33-16/18/20/22-D13M", "14XhhxLkCE44D66oNy_rBlENmA1KZ-f-D", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-23-D14 · D 戶型 L33-23-D14", "1k4rOBWxjxF9_dK5CSuPiMRRCA54qLkjO", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-26-D15M · D 戶型 L33-26-D15M", "11Q5RAZrRR01ST0J-4AeSVpiuB4gbEadq", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-27-D15 · D 戶型 L33-27-D15", "1CVEI6G83Va9QhWPfeuBS6Pqia3mL8VPv", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-28-D16 · D 戶型 L33-28-D16", "1FoRiH002j6i2MBPgX3zsbnyDWGAZclUG", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type D - L33-29-D17 · D 戶型 L33-29-D17", "17doy55zUg4YKmjgYjPfUqRZoooYhSE-U", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type E - L33-04/06/08-E6M · E 戶型 L33-04/06/08-E6M", "1ChM9zmR7hWR4hHdvAlKGy6KWybOcBsig", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type E - L33-09-E7 · E 戶型 L33-09-E7", "134J9hDUkXYk3qiJzNVZMryhmQSR_iKFB", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type E - L33-42/44-E8 · E 戶型 L33-42/44-E8", "1s5KFtA29-dfN1tQkCaf0kHJ6Xup23SjR", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type E - L33-43-E8M · E 戶型 L33-43-E8M", "1yGHlwsGayar1VTsF7NrGyYt9bkZiw4P6", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type F - L33-37/39-F5M · F 戶型 L33-37/39-F5M", "1JCASApDRukyq958Vm9zlByV0g-usp8af", "Vertiplex layout · Vertiplex 單位格局圖"],
  ["Type K - L33-40-K2 · K 戶型 L33-40-K2", "10JPoC6kQZsD1v0Xh3ygqWA4TojfIQQ6z", "Vertiplex layout · Vertiplex 單位格局圖"],
]);

const aspireFloorPlanImages = mediaFromEntries([
  ["Ground Master Plan · G 樓總配置圖", "171RlWL4JNYee_e8yP-CZ09vvG8sAqa8B", "Floor Plan · 樓層平面圖"],
  ["Ground Floor · G 樓配置圖", "19QOUA5FP7GmCkioBx-dbY8ApRExNd4YH", "Floor Plan · 樓層平面圖"],
  ["Mezzanine Floor · M 樓配置圖", "1P7ttuOmATSrd7vXiohVFElNt0a_gbWEI", "Floor Plan · 樓層平面圖"],
  ["Level 2 · 2 樓配置圖", "1zmqPm0YJGYdYu8Rj-5rebe7nTqV_f4Ne", "Floor Plan · 樓層平面圖"],
  ["Level 3 · 3 樓配置圖", "1WNAj14IgU0ZdO48Nye0l2ZLjFOz5wti2", "Floor Plan · 樓層平面圖"],
  ["Level 4 · 4 樓配置圖", "1HP6Mhq6H8q7iDf_Oef3qHQqUm9OzovlO", "Floor Plan · 樓層平面圖"],
  ["Level 5 · 5 樓配置圖", "1_2kecBAMYkwzaVionLJRSqKBrE9XTTAD", "Floor Plan · 樓層平面圖"],
  ["Level 6 · 6 樓配置圖", "1X8oAesJcrDkPhOGPph7YtQUNhERlIaYg", "Floor Plan · 樓層平面圖"],
  ["Level 7 · 7 樓配置圖", "1S3cG-ekB-m12r55RG0nc7Lu2XK_C1Mvb", "Floor Plan · 樓層平面圖"],
  ["Level 8 Facilities · 8 樓公設配置圖", "1HiPh4ax57EexEuuvCwcThGQx9VEXwUFd", "Floor Plan · 樓層平面圖"],
  ["Level 9 · 9 樓配置圖", "1-rJsnS8CIJUTGXnaVKgYZmWloqYnggaa", "Floor Plan · 樓層平面圖"],
  ["Level 10-30 · 10-30 樓標準層", "1Ho4xsSRIR1kPV83tc8GMowIEAMEizK-r", "Floor Plan · 樓層平面圖"],
  ["Level 31-37 · 31-37 樓配置圖", "13HrNWTVOruqLh1aO0WPxISYIlArpu29K", "Floor Plan · 樓層平面圖"],
  ["Level 38 · 38 樓配置圖", "1PZKFdypII24OoAkHWbHNjVubnAknj_Dh", "Floor Plan · 樓層平面圖"],
  ["Level 38 Upper · 38 樓上層", "10zEZFkuQsKew9yeGcy18Zmpb8iBt9T4g", "Floor Plan · 樓層平面圖"],
  ["Rooftop · 屋頂層配置圖", "1WYfLc3nnQA5M3TCdOs5H8InirXHmjuGK", "Floor Plan · 樓層平面圖"],
]);

const aspireUnitPlanImages = mediaFromEntries([
  ["Type A1 · A1 戶型", "1WIegKqrG9MPaKrpvR68knFl3Qume42AM", "Unit Plan · 單位格局圖"],
  ["Type A2 · A2 戶型", "1tY6-OtnXe81z-JwX2sWsl7VuB245_b1p", "Unit Plan · 單位格局圖"],
  ["Type B1 · B1 戶型", "1s9fwqpzjVLcS0vgDydTFUpS7JqOFmWLQ", "Unit Plan · 單位格局圖"],
  ["Type B1M · B1M 戶型", "1oaWeR8jDqO97w2Ad37xDvySAXL9lV_7n", "Unit Plan · 單位格局圖"],
  ["Type B2 · B2 戶型", "15zpLgdDTE2ijGGWS8toeZfYUWDfd_5vb", "Unit Plan · 單位格局圖"],
  ["Type B2M · B2M 戶型", "1apIGg_2h0gScQUA9Wjd2R-CGR85Ra7Ob", "Unit Plan · 單位格局圖"],
  ["Type C1 · C1 戶型", "19nm7P6TJhsiY2JuhQSmlboM3zVb3f3hC", "Unit Plan · 單位格局圖"],
  ["Type C1M · C1M 戶型", "1xTSdXo3fq8wvkr6bZTgI5Bt8q8dPX2CN", "Unit Plan · 單位格局圖"],
  ["Type C2 · C2 戶型", "1Pz0ifTg7_RbaHMKqqPNgaq7G4kUFewnI", "Unit Plan · 單位格局圖"],
  ["Type C2M · C2M 戶型", "11alxmsf9aR00kVF7WS4RRx511jxPn-0F", "Unit Plan · 單位格局圖"],
  ["Type C3 · C3 戶型", "18vX9psRFxtdT0mZ7re66xAvDbs8k3IqU", "Unit Plan · 單位格局圖"],
  ["Type C3M · C3M 戶型", "1vr8eyenMcwkSP0B5_xgGzgf-dVvXTdxR", "Unit Plan · 單位格局圖"],
  ["Type C4 · C4 戶型", "1KXro74NZ79_iLARTzDwciNTMUzqfR0Pw", "Unit Plan · 單位格局圖"],
  ["Type D1 · D1 戶型", "1tRpkhToEAVI-JwlvlTZXzV4qzut3UG0v", "Unit Plan · 單位格局圖"],
  ["Type D1M · D1M 戶型", "1tdGlP2Qj-VEcb8n-0X-xaFd60vT7OcyW", "Unit Plan · 單位格局圖"],
  ["Type D2 · D2 戶型", "1jZH4fe5eXtivZCTFQQIvCpEpU8O51O2d", "Unit Plan · 單位格局圖"],
  ["Type D2M · D2M 戶型", "1dyMlFM4i5J_2iSFo3ANk-qvRmWrED6zN", "Unit Plan · 單位格局圖"],
  ["Type D3 · D3 戶型", "1tMHp9mjDGZZtYxaRg7sUgsJw8sCdbqDO", "Unit Plan · 單位格局圖"],
  ["Type E1 · E1 戶型", "1DAH9iU0-9Jg2o2pr6p_2gjzBGSXFgIzc", "Unit Plan · 單位格局圖"],
  ["Type E2 · E2 戶型", "1s--1G8BxBFCX2broUEInM8euZSmD3Ir7", "Unit Plan · 單位格局圖"],
  ["Type F1 · F1 戶型", "1_FeOv-7MAk-Nz3dyX8Q359D5eOY1Z1HA", "Unit Plan · 單位格局圖"],
  ["Type G1 · G1 戶型", "1MTFZxgoLv5HigS0LMkDHLkXsHnknGlb7", "Unit Plan · 單位格局圖"],
  ["Type G2 · G2 戶型", "1_MH-dFc2afLuTiTj1joy1zjTKSFVRZfg", "Unit Plan · 單位格局圖"],
  ["Type G3 · G3 戶型", "1_8rqlbVP_HKnuX8uY_b61vBUnNz8D-d6", "Unit Plan · 單位格局圖"],
  ["Type G3M · G3M 戶型", "1kSlJXiLB6s7v_piG4Kys2I0p5JKNbReh", "Unit Plan · 單位格局圖"],
  ["Type H1 · H1 戶型", "1x0PNS3mf5LXDMcNgzD3tRtoYwN2IsLSQ", "Unit Plan · 單位格局圖"],
  ["Type H1M · H1M 戶型", "1vNDbbzIioCFYAPRl808url__WO0MnXuQ", "Unit Plan · 單位格局圖"],
  ["Type H2 · H2 戶型", "1JDA-WAw0mto4dQZbM11U-KqRnedFlETv", "Unit Plan · 單位格局圖"],
  ["Type H2M · H2M 戶型", "1GrO16RL0gVy1rEOakSXkTNavdWoi_s5x", "Unit Plan · 單位格局圖"],
  ["Type H3 · H3 戶型", "1ryjFfFYpFLrIWqnWUP2JUJNnbCwQh6rd", "Unit Plan · 單位格局圖"],
  ["Type I1 · I1 戶型", "1I1w6PlSrReZr1fwqscxWEDq8Jqk0RwBm", "Unit Plan · 單位格局圖"],
  ["Type I1M · I1M 戶型", "1l14N8Zj9g0Ylgx2tE08lcXu05MBs4t_N", "Unit Plan · 單位格局圖"],
  ["Type I2 · I2 戶型", "14aMdWydgHo3gef0-q4L-Tzov_1mVViki", "Unit Plan · 單位格局圖"],
  ["Type J1 · J1 戶型", "1nG8P8-OFO-_Htq_ObfFDLJpn6gCajpb0", "Unit Plan · 單位格局圖"],
  ["Type J2 · J2 戶型", "1qWhBBSPuu8wRALBtrBCuREi_LNVXPMlb", "Unit Plan · 單位格局圖"],
  ["Type K1 · K1 戶型", "1lCUx3pRHZiczo5h3p_Uv2_lp7mefiyf7", "Unit Plan · 單位格局圖"],
]);

const aspireGallery = mediaFromEntries([
  ["Overall Day View · 建案日景外觀", "1QWawt34GCJ38OjqZ6ikJGNIIHPiW3kL8", "Perspective · 建案示意圖"],
  ["Overall Night View · 建案夜景外觀", "1HXK3QVTKx62lg6B5e8DbGptLDND5g3gX", "Perspective · 建案示意圖"],
  ["The Oasis · 綠意休憩空間", "1eCWVoqk-4iI3p48sBAT25o3w__qzZeCy", "Facilities · 公設示意圖"],
  ["The Aspire Common · 共享公共空間", "18ZKcGMUP93cLjFzXFvYwAamCb_sUoZxo", "Facilities · 公設示意圖"],
  ["The Co-op Society · 共享辦公與社交空間", "1x5y5K8I1U21pM5Tzh7PHjZnPzIc_-KC4", "Facilities · 公設示意圖"],
  ["8th Floor Facilities · 8 樓公設", "1F2Pi9UBf6SkGYtN6IwVUQHbc4Iyum_LZ", "Facilities · 公設示意圖"],
  ["The Workout · 健身空間", "1rxemBAYlFc4FeGdF6F25Yen2tMwWOE8V", "Facilities · 公設示意圖"],
  ["Simplex 31 sq.m · Simplex 31 平方米室內", "1HP65aqVGG6pxbaoIz3jFPh78QI8Ra5iX", "Unit Interior · 室內示意圖"],
  ["Vertiplex 33 sq.m · Vertiplex 33 平方米室內", "1cHPn8ET7So9KhlzoJw0qft_xYy2uOTJn", "Unit Interior · 室內示意圖"],
  ["38th Rooftop Facilities · 38 樓屋頂公設", "1uB8hanbh-HdE2gwANzd01yiOGjr_uYKO", "Facilities · 公設示意圖"],
  ["The Flyover · 高空連橋空間", "1IRNcHW9lLkuwDSqGGvSwo2bTKrFA_32R", "Facilities · 公設示意圖"],
  ["Location Map · 建案位置圖", "1m0YZCeeWkm3d3oB7fi8LRABK2etQyQ_E", "Map · 地圖"],
]);

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
    gallery: mediaFromEntries([
      ["Project Overview · 建案外觀概覽", "1AL9VvmNKpz3j0pfUSNJmVYRiypmYdYqh", "Exterior reference · 外觀參考"],
      ["Swimming Pool & Jacuzzi · 泳池與按摩池", "1ugehNPxMVC6XUZPFG8HhKwMfi94fXX-Q", "Facilities actual photo · 公設實景圖"],
      ["The Parlour · 迎賓客廳", "1Ou4F1SlN4YtX8p062UUojUOGE1k0tK5w", "Facilities actual photo · 公設實景圖"],
      ["Playfulness Bar · 休閒吧檯", "163BUYbpRLW48xMbEE2RvCBrAJ7N5SrTv", "Facilities actual photo · 公設實景圖"],
      ["Sky Studio · 空中共享空間", "1yM6XuDQC_WK3JjnzOrS7rT-h9BzTY4Ua", "Facilities actual photo · 公設實景圖"],
      ["Benchakitti Park View · 班嘉奇蒂公園景觀", "1TCb-nj1qylcZ4ho3VBsreGFE0dkkJZv7", "View reference · 景觀參考"],
    ]),
    floorPlanImages: lifeRama4FloorPlanImages,
    unitPlanImages: lifeRama4UnitPlanImages,
  },
  projectStub("Goodday Sukhumvit 93", "Sukhumvit 93", "Low-rise Condominium", "Sansiri", "A Sukhumvit 93 residence with approachable positioning, suited for buyers looking for an easy-to-understand Bangkok entry point with everyday convenience."),
  projectStub("Ideo Sukhumvit Rama 4", "Sukhumvit / Rama 4", "Condominium", "Ananda Development", "A Rama 4 and Sukhumvit city project with Ananda's transit-oriented positioning, suitable for buyers who prioritize connectivity and rental depth."),
  {
    name: "Aspire Sukhumvit - Rama 4",
    area: "Rama 4 / Phra Khanong · 拉瑪四 / 帕卡農",
    type: "Ready High-rise Condominium · 已完工高樓層公寓",
    developer: "AP (Thailand) · AP 泰國",
    status: "Ready to move, completed 2025 · 2025 年已完工可交屋",
    ownership: "Freehold condominium · 永久產權公寓",
    size: "1 building, 38 storeys; 1,323 residential units, 2 shops; approx. 34% parking · 1 棟 38 層，共 1,323 戶住宅、2 間商鋪，車位約 34%",
    address: "Rama 4 Road, Phra Khanong, Khlong Toei, Bangkok · 曼谷 Khlong Toei 區 Phra Khanong，Rama 4 Road",
    mapQuery: "Aspire Sukhumvit Rama 4 Phra Khanong Bangkok",
    description: "Aspire Sukhumvit - Rama 4 is a ready high-rise condominium by AP (Thailand) on Rama 4 Road near BTS Phra Khanong. The project is designed around Fast-Track Living, combining practical city access, everyday facilities and AP's 4.4-meter Vertiplex layouts for buyers who want more vertical space in a compact Bangkok unit.\n\nAspire Sukhumvit - Rama 4 位於 Rama 4 Road，鄰近 BTS Phra Khanong，由 AP (Thailand) 開發。建案主打 Fast-Track Living，結合市區通勤、公設機能與 4.4 米挑高 Vertiplex 房型，適合想要交通便利、空間感較強、同時兼顧自住與出租的買方。",
    highlights: [
      "Starting reference from 3.4M THB · 參考起價約 340 萬泰銖起",
      "BTS Phra Khanong around 600 meters with shuttle service · 距 BTS Phra Khanong 約 600 米，設有接駁服務",
      "Simplex and 4.4-meter Vertiplex layouts · 提供平層與 4.4 米挑高 Vertiplex 房型",
    ],
    transport: [
      "BTS Phra Khanong around 600 meters · BTS Phra Khanong 約 600 米",
      "Kluaynamthai Hospital around 600 meters · Kluaynamthai Hospital 約 600 米",
      "W District around 650 meters · W District 文青藝術美食夜市約 650 米",
      "Summer Hill around 700 meters · Summer Hill 社區商場約 700 米",
      "Gateway Ekkamai around 1.5 kilometers · Gateway Ekkamai 約 1.5 公里",
      "Sukhumvit Hospital around 1.5 kilometers · Sukhumvit Hospital 約 1.5 公里",
    ],
    lifestyle: [
      "Facilities include infinity pool, fitness room, sky garden, rooftop garden, lobby, electronic access and 24-hour security · 公設包含無邊際泳池、健身房、空中花園、屋頂花園、大廳、電子門禁與 24 小時保全",
      "Around 5,000 sq.m. of shared and green space supports work, relaxation and social use · 約 5,000 平方米公共與綠化空間，支援工作、休閒與社交使用",
      "Vertiplex layouts create stronger perceived space efficiency for compact urban units · Vertiplex 挑高房型能放大空間感，適合曼谷小坪數產品比較",
    ],
    floorPlans: ["Ground and facility plans", "Typical floor plans", "Rooftop floor plan"],
    unitLayouts: ["Studio 24 sq.m", "1-Bed 26.5-34 sq.m", "2-Bed 50-55 sq.m", "Vertiplex 25-52 sq.m"],
    gallery: aspireGallery,
    floorPlanImages: aspireFloorPlanImages,
    unitPlanImages: aspireUnitPlanImages,
  },
  projectStub("The Residences 38", "Thonglor", "Luxury Residence", "ANANDA, BTS Group and Rabbit Holdings", "A limited luxury residence near BTS Thong Lo, designed around privacy, hotel-style service, and prime Sukhumvit living for high-end owner-occupiers."),
  projectStub("XT 10 Ekkamai", "Ekkamai", "Condominium", "Sansiri", "An Ekkamai project positioned for a younger urban lifestyle, with access to Sukhumvit, restaurants, community malls, and tenant demand from the east-side corridor."),
  projectStub("Porsche Design Tower Bangkok", "Thonglor", "Ultra Luxury Branded Residence", "Ananda Development and Porsche Design", "A rare branded luxury tower in Thonglor, created for ultra-high-end buyers seeking privacy, design identity, and collectible real estate in Bangkok."),
  projectStub("COCO PARC", "Rama 4 / Lumpini", "Luxury Condominium", "Ananda Development and Dusit International", "A luxury residence close to Lumpini and Rama 4, positioned for buyers who want direct access to central business, green space, and established city infrastructure."),
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

  return (
    <section className="bg-background border border-border overflow-hidden">
      <div className="p-6 md:p-9">
        <div className="inline-flex bg-brand-forest text-brand-cream px-4 py-2 text-[10px] uppercase tracking-[0.28em] font-semibold">{project.status.split(" · ")[0]}</div>
        <h3 className="mt-6 font-display text-4xl md:text-6xl text-brand-ink leading-[1.02]">{project.name}</h3>
        <p className="mt-4 max-w-4xl whitespace-pre-line text-sm leading-loose text-foreground/70">{bilingual(project.address)}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-brand-forest">
          <span>{project.developer.split(" · ")[0]}</span>
          <span>BTS / MRT city access</span>
          <span>Rama 4 corridor</span>
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
    ["Management Fee · 管理費", project.name === "Aspire Sukhumvit - Rama 4" ? "45 baht/sq.m./month · 45 泰銖/平方公尺/月" : "50 baht/sq.m./month · 50 泰銖/平方公尺/月"],
    ["Sinking Fund · 公共基金", project.name === "Aspire Sukhumvit - Rama 4" ? "450 baht/sq.m. · 450 泰銖/平方公尺" : "500 baht/sq.m. · 500 泰銖/平方公尺"],
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
    intro: project.description,
    developer: `${project.developer} is the developer listed in the project materials. Buyers should still confirm the latest price, foreign quota, payment schedule, transfer fees and contract terms before reserving.\n\n${project.developer} 為建案資料所列發展商。正式保留前，仍建議確認最新價格、外國人額度、付款表、過戶費用與合約條件。`,
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
  const isAspire = project.name === "Aspire Sukhumvit - Rama 4";
  const faqs = isLife
    ? [
        { question: "How is Life Rama 4 - Asoke different from Life Sukhumvit - Rama 4? · 這個建案和 Life Sukhumvit - Rama 4 有什麼不同？", answer: "Both projects sit within the Rama 4 / Sukhumvit comparison zone, but Life Rama 4 - Asoke is closer to Queen Sirikit, Asoke and Khlong Toei business demand. It is presented here with existing project photos, floor plans and unit layouts for direct comparison.\n\n兩者都屬於 Rama 4 / Sukhumvit 生活圈可比較的 AP 系列產品，但 Life Rama 4 - Asoke 更靠近 Queen Sirikit、Asoke 與 Khlong Toei 商務軸線，且已整理現有實景、公設與格局素材，方便直接比較。" },
        { question: "What is the key location advantage? · 本案最主要的地段優勢是什麼？", answer: "The main advantage is the Rama 4 corridor, with access toward Asoke, Sukhumvit, Queen Sirikit Convention Centre and central business districts. This supports office, convention, medical, retail and long-stay rental demand.\n\n本案核心優勢在於 Rama 4 走廊，可往 Asoke、Sukhumvit、詩麗吉皇后會議中心與市中心商務區移動，同時承接辦公、會展、醫療、商業與長租需求。" },
        { question: "Is it suitable for rental investment? · 以出租投資角度來看，這個案子適合嗎？", answer: "For long-term rental cash flow, the project has strong comparison value because of its scale, facilities and city location. Actual return should still be calculated by purchase price, floor, layout, decoration, fees and current rent.\n\n若買方目標是長租型現金流，本案的規模、公設、城市位置與 Rama 4 / Sukhumvit 客群都有可比較性。不過實際投報仍需依購入價格、樓層、房型、裝修、費用與當期租金行情試算。" },
        { question: "Will the large community size affect resale? · 大型社區規模會不會影響轉售？", answer: "Large communities are easier for tenants to recognize and usually offer fuller facilities, but resale competition within the same project can be higher. Floor, view, condition and entry price become important.\n\n大型社區的優點是公設完整、租客辨識度高，缺點是同案競爭也會較明顯，因此轉售時會更看重樓層、景觀、屋況與入手價格。" },
      ]
    : isAspire
      ? [
          { question: "How far is Aspire Sukhumvit - Rama 4 from BTS Phra Khanong? · Aspire Sukhumvit - Rama 4 距離 BTS Phra Khanong 遠嗎？", answer: "The project is around 600 meters from BTS Phra Khanong and project materials also mention shuttle service. For most tenants, this distance is practical by walking, shuttle or motorcycle taxi.\n\n建案距離 BTS Phra Khanong 約 600 米，資料也提到設有接駁服務。對多數租客來說，可步行、搭接駁或摩托計程車銜接，通勤便利度具備實用性。" },
          { question: "What is the investment logic of Rama 4? · Rama 4 路段的投資邏輯是什麼？", answer: "Rama 4 is a major Bangkok corridor linking Sukhumvit, office demand, hospitals, convention activity and future city renewal. Aspire sits in a more approachable price segment compared with many inner Sukhumvit projects.\n\nRama 4 是曼谷重要幹道，串聯 Sukhumvit、辦公需求、醫療、會展與城市更新。Aspire 的價格帶相對市中心核心區更容易入手，適合做出租與自用比較。" },
          { question: "What is special about the Vertiplex layout? · Vertiplex 挑高房型有什麼特色？", answer: "The 4.4-meter Vertiplex layout uses vertical space to create stronger separation between living and sleeping areas. It can feel larger than a typical compact unit, but buyers should review stair placement and actual usable behavior.\n\n4.4 米 Vertiplex 挑高房型利用垂直空間區分起居與睡眠區，視覺與使用感通常比一般小坪數更有層次。不過仍建議確認樓梯位置、實際使用動線與收納安排。" },
          { question: "Is the project suitable for long-term rental? · 本案適合長租出租嗎？", answer: "The project has rental logic from BTS access, nearby W District, hospitals, schools and Sukhumvit / Rama 4 employment demand. Actual rent should be checked by layout, floor, view and furnishing level.\n\n本案具備長租邏輯，包含 BTS、W District、醫院、學校，以及 Sukhumvit / Rama 4 工作客群。實際租金仍需依房型、樓層、景觀與家具裝修程度評估。" },
        ]
      : [
          { question: "Who is this project suitable for? · 這個建案適合哪一類買方？", answer: `${project.name} is suitable for buyers who value the ${project.area} location and want to compare lifestyle comfort with rental potential.\n\n${project.name} 適合重視 ${project.area} 區域條件、希望比較自住舒適度與出租潛力的買方。` },
          { question: "What should I confirm before purchase? · 購買前需要確認什麼？", answer: "Confirm updated pricing, quota, payment schedule, contract terms and transfer fees before making a decision.\n\n正式購買前建議確認最新價格、外國人額度、付款表、合約條款與過戶費用。" },
        ];

  return (
    <section className="bg-background border border-border p-6 md:p-8">
      <h4 className="whitespace-pre-line font-serif-tc text-3xl text-brand-ink">{bilingual("Common Questions · 常見問題")}</h4>
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
  const pageSize = region === "bangkok" ? 9 : 5;
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
