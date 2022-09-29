import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  border-radius: 8px;
  border: none;
`;
export const FakeInput = styled.div`
  width: 100%;
  padding: 10px 23px;
  border-radius: 8px;
  border: none;
  background-color: ${colors.blueMunsell};
`;

export const CustomInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  background-color: transparent;
  &::placeholder {
    color: #bcbec0;
  }
`;
export const CustomLabel = styled.label`
  color: white;
  font-size: 20;
  font-weight: bold;
`;
