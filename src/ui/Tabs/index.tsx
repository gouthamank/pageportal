import { useState } from 'react';
import className from 'classnames';

import type { TabsProps } from '@/types/ui/Tabs/index.types';
import { fireTabClickEvent } from '@/utils/firebase';
import { monoFont } from '@/utils/fonts';

export default function Tabs(props: TabsProps) {
    const [selectedTab, setSelectedTab] = useState(props.tabs[0]);

    const onTabSelected = (tab: string) => () => {
        if (selectedTab === tab) {
            return;
        }

        fireTabClickEvent(tab);
        props.onChangeTab(tab);
        setSelectedTab(tab);
    };

    return (
        <div className='flex w-full flex-row rounded-[15px] border border-early-dawn-800 bg-early-dawn-100 text-xs text-early-dawn-500 md:w-fit dark:border-early-dawn-300 dark:bg-early-dawn-900 dark:text-early-dawn-700'>
            {props.tabs.map((tab, idx) => (
                <button
                    role={'option'}
                    aria-label={`View ${tab} projects`}
                    aria-selected={tab === selectedTab}
                    className={className([
                        'flex-1 cursor-pointer select-none overflow-clip px-4 py-1.5 transition-all duration-200 hover:text-white',
                        {
                            'bg-early-dawn-700 text-white dark:bg-early-dawn-400': selectedTab === tab,
                        },
                        {
                            'hover:bg-early-dawn-600 dark:bg-dark-bg-2 dark:text-dark-fg dark:hover:bg-dark-bg-1':
                                selectedTab !== tab,
                        },
                        {
                            'rounded-l-[15px]': idx === 0,
                        },
                        {
                            'rounded-r-[15px]': idx === props.tabs.length - 1,
                        },
                        monoFont.className,
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
