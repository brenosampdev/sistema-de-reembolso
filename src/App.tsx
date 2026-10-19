import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequestPage from './pages/RefundRequestsPage'

export function App() {
  return (
    <div className="mx-auto mt-10 mb-14 max-w-7xl px-3">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
