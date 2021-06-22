import { StyledInput } from './input.styled'
import { InputProps } from './input.types'

export const Input = ({ name, disabled, placeholder, value, onChange, onBlur, onFocus }: InputProps): JSX.Element => {
  return (
    <StyledInput
      data-testid="input"
      disabled={disabled}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}
