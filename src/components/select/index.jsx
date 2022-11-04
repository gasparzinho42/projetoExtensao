import React, { useRef } from 'react'
import { CustomLabel } from '../Input/styles'
import { CustomSelect, SelectContainer } from './styles'

function Select({ options, label }) {
  const ref = useRef(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CustomLabel htmlfor='select'>{label}</CustomLabel>
      <SelectContainer>
        <CustomSelect name='select' id='select' ref={ref}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </CustomSelect>
      </SelectContainer>
    </div>
  )
}

export default Select
