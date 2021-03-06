import { Meta } from '@storybook/react'

import { Label } from './label'

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta

export const defaultView: React.FC = () => <Label>I am a label</Label>
