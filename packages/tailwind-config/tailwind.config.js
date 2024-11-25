/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '../../apps/page-router/pages/*.{js,ts,jsx,tsx}',
    '../../apps/pages-router/components/*.{js,ts,jsx,tsx}',
    '../../apps/app-router/app/*.{js,ts,jsx,tsx}',
    '../../apps/app-router/components/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Primary/ brand colors
        'base-50': '#F8F8FF',
        'base-100': '#F2F3FF',
        'base-200': '#DFE5FA',
        'base-300': '#B4B9FF',
        'base-400': '#907EFE',
        'base-500': '#7857FE',
        'base-600': '#6947DB',
        'base-700': '#422693',
        'base-800': '#201755',
        'base-800-t': '#2C3462',
        'base-900': '#170E31',
        'base-950': '#070114',

        //* Light mode
        // Text
        'theme-light-text-primary': '#2C3462', // base-800-t
        'theme-light-text-secondary': '#475569', // slate-600
        'theme-light-text-tertiary': '#64748B', // slate-500
        'theme-light-text-notes': '#94A3B8', // slate-400

        // Background
        'theme-light-background-primary': '#F8F8FF', // base-50
        'theme-light-background-secondary': '#F2F3FF', // base-100

        // Stroke
        'theme-light-stroke': '#DFE5FA', // base-200

        //* Night mode
        // Text
        'theme-night-text-primary': 'rgba(223,229,250,0.90)',
        'theme-night-text-secondary': 'rgba(223,229,250,0.75)',
        'theme-night-text-tertiary': 'rgba(223,229,250,0.35)',
        'theme-night-text-notes': 'rgba(223,229,250,0.5)',

        // Background
        'theme-night-background-primary': 'rgba(223,229,250,0.02)',
        'theme-night-background-secondary': 'rgba(223,229,250,0.02)',

        // Stroke
        'theme-night-stroke': 'rgba(223,229,250,0.09)'
      },
      // dropShadow: {
      //   'pill': [
      //     '0 4px 4px rgba(44, 52, 98, 0.02)'
      //   ]
      // },
      backgroundImage: {
        'diagonal-texture': 'url(/backgrounds/pixel-lijn-svg.svg)'
      },
      boxShadow: {
        pill: 'inset 0 3px 0 0 #ffffff, inset 0 -4px 0 0 #DFE5FA, 0 4px 16px rgba(44, 52, 98, 0.06), 0 4px 4px rgba(44, 52, 98, 0.02)',
        chip: '0 0px 4px rgba(44,52,98,0.10), 0 6px 10px rgba(44,52,98,0.10), 0 20px 24px rgba(44,52,98,0.10)',
        'hero-button-home':
          '0 4px 8px rgba(44,52,98,0.20), 0 4px 24px rgba(44,52,98,0.35)',
        'cookie-banner':
          '0 -2px 4px rgba(44,52,98,0.06), 0 -10px 20px rgba(44,52,98,0.09)',
        'inset-white': 'inset 0 0 0 1px #fff'
      },
      dropShadow: {
        CheckStarIcon: '0px 4.8px 4.8px rgba(120, 87, 254, 0.25)'
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20.5%)' }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        move: {
          '0%': { transform: 'translateX(-8.3%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'scroll-left': 'scroll-left 10s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        move: 'move 3s linear infinite'
      }
    }
  },
  plugins: []
}
