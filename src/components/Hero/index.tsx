import { Chivo } from 'next/font/google';
import type { HeroProps } from '@/types/components/Hero/index.types';
import className from 'classnames';
import Image from 'next/image';
import profileImage from '@/images/profile.jpg';

const chivo = Chivo({ subsets: ['latin'] });

export default function Hero(props: HeroProps) {
    return (
        <div
            className={className([
                chivo.className,
                'sticky left-0 right-0 top-0 z-40 flex min-h-[20rem] flex-col items-center justify-center px-4 transition-colors md:px-6',
                'bg-early-dawn-400 text-white dark:bg-early-dawn-800',
            ])}
        >
            <div>
                <p>Hi, I&apos;m</p>
                <p className='text-xl'>Gouthaman Kumarappan.</p>
            </div>
            <div className='relative mt-4 h-[10rem] w-[10rem] overflow-clip rounded-[100%] border-2 border-slate-800 transition-transform dark:border-slate-300'>
                <Image
                    src={profileImage}
                    alt={'Gouthaman'}
                    fill
                    objectFit={'cover'}
                    className='scale-125 transition-all hover:scale-150'
                />
            </div>
        </div>
    );
}
