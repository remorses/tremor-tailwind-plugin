import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ]
}

export default function Index() {
    return (
        <div className='flex flex-col h-full items-center'>
            <div className='text-8xl'>Hello</div>
        </div>
    )
}
