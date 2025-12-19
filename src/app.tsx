import {
  CaretLeft,
  CaretRight,
  ForkKnife,
  MagnifyingGlass,
} from 'phosphor-react'
import { Button } from './components/button'
import { IconButton } from './components/icon-button'
import { NavLink } from './components/nav-link'
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
            <input
              type="text"
              placeholder="Pesquisar pelo nome"
              className="h-12 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 py-3.75 text-gray-500 text-sm caret-green-200 placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-green-200"
            />

            <IconButton Icon={MagnifyingGlass} />
          </div>

          <div className="flex min-h-84 flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-gray-200 p-2">
                  <ForkKnife
                    size={20}
                    weight="fill"
                    className="text-green-200"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Rodrigo</span>
                  <span className="font-normal text-gray-400">Alimentação</span>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <span className="font-normal">R$</span>
                <span className="font-bold">1.200,00</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-gray-200 p-2">
                  <ForkKnife
                    size={20}
                    weight="fill"
                    className="text-green-200"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Rodrigo</span>
                  <span className="font-normal text-gray-400">Alimentação</span>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <span className="font-normal">R$</span>
                <span className="font-bold">1.200,00</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-gray-200 p-2">
                  <ForkKnife
                    size={20}
                    weight="fill"
                    className="text-green-200"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Rodrigo</span>
                  <span className="font-normal text-gray-400">Alimentação</span>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <span className="font-normal">R$</span>
                <span className="font-bold">1.200,00</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-gray-200 p-2">
                  <ForkKnife
                    size={20}
                    weight="fill"
                    className="text-green-200"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Rodrigo</span>
                  <span className="font-normal text-gray-400">Alimentação</span>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <span className="font-normal">R$</span>
                <span className="font-bold">1.200,00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2.5">
            <IconButton Icon={CaretLeft} className="p-1" />
            <div className="text-[14px]">
              <span className="font-normal text-gray-400">1/</span>
              <span className="font-normal text-gray-400">3</span>
            </div>
            <IconButton Icon={CaretRight} className="p-1" />
          </div>
        </div>
      </main>
    </div>
  )
}
