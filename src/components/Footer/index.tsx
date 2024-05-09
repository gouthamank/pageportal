'use client';

import LinkButton from '@/ui/LinkButton';
import { useEffect } from 'react';

import type { FooterProps } from '@/types/components/Footer/index.types';

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
            id='footer'
            className='sticky bottom-0 left-0 right-0 z-10 bg-early-dawn-400 px-4 py-12 text-white transition-colors md:px-6 dark:bg-early-dawn-800'
        >
            <div className='container mx-auto'>
                <p>
                    Feel free to reach out to me at <b>mail &lt;at&gt; gouthaman &lt;dot&gt; dev</b> or check out my{' '}
                    <a
                        href='https://drive.google.com/file/d/19-J9ltKpzhQYPcxozuMWoSaQASyDXs0X/view'
                        className='text-solarized-cyan hover:opacity-80'
                        target='_blank'
                    >
                        <b>résumé</b>
                    </a>
                    .
                </p>
                <p className='mt-4'>
                    Other links:{' '}
                    <span className={'inline-flex gap-2 px-2'}>
                        <LinkButton iconName={'code'} link={'https://github.com/gouthamank'} title={'GitHub'} />
                        <LinkButton
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
