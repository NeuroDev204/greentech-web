"use client";

import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── Location ─────────────────────────────────────────── */
const LAT  = 10.7915481;
const LNG  = 106.7289983;
const ZOOM = 17;

const GMAPS =
  "https://www.google.com/maps?q=10.7915481,106.7289983";

/* ── Custom pulsing pin ───────────────────────────────── */
const pinHtml = `
<div style="position:relative;width:48px;height:58px">
  <!-- pulse rings -->
  <div style="
    position:absolute;top:50%;left:50%;
    transform:translate(-50%,-70%);
    width:48px;height:48px;border-radius:50%;
    background:rgba(22,163,74,0.18);
    animation:mapPulse 2s ease-out infinite;
  "></div>
  <div style="
    position:absolute;top:50%;left:50%;
    transform:translate(-50%,-70%);
    width:36px;height:36px;border-radius:50%;
    background:rgba(22,163,74,0.25);
    animation:mapPulse 2s ease-out infinite 0.4s;
  "></div>
  <!-- pin body -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 52"
       width="40" height="52"
       style="position:absolute;top:0;left:4px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.25))">
    <path d="M20 0C11.163 0 4 7.163 4 16c0 11.5 16 36 16 36S36 27.5 36 16C36 7.163 28.837 0 20 0z"
          fill="#16a34a"/>
    <circle cx="20" cy="16" r="8" fill="white" opacity="0.9"/>
    <circle cx="20" cy="16" r="4.5" fill="#16a34a"/>
    <!-- lightning bolt / leaf icon -->
    <path d="M21.5 11.5 L18 16.5 L20.5 16.5 L19 20.5 L22.5 15 L20 15 Z"
          fill="white" stroke="none"/>
  </svg>
</div>
`;

const customIcon = new L.DivIcon({
  html: pinHtml,
  className: "",
  iconSize:    [48, 58],
  iconAnchor:  [24, 58],
  popupAnchor: [0, -60],
});

/* ── Fly-to on mount ──────────────────────────────────── */
function FlyToLocation() {
  const map = useMap();
  const didFly = useRef(false);
  useEffect(() => {
    if (!didFly.current) {
      didFly.current = true;
      map.flyTo([LAT, LNG], ZOOM, { duration: 1.4, easeLinearity: 0.3 });
    }
  }, [map]);
  return null;
}

/* ── Component ────────────────────────────────────────── */
interface MapLeafletProps {
  height?: string;
}

export default function MapLeaflet({ height = "480px" }: MapLeafletProps) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div
      style={{ height }}
      className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200"
    >
      <MapContainer
        center={[LAT, LNG]}
        zoom={ZOOM - 2}          /* start slightly zoomed out, then fly in */
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        {/* ── OpenStreetMap Standard — full color ── */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          maxZoom={19}
        />

        <ZoomControl position="bottomright" />
        <FlyToLocation />

        <Marker position={[LAT, LNG]} icon={customIcon}>
          <Popup
            closeButton={false}
            offset={[0, -8]}
            className="greentech-popup"
          >
            <div style={{ minWidth: 210, padding: "4px 2px" }}>
              {/* Header */}
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                <div style={{
                  width:36, height:36, borderRadius:10,
                  background:"#16a34a",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0,
                }}>
                  <svg viewBox="0 0 20 20" fill="white" width="18" height="18">
                    <path d="M10 2a6 6 0 00-6 6c0 5.25 6 12 6 12s6-6.75 6-12a6 6 0 00-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color:"#111827", lineHeight:1.3 }}>
                    GreenTech Solution
                  </div>
                  <div style={{ fontSize:10, color:"#16a34a", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase" }}>
                    Solar Engineering
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height:1, background:"#f3f4f6", margin:"8px 0" }} />

              {/* Address */}
              <div style={{ fontSize:12, color:"#6b7280", lineHeight:1.6, marginBottom:10 }}>
                📍 Số 1B, Đường số 30, KP 27<br />
                &nbsp;&nbsp;&nbsp;&nbsp;P. An Khánh, TP. Hồ Chí Minh
              </div>

              {/* Actions */}
              <div style={{ display:"flex", gap:6 }}>
                <a
                  href={GMAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex:1, textAlign:"center",
                    background:"#16a34a", color:"white",
                    borderRadius:8, padding:"6px 0",
                    fontSize:11, fontWeight:700,
                    textDecoration:"none", letterSpacing:"0.02em",
                  }}
                >
                  Google Maps ↗
                </a>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=${ZOOM}/${LAT}/${LNG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex:1, textAlign:"center",
                    background:"#f0fdf4", color:"#15803d",
                    borderRadius:8, padding:"6px 0",
                    fontSize:11, fontWeight:700,
                    textDecoration:"none", letterSpacing:"0.02em",
                    border:"1px solid #bbf7d0",
                  }}
                >
                  OpenStreetMap
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* ── Floating info card overlay ─────────────────── */}
      <div
        style={{
          position:   "absolute",
          bottom:     16,
          left:       16,
          zIndex:     1000,
          background: "white",
          borderRadius: 14,
          padding:    "10px 14px",
          boxShadow:  "0 4px 20px rgba(0,0,0,0.15)",
          border:     "1px solid rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          maxWidth:   220,
        }}
      >
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
          <div style={{
            width:8, height:8, borderRadius:"50%",
            background:"#16a34a",
            boxShadow:"0 0 0 3px rgba(22,163,74,0.2)",
          }} />
          <span style={{ fontSize:12, fontWeight:700, color:"#111827" }}>GreenTech Solution</span>
        </div>
        <p style={{ fontSize:11, color:"#6b7280", margin:0, lineHeight:1.5 }}>
          Số 1B, Đường số 30, KP 27<br />P. An Khánh, TP. Hồ Chí Minh
        </p>
      </div>
    </div>
  );
}
