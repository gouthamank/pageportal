import SectionTitle from '@/ui/Typography/SectionTitle';
import allProjects from '@/allProjects';
import { Tag } from '@/ui/Tag';
import { motion } from 'motion/react';
import { monoFont } from '@/utils/fonts';
import className from 'classnames';

const categories: { label: string; tags: string[] }[] = [
    { label: 'Languages', tags: ['TypeScript', 'Java', 'Kotlin'] },
    { label: 'Frontend', tags: ['React', 'Next.JS', 'Redux', 'Tailwind', 'Nativewind', 'Motion', 'GSAP', 'Lottie'] },
    { label: 'Backend', tags: ['Node.JS', 'Express', 'GraphQL', 'Laravel'] },
    { label: 'Mobile', tags: ['React Native', 'Android', 'iOS', 'Jetpack Compose', 'Hilt', 'Material 3 Expressive'] },
    { label: 'Data', tags: ['MariaDB', 'Redis', 'MongoDB'] },
    { label: 'Tools & APIs', tags: ['Strapi', 'Stripe', 'Google Maps SDK', 'Google Places API'] },
];

const usedTags = new Set(allProjects.flatMap(project => project.tags));
const categorisedTags = new Set(categories.flatMap(category => category.tags));
const uncategorised = Array.from(usedTags)
    .filter(tag => !categorisedTags.has(tag))
    .sort();

const skillGroups = [
    ...categories.map(category => ({ label: category.label, tags: category.tags.filter(tag => usedTags.has(tag)) })),
    ...(uncategorised.length ? [{ label: 'Other', tags: uncategorised }] : []),
].filter(group => group.tags.length);

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

const tagVariants = {
    hidden: { opacity: 0, translateY: 8 },
    show: { opacity: 1, translateY: 0 },
};

export default function Skills() {
    return (
        <section className='mb-14' aria-label='Skills'>
            <SectionTitle title={'Skills'} />
            <div className='mt-4 flex flex-col gap-4'>
                {skillGroups.map((group, groupIdx) => (
                    <div key={groupIdx}>
                        <div className={className(monoFont.className, 'text-xs uppercase tracking-wide opacity-60')}>
                            {group.label}
                        </div>
                        <motion.div
                            className='mt-2 flex flex-row flex-wrap gap-2'
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true, margin: '-20px' }}
                        >
                            {group.tags.map((skill, idx) => (
                                <motion.div key={idx} variants={tagVariants}>
                                    <Tag>{skill}</Tag>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
