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
        night: '#111111ff',
        eerieBlack: '#1E1E1Eff',
        jet: '#313131ff',
        lightCoral: '#EA6C70ff',
        jade: '#47AB6Fff',
        majorelleBlue: '#6A55E0ff',
        blueCrayola: '#3377F8ff',
        pastelPeach: '#FFD1BA',
        softMintGreen: '#D5F9D4',
        powderBlue: '#BEE3F9',
        lavenderHaze: '#E8DAEF',
        lightLemon: '#FFF5BA',
      },
      boxShadow: {
        'custom-shadow': 'inset -2px 0px 2px 1px rgba(255,255,255,0.75)',
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      "night",
    ]
  }
} satisfies Config;
