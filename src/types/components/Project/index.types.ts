export type ProjectProps = {
    index: number;
    title: string;
    tags: string[];
    links: ProjectLink[];
    description: any;
};

export type ProjectLink = {
    iconName: string;
    link: string;
    title?: string;
};
