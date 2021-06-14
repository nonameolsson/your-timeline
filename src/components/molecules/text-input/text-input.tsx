import { InputHTMLAttributes } from 'react'

import { Input, InputDescription, Label } from 'components/atoms'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

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
      <div className="mt-1">
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
      </div>
      {description && <InputDescription text={description} />}
    </div>
  )
}
