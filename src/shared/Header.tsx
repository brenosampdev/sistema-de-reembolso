import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.svg'
import Button from './Button'

export default function HeaderLayout() {
  return (
    <header className="flex items-center justify-between">
      <Link to={'/'}>
        <img src={logoImg} alt="Refund System Logo" />
      </Link>

      <div className="flex gap-4">
        <Link to={'/requests'}>
          <Button
            text="Solitações de reembolso"
            type="button"
            variant="ghost"
          />
        </Link>

        <Link to={'/requests/new'}>
          <Button text="Nova solicitação" type="button" />
        </Link>
      </div>
    </header>
  )
}
