import { render, screen } from 'utils/test-utils'

import { InputDescription } from './input-description'

describe('InputDescription', function () {
  it('should find the input description via testID', () => {
    const testID = 'input-description'

    const { getByTestId } = render(<InputDescription text="My description" />)

    const foundInput = getByTestId(testID)

    expect(foundInput).toBeTruthy()
  })

  it('should find the input description by text', () => {
    const descriptionText = 'I am the best description ever!'

    render(<InputDescription text={descriptionText} />)

    const foundInput = screen.getByText(descriptionText)

    expect(foundInput).toBeTruthy()
  })
})
