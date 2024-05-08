import { Roboto_Mono } from 'next/font/google';
import className from 'classnames';

import type { TagContainerProps, TagProps } from '@/types/components/Project/components/Tag/index.types';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export function Tag(props: TagProps) {
    return (
        <span
            className={className(robotoMono.className, [
                'rounded-md border px-1.5 text-[0.6rem] text-solarized-orange shadow-sm',
                'border-gray-400',
                'dark:border-gray-600',
            ])}
        >
            {props.children}
        </span>
    );
}

export default function TagContainer(props: TagContainerProps) {
    return (
        <div className='flex flex-row gap-1'>
            {props.tags.map((tag: string, idx: number) => {
                return <Tag key={idx}>{tag}</Tag>;
            })}
        </div>
    );
}
