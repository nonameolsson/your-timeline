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
  value,
  disabled,
  name,
  inputName,
  hidden,
}: TextInputProps): JSX.Element => {
  if (label && !name) throw new Error('Please add a name attribute when using a label')

  return (
    <div data-testid="text-input">
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        <Input
          autoComplete={autoComplete}
          disabled={disabled}
          hidden={hidden}
          id={name}
          name={inputName || name}
          placeholder={placeholder}
          required={required}
          role="text-input"
          type="text"
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      </InputWrapper>
      {description && <InputDescription text={description} />}
    </div>
  )
}
