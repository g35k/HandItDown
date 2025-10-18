import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react' // note: lucide names (no “Icon”)
import { Logo } from './Logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(2) // read-only for now

  const navItems = [
    { name: 'WELCOME', path: '/' },
    { name: 'FIND MATERIALS', path: '/find' },
    { name: 'DONATE', path: '/donate' },
    { name: 'STUDENT ADVICE', path: '/advice' },
    { name: 'DASHBOARD', path: '/dashboard' },
  ]

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        {/* Desktop nav */}
        <div className="hidden items-center md:flex">
          <nav className="mr-6 flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wide transition-colors ${
                    isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Cart */}
          <div className="relative">
            <NavLink to="/cart" className="text-gray-700 hover:text-blue-600" aria-label="Shopping cart">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center space-x-4 md:hidden">
          <NavLink to="/cart" className="text-gray-700 hover:text-blue-600" aria-label="Shopping cart">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>
          <button
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-bold tracking-wide border-b border-gray-100 ${
                    isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
