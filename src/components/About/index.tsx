import className from 'classnames';
import { Chivo } from 'next/font/google';

const chivo = Chivo({ subsets: ['latin'] });

export default function About() {
    return (
        <>
            <p className={className([chivo.className, 'mt-8 text-md uppercase text-solarized-orange'])}>About</p>
            <p className='mt-4'>
                I&apos;m a full stack developer with a passion for creating beautiful user experiences. I am currently
                based in Toronto, but I&apos;m originally from Dubai.
            </p>
            <p className='mt-4'>
                I have professional experience with <b>React</b> and <b>Next.JS</b>, and <b>Node.JS / Express</b>{' '}
                backends, and have helped build apps big and small, in teams and individually. Additionally, I have
                mobile development experience, having created and released Android and iOS apps using both native
                technologies and React Native.
            </p>
        </>
    );
}
