import { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, ...props }: LabelProps): JSX.Element => {
  return <label {...props}>{children}</label>
}
