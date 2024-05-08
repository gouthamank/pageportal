import type { HeroProps } from '@/types/components/Hero/index.types';

export default function Hero(props: HeroProps) {
    return (
        <div>
            <p>Hi, I&apos;m Gouthaman.</p>
            <p className='mt-4'>
                I&apos;m a full stack developer with a passion for creating beautiful user experiences. I live in
                Toronto, but am originally from Dubai.
            </p>
            <p className='mt-4'>
                I have professional experience with <b>React</b> and <b>Next.JS</b>, and <b>Node.JS / Express</b>{' '}
                backends, and have helped build apps big and small, in teams and individually. I also dabble in mobile
                development, having built and published <b>Android</b> and <b>iOS</b> apps natively and with{' '}
                <b>React Native</b>.
            </p>
        </div>
    );
}
