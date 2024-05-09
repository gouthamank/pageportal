import className from 'classnames';
import { Chivo } from 'next/font/google';
import type { ProjectProps } from '@/types/components/Project/index.types';
import LinkButton from '../../ui/LinkButton';
import TagContainer from '../../ui/Tag';

const arvo = Chivo({ subsets: ['latin'], weight: '400' });

export default function Project(props: ProjectProps) {
    return (
        <article
            className={className([
                'flex flex-row',
                'rounded-lg border shadow-lg transition-all duration-200',
                'border-gray-400 bg-solarized-base3',
                'dark:border-gray-900 dark:bg-solarized-d-base03',
            ])}
        >
            <div className='w-full p-4'>
                <div className='flex flex-row items-center justify-between'>
                    <div className={arvo.className}>{props.title}</div>
                    <div className='flex flex-row items-center gap-2'>
                        {props.links.map((link, idx) => (
                            <LinkButton key={idx} iconName={link.iconName} link={link.link} title={link.title} />
                        ))}
                    </div>
                </div>
                <div className='mt-1'>
                    <TagContainer tags={props.tags} />
                </div>
                <div className='mt-2 text-sm leading-snug'>{props.description}</div>
            </div>
        </article>
    );
}
