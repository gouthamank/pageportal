import { Chivo } from 'next/font/google';
import type { HeroProps } from '@/types/components/Hero/index.types';
import className from 'classnames';
import Image from 'next/image';
import profileImage from '@/images/profile.jpg';

const chivo = Chivo({ subsets: ['latin'] });

export default function Hero(props: HeroProps) {
    return (
        <div
            className={className([
                chivo.className,
                'sticky left-0 right-0 top-0 z-40 flex min-h-[20rem] flex-col items-center justify-center bg-early-dawn-400 px-4 text-white md:px-6 dark:bg-early-dawn-800 dark:text-solarized-base0',
            ])}
        >
            <div>
                <p>Hi, I&apos;m</p>
                <p className='text-xl'>Gouthaman Kumarappan</p>
            </div>
            <div className='relative mt-4 h-[10rem] w-[10rem] overflow-clip rounded-[100%] transition-transform hover:scale-105'>
                <Image src={profileImage} alt={'Gouthaman'} fill objectFit={'cover'} className='scale-125' />
            </div>
        </div>
    );
}
