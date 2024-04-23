import useDarkMode from 'use-dark-mode';
import type { HeaderProps } from './types/Header';
import { Container, HeroImageButton, HeroText } from './ui/Header';

const Header = (props: HeaderProps) => {
  const darkMode = useDarkMode();

  return (
    <Container isSticky={props.isSticky}>
      <HeroText />
      <HeroImageButton onClick={darkMode.toggle}>
        <span className="material-symbols-outlined">contrast</span>
      </HeroImageButton>
    </Container>
  );
};

export default Header;
