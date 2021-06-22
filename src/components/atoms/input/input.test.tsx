import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'

import { Input } from './input'

describe('Input', function () {
  it('should find the input via testID', () => {
    const testID = 'input'

    const { getByTestId } = render(<Input />)

    const foundInput = getByTestId(testID)

    expect(foundInput).toBeTruthy()
  })

  it('should have a placeholder', () => {
    const placeholder = 'Add your e-mail'

    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />)

    const input = getByPlaceholderText(placeholder)

    expect(input).toBeTruthy()
  })

  it('should have a default value', () => {
    const defaultValue = 'my@email.com'

    const onChange = () => undefined

    const { getByDisplayValue } = render(<Input value={defaultValue} onChange={onChange} />)

    const input = getByDisplayValue(defaultValue)

    expect(input).toBeTruthy()
  })

  it('should be disabled', () => {
    const testID = 'input'
    const { getByTestId } = render(<Input disabled={true} />)

    const input = getByTestId(testID)

    expect(input).toBeDisabled()
  })

  it('should update input value', () => {
    const testID = 'input'

    render(<Input />)
    const inputElement = screen.getByTestId(testID)

    userEvent.type(inputElement, 'my@email.com')

    expect(screen.getByTestId(testID)).toHaveValue('my@email.com')
  })
})
