import type { Metadata } from 'next';
import { Gentium_Book_Plus } from 'next/font/google';
import './globals.css';

const gentiumBookPlus = Gentium_Book_Plus({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Hello!',
    description: '',
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
