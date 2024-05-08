import type { HeaderProps } from '@/types/components/Header/index.types';

export default function Header(props: HeaderProps) {
    return (
        <header className='fixed top-0 z-[9999] w-full'>
            <div className='container mx-auto flex h-20 flex-row items-center justify-end px-4 md:px-6'>
                <span className='material-symbols-outlined'>contrast</span>
            </div>
        </header>
    );
}
