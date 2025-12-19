import type { ComponentProps, ComponentType } from 'react'
import type { IconProps } from 'phosphor-react'
import { cn } from '@/lib/utils'

interface IconButtonProps extends ComponentProps<'button'> {
  Icon: ComponentType<IconProps>
  size?: number
}

export function IconButton({
  Icon,
  size = 24,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'cursor-pointer rounded-lg bg-green-200 p-3 font-bold text-sm text-white transition-colors hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-green-100 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  )
}
