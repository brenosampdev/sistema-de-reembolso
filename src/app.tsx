import { ForkKnife, MagnifyingGlass } from 'phosphor-react'
import { Button } from './components/ui/button'
import { IconButton } from './components/ui/icon-button'
import { NavLink } from './components/ui/nav-link'
import { RefundItem } from './components/refund-item'
import { Pagination } from './components/pagination'
import * as Input from './components/ui/input'
import logoImg from './assets/logo.svg'

export function App() {
  const active = false

  return (
    <div className="mx-auto mt-10 mb-14 max-w-7xl px-3">
      <header className="flex items-center justify-between">
        <img src={logoImg} alt="" />

        <div className="flex items-center gap-4">
          <NavLink active={active}>Solicitações de Reembolso</NavLink>
          <Button>Nova solicitação</Button>
        </div>
      </header>

      <main className="mx-12 mt-10 flex flex-col items-center">
        <div className="flex w-full flex-col gap-6 rounded-2xl bg-gray-100 p-10">
          <h1 className="font-bold text-gray-500 text-xl">Solicitações</h1>

          <div className="flex gap-3 border-b border-b-gray-200 pb-6">
            <Input.Root>
              <Input.Field placeholder="Pesquisar pelo nome" />
            </Input.Root>

            <IconButton Icon={MagnifyingGlass} />
          </div>

          <div className="flex min-h-84 flex-col gap-4">
            <RefundItem
              Icon={ForkKnife}
              name="Rodrigo"
              category="Alimentação"
              valueInCents={100000}
            />
          </div>

          <Pagination />
        </div>
      </main>
    </div>
  )
}
