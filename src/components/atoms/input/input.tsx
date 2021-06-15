import { InputHTMLAttributes } from 'react'

import { StyledInput } from './input.styled'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return <StyledInput {...props} />
}
