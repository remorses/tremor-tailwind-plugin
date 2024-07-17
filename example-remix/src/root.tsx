import './styles/globals.css'
import { Toaster } from 'react-hot-toast'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'

import { NextUIProvider } from '@nextui-org/react'

function Providers({ children }) {
    return (
        <div className='dark h-full w-full flex flex-col bg-framer-primary text-framer-primary'>
            <Toaster />
            <NextUIProvider className='h-full flex flex-col '>
                {children}
            </NextUIProvider>
        </div>
    )
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Providers>
                    <div className='flex w-full flex-col text-center items-center justify-center gap-6 p-4 pt-0'>
                        {children}
                    </div>
                </Providers>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
