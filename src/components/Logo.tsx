import { Link } from 'react-router-dom'
export function Logo() {
  return (
    <Link to="/" className="flex flex-col items-start">
      <span className="text-xl font-extrabold tracking-tighter text-primary">
        HAND
        <span className="text-accent">IT</span>
        DOWN
      </span>
      <span className="text-xs font-bold tracking-wider text-primary-dark">
        SAC STATE
      </span>
    </Link>
  )
}
