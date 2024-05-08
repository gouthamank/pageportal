import { useState } from 'react';
import { Roboto_Mono } from 'next/font/google';
import className from 'classnames';

import type { TabsProps } from '@/types/ui/Tabs/index.types';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Tabs(props: TabsProps) {
    const [selectedTab, setSelectedTab] = useState(props.tabs[0]);

    const onTabSelected = (tab: string) => () => {
        if (selectedTab === tab) {
            return;
        }

        props.onChangeTab(tab);
        setSelectedTab(tab);
    };

    return (
        <div className='flex w-full flex-row rounded-[15px] border border-early-dawn-800 bg-early-dawn-100 text-xs text-early-dawn-500 md:w-fit dark:bg-early-dawn-950 dark:text-early-dawn-700'>
            {props.tabs.map((tab, idx) => (
                <button
                    className={className([
                        'flex-1 cursor-pointer select-none overflow-clip px-4 py-1.5 transition-all duration-200 hover:text-white',
                        {
                            'bg-early-dawn-700 text-white': selectedTab === tab,
                        },
                        {
                            'hover:bg-early-dawn-600': selectedTab !== tab,
                        },
                        {
                            'rounded-l-[15px]': idx === 0,
                        },
                        {
                            'rounded-r-[15px]': idx === props.tabs.length - 1,
                        },
                        robotoMono.className,
                    ])}
                    key={idx}
                    onClick={onTabSelected(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
