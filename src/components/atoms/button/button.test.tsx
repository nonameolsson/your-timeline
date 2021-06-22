import { render } from 'utils/test-utils'

import { Button } from './button'

describe('Button', function () {
  it('should find the button via testID', () => {
    const testID = 'button'

    const { getByTestId } = render(<Button>Hello</Button>)

    const foundButton = getByTestId(testID)

    expect(foundButton).toBeTruthy()
  })

  it('should have a text', () => {
    const title = 'I am a button'

    const { getByText } = render(<Button>{title}</Button>)

    const button = getByText(title)

    expect(button).toHaveTextContent(title)
  })
})
