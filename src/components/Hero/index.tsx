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
                'sticky left-0 right-0 top-0 z-20 flex min-h-[22rem] flex-col items-center justify-center overflow-clip px-4 pb-6 pt-3 transition-colors md:px-6',
                'bg-early-dawn-400 text-white dark:bg-dark-bg-2',
            ])}
            style={{
                opacity: heroOpacity,
                translateY: heroTranslate,
            }}
        >
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 opacity-40 dark:opacity-30'
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.35), transparent 60%)',
                }}
            />
            <div className='relative flex w-full flex-row justify-end'>
                <ThemeSwitch />
            </div>
            <div className='relative text-center'>
                <h3 className={'select-none text-sm opacity-90'}>Hi, I&apos;m</h3>
                <h1 className='text-3xl md:text-4xl'>
                    Gouthaman Kumarappan
                    <span className={'select-none text-early-dawn-800 transition-colors dark:text-early-dawn-400'}>
                        .
                    </span>
                </h1>
                <p className='mt-2 select-none text-sm tracking-wide opacity-90 md:text-base'>Full Stack Developer</p>
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
