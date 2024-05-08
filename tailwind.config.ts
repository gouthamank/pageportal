import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1024px',
        },
        extend: {
            colors: {
                'solarized-d-base03': '#002b36',
                'solarized-d-base02': '#073642',
                'solarized-base3': '#fdf6e3',
                'solarized-base2': '#eee8d5',
                'solarized-base0': '#839496',
                'solarized-base1': '#93a1a1',
                'solarized-d-base00': '#657b83',
                'solarized-d-base01': '#586e75',
                'solarized-yellow': '#b58900',
                'solarized-orange': '#cb4b16',
                'solarized-red': '#dc322f',
                'solarized-magenta': '#d33682',
                'solarized-violet': '#6c71c4',
                'solarized-blue': '#268bd2',
                'solarized-cyan': '#2aa198',
                'solarized-green': '#859900',
                'early-dawn': {
                    '50': '#fdf6e3',
                    '100': '#faeecb',
                    '200': '#f5da92',
                    '300': '#f0c359',
                    '400': '#edac32',
                    '500': '#e58c1b',
                    '600': '#cb6914',
                    '700': '#a94b14',
                    '800': '#893a17',
                    '900': '#713116',
                    '950': '#411707',
                },
            },
            fontSize: {
                xs: '0.7rem',
                sm: '0.85rem',
                base: '1rem',
                md: '1.25rem',
                lg: '1.25rem',
                xl: '1.4rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
        },
    },
    plugins: [],
};
export default config;