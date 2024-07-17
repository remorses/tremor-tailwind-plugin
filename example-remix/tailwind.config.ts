import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
export default {
    mode: 'jit',
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        // '../beskar/src/**/*.{js,ts,jsx,tsx}',
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
        nextui({
            // themes: {
            //     light: {
            //         colors: {
            //             primary: {
            //                 DEFAULT: colors.sky[600],
            //                 // foreground: '#000000',
            //             },
            //         },
            //     },
            // },
        }),
    ],
}
