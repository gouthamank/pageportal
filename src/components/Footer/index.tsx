import type { FooterProps } from '@/types/components/Footer/index.types';

export default function Footer(props: FooterProps) {
    return (
        <footer>
            <p>
                Feel free to reach out to me at <b>mail &lt;at&gt; gouthaman &lt;dot&gt; dev</b> or check out my{' '}
                <a
                    href='https://drive.google.com/file/d/19-J9ltKpzhQYPcxozuMWoSaQASyDXs0X/view'
                    className='text-solarized-violet'
                    target='_blank'
                >
                    <b>résumé</b>
                </a>
                .
            </p>
            <p className='my-4'>
                Other links:{' '}
                <a href='https://github.com/gouthamank' className='text-solarized-yellow' target='_blank'>
                    GitHub
                </a>{' '}
                <a
                    href='https://www.linkedin.com/in/gouthaman-kumar-999a385b'
                    className='text-solarized-yellow'
                    target='_blank'
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}
