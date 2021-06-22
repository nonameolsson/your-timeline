import { Meta } from '@storybook/react'

import { InputDescription } from './input-description'

export default {
  title: 'Atoms/InputDescription',
  component: InputDescription,
} as Meta

export const defaultView: React.FC = () => <InputDescription text={'I am a description'} />
