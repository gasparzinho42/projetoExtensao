import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.midnightBlue};
  color: ${colors.skyBlueCrayola};
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 15px;
`
