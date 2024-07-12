import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajuste conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 2s steps(30, end) forwards', // Define a duração da animação aqui
        blinkCaret: 'blinkCaret 1s step-end infinite', // Define a duração da animação aqui
      },
    },
  },
  plugins: [],
};

export default config;
