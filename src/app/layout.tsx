import type { Metadata } from 'next';
import './globals.css';
import { serifFont } from '@/utils/fonts';
import { MotionConfig } from 'motion/react';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Gouthaman Kumarappan',
    description: 'Portfolio for Gouthaman Kumarappan',
    robots: 'index, follow',
    icons: [
        {
            url: '/favicon.svg',
            type: 'image/svg+xml',
        },
        {
            url: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
        },
        {
            url: '/favicon.ico',
            rel: 'shortcut icon',
            sizes: '96x96',
        },
        {
            url: '/apple-touch-icon.png',
            rel: 'apple-touch-icon',
            sizes: '180x180',
        },
    ],
    appleWebApp: {
        capable: true,
        title: 'Gouthaman',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <Head>
                <meta name='theme-color' content='#fdf6e3' media='(prefers-color-scheme: light)' />
                <meta name='theme-color' content='#2e2e44' media='(prefers-color-scheme: dark)' />
            </Head>
            <body className={serifFont.className}>
                <MotionConfig reducedMotion='user'>{children}</MotionConfig>
            </body>
        </html>
    );
}
