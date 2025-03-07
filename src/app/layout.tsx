import type { Metadata } from 'next';
import './globals.css';
import { serifFont } from '@/utils/fonts';
import { MotionConfig } from 'motion/react';

export const metadata: Metadata = {
    title: 'Gouthaman Kumarappan',
    description: 'Portfolio for Gouthaman Kumarappan',
    robots: 'index, follow',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
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
