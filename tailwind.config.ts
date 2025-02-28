import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'var(--font-nunito)',
        'dm-mono': 'var(--font-dm-mono)',
      },
      colors: {
        neutral: {
          0: 'var(--neutral-0)',
          25: 'var(--neutral-25)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
      textColor: {
        neutral: {
          0: 'var(--neutral-0)',
          25: 'var(--neutral-25)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        background: "var(--background)",
      },
      borderColor: {
        neutral: {
          0: 'var(--neutral-0)',
          25: 'var(--neutral-25)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
      fontSize: {
        "larger": "132px",
        "medium": "52px",
      },
      backgroundColor: {
        background: "var(--background)",
        "background-black": "var(--backgroundblack)",
      },
      lineHeight: {
        description : "1.4",
      },
      letterSpacing: {
        "button-link": "-2%",
      }
    },
  },
  plugins: [],
};
export default config;
