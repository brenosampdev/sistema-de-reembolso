import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Root({ children, className, ...props }: RootProps) {
  return (
    <div
      className={cn('group flex flex-1 flex-col items-start gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode
}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      className={cn(
        'text-gray-400 text-xs uppercase group-focus-within:font-bold group-focus-within:text-green-200',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  )
}

interface FieldProps extends ComponentProps<'input'> {}

export function Field({ className, ...props }: FieldProps) {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3.75 text-gray-500 text-sm caret-green-200 placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-green-200',
        className,
      )}
      {...props}
    />
  )
}
