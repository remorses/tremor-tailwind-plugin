import type { MetaFunction } from '@remix-run/node'
import { Callout } from '@tremor/react'

import { AreaChart } from '@tremor/react'

const dataFormatter = (number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`

export default function Index() {
    return (
        <div className='flex flex-col gap-6 h-full items-center'>
            <AreaChart
                className='h-80'
                data={chartdata}
                index='date'
                categories={['SolarPanels', 'Inverters']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
            />
            <div className=''></div>
            <div className='mx-auto max-w-lg space-y-6'>
                <Callout title='Sales Performance' color='red'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Callout>
                <Callout title='Sales Performance' color='teal'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus tempor lorem non est congue blandit. Praesent non
                    lorem sodales, suscipit est sed, hendrerit dolor.
                </Callout>
                <Callout
                    className='h-36'
                    title='Sales Performance'
                    color='indigo'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus tempor lorem non est congue blandit. Praesent non
                    lorem sodales, suscipit est sed, hendrerit dolor. Praesent
                    non lorem sodales, suscipit est sed, hendrerit dolor. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    tempor lorem non est congue blandit. Praesent non lorem
                    sodales, suscipit est sed, hendrerit dolor.
                </Callout>
            </div>
        </div>
    )
}

const chartdata = [
    {
        date: 'Jan 22',
        SolarPanels: 2890,
        Inverters: 2338,
    },
    {
        date: 'Feb 22',
        SolarPanels: 2756,
        Inverters: 2103,
    },
    {
        date: 'Mar 22',
        SolarPanels: 3322,
        Inverters: 2194,
    },
    {
        date: 'Apr 22',
        SolarPanels: 3470,
        Inverters: 2108,
    },
    {
        date: 'May 22',
        SolarPanels: 3475,
        Inverters: 1812,
    },
    {
        date: 'Jun 22',
        SolarPanels: 3129,
        Inverters: 1726,
    },
    {
        date: 'Jul 22',
        SolarPanels: 3490,
        Inverters: 1982,
    },
    {
        date: 'Aug 22',
        SolarPanels: 2903,
        Inverters: 2012,
    },
    {
        date: 'Sep 22',
        SolarPanels: 2643,
        Inverters: 2342,
    },
    {
        date: 'Oct 22',
        SolarPanels: 2837,
        Inverters: 2473,
    },
    {
        date: 'Nov 22',
        SolarPanels: 2954,
        Inverters: 3848,
    },
    {
        date: 'Dec 22',
        SolarPanels: 3239,
        Inverters: 3736,
    },
]
