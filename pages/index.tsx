import PageContainer from 'components/containers/page';
import Head from 'next/head';
import styled from 'styled-components';

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
      <PageContainer>
        <SectionContainer color={'#fafafa'} />
        <SectionContainer color={'#8e8080'} />
        <SectionContainer color={'#fafafa'} />
      </PageContainer>
    </>
  );
}
