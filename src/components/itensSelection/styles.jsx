import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  background-color: transparent;
  border: 1px solid ${colors.blueMunsell};
  border-radius: 8px;
  width: 100%;
  justify-content: space-around;
  height: fit-content;
  padding: 3px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 156px));
  row-gap: 5px;
  /* @media (max-width: 1441px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 948px) {
    grid-template-columns: 1fr;
  } */
`
export const Item = styled.div`
  border-radius: 8px;
  background-color: ${props =>
    props.selected === true ? colors.blueMunsell : 'white'};
  color: black;
  padding: 40px 19px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
`
