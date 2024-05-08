import type { ProjectProps } from '@/types/components/Project/index.types';

const grabbd: ProjectProps = {
    title: 'Grabbd',
    tags: ['TypeScript', 'Next.JS', 'Strapi'],
    links: [
        {
            iconName: 'public',
            link: 'https://grabbd.gouthaman.dev',
        },
    ],
    description: (
        <span>
            Showcase website built for a startup focused on capturing user lists and favourite establishments. Built
            independently and entirely from scratch, including the design library and CMS configuration.
        </span>
    ),
};

const tamm: ProjectProps = {
    title: 'TAMM',
    tags: ['TypeScript', 'React', 'Node.JS', 'Express', 'MariaDB', 'Redis'],
    links: [
        {
            iconName: 'public',
            link: 'https://tamm.abudhabi',
        },
    ],
    description: (
        <span>
            Public-facing government service portal built with a microservice oriented pattern. Built and refined 30+
            digital government services for use by UAE nationals and residents. (100,000+ daily hits)
        </span>
    ),
};

const tammWorkbench: ProjectProps = {
    title: 'TAMM - Workbench',
    tags: ['TypeScript', 'React', 'Node.JS', 'Express', 'MongoDB'],
    links: [],
    description: (
        <span>
            In-house development tool used at TAMM. Pseudo low-code environment for service developers to quickly
            develop custom flows and services, with custom previews and easy deployment strategies. Also developed a
            unified rendering engine to ensure consistent UX across various deployments
        </span>
    ),
};

const sorted: ProjectProps = {
    title: 'Sorted',
    tags: ['TypeScript', 'Next.JS', 'Tailwind'],
    links: [
        {
            iconName: 'public',
            link: 'https://sorted.gouthaman.dev',
        },
        {
            iconName: 'code',
            link: 'https://sorted.gouthaman.dev',
        },
    ],
    description: (
        <span>
            A sorting visualiser I built for fun to contrast the differences between a few popular sorting algorithms.
        </span>
    ),
};

const visitSaudi: ProjectProps = {
    title: 'Visit Saudi - Map',
    tags: ['TypeScript', 'Next.JS', 'Strapi'],
    links: [
        {
            iconName: 'public',
            link: 'https://map.visitsaudi.com/en',
        },
    ],
    description: (
        <span>
            Tourist informational website utilizing heavy integration with Google Maps SDK and Google Places API
            (10,000+ daily hits)
        </span>
    ),
};

const respite: ProjectProps = {
    title: 'Respite',
    tags: ['Kotlin', 'Android'],
    links: [
        {
            iconName: 'code',
            link: 'https://github.com/gouthamank/respite',
        },
    ],
    description: (
        <span>Reddit client for Android. Fully capable of voting, submitting and commenting, among other features</span>
    ),
};

const irascible: ProjectProps = {
    title: 'Irascible',
    tags: ['Java', 'Android'],
    links: [
        {
            iconName: 'code',
            link: 'https://github.com/gouthamank/irascible',
        },
    ],
    description: <span>A simple, easy-to-use Android IRC chat client.</span>,
};

const webProjects = [grabbd, tamm, tammWorkbench, visitSaudi, sorted];
const mobileProjects = [respite, irascible];
const allProjects = [...webProjects, ...mobileProjects];

export { webProjects, mobileProjects };
export default allProjects;