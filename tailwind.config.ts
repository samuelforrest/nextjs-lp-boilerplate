// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  // AI-generated code will reside in src/app/page.tsx
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // AI will generate specific colors here (e.g., 'brand-primary', 'brand-accent')
        // Example (commented out, as AI is expected to use default Tailwind colors or state custom ones directly in its JSX):
        // 'coffee-brown': '#4A2A0D',
        // 'cream-white': '#F5F5DC',
      },
      fontFamily: {
        // AI will generate specific fonts here (e.g., 'heading-font', 'body-font')
        // Example (commented out):
        // 'heading-font': ['Playfair Display', 'serif'],
        // 'body-font': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config