import type { Metadata } from 'next';
import './globals.css';
import { serifFont } from '@/utils/fonts';
import { MotionConfig } from 'motion/react';

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
            <body className={serifFont.className}>
                <MotionConfig reducedMotion='user'>{children}</MotionConfig>
            </body>
        </html>
    );
}
