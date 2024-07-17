import { tremorPlugin } from 'tremor-tailwind-plugin'
import { nextui } from '@nextui-org/react'

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
        tremorPlugin({}),
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms'),
    ],
}
