import { heroui } from '@heroui/theme';
import svgToDataUri from 'mini-svg-data-uri';
import type { Config } from 'tailwindcss';
import { slate } from 'tailwindcss/colors';
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import type { PluginAPI } from 'tailwindcss/types/config';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'components/**/*.{js,ts,jsx,tsx,mdx}',
    'contents/**/*.{js,ts,jsx,tsx,mdx}',
    'contents-layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/drawer.js',
    'markdown/**/*.{js,ts,jsx,tsx,mdx}',
    'layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, "")', ..._fontFamily.sans],
        mono: ['var(--font-mono, "")', ..._fontFamily.mono],
      },
      colors: {
        divider: {
          light: slate[200],
          dark: slate[800],
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addVariant }: { addVariant: (name: string, pattern: string) => void }) => {
      addVariant('fm', '.fm &');
    },
    ({ matchUtilities, theme }: PluginAPI) => {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    heroui(),
  ],
} satisfies Config;
