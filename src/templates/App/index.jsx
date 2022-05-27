import P from 'prop-types';
import * as Styled from './styles';

export const App = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

App.propTypes = {
  children: P.node.isRequired,
};
