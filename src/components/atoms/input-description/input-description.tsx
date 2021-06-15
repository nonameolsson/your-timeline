import { StyledInputDescription } from './input-description.styled'
import { InputDescriptionProps } from './input-description.types'

export const InputDescription = ({ text }: InputDescriptionProps): JSX.Element => {
  return <StyledInputDescription>{text}</StyledInputDescription>
}
