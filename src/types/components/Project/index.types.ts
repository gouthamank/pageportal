export type ProjectProps = {
    title: string;
    tags: string[];
    links: ProjectLink[];
    description: any;
};

export type ProjectLink = {
    iconName: 'website' | 'code';
    link: string;
    title?: string;
};
