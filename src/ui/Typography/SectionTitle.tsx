import React from 'react';
import className from 'classnames';
import { titleFont } from '@/utils/fonts';

type SectionTitleProps = {
    title: string;
    className?: string;
};

function SectionTitle(props: SectionTitleProps) {
    return (
        <h2
            className={className([
                titleFont.className,
                props.className,
                'text-md uppercase text-solarized-orange transition-colors dark:text-early-dawn-400',
            ])}
        >
            {props.title}
        </h2>
    );
}

export default SectionTitle;
