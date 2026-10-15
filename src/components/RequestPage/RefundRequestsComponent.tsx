import { MagnifyingGlass } from 'phosphor-react'
import Button from '../../shared/Button'
import ListRefundRequests from './ListRefundRequests'

export default function RefundRequestsComponent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <input
          type="text"
          placeholder="Pesquisar pelo nome"
          className="h-12 w-full flex-1 rounded-lg border border-gray-300 bg-transparent px-4 py-3.75 text-gray-500 text-sm caret-green-200 placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-green-200"
        />
        <Button
          type="submit"
          text={
            <div className="flex w-full items-center justify-center gap-2">
              <MagnifyingGlass size={24} />
              <span className="text-base md:hidden">Buscar</span>
            </div>
          }
          style="w-full font-20 md:w-auto"
        />
      </div>

      <ListRefundRequests />
    </>
  )
}
