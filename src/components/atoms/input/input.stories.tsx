import { Meta, Story } from '@storybook/react'

import { Input } from './input'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta

const Template: Story = args => <Input {...args} />

export const Primary = Template.bind({})
