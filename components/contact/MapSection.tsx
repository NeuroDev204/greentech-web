"use client";

import dynamic from "next/dynamic";
import { MapPin, ExternalLink } from "lucide-react";

/* Dynamic import — Leaflet requires browser APIs, cannot run on server */
const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-100 animate-pulse">
      <div className="flex flex-col items-center gap-3 text-gray-400">
        <MapPin size={32} className="text-gray-300" />
        <span className="text-[13px]">Đang tải bản đồ...</span>
      </div>
    </div>
  ),
});

const GMAPS_URL =
  "https://www.google.com/maps/place/Topaz+home+2+block+2/@10.8638633,106.8101424,17z";

export default function MapSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
              <MapPin size={17} className="text-green-600" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
                VỊ TRÍ VĂN PHÒNG
              </div>
              <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
                Topaz Home 2, Block 2
              </h2>
              <p className="text-[13px] text-gray-500 mt-0.5">
                TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam
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
            { icon: "📍", text: "Topaz Home 2, Block 2, TP. Thủ Đức, TP.HCM" },
            { icon: "✉️", text: "info@greentech.vn" },
            { icon: "📞", text: "+84 (0) xxx xxx xxx" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-[13px] text-gray-600 shadow-sm"
            >
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
