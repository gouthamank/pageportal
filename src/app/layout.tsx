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
            <head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
                    rel='stylesheet'
                />
            </head>
            <body className={gentiumBookPlus.className}>{children}</body>
        </html>
    );
}
