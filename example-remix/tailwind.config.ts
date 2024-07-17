import colors from 'tailwindcss/colors'
import { tremorPlugin } from 'tremor-tailwind-plugin'

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
export default {
    mode: 'jit',
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {},
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        tremorPlugin({
            themes: {
                light: {
                    colors: {
                        brand: {
                            DEFAULT: colors.gray[600],
                            emphasis: colors.gray[700],
                            inverted: colors.white,
                            faint: colors.gray[100],
                            muted: colors.gray[300],
                            subtle: colors.gray[200],
                        },
                    },
                },
            },
        }),
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms'),
    ],
}
