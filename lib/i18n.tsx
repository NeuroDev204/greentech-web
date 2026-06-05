"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "vi" | "en";

type Translations = Record<string, [string, string]>;

export const translations: Translations = {
  /* NAV */
  navHome:      ["Trang chủ",     "Home"],
  navServices:  ["Dịch vụ",       "Services"],
  navSolutions: ["Giải pháp",     "Solutions"],
  navAbout:     ["Về chúng tôi",  "About"],
  navContact:   ["Liên hệ",       "Contact"],
  navCta:       ["Tư vấn ngay",   "Get a Quote"],

  /* HERO */
  heroBadge:  ["SOLAR · GRID · BESS · O&M", "SOLAR · GRID · BESS · O&M"],
  heroH1a:    ["Kiến tạo",   "Power the"],
  heroH1b:    ["Tương lai.", "Future."],
  heroSub:    ["Giải pháp năng lượng mặt trời toàn diện — từ thiết kế, thi công đến vận hành lâu dài.",
               "Comprehensive solar energy solutions — from engineering design and EPC to long-term O&M."],
  heroCta1:   ["Nhận tư vấn miễn phí",  "Free Consultation"],
  heroCta2:   ["Xem dịch vụ",           "Our Services"],

  /* HERO STATS */
  stat1n:  ["500+",     "500+"],
  stat1l:  ["Dự án hoàn thành",          "Projects completed"],
  stat2n:  ["10+",      "10+"],
  stat2l:  ["Năm kinh nghiệm",           "Years of experience"],
  stat3n:  ["50 MWp+",  "50 MWp+"],
  stat3l:  ["Công suất lắp đặt",         "Installed capacity"],
  stat4n:  ["18",       "18"],
  stat4l:  ["Nhà sản xuất PV phê duyệt", "PV manufacturers approved"],

  /* WHY US */
  whyLbl:  ["TẠI SAO CHỌN CHÚNG TÔI",  "WHY GREENTECH"],
  whyTtl:  ["Cam kết của GreenTech",    "Our Commitment"],
  whyDsc:  ["Đội ngũ kỹ thuật chuyên sâu, tư vấn độc lập và dịch vụ trọn vòng đời dự án.",
            "Expert engineering team, independent consulting, and full project lifecycle services."],
  why1t:   ["Kỹ thuật chuyên sâu",  "Deep Expertise"],
  why1d:   ["Kỹ sư thực chiến trong thiết kế, thi công và vận hành hệ thống solar đa quy mô.",
            "Engineers with hands-on experience in solar design, construction and O&M at all scales."],
  why2t:   ["Tư vấn độc lập",  "Independent Advisory"],
  why2d:   ["Thẩm định kỹ thuật khách quan, không ràng buộc với nhà cung cấp thiết bị.",
            "Fully objective technical assessment, not tied to any specific equipment vendor."],
  why3t:   ["Trọn vòng đời",  "Full Lifecycle"],
  why3d:   ["Từ TDD thẩm định, EPC thi công đến O&M vận hành — một đối tác duy nhất.",
            "From TDD and EPC to long-term O&M — one reliable partner throughout."],
  why4t:   ["Minh bạch & Đúng hẹn",  "Transparent & On-time"],
  why4d:   ["Báo cáo định kỳ, tài liệu đầy đủ, bàn giao đúng tiến độ và ngân sách.",
            "Regular reporting, complete documentation, on time and on budget."],

  /* SOLUTIONS PREVIEW */
  solLbl: ["GIẢI PHÁP TÍCH HỢP",  "INTEGRATED SOLUTIONS"],
  solTtl: ["Phù hợp mọi quy mô",  "Scalable for Every Need"],
  solDsc: ["Từ hộ dân đến khu công nghiệp — Solar đơn giản đến hybrid BESS phức tạp.",
           "From households to industrial parks — simple Solar to complex BESS hybrid systems."],
  sol1d:  ["Hòa lưới cơ bản, phù hợp hộ dân và doanh nghiệp có lưới điện ổn định.",
           "Basic grid-tie for households and businesses with stable grid access."],
  sol2d:  ["Hybrid 3 nguồn, đảm bảo cấp điện liên tục, tối ưu chi phí vận hành.",
           "3-source hybrid ensuring continuous power with optimized operating costs."],
  sol3d:  ["Hybrid đầy đủ với lưu trữ BESS. Peak shaving, tự chủ năng lượng tối đa.",
           "Full hybrid with BESS storage. Peak shaving and maximum energy independence."],

  /* CTA BAND */
  cta1h: ["Bắt đầu dự án của bạn hôm nay",  "Start Your Project Today"],
  cta1p: ["Đội ngũ kỹ thuật sẵn sàng tư vấn miễn phí — phản hồi trong 24 giờ làm việc.",
          "Our engineers are ready for a free consultation — response within 24 business hours."],
  cta1b: ["Liên hệ ngay →",  "Contact Us →"],

  cta2h: ["Cần tư vấn sản phẩm Chemitek?",  "Need Chemitek Product Advice?"],
  cta2p: ["GreenTech hỗ trợ lựa chọn đúng sản phẩm theo loại vết bẩn và điều kiện vận hành.",
          "GreenTech helps you select the right product based on contamination type and operating conditions."],
  cta2b: ["Liên hệ →",  "Contact Us →"],

  cta3h: ["Cần tư vấn giải pháp phù hợp?",  "Need a Tailored Solution?"],
  cta3p: ["Mô tả nhu cầu — đội ngũ kỹ thuật sẽ đề xuất cấu hình tối ưu.",
          "Describe your needs — our engineers will recommend the optimal configuration."],
  cta3b: ["Tư vấn kỹ thuật →",  "Technical Consultation →"],

  cta4h: ["Muốn tìm hiểu thêm về GreenTech?",  "Want to Learn More About GreenTech?"],
  cta4p: ["Liên hệ trực tiếp với đội ngũ kỹ thuật để được giải đáp.",
          "Contact our engineering team directly for more information."],
  cta4b: ["Liên hệ →",  "Contact Us →"],

  /* SERVICES PAGE */
  svLbl:  ["DỊCH VỤ",     "SERVICES"],
  svH:    ["Dịch vụ của GreenTech",  "GreenTech Services"],
  svP:    ["Đội ngũ kỹ thuật chuyên sâu, đồng hành từ thẩm định ban đầu đến vận hành dài hạn.",
           "Expert engineering team from initial assessment to long-term operations."],
  svcLbl: ["DỊCH VỤ CHÍNH",       "CORE SERVICES"],
  svcTtl: ["Toàn diện — Một đối tác",  "Comprehensive — One Partner"],
  svcDsc: ["Tất cả dịch vụ được thực hiện bởi đội ngũ kỹ thuật nội bộ, đảm bảo chất lượng và nhất quán.",
           "All services delivered by our in-house engineering team, ensuring consistent quality."],
  sv1t:   ["EPC Trọn gói",            "EPC Turnkey"],
  sv1d:   ["Thiết kế, cung cấp thiết bị và thi công hoàn chỉnh. Bao phủ từ hộ gia đình, C&I đến nhà máy lớn. Bàn giao đúng tiêu chuẩn kỹ thuật và pháp lý.",
           "Full engineering, procurement and construction. Covers residential, C&I to large-scale plants. Delivered to full technical and legal standards."],
  sv2t:   ["O&M — Vận hành & Bảo trì",  "O&M — Operations & Maintenance"],
  sv2d:   ["Giám sát hiệu suất, bảo trì định kỳ, xử lý sự cố. Báo cáo vận hành minh bạch, đảm bảo sản lượng tối ưu dài hạn.",
           "Performance monitoring, maintenance, fault response. Transparent reporting, ensuring long-term optimal yield."],
  sv3t:   ["TDD — Thẩm định kỹ thuật",  "TDD — Technical Due Diligence"],
  sv3d:   ["Đánh giá độc lập cho nhà đầu tư và tổ chức tài chính. Kiểm tra thiết kế, thiết bị, hợp đồng và rủi ro kỹ thuật theo chuẩn quốc tế.",
           "Independent assessment for investors and financial institutions. Verifies design, equipment, contracts and technical risks to international standards."],
  sv4t:   ["Cung cấp vật tư điện",  "Electrical Materials Supply"],
  sv4d:   ["Cáp DC/AC, tủ điện, inverter, mounting structure, combiner box và thiết bị điện phục vụ dự án solar.",
           "DC/AC cables, switchboards, inverters, mounting structures, combiner boxes for solar projects."],
  sv5t:   ["Hóa chất vệ sinh tấm pin",  "Solar Panel Cleaning Chemicals"],
  sv5d:   ["Phân phối chính thức dòng sản phẩm Chemitek — hóa chất tẩy rửa và coating bảo vệ chuyên dụng cho tấm pin solar.",
           "Authorized distributor of Chemitek — specialist solar panel cleaning and protective coating products."],
  sv6t:   ["Tư vấn & Dịch vụ liên quan",  "Consulting & Related Services"],
  sv6d:   ["Tư vấn giải pháp kỹ thuật, hỗ trợ hồ sơ đấu nối lưới, thủ tục pháp lý và dịch vụ kỹ thuật điện mặt trời khác.",
           "Technical solution consulting, grid connection documentation, regulatory support and other services."],

  /* CHEMITEK */
  chBadge: ["ĐỐI TÁC PHÂN PHỐI CHÍNH THỨC",  "AUTHORIZED DISTRIBUTOR"],
  chH:     ["Dòng sản phẩm Chemitek Solar",    "Chemitek Solar Product Range"],
  chIntro: ["Chemitek (Bồ Đào Nha) là thương hiệu hàng đầu thế giới về hóa chất vệ sinh và bảo vệ tấm pin solar. Sản phẩm được chứng nhận TÜV Süd và phê duyệt bởi 18 nhà sản xuất PV lớn.",
            "Chemitek (Portugal) is a world-leading brand in solar panel cleaning and protection chemicals. TÜV Süd certified and approved by 18 major PV manufacturers."],
  certLbl: ["Chứng nhận bởi",  "Certified by"],
  rmLbl:   ["REMOVAL AGENTS — TẨY RỬA & XỬ LÝ VẾT BẨN",  "REMOVAL AGENTS — CONTAMINANT REMOVAL"],
  ctLbl:   ["PROTECTIVE COATINGS — BẢO VỆ & TĂNG HIỆU SUẤT",  "PROTECTIVE COATINGS — PROTECTION & PERFORMANCE"],
  chNote:  ["Phương pháp 2 bước Chemitek: (1) Remediate — dùng đúng Removal Agent cho từng loại vết bẩn; (2) Prevent — phủ Coating phù hợp điều kiện khí hậu để bảo vệ lâu dài và giảm chi phí bảo trì. GreenTech tư vấn lựa chọn sản phẩm phù hợp theo từng dự án.",
            "Chemitek 2-Step Method: (1) Remediate — apply the correct Removal Agent for the specific contaminant; (2) Prevent — apply the appropriate Coating for local climate for lasting protection. GreenTech advises on product selection per project."],

  /* SOLUTIONS PAGE */
  solPgLbl: ["GIẢI PHÁP",  "SOLUTIONS"],
  solPgH:   ["Giải pháp năng lượng tích hợp",  "Integrated Energy Solutions"],
  solPgP:   ["GreenTech thiết kế giải pháp phù hợp từng nhu cầu — từ hộ gia đình đến khu công nghiệp, từ Solar đơn giản đến hybrid BESS phức tạp.",
             "GreenTech designs tailored solutions — from households to industrial parks, from simple Solar to complex BESS hybrid systems."],
  scLbl:  ["THEO QUY MÔ KHÁCH HÀNG",  "BY CUSTOMER SCALE"],
  scTtl:  ["Phù hợp mọi đối tượng",   "Built for Every Customer"],
  scDsc:  ["Mỗi giải pháp được thiết kế và tính toán cụ thể theo nhu cầu tải, ngân sách và điều kiện kỹ thuật từng công trình.",
           "Every solution is specifically designed based on load requirements, budget and technical conditions of each site."],
  sc1t:   ["Hộ dân cư — Rooftop Residential",    "Residential — Rooftop"],
  sc1d:   ["Hệ thống solar mái nhà (3–20 kWp) cho hộ gia đình. Thiết kế đơn giản, lắp đặt nhanh. GreenTech hỗ trợ từ khảo sát, thiết kế đến đấu nối lưới và hướng dẫn vận hành.",
           "Small rooftop solar (3–20 kWp) for households. Simple design, quick installation. GreenTech handles everything from survey to grid connection."],
  sc2t:   ["Thương mại & Công nghiệp — C&I",  "Commercial & Industrial — C&I"],
  sc2d:   ["Hệ thống solar (50 kWp – 5 MWp) cho nhà xưởng, kho bãi, trung tâm thương mại và khu công nghiệp. Tích hợp EMS và giám sát từ xa.",
           "Solar systems (50 kWp – 5 MWp) for factories, warehouses, commercial centers and industrial parks. Integrated with EMS and remote monitoring."],
  sc3t:   ["Dự án lớn — Utility Scale",  "Large-Scale — Utility"],
  sc3d:   ["Nhà máy điện mặt trời (>5 MWp). GreenTech hỗ trợ thẩm định kỹ thuật, lập hồ sơ đấu nối, phối hợp EPC và O&M sau vận hành cho nhà đầu tư trong và ngoài nước.",
           "Solar power plants (>5 MWp). GreenTech supports technical assessment, grid connection, EPC coordination and post-commissioning O&M."],
  syLbl:  ["CẤU HÌNH HỆ THỐNG",     "SYSTEM CONFIGURATIONS"],
  syTtl:  ["Giải pháp hòa đồng bộ",  "Synchronized Integration Solutions"],
  syDsc:  ["Ba cấu hình từ cơ bản đến hybrid đầy đủ — phù hợp từng yêu cầu về độ tin cậy cấp điện và ngân sách đầu tư.",
           "Three configurations from basic to full hybrid — matched to power reliability requirements and investment budget."],
  sy1d:   ["Cấu hình hòa lưới cơ bản. Ưu tiên sử dụng điện mặt trời, phần dư bù trừ với lưới. Chi phí thấp nhất, ROI nhanh nhất.",
           "Basic grid-tie configuration. Solar prioritized; surplus offsets grid. Lowest investment cost, fastest ROI."],
  sy2d:   ["Hybrid 3 nguồn. Genset chỉ khởi động khi lưới mất và Solar không đủ tải — giảm đáng kể tiêu hao diesel. Tích hợp bộ điều khiển ATS thông minh.",
           "3-source hybrid. Genset only starts when grid fails and Solar is insufficient — significantly reducing diesel. Integrated with intelligent ATS."],
  sy3d:   ["Hybrid đầy đủ với lưu trữ pin BESS. Peak shaving, tối ưu Time-of-Use và cấp điện tự chủ khi lưới mất. Phù hợp KCN, data center, bệnh viện.",
           "Full hybrid with BESS storage. Peak shaving, Time-of-Use optimization and islanding when grid fails. Ideal for industrial parks, data centers, hospitals."],

  /* ABOUT PAGE */
  abLbl:  ["VỀ CHÚNG TÔI",     "ABOUT US"],
  abH:    ["GreenTech Solution",  "GreenTech Solution"],
  abP:    ["Công ty kỹ thuật năng lượng mặt trời, cung cấp dịch vụ toàn diện từ thẩm định, thi công EPC đến vận hành O&M cho mọi quy mô dự án tại Việt Nam.",
           "A solar engineering company providing comprehensive services from technical assessment and EPC to O&M for all project scales in Vietnam."],
  mvLbl:  ["SỨ MỆNH & TẦM NHÌN",  "MISSION & VISION"],
  mvTtl:  ["Kỹ thuật vững. Vận hành bền.",  "Engineering First. Built to Last."],
  viL:    ["Tầm nhìn",  "Vision"],
  viT:    ["Trở thành đối tác kỹ thuật năng lượng mặt trời đáng tin cậy nhất tại thị trường Việt Nam.",
           "To become the most trusted solar engineering partner in Vietnam."],
  msL:    ["Sứ mệnh",  "Mission"],
  msT:    ["Mang lại giải pháp năng lượng sạch, hiệu quả và bền vững cho mọi quy mô khách hàng.",
           "Delivering clean, efficient and sustainable energy solutions for every customer scale."],
  cmL:    ["Cam kết",  "Commitment"],
  cmT:    ["Mỗi dự án được thực hiện với tiêu chuẩn kỹ thuật cao nhất, tài liệu đầy đủ và minh bạch về chi phí, tiến độ.",
           "Every project executed to the highest technical standards, with full transparency on cost and schedule."],
  cvLbl:  ["GIÁ TRỊ CỐT LÕI",  "CORE VALUES"],
  v1t:    ["Kỹ thuật vững",  "Technical Excellence"],
  v1d:    ["Thiết kế và thi công theo tiêu chuẩn quốc tế, không cắt giảm chất lượng.",
           "Design and construction to international standards, no compromise on quality."],
  v2t:    ["Minh bạch",  "Transparency"],
  v2d:    ["Báo cáo rõ ràng, hồ sơ đầy đủ, không có chi phí ẩn.",
           "Clear reporting, complete documentation, no hidden costs."],
  v3t:    ["Đúng cam kết",  "On-Time Delivery"],
  v3d:    ["Giao hàng và bàn giao đúng tiến độ đã thỏa thuận.",
           "Delivery and handover on the agreed schedule."],
  v4t:    ["Bền vững",  "Sustainability"],
  v4d:    ["Giải pháp năng lượng sạch, trách nhiệm với môi trường và cộng đồng.",
           "Clean energy solutions, environmentally and socially responsible."],
  ptLbl:  ["ĐỐI TÁC & THƯƠNG HIỆU",  "PARTNERS & BRANDS"],
  ptTtl:  ["Thiết bị & Đối tác",      "Equipment & Partners"],
  ptDsc:  ["GreenTech làm việc với các thương hiệu thiết bị và hóa chất hàng đầu, đảm bảo chất lượng toàn dự án.",
           "GreenTech works with leading equipment and chemical brands, ensuring quality across the entire project."],
  pt1l:   ["INVERTER & THIẾT BỊ ĐIỆN",  "INVERTERS & ELECTRICAL"],
  pt2l:   ["TẤM PIN SOLAR",              "SOLAR MODULES"],
  pt3l:   ["HÓA CHẤT & BẢO TRÌ",        "CHEMICALS & MAINTENANCE"],
  chemiPb: ["Chemitek — Phân phối chính thức",  "Chemitek — Authorized Distributor"],

  /* CONTACT PAGE */
  ctLbl2:  ["LIÊN HỆ",                "CONTACT"],
  ctH:     ["Bắt đầu dự án của bạn",  "Start Your Project"],
  ctP:     ["Mô tả nhu cầu và đội ngũ kỹ thuật GreenTech sẽ phản hồi trong vòng 24 giờ làm việc.",
            "Describe your requirements and GreenTech's team will respond within 24 business hours."],
  ciLbl:   ["THÔNG TIN LIÊN HỆ",  "CONTACT INFORMATION"],
  whLbl:   ["GIỜ LÀM VIỆC",       "WORKING HOURS"],
  whT:     ["Thứ Hai – Thứ Sáu: 08:00 – 17:30 | Thứ Bảy, Chủ Nhật & Ngày Lễ: Nghỉ",
            "Mon – Fri: 08:00 – 17:30 | Sat, Sun & Public Holidays: Closed"],
  fmLbl:   ["GỬI YÊU CẦU TƯ VẤN",  "SEND AN INQUIRY"],
  fl1:     ["HỌ TÊN *",             "FULL NAME *"],
  fl2:     ["SỐ ĐIỆN THOẠI",        "PHONE"],
  fl3:     ["DỊCH VỤ CẦN TƯ VẤN *", "SERVICE NEEDED *"],
  fl4:     ["MÔ TẢ NHU CẦU",        "BRIEF DESCRIPTION"],
  fmBtn:   ["Gửi yêu cầu tư vấn →",  "Send Inquiry →"],
  fmNote:  ["Thông tin của bạn được bảo mật hoàn toàn và chỉ dùng để liên hệ tư vấn.",
            "Your information is kept strictly confidential and used only for consultation purposes."],

  /* FOOTER */
  ftCopy:  ["© 2026 GreenTech Solution. All rights reserved.",  "© 2026 GreenTech Solution. All rights reserved."],
  ftPriv:  ["Chính sách bảo mật",  "Privacy Policy"],
  ftTerms: ["Điều khoản",          "Terms"],
};

/* ---------- Context ---------- */
interface I18nCtx {
  lang: Lang;
  t: (key: string) => string;
  toggle: () => void;
}

const I18nContext = createContext<I18nCtx>({
  lang: "vi",
  t: (k) => k,
  toggle: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  const t = (key: string): string => {
    const pair = translations[key];
    if (!pair) return key;
    return lang === "vi" ? pair[0] : pair[1];
  };

  const toggle = () => setLang((l) => (l === "vi" ? "en" : "vi"));

  return (
    <I18nContext.Provider value={{ lang, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
