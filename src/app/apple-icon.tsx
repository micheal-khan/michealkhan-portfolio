import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e100f",
          color: "#a374ff",
          fontSize: 120,
          fontWeight: 800,
        }}
      >
        M
      </div>
    ),
    size,
  );
}
