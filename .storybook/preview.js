import { addDecorator } from '@storybook/react'
import { withTests } from '@storybook/addon-jest'
import GlobalStyles from '../src/styles/global-styles'
import results from '../src/jest-test-results.json'
import '../src/index'

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(
  withTests({
    results,
  }),
)
