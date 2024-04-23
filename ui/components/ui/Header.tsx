import styled from 'styled-components';
import type { HeaderProps } from 'ui/components/types/Header';
import { breakpoints } from 'styles/constants';

export const Container = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: ${(props) => (props.isSticky ? '8rem' : '12.5rem')};
  transition: box-shadow 0.3s, background-color 0.3s, height 0.3s;
  background-color: ${(props) =>
    props.isSticky
      ? props.theme.colors.backgroundHard
      : props.theme.colors.backgroundSoft};
  box-shadow: ${(props) =>
    props.isSticky ? '0 2px 22px rgba(0, 0, 0, 0.25)' : 'none'};
  border-bottom: 1px solid rgba(147, 161, 161, 0.25);

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 5rem;
  }
`;

export const HeroText = styled.span`
  font-size: 3.8rem;
  color: ${(props) => props.theme.colors.contentSoft};
  font-weight: 700;
`;

export const HeroImageButton = styled.button`
  background: none;
  outline: none;
  color: ${(props) => props.theme.colors.contentSoft};
  transition: color 0.3s;
  border: none;
  cursor: pointer;
`;
