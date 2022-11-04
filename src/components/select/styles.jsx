import styled from 'styled-components'
import arrowDown from '../../assets/arrowDown.svg'

export const CustomSelect = styled.select`
  background: #5296a5;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  border: none;
  color: white;
  appearance: none;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
`
export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  ::after {
    content: ' ';
    background-image: url(${arrowDown});
    position: absolute;
    z-index: 999;
    height: 36px;
    width: 36px;
    top: 8px;
    right: 1px;
    pointer-events: none;
  }
`
