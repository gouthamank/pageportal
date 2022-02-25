import Header from 'components/Header';
import styled from 'styled-components';
import { ReactNode, useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundSoft};
`;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const HeaderSpacer = styled.div`
  width: 100%;
  height: 125px;
`;

const ContentWrapper = styled.div`
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
  display: none;
`;

interface PageProps {
  children?: ReactNode;
}

const PageContainer = (props: PageProps) => {
  const [isTop, setIsTop] = useState(true);
  const checkScroll = () => {
    setIsTop(window.scrollY <= 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <HeaderContainer>
          <Header isSticky={!isTop} />
        </HeaderContainer>
        <HeaderSpacer />
        <ContentWrapper>
          <ContentContainer>{props.children}</ContentContainer>
        </ContentWrapper>
        <FooterContainer />
      </Container>
    </>
  );
};

export default PageContainer;
