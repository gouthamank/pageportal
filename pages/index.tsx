import HomeLayout from 'components/layouts/home';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import type { ReactElement } from 'react';

interface ContainerProps {
  color: string;
}

const SectionContainer = styled.div<ContainerProps>`
  min-height: 100vh;
  background-color: ${(props) => props.color};
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SampleTextLeft = styled.span`
  font-family: 'Noto Serif', serif;
  font-size: 24px;
  color: ${(props) => props.theme.colors.contentHard};
  letter-spacing: -1px;
`;

const TextParagraph = styled.p`
  max-width: 900px;
`;

export default function RootPage() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SectionContainer color={theme.colors.backgroundSoft}>
        <SampleTextLeft>
          <TextParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur purus ut faucibus pulvinar. Suscipit tellus mauris a
            diam maecenas sed enim ut. Eget velit aliquet sagittis id. In
            aliquam sem fringilla ut morbi tincidunt augue interdum. Quam
            viverra orci sagittis eu. Neque aliquam vestibulum morbi blandit
            cursus risus at ultrices. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus est. Quam pellentesque nec nam aliquam sem.
            Volutpat maecenas volutpat blandit aliquam etiam erat velit
            scelerisque. Leo urna molestie at elementum eu facilisis sed odio.
            Viverra maecenas accumsan lacus vel facilisis. Volutpat maecenas
            volutpat blandit aliquam etiam erat. Netus et malesuada fames ac
            turpis egestas integer. Velit euismod in pellentesque massa. Ut
            aliquam purus sit amet luctus venenatis lectus magna fringilla.
            Facilisi cras fermentum odio eu.
          </TextParagraph>
          <TextParagraph>
            Cras semper auctor neque vitae. Blandit cursus risus at ultrices mi
            tempus imperdiet nulla. Mattis nunc sed blandit libero volutpat sed
            cras ornare arcu. Laoreet suspendisse interdum consectetur libero id
            faucibus nisl. Volutpat lacus laoreet non curabitur gravida arcu ac
            tortor. Pharetra diam sit amet nisl suscipit adipiscing bibendum
            est. Ut sem viverra aliquet eget sit amet tellus cras. Commodo quis
            imperdiet massa tincidunt nunc pulvinar sapien et ligula. Pharetra
            sit amet aliquam id diam maecenas ultricies mi eget. Faucibus
            interdum posuere lorem ipsum dolor sit amet consectetur. Blandit
            turpis cursus in hac habitasse platea dictumst quisque sagittis. Non
            curabitur gravida arcu ac tortor dignissim convallis aenean.
            Ultricies leo integer malesuada nunc vel risus commodo viverra
            maecenas. Justo donec enim diam vulputate ut pharetra. Molestie ac
            feugiat sed lectus vestibulum mattis.
          </TextParagraph>
          <TextParagraph>
            Adipiscing diam donec adipiscing tristique risus nec feugiat.
            Egestas dui id ornare arcu odio ut sem nulla pharetra. Turpis
            egestas pretium aenean pharetra magna ac placerat. Nec feugiat nisl
            pretium fusce id velit ut. Neque aliquam vestibulum morbi blandit
            cursus. Non nisi est sit amet. Dignissim diam quis enim lobortis
            scelerisque. Nascetur ridiculus mus mauris vitae ultricies leo.
            Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Commodo
            sed egestas egestas fringilla phasellus. Accumsan in nisl nisi
            scelerisque eu ultrices vitae. Integer eget aliquet nibh praesent.
            Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.
            Pellentesque pulvinar pellentesque habitant morbi. Auctor elit sed
            vulputate mi sit amet. Consectetur adipiscing elit ut aliquam purus
            sit amet luctus.
          </TextParagraph>
        </SampleTextLeft>
      </SectionContainer>
      <SectionContainer color={theme.colors.backgroundSoft} />
    </>
  );
}

RootPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
