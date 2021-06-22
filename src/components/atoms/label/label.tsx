import { LabelHTMLAttributes } from 'react'

import { StyledLabel } from './label.styled'

export const Label = ({ htmlFor, children }: LabelHTMLAttributes<HTMLLabelElement>): JSX.Element => {
  return (
    <StyledLabel data-testid="label" htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  )
}
