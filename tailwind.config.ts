import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tdRed: "var(--tournated-red)",
        tdLightRed: "var(--tournated-lightRed)",
        tdGrey: "var(----tournated-grey)",
      },
    },
  },
  plugins: [],
} satisfies Config;
