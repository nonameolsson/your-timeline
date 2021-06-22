import React, { FC, ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render, RenderOptions } from '@testing-library/react'

import { default as i18nTestConfig } from 'config/i18n-test-config'

const AllTheProviders: FC = ({ children }) => {
  return <I18nextProvider i18n={i18nTestConfig}>{children}</I18nextProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// https://testing-library.com/docs/react-testing-library/setup/#custom-render
// It is okay to ignore the following lines since we will override the render method from testing-library
// eslint-disable-next-line import/export
export * from '@testing-library/react'

// eslint-disable-next-line import/export
export { customRender as render }
