import type { ComponentProps, ComponentType } from 'react'
import { cn } from '../lib/utils'
import type { IconProps } from 'phosphor-react'

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
        'cursor-pointer rounded-lg bg-green-200 p-3 font-bold text-sm text-white transition-colors hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  )
}
