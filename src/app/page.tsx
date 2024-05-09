'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedProjects from '@/components/SelectedProjects';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <main aria-label='Main Page'>
            <Hero />
            <div
                aria-label='Page Content'
                id='pageContent'
                className='relative z-50 border-b-2 border-t-2 border-slate-800 bg-solarized-base2 dark:border-slate-300 dark:bg-solarized-d-base02'
            >
                <div className='container mx-auto flex min-h-screen flex-col px-4 md:px-6'>
                    <About />
                    <hr className='mt-12' />
                    <SelectedProjects />
                </div>
            </div>
            <Footer />
        </main>
    );
}
