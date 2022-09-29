import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-Color: ${colors.midnightBlue};
  color: ${colors.skyBlueCrayola};
`;
