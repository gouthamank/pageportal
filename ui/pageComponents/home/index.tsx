import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const SectionContainer = styled.div<ContainerProps>`
  background-color: ${(props) => props.color};
  min-height: calc(100vh - 12.5rem - 10rem - 5rem);
  transition: background-color 0.3s;
  margin-bottom: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SampleTextLeft = styled.span`
  font-family: 'Noto Serif', serif;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.contentHard};
  letter-spacing: -0.1rem;
`;

export const TextParagraph = styled.p`
  max-width: 90rem;
  transition: color 0.3s;
`;

export const TextLink = styled.a`
  color: ${(props) => props.theme.colors.accents.violet};
`;

export const TextLinkAlternate = styled.a`
  color: ${(props) => props.theme.colors.accents.yellow};
`;

export const HorizontalRule = styled.hr`
  border-top: none;
  border-bottom: 1px solid rgba(147, 161, 161, 0.25);
`;
