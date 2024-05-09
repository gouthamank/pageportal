'use client';

import { Chivo } from 'next/font/google';
import LinkButton from '@/ui/LinkButton';
import { useEffect } from 'react';

import type { FooterProps } from '@/types/components/Footer/index.types';
import className from 'classnames';

const chivo = Chivo({ subsets: ['latin'] });

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
    return (
        <footer
            aria-label={'Footer Section'}
            id='footer'
            className={className([
                chivo.className,
                'sticky bottom-0 left-0 right-0 z-10 bg-early-dawn-400 py-12 text-sm text-white transition-colors md:px-6 dark:bg-early-dawn-800',
            ])}
        >
            <div className='container mx-auto px-4 md:px-6'>
                <p>
                    Feel free to reach out to me at <b>mail &lt;at&gt; gouthaman &lt;dot&gt; dev</b> or check out my{' '}
                    <a
                        href='https://drive.google.com/file/d/19-J9ltKpzhQYPcxozuMWoSaQASyDXs0X/view'
                        className='text-early-dawn-800 hover:opacity-80 dark:text-early-dawn-400'
                        target='_blank'
                    >
                        <b>résumé</b>
                    </a>
                    .
                </p>
                <p className='mt-4'>
                    Other links:{' '}
                    <span className={'inline-flex gap-2 px-2'}>
                        <LinkButton
                            isFooterLink
                            iconName={'code'}
                            link={'https://github.com/gouthamank'}
                            title={'GitHub'}
                        />
                        <LinkButton
                            isFooterLink
                            iconName={'website'}
                            link={'https://www.linkedin.com/in/gouthaman-kumar-999a385b'}
                            title={'LinkedIn'}
                        />
                    </span>
                </p>
            </div>
        </footer>
    );
}
