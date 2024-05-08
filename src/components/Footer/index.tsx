import type { FooterProps } from '@/types/components/Footer/index.types';
import LinkButton from '../../ui/LinkButton';

export default function Footer(props: FooterProps) {
    return (
        <footer>
            <p>
                Feel free to reach out to me at <b>mail &lt;at&gt; gouthaman &lt;dot&gt; dev</b> or check out my{' '}
                <a
                    href='https://drive.google.com/file/d/19-J9ltKpzhQYPcxozuMWoSaQASyDXs0X/view'
                    className='text-solarized-cyan hover:opacity-80'
                    target='_blank'
                >
                    <b>résumé</b>
                </a>
                .
            </p>
            <p className='my-4'>
                Other links:{' '}
                <span className={'mx-2 inline-flex gap-2'}>
                    <LinkButton iconName={'code'} link={'https://github.com/gouthamank'} title={'GitHub'} />
                    <LinkButton
                        iconName={'website'}
                        link={'https://www.linkedin.com/in/gouthaman-kumar-999a385b'}
                        title={'LinkedIn'}
                    />
                </span>
            </p>
        </footer>
    );
}
