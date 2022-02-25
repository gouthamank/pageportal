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
    <div>
      <SectionContainer color={'red'} />
      <SectionContainer color={'blue'} />
      <SectionContainer color={'green'} />
    </div>
  );
}
