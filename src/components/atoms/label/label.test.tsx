import { render, screen } from 'utils/test-utils'

import { Label } from './label'

describe('Label', function () {
  it('should find the input description via testID', () => {
    const testID = 'label'

    render(<Label>Hello</Label>)

    const foundInput = screen.getByTestId(testID)

    expect(foundInput).toBeTruthy()
  })

  it('should find the label by text content', () => {
    const labelText = 'I am the best label ever!'

    render(<Label>{labelText}</Label>)

    const foundLabel = screen.getByText(labelText)

    expect(foundLabel).toHaveTextContent(labelText)
  })
})
