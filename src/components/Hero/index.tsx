'use client';

import type { HeroProps } from '@/types/components/Hero/index.types';
import className from 'classnames';
import Image from 'next/image';
import profileImage from '@/images/profile2.jpg';
import ThemeSwitch from '@/components/ThemeSwitch';
import { titleFont } from '@/utils/fonts';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero(props: HeroProps) {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);
    const heroTranslate = useTransform(scrollYProgress, [0, 0.2, 1], [0, -100, -100]);

    return (
        <motion.section
            aria-label='Hero Section'
            className={className([
                titleFont.className,
                'sticky left-0 right-0 top-0 z-20 flex min-h-[20rem] flex-col items-center justify-center px-4 pb-6 pt-3 transition-colors md:px-6',
                'bg-early-dawn-400 text-white dark:bg-dark-bg-2',
            ])}
            style={{
                opacity: heroOpacity,
                translateY: heroTranslate,
            }}
        >
            <div className='flex w-full flex-row justify-end'>
                <ThemeSwitch />
            </div>
            <div>
                <h3 className={'select-none'}>Hi, I&apos;m</h3>
                <h1 className='text-xl'>
                    Gouthaman Kumarappan
                    <span className={'select-none text-early-dawn-800 transition-colors dark:text-early-dawn-400'}>
                        .
                    </span>
                </h1>
            </div>
            <div className='relative mt-4 h-[10rem] w-[10rem] overflow-clip rounded-[100%] border-2 border-slate-800 transition-all hover:border-0 dark:border-slate-300'>
                <Image
                    placeholder='blur'
                    src={profileImage}
                    alt={'Gouthaman'}
                    fill
                    className='profile-zoom-on-hover select-none object-cover'
                />
            </div>
        </motion.section>
    );
}
