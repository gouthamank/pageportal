import styled from 'styled-components';
import { ReactNode } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: blanchedalmond;
  height: 280px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  background-color: lightgray;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 50px 50px;
  @media (min-width: 1920px) {
    width: 1920px;
  }
`;

const FooterContainer = styled.div`
  background-color: blanchedalmond;
  height: 280px;
  width: 100%;
`;

interface PageProps {
  children?: ReactNode;
}

const PageContainer = (props: PageProps) => {
  return (
    <Container>
      <HeaderContainer />
      <ContentWrapper>
        <ContentContainer>{props.children}</ContentContainer>
      </ContentWrapper>
      <FooterContainer />
    </Container>
  );
};

export default PageContainer;
