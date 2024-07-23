import {Button} from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
    args: {
        children: 'Primary Button',
    },
}

export const Secondary: StoryObj = {
    args: {
        size: 'big',
        children: 'Secondary Button',
    },
}

