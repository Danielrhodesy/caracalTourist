import styled from 'styled-components';

const Component = styled.div`
  display: grid;
  gap: ${({ space }) => space};
`;

const Stack = ({ children, space }) => (
  <Component space={space}>{children}</Component>
);

export default Stack;
