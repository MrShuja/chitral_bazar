module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1240px",
        "2xl": "1480px",
      },
    },
    extend: {
      colors:{
        primary: "#1B5E20",
        secondary: "#4CAF50",
        accent: "#FFC107",
        background: "#ffffff",
        text: "#222222",
        muted: "#666666",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        h2: ['3rem', { lineHeight: '1.15', fontWeight: '600' }],
        h3: ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        h4: ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
        h5: ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        h6: ['1rem', { lineHeight: '1.4', fontWeight: '600' }],
        base: ['1rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.08)",
        btn: "0 2px 6px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};
