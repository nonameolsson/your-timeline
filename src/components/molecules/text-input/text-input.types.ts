import { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * A label displayed above input field
   */
  label?: string

  /**
   * A description text below input field
   */
  description?: string

  /**
   * Name for the input field. If not specified, but a label exists, then the label name will be the input name.
   */
  inputName?: string
}
