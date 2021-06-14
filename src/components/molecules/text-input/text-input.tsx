import { InputHTMLAttributes } from 'react'

import { Input, Label } from 'components/atoms'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const TextInput = ({
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
  )
}
