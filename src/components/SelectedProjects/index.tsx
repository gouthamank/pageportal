import className from 'classnames';
import { Chivo } from 'next/font/google';
import Project from '@/components/Project';

import type { SelectedProjectsProps } from '@/types/components/SelectedProjects/index.types';

const chivo = Chivo({ subsets: ['latin'] });

export default function SelectedProjects(props: SelectedProjectsProps) {
    return (
        <div>
            <p className={className([chivo.className, 'text-md uppercase text-solarized-orange'])}>Selected Projects</p>
            <p className='mt-2'>Here&apos;s some of the projects I&apos;ve worked on over the years.</p>
            <Project />
        </div>
    );
}
