import React from 'react'

import { Container, CustomInput, CustomLabel, FakeInput } from './styles'

function Input({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyPress,
  maxLength = 150,
  type = 'text',
}) {
  return (
    <Container>
      <CustomLabel htmlFor={label}>{label}</CustomLabel>
      <FakeInput>
        <CustomInput
          autocomplete='false'
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onBlur={onBlur}
          type={type}
          onKeyPress={onKeyPress}
        />
      </FakeInput>
    </Container>
  )
}

export default Input
