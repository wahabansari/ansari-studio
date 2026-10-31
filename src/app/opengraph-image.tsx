import { ImageResponse } from "next/og";

export const alt =
  "Ansari Product Engineering — upgrade your software, automate your operations, grow faster";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The site-wide social card. Brand palette only, no text that is not already on the site.
 * Rendered once at build time and cached by Next.js.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070B16",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-260px",
            right: "-160px",
            width: "820px",
            height: "620px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(46,79,227,0.55) 0%, rgba(7,11,22,0) 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#2E4FE3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: 700,
              }}
            >
              A
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 700 }}>Ansari</div>
              <div style={{ color: "#A3ADC2", fontSize: "18px" }}>Product Engineering</div>
            </div>
          </div>
          <div style={{ color: "#62DCCB", fontSize: "20px", fontWeight: 600 }}>
            Build. Modernize. Integrate.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "72px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              maxWidth: "880px",
            }}
          >
            Upgrade your software.
          </div>
          <div
            style={{
              color: "#8FA3FF",
              fontSize: "72px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Automate your operations.
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "72px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Grow faster.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: "26px",
            position: "relative",
          }}
        >
          <div style={{ color: "#A3ADC2", fontSize: "22px" }}>
            Modernization · Automation · Custom software
          </div>
          <div style={{ color: "#62DCCB", fontSize: "22px", fontWeight: 600 }}>
            Product engineering for growing businesses
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
