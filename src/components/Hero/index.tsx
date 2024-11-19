'use client';

import { Chivo } from 'next/font/google';
import type { HeroProps } from '@/types/components/Hero/index.types';
import className from 'classnames';
import Image from 'next/image';
import profileImage from '@/images/profile2.jpg';
import ThemeSwitch from '@/components/ThemeSwitch';

const chivo = Chivo({ subsets: ['latin'] });

export default function Hero(props: HeroProps) {
    return (
        <section
            aria-label='Hero Section'
            className={className([
                chivo.className,
                'sticky left-0 right-0 top-0 z-20 flex min-h-[20rem] flex-col items-center justify-center px-4 pb-6 pt-3 transition-colors md:px-6',
                'bg-early-dawn-400 text-white dark:bg-early-dawn-800',
            ])}
        >
            <div className='flex w-full flex-row justify-end'>
                <ThemeSwitch />
            </div>
            <div>
                <h3>Hi, I&apos;m</h3>
                <h1 className='text-xl'>Gouthaman Kumarappan.</h1>
            </div>
            <div className='relative mt-4 h-[10rem] w-[10rem] overflow-clip rounded-[100%] border-2 border-slate-800 transition-all hover:border-0 dark:border-slate-300'>
                <Image
                    placeholder='blur'
                    src={profileImage}
                    alt={'Gouthaman'}
                    fill
                    objectFit={'cover'}
                    className='profile-zoom-on-hover'
                />
            </div>
        </section>
    );
}
