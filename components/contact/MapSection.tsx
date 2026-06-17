"use client";

import dynamic from "next/dynamic";
import { MapPin, ExternalLink, Mail, Phone } from "lucide-react";

/* Dynamic import — Leaflet requires browser APIs, cannot run on server */
const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] rounded-[2rem] bg-[#f8f6ef] flex items-center justify-center animate-pulse">
      <div className="flex flex-col items-center gap-3 text-stone-400">
        <MapPin size={32} className="text-stone-300" />
        <span className="text-[13px]">Đang tải bản đồ...</span>
      </div>
    </div>
  ),
});

const GMAPS_URL =
  "https://www.google.com/maps?q=10.7915481,106.7289983";

export default function MapSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center">
              <MapPin size={17} className="text-green-700" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-0.5">
                VỊ TRÍ VĂN PHÒNG
              </div>
              <h2 className="text-[18px] font-bold text-stone-800 leading-tight">
                Số 1B, Đường số 30, KP 27
              </h2>
              <p className="text-[13px] text-stone-500 mt-0.5">
                Phường An Khánh, TP. Hồ Chí Minh, Việt Nam
              </p>
            </div>
          </div>

          <a
            href={GMAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-green-700 hover:text-green-600 transition-colors"
          >
            Mở Google Maps
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Map */}
        <MapLeaflet height="420px" />

        {/* Address chips */}
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { Icon: MapPin, text: "Số 1B, Đường số 30, KP 27, P. An Khánh, TP.HCM" },
            { Icon: Mail, text: "info@gtsol.vn" },
            { Icon: Phone, text: "033 764 2691" },
          ].map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-[13px] text-stone-600 clay-sm"
            >
              <Icon size={14} className="text-green-600 flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
