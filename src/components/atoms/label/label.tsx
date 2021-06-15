import { LabelHTMLAttributes } from 'react'

import { StyledLabel } from './label.styled'

export const Label = ({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement>): JSX.Element => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}
