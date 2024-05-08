import className from 'classnames';
// import Image from 'next/image';
import { Chivo, Roboto_Mono } from 'next/font/google';
// import grabbdImage from './images/grabbd.png';
import type { ProjectProps } from '@/types/components/Project/index.types';
import ImageLink from '../../ui/ImageLink';
import TagContainer from '../../ui/Tag';

const arvo = Chivo({ subsets: ['latin'], weight: '400' });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Project(props: ProjectProps) {
    return (
        <div
            className={className([
                'flex flex-row',
                'rounded-lg border shadow-lg transition-all duration-200',
                'border-gray-400 bg-solarized-base3',
                'dark:border-gray-900 dark:bg-solarized-d-base03',
            ])}
        >
            <div className='w-full p-4'>
                <div className='flex flex-row items-center gap-2'>
                    <div className={arvo.className}>{props.title}</div>
                    <div className='flex flex-row items-center gap-2'>
                        {props.links.map((link, idx) => (
                            <ImageLink key={idx} iconName={link.iconName} link={link.link} title={link.title} />
                        ))}
                    </div>
                </div>
                <div className='mt-1'>
                    <TagContainer tags={props.tags} />
                </div>
                <div className='mt-2 text-sm leading-snug'>{props.description}</div>
            </div>
            {/*<div className='relative w-[70%] overflow-clip rounded-r-lg'>*/}
            {/*    <Image src={grabbdImage} alt={props.title} fill objectFit='cover' />*/}
            {/*</div>*/}
        </div>
    );
}
