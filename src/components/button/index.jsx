import React from 'react'
import { CustomizedButton } from './styles'
const Button = ({ label, onClick }) => {
  return <CustomizedButton onClick={onClick}>{label}</CustomizedButton>
}
export default Button
