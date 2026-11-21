const v = (name) => `var(--${name})`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  // Theme switching is driven by CSS variables from ThemeProvider, not the dark:
  // variant.
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        desk: v('desk'),
        bg: v('bg'),
        'surface-2': v('surface-2'),
        'surface-3': v('surface-3'),
        line: v('line'),
        'line-strong': v('line-strong'),
        'text-1': v('text-1'),
        'text-2': v('text-2'),
        'text-3': v('text-3'),
        inv: v('inv'),
        'inv-ink': v('inv-ink'),
        scrim: v('scrim'),
        glass: v('glass'),
        'glass-line': v('glass-line'),
        ok: v('ok'),
        err: v('err'),
        'err-soft': v('err-soft'),
        warn: v('warn'),
        info: v('info'),
        accent: v('accent'),
        'accent-ink': v('accent-ink'),
        'accent-soft': v('accent-soft'),
        'accent-text': v('accent-text'),
        'map-bg': v('map-bg'),
      },
      fontFamily: {
        // Display - Archivo
        d5: ['Archivo_500Medium'],
        d6: ['Archivo_600SemiBold'],
        d7: ['Archivo_700Bold'],
        d8: ['Archivo_800ExtraBold'],
        // Body - Figtree
        b4: ['Figtree_400Regular'],
        b5: ['Figtree_500Medium'],
        b6: ['Figtree_600SemiBold'],
        b7: ['Figtree_700Bold'],
      },
    },
  },
  plugins: [],
};
