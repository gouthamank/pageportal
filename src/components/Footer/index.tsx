'use client';

import LinkButton from '@/ui/LinkButton';
import config from '@/config';
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import type { FooterProps } from '@/types/components/Footer/index.types';
import className from 'classnames';
import { fireLinkClickEvent } from '@/utils/firebase';
import { titleFont } from '@/utils/fonts';

export default function Footer(props: FooterProps) {
    const handleScroll = () => {
        const pageContent = document.getElementById('pageContent');
        const footer = document.getElementById('footer');
        if (!pageContent || !footer) {
            return;
        }

        const { top: pageContentTop } = pageContent.getBoundingClientRect();
        footer.style.zIndex = pageContentTop <= 0 ? '40' : '10';
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { scrollYProgress } = useScroll();
    const footerOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9, 0.95, 1], [0.4, 0.4, 0.4, 1, 1]);

    const handleEmailClick = () => {
        const address = ['hello', 'gouthaman.dev'].join('@');
        window.location.href = `mailto:${address}`;
    };

    return (
        <motion.footer
            aria-label={'Footer Section'}
            id='footer'
            className={className([
                titleFont.className,
                'sticky bottom-0 left-0 right-0 z-10 bg-early-dawn-400 py-12 text-sm text-white transition-all md:px-6 dark:bg-dark-bg-2',
            ])}
            initial={{
                translateY: 100,
            }}
            whileInView={{
                translateY: 0,
            }}
            transition={{
                ease: 'linear',
            }}
            style={{
                opacity: footerOpacity,
            }}
        >
            <div className='container mx-auto px-4 md:px-6'>
                <h2
                    className={className([
                        titleFont.className,
                        'text-md uppercase text-early-dawn-800 dark:text-early-dawn-400',
                    ])}
                >
                    Let&apos;s Connect
                </h2>
                <p className='mt-3'>Have a project in mind or just want to say hi? Reach out any time.</p>
                <div className='mt-4 flex flex-row flex-wrap items-center gap-3'>
                    <button
                        onClick={handleEmailClick}
                        className='rounded-full border border-early-dawn-800 px-4 py-1.5 text-xs transition-opacity hover:opacity-80 dark:border-early-dawn-400'
                    >
                        Email me
                    </button>
                    <a
                        href={config.links.resume}
                        className='rounded-full border border-early-dawn-800 px-4 py-1.5 text-xs transition-opacity hover:opacity-80 dark:border-early-dawn-400'
                        target='_blank'
                        onClick={() => fireLinkClickEvent(config.links.resume)}
                    >
                        Résumé
                    </a>
                    <span className={'inline-flex gap-2 px-2'}>
                        <LinkButton isFooterLink iconName={'code'} link={config.links.github} title={'GitHub'} />
                        <LinkButton isFooterLink iconName={'website'} link={config.links.linkedin} title={'LinkedIn'} />
                    </span>
                </div>
            </div>
        </motion.footer>
    );
}
