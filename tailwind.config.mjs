/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        // Absolute
        black: '#000000',
        white: '#FFFFFF',

        // Dark Shades
        dark: {
          2: '#050505',
          4: '#0A0A0B',
          6: '#0F0F10',
          7: '#121212',
          8: '#141415',
          10: '#19191A',
          13: '#212122',
          16: '#28282A',
          18: '#2D2D2F',
          22: '#373739',
          25: '#3E3E41',
        },

        // Grey Shades
        gray: {
          40: '#666666',
          46: '#757575',
          60: '#999999',
          80: '#CCCCCC',
          85: '#D9D9D9',
          90: '#E6E6E6',
          95: '#F2F2F2',
          99: '#FCFCFC',
        },
      },
      fontSize: {
        // Headings
        'heading-xhuge': ['80px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-huge': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xl': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['22px', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-sm': ['19px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-xs': ['18px', { lineHeight: '1.4', fontWeight: '700' }],

        // Text
        'text-lg': ['18px', { lineHeight: '1.6', fontWeight: '500' }],
        'text-md': ['14px', { lineHeight: '1.6', fontWeight: '500' }],
        'text-sm': ['15px', { lineHeight: '1.6', fontWeight: '500' }],
        'text-xs': ['14px', { lineHeight: '1.6', fontWeight: '500' }],
      },
      screens: {
        'max-390': { 'max': '390px' },
        sm: "390px",   // Small devices (phones)
        md: "768px",   // Medium devices (tablets)
        lg: "1024px",  // Large devices (small laptops)
        xl: "1200px",  // Extra large devices (desktops)
        "2xl": "1536px", // 2x large screens
      },
    },
  },
  plugins: [],
};
