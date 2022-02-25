import HomeLayout from 'components/layouts/home';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import type { ReactElement } from 'react';

interface ContainerProps {
  color: string;
}

const SectionContainer = styled.div<ContainerProps>`
  height: 100vh;
  background-color: ${(props) => props.color};
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SampleTextLeft = styled.span`
  font-family: 'Noto Serif', serif;
  font-size: 24px;
  color: ${(props) => props.theme.colors.contentHard};
  letter-spacing: -1px;
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
          Autem omnis alias doloribus odit commodi. Voluptas deserunt ipsam
          quisquam quaerat ut quis aliquid. Aut architecto et temporibus et
          adipisci quibusdam. Ullam harum est facere modi et. Ea mollitia
          dolorem quia aut assumenda. Minima dolore ex excepturi recusandae nisi
          vero.
        </SampleTextLeft>
      </SectionContainer>
      <SectionContainer color={theme.colors.backgroundSoft} />
    </>
  );
}

RootPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
