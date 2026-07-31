import SectionTitle from '@/ui/Typography/SectionTitle';
import LinkButton from '@/ui/LinkButton';
import { monoFont, titleFont } from '@/utils/fonts';
import className from 'classnames';
import { motion } from 'motion/react';

type ExperienceProject = {
    name: string;
    link?: string;
    description: string;
};

type ExperienceEntry = {
    company: string;
    location: string;
    role: string;
    period: string;
    bullets: string[];
    projects?: ExperienceProject[];
};

const experience: ExperienceEntry[] = [
    {
        company: 'SecretApp',
        location: 'Remote',
        role: 'Founding Engineer (Full-Stack Developer)',
        period: '2024 — 2026',
        bullets: [
            'Architected and built a full-stack event commerce platform solo — admin dashboard (Laravel/React/Postgres), customer web/mobile apps (Next.JS/React Native), and Stripe payments.',
            'Built a shared component library with Storybook to keep design consistent across web and mobile.',
            'Implemented OTP login, role-based access, time-limited reservations and double-booking prevention.',
            'Owned infrastructure and release ops end-to-end: CI/CD pipelines, cloud deployment, and app store publishing.',
        ],
    },
    {
        company: 'PwC Middle East',
        location: 'Dubai, UAE',
        role: 'Senior Developer / Tech Lead',
        period: '2017 — 2024',
        bullets: [
            'Led full-stack development across government and tourism platforms, coordinating teams of 3–8 engineers on high-traffic public services.',
            'Designed modular microservice and component architectures reused across multiple product squads.',
            'Integrated CMS-driven content, dynamic listings, and third-party APIs (maps, payments) across projects.',
        ],
        projects: [
            {
                name: 'TAMM — Abu Dhabi Government Portal',
                link: 'https://tamm.abudhabi',
                description:
                    'Developed 6+ microservices and frontend flows for a digital services portal used by 100,000+ daily users, including high-traffic services like birth registration and traffic fine payments.',
            },
            {
                name: 'TAMM Workbench (Internal Tool)',
                description:
                    'Built a low-code platform enabling non-developers to deploy new workflows with minimal developer involvement, reducing delivery time by 60%.',
            },
            {
                name: 'Visit Saudi — Event Discovery Platform',
                link: 'https://map.visitsaudi.com/en',
                description:
                    'Shipped a CMS-driven tourism portal with Google Maps integration, including custom event views and dynamic listings based on map region focus.',
            },
        ],
    },
];

export default function Experience() {
    return (
        <section className='mb-8 mt-8' aria-label='Experience'>
            <SectionTitle title={'Experience'} />
            <div className='mt-4 flex flex-col gap-6'>
                {experience.map((entry, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ ease: 'linear' }}
                        className='border-l-2 border-early-dawn-700 pl-4 dark:border-early-dawn-400'
                    >
                        <div className='flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                            <div className={className(titleFont.className, 'text-md')}>
                                {entry.role} <span className='text-early-dawn-700 dark:text-early-dawn-400'>·</span>{' '}
                                {entry.company}
                            </div>
                            <div className={className(monoFont.className, 'text-xs opacity-60')}>
                                {entry.period} · {entry.location}
                            </div>
                        </div>
                        <ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-snug'>
                            {entry.bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx}>{bullet}</li>
                            ))}
                        </ul>
                        {entry.projects && (
                            <div className='mt-4 flex flex-col gap-3'>
                                <div
                                    className={className(
                                        monoFont.className,
                                        'text-xs uppercase tracking-wide opacity-60',
                                    )}
                                >
                                    Key Projects
                                </div>
                                {entry.projects.map((project, projectIdx) => (
                                    <div key={projectIdx}>
                                        <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                                            <div className={className(titleFont.className, 'text-sm')}>
                                                {project.name}
                                            </div>
                                            {project.link && (
                                                <LinkButton iconName={'website'} link={project.link} title={'Visit'} />
                                            )}
                                        </div>
                                        <p className='mt-1 text-sm leading-snug'>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
