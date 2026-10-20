import { ImageResponse } from "next/og";

// 1200×630 share card used by LinkedIn, WhatsApp, X, Slack, etc.
export const alt = "Micheal Khan — Full Stack Software and AI Automation Developer in Jaipur, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0e100f",
          backgroundImage:
            "linear-gradient(to right, rgba(50,50,40,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(50,50,40,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          color: "#ffffe3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
          <div style={{ width: 22, height: 22, borderRadius: 999, background: "#ffffe3" }} />
          michealkhan
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 700, lineHeight: 0.95, letterSpacing: -3 }}>
          <span style={{ color: "#a374ff" }}>FULL STACK</span>
          <span style={{ color: "#ffd074" }}>SOFTWARE &amp;</span>
          <span style={{ color: "#17f1d1" }}>AI AUTOMATION</span>
          <span>DEVELOPER</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,227,0.8)" }}>
          <span>Flutter • Next.js • PHP • SQL • AI Automation</span>
          <span>Jaipur, India</span>
        </div>
      </div>
    ),
    size,
  );
}
