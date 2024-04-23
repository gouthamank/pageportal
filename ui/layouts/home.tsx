import { ReactNode, useEffect, useState } from 'react';
import Header from 'ui/components/Header';
import {
  Container,
  ContentContainer,
  ContentWrapper,
  FooterContainer,
  HeaderContainer,
  HeaderSpacer,
} from './ui/home';

interface PageProps {
  children?: ReactNode;
}

const PageContainer = (props: PageProps) => {
  const [isTop, setIsTop] = useState(true);
  const checkScroll = () => {
    setIsTop(window.scrollY <= 50);
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
