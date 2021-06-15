import { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './button.styled'

export const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => (
  <StyledButton {...props}>{children}</StyledButton>
)
