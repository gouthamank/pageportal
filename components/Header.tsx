import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

type HeaderProps = {
  isSticky: boolean;
};

const Container = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: ${(props) => (props.isSticky ? '80px' : '125px')};
  transition: box-shadow 0.3s, background-color 0.3s, height 0.3s;
  background-color: ${(props) =>
    props.isSticky
      ? props.theme.colors.backgroundHard
      : props.theme.colors.backgroundSoft};
  box-shadow: ${(props) =>
    props.isSticky ? '0 2px 22px rgba(0, 0, 0, 0.25)' : 'none'};
  border-bottom: 1px solid rgba(147, 161, 161, 0.25);
`;

const HeroText = styled.span`
  font-size: 38px;
  color: ${(props) => props.theme.colors.contentSoft};
  font-weight: 700;
`;

const HeroImageButton = styled.button`
  background: none;
  outline: none;
  color: ${(props) => props.theme.colors.contentSoft};
  border: none;
`;

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
