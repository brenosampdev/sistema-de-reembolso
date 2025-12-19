import { CaretLeft, CaretRight } from 'phosphor-react'
import { IconButton } from './ui/icon-button'

export function Pagination() {
  return (
    <div className="flex flex-row items-center justify-center gap-2.5">
      <IconButton Icon={CaretLeft} className="p-1" />

      <div className="text-[14px]">
        <span className="font-normal text-gray-400">1/</span>
        <span className="font-normal text-gray-400">3</span>
      </div>

      <IconButton Icon={CaretRight} className="p-1" />
    </div>
  )
}
