import HomeLayout from 'components/layouts/home';
import Head from 'next/head';
import styled from 'styled-components';
import type { ReactElement } from 'react';

interface ContainerProps {
  color: string;
}

const SectionContainer = styled.div<ContainerProps>`
  height: 100vh;
  background-color: ${(props) => props.color};
`;

export default function RootPage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SectionContainer color={'#fafafa'} />
      <SectionContainer color={'#8e8080'} />
      <SectionContainer color={'#fafafa'} />
    </>
  );
}

RootPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
