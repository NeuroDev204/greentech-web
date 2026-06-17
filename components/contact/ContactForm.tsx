"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ContactForm() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send_failed");
      setSubmitted(true);
    } catch {
      setError(lang === "vi"
        ? "Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại."
        : "Failed to send. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#f6f3ea] overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[26rem] h-[26rem] blob bg-green-100/50 blur-2xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: contact info */}
          <div className="lg:col-span-2 lg:pt-2">
            <div className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase mb-6">
              {t("ciLbl")}
            </div>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:info@gtsol.vn"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors [&_svg]:group-hover:text-white">
                  <Mail size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold mb-0.5">Email</div>
                  <div className="text-[14px] text-stone-700 group-hover:text-green-700 transition-colors font-medium">
                    info@gtsol.vn
                  </div>
                </div>
              </a>

              <a
                href="tel:+840337642691"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors [&_svg]:group-hover:text-white">
                  <Phone size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold mb-0.5">Phone</div>
                  <div className="text-[14px] text-stone-700 group-hover:text-green-700 transition-colors font-medium">
                    033 764 2691
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-green-700" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold mb-0.5">Address</div>
                  <div className="text-[14px] text-stone-700 font-medium leading-snug">
                    Số 1B, Đường số 30, KP 27<br />
                    <span className="text-stone-500 text-[13px]">P. An Khánh, TP. Hồ Chí Minh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="border-t border-stone-300/60 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-green-600" />
                <div className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase">
                  {t("whLbl")}
                </div>
              </div>
              <div className="space-y-2">
                {hours.map((line, i) => (
                  <div key={i} className="text-[13px] text-stone-500 leading-relaxed">{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 rounded-[2rem] bg-white clay p-8 sm:p-10">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <Send size={20} className="text-green-700" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-green-700 tracking-[0.2em] uppercase mb-0.5">
                  {t("fmLbl")}
                </div>
                <div className="text-[19px] font-bold text-stone-800 leading-tight">
                  {t("ctH")}
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-[20px] font-bold text-stone-800 mb-2">
                  {lang === "vi" ? "Đã gửi thành công!" : "Message sent!"}
                </h3>
                <p className="text-[14px] text-stone-500 max-w-sm">
                  {lang === "vi"
                    ? "GreenTech sẽ phản hồi trong vòng 24 giờ làm việc."
                    : "GreenTech will respond within 24 business hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                      {t("fl1")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 text-[14px] text-stone-700 bg-[#f7f4ec] border border-stone-200/80 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100/70 transition-all placeholder:text-stone-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-4 py-3 text-[14px] text-stone-700 bg-[#f7f4ec] border border-stone-200/80 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100/70 transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                    {t("fl2")}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+84 xxx xxx xxx"
                    className="w-full px-4 py-3 text-[14px] text-stone-700 bg-[#f7f4ec] border border-stone-200/80 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100/70 transition-all placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                    {t("fl3")}
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 text-[14px] text-stone-700 bg-[#f7f4ec] border border-stone-200/80 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100/70 transition-all bg-white appearance-none cursor-pointer"
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
                  <label className="block text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                    {t("fl4")}
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={lang === "vi" ? "Công suất dự kiến, địa điểm, thời gian..." : "Expected capacity, location, timeline..."}
                    className="w-full px-4 py-3 text-[14px] text-stone-700 bg-[#f7f4ec] border border-stone-200/80 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100/70 transition-all placeholder:text-stone-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-green-400 disabled:to-green-400 text-white font-bold text-[15px] py-4 rounded-xl transition-all clay-sm hover:-translate-y-0.5"
                >
                  {sending
                    ? (lang === "vi" ? "Đang gửi..." : "Sending...")
                    : t("fmBtn")}
                  {!sending && <Send size={16} />}
                </button>

                {error && (
                  <p className="text-[13px] text-red-500 text-center leading-relaxed">{error}</p>
                )}

                <p className="text-[12px] text-stone-400 text-center leading-relaxed">
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
