import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  row-gap: 20px;
  @media (max-width: 890px) {
    width: 50%;
  }
`
export const CustomBox = styled.div`
  width: 80%;
  @media (max-width: 1519px) {
    width: 70%;
  }
  @media (max-width: 511px) {
    width: 60%;
  }
`
