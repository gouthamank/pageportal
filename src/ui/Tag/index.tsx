import className from 'classnames';

import type { TagContainerProps, TagProps } from '@/types/ui/Tag/index.types';
import { monoFont } from '@/utils/fonts';

export function Tag(props: TagProps) {
    return (
        <span
            className={className(monoFont.className, [
                'rounded-md border px-1.5 py-0.5 text-[0.6rem] text-solarized-orange shadow-sm dark:text-early-dawn-400',
                'mb-2 mt-1',
                'md:px-2 md:py-1',
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
        <div className='flex flex-row flex-wrap gap-1.5'>
            {props.tags.map((tag: string, idx: number) => {
                return <Tag key={idx}>{tag}</Tag>;
            })}
        </div>
    );
}
