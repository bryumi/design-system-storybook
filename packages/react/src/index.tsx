import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: '$bold',
  backgroundColor: '$ignite300',
  color: '$white',
  border: 'none',
  borderRadius: '$sm',
  padding: '$2 $4',

  variants: {
    size: {
      sm: {
        padding: '$1 $2',
      },
      lg: {
        padding: '$3 $6',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$ignite300',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$ignite200',
        color: '$black',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
export type ButtonProps = ComponentProps<typeof Button>
