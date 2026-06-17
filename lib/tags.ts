import type { Lang } from "@/lib/i18n";

/**
 * Vietnamese labels for the short feature/spec tags shown on cards across the site.
 * Universal acronyms (BESS, ATS, EMS, EPC, TDD, C&I, B2B, CSP, ROI, kWp/MWp, TÜV SÜD…)
 * are intentionally left untranslated. Anything not in the map falls back to the original.
 */
const TAG_VI: Record<string, string> = {
  /* Chemitek products */
  "pH NEUTRAL": "pH TRUNG TÍNH",
  ANTISTATIC: "CHỐNG TĨNH ĐIỆN",
  BIODEGRADABLE: "PHÂN HỦY SINH HỌC",
  "18 PV APPROVED": "18 HÃNG PV DUYỆT",
  CEMENT: "XI MĂNG",
  LIME: "VÔI",
  "SAFE ON GLASS": "AN TOÀN CHO KÍNH",
  LICHEN: "ĐỊA Y",
  MOSS: "RÊU",
  "ARC SAFE": "AN TOÀN HỒ QUANG",
  PAINT: "SƠN",
  GENTLE: "DỊU NHẸ",
  "COATING SAFE": "AN TOÀN LỚP PHỦ",
  "METAL OXIDE": "OXIT KIM LOẠI",
  INDUSTRIAL: "CÔNG NGHIỆP",
  COASTAL: "VEN BIỂN",
  "HARD WATER": "NƯỚC CỨNG",
  SCALE: "CẶN VÔI",
  MINERAL: "KHOÁNG CHẤT",
  "LONG-LASTING": "BỀN LÂU",
  "NO-RINSE": "KHÔNG CẦN RỬA LẠI",
  HYDROPHOBIC: "KỴ NƯỚC",
  "SELF-CLEANING": "TỰ LÀM SẠCH",
  "HIGH HUMIDITY": "ĐỘ ẨM CAO",
  "CSP PLANT": "NHÀ MÁY CSP",
  "UTILITY SCALE": "QUY MÔ LỚN",
  REFLECTIVITY: "ĐỘ PHẢN XẠ",

  /* Solutions / system configs */
  "GRID-TIE": "HÒA LƯỚI",
  "NET METERING": "BÙ TRỪ ĐIỆN",
  HYBRID: "HỖN HỢP",
  "FUEL SAVING": "TIẾT KIỆM NHIÊN LIỆU",
  "BACKUP POWER": "ĐIỆN DỰ PHÒNG",
  "PEAK SHAVING": "CẮT ĐỈNH TẢI",
  "TIME-OF-USE": "GIÁ THEO GIỜ",
  ISLANDING: "TÁCH LƯỚI",

  /* Customer scale */
  "REMOTE MONITORING": "GIÁM SÁT TỪ XA",
  "O&M CONTRACT": "HỢP ĐỒNG O&M",
  UTILITY: "QUY MÔ LỚN",

  /* Service grid composite tokens */
  RESIDENTIAL: "HỘ DÂN CƯ",
  PERIODIC: "ĐỊNH KỲ",
  "ON-SITE": "TẠI CHỖ",
  REMOTE: "TỪ XA",
  INDEPENDENT: "ĐỘC LẬP",
  "INTL STD": "CHUẨN QUỐC TẾ",
  SUPPLY: "CUNG ỨNG",
  PROJECT: "DỰ ÁN",
  AUTHORIZED: "CHÍNH HÃNG",
  CONSULTING: "TƯ VẤN",
  GRID: "LƯỚI ĐIỆN",
  PERMIT: "GIẤY PHÉP",
};

/** Translate a tag (or a "·"-separated composite tag) to the active language. */
export function tagLabel(tag: string, lang: Lang): string {
  if (lang !== "vi") return tag;
  if (TAG_VI[tag]) return TAG_VI[tag];
  if (tag.includes("·")) {
    return tag
      .split("·")
      .map((part) => {
        const key = part.trim();
        return TAG_VI[key] ?? key;
      })
      .join(" · ");
  }
  return tag;
}
