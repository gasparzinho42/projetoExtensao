import React from 'react'

import { Container, CustomInput, CustomLabel, FakeInput } from './styles'

function Input({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  maxLength = 150,
  type = 'text',
}) {
  return (
    <Container>
      <CustomLabel htmlFor={label}>{label}</CustomLabel>
      <FakeInput>
        <CustomInput
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onBlur={onBlur}
          type={type}
        />
      </FakeInput>
    </Container>
  )
}

export default Input
