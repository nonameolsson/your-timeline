import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'

import { TextInput } from './text-input'

const onChange = () => undefined

describe('TextInput', function () {
  it('should find the text input via testID', () => {
    const testID = 'text-input'

    render(<TextInput />)

    const foundInput = screen.getByTestId(testID)

    expect(foundInput).toBeTruthy()
  })

  it('should find the text input via text', () => {
    const descriptionText = 'Enter e-mail'
    render(<TextInput description={descriptionText} />)

    const foundInput = screen.getByText(descriptionText)

    expect(foundInput).toBeTruthy()
  })

  it('should find the text input via label text', () => {
    const labelText = 'I am the best label ever!'

    render(<TextInput label={labelText} name="testInput" />)

    const foundInput = screen.getByLabelText(labelText)

    expect(foundInput).toBeDefined()
  })

  it('should have a description', () => {
    const descriptionText = 'Enter e-mail'
    render(<TextInput description={descriptionText} />)

    const foundInput = screen.getByText(descriptionText)

    expect(foundInput).toHaveTextContent(descriptionText)
  })

  it('should throw an error if a label us used without a name attribute', () => {
    const labelText = 'I am the best label ever!'

    expect(() => {
      render(<TextInput label={labelText} />)
    }).toThrowError('Please add a name attribute when using a label')
  })

  it('should have both label and description', () => {
    const labelText = 'E-mail'
    const descriptionText = 'Enter your personal e-mail'
    render(<TextInput description={descriptionText} label={labelText} name="email" />)

    const foundLabel = screen.getByText(labelText)
    expect(foundLabel).toHaveTextContent(labelText)

    const foundDescription = screen.getByText(descriptionText)
    expect(foundDescription).toHaveTextContent(descriptionText)

    const foundInput = screen.getByLabelText(labelText)
    expect(foundInput).toBeDefined()
  })

  it('should have a default value', () => {
    const defaultValue = 'my@email.com'

    const { getByDisplayValue } = render(<TextInput value={defaultValue} onChange={onChange} />)

    const input = getByDisplayValue(defaultValue)

    expect(input).toBeTruthy()
  })

  it('should be disabled', () => {
    const placeholderText = 'my placeholder'
    render(<TextInput disabled={true} placeholder={placeholderText} />)

    const foundInput = screen.getByPlaceholderText(placeholderText)

    expect(foundInput).toBeDisabled()
  })

  it('should update input value', () => {
    const placeholderText = 'placeholderText'

    render(<TextInput placeholder={placeholderText} />)
    const inputElement = screen.getByPlaceholderText(placeholderText)

    userEvent.type(inputElement, 'my@email.com')

    expect(inputElement).toHaveValue('my@email.com')
  })
})
