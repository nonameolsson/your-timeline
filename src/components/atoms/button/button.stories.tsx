import React from 'react'
import { Meta } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

export const Default = (): JSX.Element => <Button title="Button" />

export const Disabled = (): JSX.Element => <Button disabled title="Disabled button" />

export const defaultView = (): JSX.Element => <div>Jest results in storybook</div>
defaultView.parameters = {
  jest: ['button.test.tsx'],
}
