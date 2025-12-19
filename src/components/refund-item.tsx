import type { ComponentType } from 'react'
import type { IconProps } from 'phosphor-react'

interface RefundItemProps {
  Icon: ComponentType<IconProps>
  name: string
  category: string
  valueInCents: number
}

export function RefundItem({
  Icon,
  name,
  category,
  valueInCents,
}: RefundItemProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3">
        <div className="rounded-full bg-gray-200 p-2">
          <Icon size={20} weight="fill" className="text-green-200" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="font-normal text-gray-400">{category}</span>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <span className="font-normal">R$</span>
        <span className="font-bold">
          {Math.round(valueInCents / 100).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  )
}
