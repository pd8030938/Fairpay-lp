import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores Principais
        'azul-primary': '#2563EB',       // Azul vibrante
        'azul-dark': '#1E40AF',          // Para textos/botões
        'azul-light': '#DBEAFE',         // Backgrounds sutis
        'verde-success': '#10B981',      // Verde fresco
        'verde-light': '#D1FAE5',        // Badges de confiança
        'laranja-accent': '#F59E0B',     // Para destaques
        // Neutros
        'cinza-50': '#F9FAFB',           // Fundo geral
        'cinza-100': '#F3F4F6',          // Cards
        'cinza-600': '#4B5563',          // Texto secundário
        'cinza-900': '#111827',          // Texto principal
        'branco': '#F8FAFC',             // Branco suave (off-white) para evitar fundos totalmente brancos
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        // Desktop
        'h1-desktop': ['48px', { lineHeight: '56px' }],
        'h2-desktop': ['36px', { lineHeight: '44px' }],
        'h3-desktop': ['24px', { lineHeight: '32px' }],
        'body-desktop': ['16px', { lineHeight: '24px' }],
        // Mobile
        'h1-mobile': ['32px', { lineHeight: '40px' }],
        'h2-mobile': ['28px', { lineHeight: '36px' }],
        'h3-mobile': ['20px', { lineHeight: '28px' }],
        'body-mobile': ['14px', { lineHeight: '22px' }],
      },
      spacing: {
        '4px': '0.25rem',
        '8px': '0.5rem',
        '16px': '1rem',
        '24px': '1.5rem',
        '48px': '3rem',
        '96px': '6rem',
      },
      borderRadius: {
        '6px': '6px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '28px': '28px',
      },
      boxShadow: {
        'sm': '0px 2px 8px rgba(0,0,0,0.06)',
        'md': '0px 4px 12px rgba(30, 64, 175, 0.3)',
        'lg': '0px 8px 24px rgba(0,0,0,0.12)',
        'xl': '0px 12px 32px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
        'gradient-success': 'linear-gradient(to right, #059669, #10B981)',
      },
    },
  },
  plugins: [],
};

export default config;
