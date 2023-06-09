import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    color: white;
    padding: 0 5px;
    height: 100%;
  }

  a > span {
    margin-left: 4px;
    color: white;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }
`;
