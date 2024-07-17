import plugin from 'tailwindcss/plugin'
import { CustomThemeConfig } from 'tailwindcss/types/config'
import colors from 'tailwindcss/colors'

type Color = string

interface TremorColorTheme {
    brand?: {
        faint?: Color
        muted?: Color
        subtle?: Color
        DEFAULT?: Color
        emphasis?: Color
        inverted?: Color
    }
    background?: {
        muted?: Color
        subtle?: Color
        DEFAULT?: Color
        emphasis?: Color
    }
    border?: {
        DEFAULT?: Color
    }
    ring?: {
        DEFAULT?: Color
    }
    content?: {
        subtle?: Color
        DEFAULT?: Color
        emphasis?: Color
        strong?: Color
        inverted?: Color
    }
}

interface boxShadowTheme {
    tremorInput?: string
    tremorCard?: string
    tremorDropdown?: string
    darkTremorInput?: string
    darkTremorCard?: string
    darkTremorDropdown?: string
}

interface borderRadiusTheme {
    tremorSmall?: string
    tremorDefault?: string
    tremorFull?: string
}

interface fontSizeTheme {
    tremorLabel?: any[]
    tremorDefault?: any[]
    tremorTitle?: any[]
    tremorMetric?: any[]
}

interface TremorPluginOptions {
    themes?: {
        light?: {
            colors?: TremorColorTheme
        }
        dark?: {
            colors?: TremorColorTheme
        }
        boxShadow?: boxShadowTheme
        borderRadius?: borderRadiusTheme
        fontSize?: fontSizeTheme
    }
}

const convertConfigToTheme = (config: TremorPluginOptions['themes']) => {
    const theme: Partial<CustomThemeConfig> = {
        colors: { tremor: {} },
    }
    if (!config) return theme

    if (config.light?.colors) {
        theme.colors!['tremor'] = convertObjectKeysToKebabCase(
            config.light.colors,
        )
    }

    if (config.dark?.colors) {
        theme.colors!['tremor-dark'] = convertObjectKeysToKebabCase(
            config.dark.colors,
        )
    }

    if (config.boxShadow) {
        theme.boxShadow = convertObjectKeysToKebabCase(config.boxShadow)
    }

    if (config.borderRadius) {
        theme.borderRadius = convertObjectKeysToKebabCase(config.borderRadius)
    }

    if (config.fontSize) {
        theme.fontSize = convertObjectKeysToKebabCase(config.fontSize)
    }

    return theme
}

function convertObjectKeysToKebabCase(obj: any) {
    const newObj: any = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[toKebabCase(key)] = obj[key]
        }
    }
    return newObj
}

function toKebabCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export const tremorPlugin = plugin.withOptions<TremorPluginOptions>(
    ({ themes = {} } = {}) => {
        return ({
            addBase,
            addComponents,
            addUtilities,
            theme: tailwindTheme,
        }) => {
            // Plugin implementation
        }
    },
    ({ themes } = {}) => {
        const defaultTheme: TremorPluginOptions['themes'] = {
            light: {
                colors: {
                    brand: {
                        faint: colors.blue[50],
                        muted: colors.blue[200],
                        subtle: colors.blue[400],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[700],
                        inverted: colors.white,
                    },
                    background: {
                        muted: colors.gray[50],
                        subtle: colors.gray[100],
                        DEFAULT: colors.white,
                        emphasis: colors.gray[700],
                    },
                    border: {
                        DEFAULT: colors.gray[200],
                    },
                    ring: {
                        DEFAULT: colors.gray[200],
                    },
                    content: {
                        subtle: colors.gray[400],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[700],
                        strong: colors.gray[900],
                        inverted: colors.white,
                    },
                },
            },
            dark: {
                colors: {
                    brand: {
                        faint: '#0B1229',
                        muted: colors.blue[950],
                        subtle: colors.blue[800],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[400],
                        inverted: colors.blue[950],
                    },
                    background: {
                        muted: '#131A2B',
                        subtle: colors.gray[800],
                        DEFAULT: colors.gray[900],
                        emphasis: colors.gray[300],
                    },
                    border: {
                        DEFAULT: colors.gray[800],
                    },
                    ring: {
                        DEFAULT: colors.gray[800],
                    },
                    content: {
                        subtle: colors.gray[600],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[200],
                        strong: colors.gray[50],
                        inverted: colors.gray[950],
                    },
                },
            },
            boxShadow: {
                tremorInput: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                tremorCard:
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                tremorDropdown:
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                darkTremorInput: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                darkTremorCard:
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                darkTremorDropdown:
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            },
            borderRadius: {
                tremorSmall: '0.375rem',
                tremorDefault: '0.5rem',
                tremorFull: '9999px',
            },
            fontSize: {
                tremorLabel: ['0.75rem', { lineHeight: '1rem' }],
                tremorDefault: ['0.875rem', { lineHeight: '1.25rem' }],
                tremorTitle: ['1.125rem', { lineHeight: '1.75rem' }],
                tremorMetric: ['1.875rem', { lineHeight: '2.25rem' }],
            },
        }

        const mergedThemes = deepMerge(defaultTheme, themes)

        const theme = convertConfigToTheme(mergedThemes)
        console.log(JSON.stringify(theme, null, 2))
        return {
            theme: {
                extend: {
                    transparent: 'transparent',
                    current: 'currentColor',
                    ...theme,
                    // ...defaultTheme,
                },
            },
            safelist: [
                {
                    pattern:
                        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                    variants: ['hover', 'ui-selected'],
                },
                {
                    pattern:
                        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                    variants: ['hover', 'ui-selected'],
                },
                {
                    pattern:
                        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                    variants: ['hover', 'ui-selected'],
                },
                {
                    pattern:
                        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                },
                {
                    pattern:
                        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                },
                {
                    pattern:
                        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                },
            ],
        }
    },
)

// Deep merge function
const deepMerge = (target: any, source: any) => {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] instanceof Object && key in target) {
                deepMerge(target[key], source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
    return target
}
