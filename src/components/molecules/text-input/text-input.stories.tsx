import React from 'react'
import { Meta } from '@storybook/react'

import { TextInput } from './text-input'

export default {
  title: 'Molecules/TextInput',
  component: TextInput,
} as Meta

export const defaultView: React.FC = () => <TextInput />

export const withLabel: React.FC = () => <TextInput label="I have a label" name="withLabel" />

export const withDescription: React.FC = () => <TextInput description="I have a description" name="withDescription" />

export const withLabelAndDescription: React.FC = () => (
  <TextInput description="And a description" label="I have a label" name={'withLabelDescription'} />
)
