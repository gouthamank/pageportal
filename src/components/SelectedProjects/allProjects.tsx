import type { ProjectProps } from '@/types/components/Project/index.types';

const grabbd: ProjectProps = {
    title: 'Grabbd',
    tags: ['TypeScript', 'Next.JS', 'Strapi', 'GSAP', 'Lottie'],
    links: [
        {
            iconName: 'website',
            link: 'https://grabbd.gouthaman.dev',
        },
    ],
    description: (
        <span>
            Showcase website built for a startup focused on capturing user lists and favourite establishments. Built
            independently and entirely from scratch, including the UI design library, CMS setup and configuration.
        </span>
    ),
};

const tamm: ProjectProps = {
    title: 'TAMM',
    tags: ['TypeScript', 'React', 'Redux', 'Node.JS', 'Express', 'MariaDB', 'Redis'],
    links: [
        {
            iconName: 'website',
            link: 'https://tamm.abudhabi',
        },
    ],
    description: (
        <>
            <p>
                Public-facing government service portal built with a microservice-oriented backend. Developed and
                refined 30+ critical digital government services for use by UAE nationals and residents. This was a very
                large scale project which involved onboarding APIs from around 40 different government entities.
                Additionally, contributed heavily to the design library, maintaining and implementing new components for
                use by web teams.
            </p>
            <p className='mt-1'>
                These services include authentication, payment gateway integration, draft support, analytics and tight
                integration with various other microservices. 100,000+ daily hits.
            </p>
        </>
    ),
};

const tammWorkbench: ProjectProps = {
    title: 'TAMM - Workbench',
    tags: ['TypeScript', 'React', 'Redux', 'Node.JS', 'Express', 'MongoDB', 'GraphQL'],
    links: [],
    description: (
        <>
            <p>
                In-house development tool used at TAMM. Introduced in an effort to promote consistent UX - such as
                spacing, error messages and handling, design library versions - across ~700 services.
            </p>
            <p className='mt-1'>
                Two-part implementation where the first part was a pseudo low-code environment for service developers to
                quickly develop custom flows and services, with custom previews and easy deployment strategies. The
                second part was the rendering engine to parse and display the Workbench-ready deployed services.
            </p>
        </>
    ),
};

const sorted: ProjectProps = {
    title: 'Sorted',
    tags: ['TypeScript', 'Next.JS', 'Tailwind'],
    links: [
        {
            iconName: 'website',
            link: 'https://sorted.gouthaman.dev',
        },
        {
            iconName: 'code',
            link: 'https://github.com/gouthamank/sorted',
            title: 'GitHub',
        },
    ],
    description: (
        <span>
            A sorting visualiser I built for fun to contrast the differences between a few popular sorting algorithms.
            While the algorithms themselves are straightforward, the draw was to animate each individual step and
            highlight the correct indices over multiple levels of recursion.
        </span>
    ),
};

const visitSaudi: ProjectProps = {
    title: 'Visit Saudi - Map',
    tags: ['TypeScript', 'Next.JS', 'Redux', 'Strapi', 'Google Maps SDK', 'Google Places API'],
    links: [
        {
            iconName: 'website',
            link: 'https://map.visitsaudi.com/en',
        },
    ],
    description: (
        <span>
            Tourist informational website built for the Saudi Tourism Authority. Interactive map which displays
            recommended cultural events across the country, with photos, links and navigation support. Highly dynamic
            and configurable via the CMS. 10,000+ daily hits.
        </span>
    ),
};

const respite: ProjectProps = {
    title: 'Respite',
    tags: ['Java', 'Android'],
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

const aecb: ProjectProps = {
    title: 'Al Etihad Credit Bureau',
    tags: ['React Native', 'Android', 'iOS'],
    links: [
        {
            iconName: 'website',
            link: 'https://etihadbureau.ae/',
        },
    ],
    description: (
        <span>
            React Native app built for Android and iOS. The apps are now the standardised method for UAE nationals and
            residents to obtain a credit report.
        </span>
    ),
};

const webProjects = [grabbd, tamm, tammWorkbench, visitSaudi, sorted];
const mobileProjects = [aecb, respite, irascible];
const allProjects = [...webProjects, ...mobileProjects];

export { webProjects, mobileProjects };
export default allProjects;
