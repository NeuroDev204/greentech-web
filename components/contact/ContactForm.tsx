"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ContactForm() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const serviceOptions = lang === "vi"
    ? [
        "EPC — Residential / Hộ dân cư",
        "EPC — C&I / Nhà xưởng",
        "EPC — Utility Scale",
        "O&M — Vận hành & Bảo trì",
        "TDD — Thẩm định kỹ thuật",
        "Chemitek — Solar Chemicals",
        "Cung cấp vật tư điện",
        "Tư vấn giải pháp kỹ thuật",
        "Khác",
      ]
    : [
        "EPC — Residential",
        "EPC — C&I / Factory",
        "EPC — Utility Scale",
        "O&M — Operations & Maintenance",
        "TDD — Technical Due Diligence",
        "Chemitek — Solar Chemicals",
        "Electrical Materials Supply",
        "Solution Consulting",
        "Other",
      ];

  const hours = t("whT").split("|").map((s) => s.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-6">
              {t("ciLbl")}
            </div>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:info@greentech.vn"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <Mail size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Email</div>
                  <div className="text-[14px] text-gray-700 group-hover:text-green-700 transition-colors font-medium">
                    info@greentech.vn
                  </div>
                </div>
              </a>

              <a
                href="tel:+840337642691"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <Phone size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Phone</div>
                  <div className="text-[14px] text-gray-700 group-hover:text-green-700 transition-colors font-medium">
                    033 764 2691
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Address</div>
                  <div className="text-[14px] text-gray-700 font-medium leading-snug">
                    Số 1B, Đường số 30, KP 27<br />
                    <span className="text-gray-500 text-[13px]">P. An Khánh, TP. Hồ Chí Minh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="border-t border-gray-100 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-green-600" />
                <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                  {t("whLbl")}
                </div>
              </div>
              <div className="space-y-2">
                {hours.map((line, i) => (
                  <div key={i} className="text-[13px] text-gray-500 leading-relaxed">{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-6">
              {t("fmLbl")}
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">
                  {lang === "vi" ? "Đã gửi thành công!" : "Message sent!"}
                </h3>
                <p className="text-[14px] text-gray-500 max-w-sm">
                  {lang === "vi"
                    ? "GreenTech sẽ phản hồi trong vòng 24 giờ làm việc."
                    : "GreenTech will respond within 24 business hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                      {t("fl1")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 text-[14px] text-gray-700 border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-4 py-3 text-[14px] text-gray-700 border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                    {t("fl2")}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+84 xxx xxx xxx"
                    className="w-full px-4 py-3 text-[14px] text-gray-700 border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                    {t("fl3")}
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 text-[14px] text-gray-700 border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      {lang === "vi" ? "Chọn dịch vụ..." : "Select service..."}
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                    {t("fl4")}
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={lang === "vi" ? "Công suất dự kiến, địa điểm, thời gian..." : "Expected capacity, location, timeline..."}
                    className="w-full px-4 py-3 text-[14px] text-gray-700 border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder:text-gray-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-[14px] py-4 rounded-xl transition-colors shadow-lg shadow-green-200"
                >
                  {t("fmBtn")}
                  <Send size={16} />
                </button>

                <p className="text-[12px] text-gray-400 text-center leading-relaxed">
                  {t("fmNote")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
