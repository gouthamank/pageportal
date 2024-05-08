import type { ImageLinkProps } from '@/types/components/Project/components/ImageLink/index.types';

export default function ImageLink(props: ImageLinkProps) {
    return (
        <a href={props.link} target='_blank' title={props.title || 'Visit'}>
            <span className='material-symbols-outlined'>{props.iconName}</span>
        </a>
    );
}
