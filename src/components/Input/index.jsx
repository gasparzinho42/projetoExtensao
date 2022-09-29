import React from "react";

import { Container, CustomInput, CustomLabel, FakeInput } from "./styles";

function Input({ label, placeholder, value, onChange, onBlur }) {
  return (
    <Container>
      <CustomLabel htmlFor={label}>{label}</CustomLabel>
      <FakeInput>
        <CustomInput
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type="text"
        />
      </FakeInput>
    </Container>
  );
}

export default Input;
