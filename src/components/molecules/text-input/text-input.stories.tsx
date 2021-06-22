import { Meta } from '@storybook/react'

import { TextInput } from './text-input'

export default {
  title: 'Molecules/TextInput',
  component: TextInput,
} as Meta

export const Default: React.FC = () => <TextInput />

export const Label: React.FC = () => <TextInput label="I have a label" />

export const Description: React.FC = () => <TextInput description="I have a description" />

export const LabelAndDescription: React.FC = () => <TextInput description="And a description" label="I have a label" />
