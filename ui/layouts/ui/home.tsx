import styled from 'styled-components';
import { breakpoints } from 'styles/constants';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundSoft};
  transition: background-color 0.3s;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 12.5rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 5rem 2rem;

  @media (min-width: ${breakpoints.md}px) {
    padding: 5rem 5rem;
  }

  @media (min-width: ${breakpoints.xxl}px) {
    width: ${breakpoints.xxl}px;
  }
`;

export const FooterContainer = styled.div`
  background-color: blanchedalmond;
  height: 28rem;
  width: 100%;
  display: none;
`;
