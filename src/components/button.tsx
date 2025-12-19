import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../lib/utils'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'cursor-pointer rounded-lg bg-green-200 px-5 py-3.75 font-bold text-sm text-white transition-colors hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
