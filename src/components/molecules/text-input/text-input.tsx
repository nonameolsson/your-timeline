import { Input, InputDescription, Label } from 'components/atoms'

import { InputWrapper } from './text-input.styled'
import { TextInputProps } from './text-input.types'

export const TextInput = ({
  description,
  required,
  onBlur,
  onChange,
  label,
  autoComplete,
  placeholder,
  name,
  hidden,
  ...props
}: TextInputProps): JSX.Element => {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        <Input
          autoComplete={autoComplete}
          hidden={hidden}
          name={name}
          placeholder={placeholder}
          required={required}
          type="text"
          onBlur={onBlur}
          onChange={onChange}
          {...props}
        />
      </InputWrapper>
      {description && <InputDescription text={description} />}
    </div>
  )
}
