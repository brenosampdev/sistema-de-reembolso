import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps extends ComponentProps<'a'> {
  active?: boolean
  children: ReactNode
}

export function NavLink({
  active,
  children,
  className,
  ...props
}: NavLinkProps) {
  return (
    <a
      className={cn(
        'cursor-pointer font-semibold text-gray-400 text-sm transition-colors hover:text-green-200',
        active && 'text-green-200',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
