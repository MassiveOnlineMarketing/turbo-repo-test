// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: `
          enabled:bg-base-500 enabled:text-base-50 enabled:border enabled:border-base-600 enabled:ring-1 enabled:ring-base-200 enabled:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]
          enabled:hover:bg-base-500/90 enabled:hover:dark:bg-base-400 enabled:hover:ring-[3px] 4
          enabled:focus:text-white enabled:focus:dark:bg-base-400 enabled:focus:bg-base-500  enabled:focus:ring-8 enabled:focus:ring-base-50 enabled:focus:dark:ring-base-800/[.6] enabled:focus:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)] enabled:focus:dark:shadow-neon enabled:focus:dark:transition-shadow enabled:focus:dark:duration-150 enabled:focus:ring:4 enabled:focus:transition-all enabled:focus:duration-300 enabled:focus:dark:ease-in
          disabled:bg-base-500/50 disabled:text-base-200 disabled:ring-[3px] disabled:ring-base-200
        `,
        destructive:
          'border border-red-500 text-red-500 hover:text-red-400 hover:border-red-400 hover:bg-gradient-to-b from-white via-white hover:to-red-50 hover:dark:bg-gradient-to-b hover:dark:from-base-950 hover:dark:to-red-500/[.02]',
        outline: `
          enabled:theme-t-t enabled:hover:theme-t-s enabled:theme-bg-w border enabled:theme-b-p enabled:ring-base-100 transition 
          enabled:hover:ring-[3px] enabled:hover:bg-gradient-to-b enabled:hover:from-white enabled:hover:to-base-50
          enabled:focus:ring-8 enabled:focus:ring-base-50 enabled:focus:bg-gradient-to-b enabled:from-white enabled:focus:to-white
          disabled:opacity-50 disabled:theme-bg-w
        `,
        secondary:
          'theme-t-t hover:text-base-500',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-base-500 underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2 rounded-[10px]',
        sm: 'h-9 px-3 rounded-[10px]',
        lg: 'h-11 rounded-md px-8 rounded-[10px]',
        icon: 'h-10 w-10 rounded-[10px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
