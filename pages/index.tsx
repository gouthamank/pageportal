import HomeLayout from 'ui/layouts/home';
import Head from 'next/head';
import { useTheme } from 'styled-components';
import {
  HorizontalRule,
  SampleTextLeft,
  SectionContainer,
  TextLink,
  TextLinkAlternate,
  TextParagraph,
} from './ui';
import type { ReactElement } from 'react';

export default function RootPage() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>
      <SectionContainer color={theme.colors.backgroundSoft}>
        <SampleTextLeft>
          <TextParagraph>
            Hi, I'm Gouthaman.
            <br />
            <br />
            I'm a full stack developer with a passion for creating beautiful
            user experiences. I live in Toronto, but am originally from Dubai.
            <br />
            <br />I have professional experience with <b>React</b> and{' '}
            <b>Next.JS</b>, and <b>Node.JS / Express</b> backends, and have
            helped build apps big and small, in teams and individually.
            <br />I also dabble in mobile development, having built and
            published Android and iOS apps natively and with <b>React Native</b>
            .
            <br />
            <br />
            <HorizontalRule />
            Feel free to reach out to me at{' '}
            <b>mail &lt;at&gt; gouthaman &lt;dot&gt; dev</b> or check out my{' '}
            <TextLink
              href="https://drive.google.com/file/d/19-J9ltKpzhQYPcxozuMWoSaQASyDXs0X/view"
              target="_blank"
            >
              <b>résumé</b>
            </TextLink>
            .
            <br />
            <br />
            Other links:{' '}
            <TextLinkAlternate
              href="https://github.com/gouthamank/"
              target="_blank"
            >
              GitHub
            </TextLinkAlternate>{' '}
            <TextLinkAlternate
              href="https://www.linkedin.com/in/gouthaman-kumar-999a385b/"
              target="_blank"
            >
              LinkedIn
            </TextLinkAlternate>
          </TextParagraph>
        </SampleTextLeft>
      </SectionContainer>
    </>
  );
}

RootPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
