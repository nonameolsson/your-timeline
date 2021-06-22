import React from 'react'
import { Meta } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

export const defaultView = (): JSX.Element => <Button>Button</Button>

export const disabled = (): JSX.Element => <Button disabled>Button</Button>
