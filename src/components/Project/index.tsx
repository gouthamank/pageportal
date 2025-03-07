import className from 'classnames';
import type { ProjectProps } from '@/types/components/Project/index.types';
import LinkButton from '@/ui/LinkButton';
import TagContainer from '@/ui/Tag';
import { titleFont } from '@/utils/fonts';

export default function Project(props: ProjectProps) {
    return (
        <article
            aria-label={props.title}
            className={className([
                'flex flex-row',
                'rounded-lg border shadow-lg transition-all duration-200',
                'border-gray-400 bg-light-bg-2',
                'dark:border-gray-900 dark:bg-dark-bg-2',
                'hover:scale-[1.02]',
            ])}
        >
            <div className='w-full p-4'>
                <div className='flex flex-row items-center justify-between'>
                    <div className={titleFont.className} aria-label={'Project Title'}>
                        {props.title}
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        {props.links.map((link, idx) => (
                            <LinkButton key={idx} iconName={link.iconName} link={link.link} title={link.title} />
                        ))}
                    </div>
                </div>
                <div aria-label='Project Stack' className='mt-1'>
                    <TagContainer tags={props.tags} />
                </div>
                <div className='mt-2 text-sm leading-snug'>{props.description}</div>
            </div>
        </article>
    );
}
