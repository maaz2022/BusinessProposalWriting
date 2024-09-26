import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        FooterBg: "url('/footerbg.png')",
        overlay: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      },
      keyframes: {
        'revolve-and-slide': {
          '0%': { 
            transform: 'rotateX(0deg) translateY(0)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'rotateX(360deg) translateY(-100%)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'rotateX(360deg) translateY(100%)', 
            opacity: '1' 
          },
        },
      },
      animation: {
        'revolve-and-slide': 'revolve-and-slide 1s ',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
