import { StyledButton } from './button.styled'
import { ButtonProps } from './button.types'

export const Button = ({ disabled, children }: ButtonProps): JSX.Element => (
  <StyledButton data-testid="button" disabled={disabled}>
    {children}
  </StyledButton>
)
