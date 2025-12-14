import { MagnifyingGlass } from 'phosphor-react'
import logoImg from './assets/logo.svg'

export function App() {
  return (
    <div className="mx-auto mt-10 mb-14 max-w-7xl px-3">
      <header className="flex items-center justify-between">
        <img src={logoImg} alt="" />

        <div className="flex gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-transparent px-5 py-3.75 font-semibold text-green-200 text-sm transition-colors hover:text-green-100"
          >
            Solicitação de reembolso
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-lg bg-green-200 px-5 py-3.75 font-semibold text-sm text-white transition-colors hover:bg-green-100"
          >
            Nova solicitação
          </button>
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

            <button
              type="submit"
              className="mr-3 cursor-pointer rounded-lg bg-green-200 p-3 text-white transition-colors hover:bg-green-100"
            >
              <MagnifyingGlass size={24} />
            </button>
          </div>

          <div className="flex min-h-84 flex-col gap-4">
            {/* Continue list here */}
          </div>

          {/* Pagination controls here */}
        </div>
      </main>
    </div>
  )
}
