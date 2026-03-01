import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f6f6f4",
        panel: "#ffffff",
        line: "#d8d9d4",
        electric: "#5f7257",
        iris: "#5f7257",
        mist: "#0f172a",
        gblue: "#7c8f74",
        gred: "#8b8b8b",
        gyellow: "#a3a39a",
        ggreen: "#5f7257"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(95, 114, 87, 0.38), 0 8px 20px rgba(95, 114, 87, 0.18)",
        panel: "0 18px 40px rgba(39, 43, 34, 0.12)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 14% 22%, rgba(168, 179, 156, 0.18), transparent 38%), radial-gradient(circle at 86% 18%, rgba(203, 201, 189, 0.2), transparent 34%), linear-gradient(180deg, #fbfbf9 0%, #f5f5f1 65%, #f3f3ef 100%)"
      }
    }
  },
  plugins: []
};

export default config;
