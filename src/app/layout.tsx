import type { Metadata } from 'next';
import { Gentium_Book_Plus } from 'next/font/google';
import './globals.css';

const gentiumBookPlus = Gentium_Book_Plus({ subsets: ['latin'], weight: ['400', '700'] });

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
            <body className={gentiumBookPlus.className}>{children}</body>
        </html>
    );
}
