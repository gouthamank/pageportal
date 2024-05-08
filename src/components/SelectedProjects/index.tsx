import className from 'classnames';
import { Chivo } from 'next/font/google';
import Project from '@/components/Project';
import Tabs from '@/ui/Tabs';
import { mobileProjects, webProjects } from './allProjects';

import type { SelectedProjectsProps } from '@/types/components/SelectedProjects/index.types';
import { ProjectProps } from '@/types/components/Project/index.types';
import { useCallback, useState } from 'react';

const chivo = Chivo({ subsets: ['latin'] });

export default function SelectedProjects(props: SelectedProjectsProps) {
    const [projectSelection, setProjectSelection] = useState('Web');

    const handleTabChange = useCallback((newTab: string) => {
        setProjectSelection(newTab);
    }, []);

    return (
        <div>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between md:gap-0'>
                <p className={className([chivo.className, 'text-md uppercase text-solarized-orange'])}>
                    Selected Projects
                </p>
                <Tabs tabs={['Web', 'Mobile']} onChangeTab={handleTabChange} />
            </div>
            {projectSelection === 'Web' && (
                <div className='project mt-4 flex flex-col gap-4'>
                    <p className='mb-4 mt-2'>
                        Here&apos;s some of the interesting projects I&apos;ve worked on over the years.
                    </p>

                    {webProjects.map((project: ProjectProps, idx: number) => (
                        <Project key={idx} {...project} />
                    ))}
                </div>
            )}
            {projectSelection === 'Mobile' && (
                <div className='project mt-4 flex flex-col gap-4'>
                    <p className='mb-4 mt-2'>
                        Here&apos;s some of the interesting projects I&apos;ve worked on over the years.
                    </p>

                    {mobileProjects.map((project: ProjectProps, idx: number) => (
                        <Project key={idx} {...project} />
                    ))}
                </div>
            )}
        </div>
    );
}
