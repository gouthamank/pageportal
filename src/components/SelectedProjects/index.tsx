'use client';

import className from 'classnames';
import Project from '@/components/Project';
import Tabs from '@/ui/Tabs';
import { mobileProjects, webProjects } from '@/allProjects';

import type { SelectedProjectsProps } from '@/types/components/SelectedProjects/index.types';
import { ProjectProps } from '@/types/components/Project/index.types';
import { useCallback, useEffect, useState } from 'react';
import SectionTitle from '@/ui/Typography/SectionTitle';

export default function SelectedProjects(props: SelectedProjectsProps) {
    const [projectSelection, setProjectSelection] = useState('Web');
    const [isProjectHeaderSticky, setProjectHeaderSticky] = useState(false);

    const handleTabChange = useCallback((newTab: string) => {
        setProjectSelection(newTab);
    }, []);

    const handleScrollEventForSticky = () => {
        const projectHeader = document.getElementById('project-header');
        if (!projectHeader) {
            return;
        }

        const { top } = projectHeader.getBoundingClientRect();
        const stickyThreshold = parseInt(getComputedStyle(projectHeader).top);
        setProjectHeaderSticky(top <= stickyThreshold);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEventForSticky);
        return () => {
            window.removeEventListener('scroll', handleScrollEventForSticky);
        };
    }, []);

    return (
        <section className='mb-14' aria-label='Selected Projects'>
            <div
                id='project-header'
                className={className([
                    'sticky top-[0.5rem] z-10 flex flex-col gap-2 rounded-lg pb-4 pt-4 md:flex-row md:justify-between md:gap-0',
                    {
                        'border border-gray-400 px-4 shadow-lg backdrop-blur-2xl dark:border-gray-900':
                            isProjectHeaderSticky,
                    },
                ])}
                style={{
                    transition: 'padding 0.2s, box-shadow 0.2s',
                }}
            >
                <SectionTitle title={'Selected Projects'} />
                <Tabs tabs={['Web', 'Mobile']} onChangeTab={handleTabChange} />
            </div>
            <p className='mb-4'>Here are some interesting projects I&apos;ve worked on over the years.</p>
            {projectSelection === 'Web' && (
                <div className='project mt-4 flex flex-col gap-5'>
                    {webProjects.map((project: ProjectProps, idx: number) => (
                        <Project key={idx} {...project} />
                    ))}
                </div>
            )}
            {projectSelection === 'Mobile' && (
                <div className='project mt-4 flex flex-col gap-5'>
                    {mobileProjects.map((project: ProjectProps, idx: number) => (
                        <Project key={idx} {...project} />
                    ))}
                </div>
            )}
        </section>
    );
}
