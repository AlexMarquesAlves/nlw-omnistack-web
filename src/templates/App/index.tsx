import { ReactNode } from 'react';
import * as Styled from './styles';

interface AppProps {
  children?: ReactNode;
}

export function App({ children }: AppProps) {
  return <Styled.Container>Ola Mundo</Styled.Container>;
}
