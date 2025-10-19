import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIcon, XIcon, ShoppingCartIcon, LeafIcon } from 'lucide-react'
import { Logo } from './Logo'
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(2) // Example cart count
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'FIND MATERIALS',
      path: '/find',
    },
    {
      name: 'DONATE',
      path: '/donate',
    },
    {
      name: 'ADVICE',
      path: '/advice',
    },
    {
      name: 'DASHBOARD',
      path: '/dashboard',
    },
    {
      name: 'ABOUT',
      path: '/about',
    },
  ]
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-6 mr-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-bold text-sm tracking-wide transition-colors ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          {/* Eco Badge */}
          <div className="hidden lg:flex mr-4 items-center bg-primary-light px-3 py-1 rounded-full">
            <LeafIcon className="h-4 w-4 text-primary mr-1" />
            <span className="text-xs font-medium text-primary">
              Eco-Friendly
            </span>
          </div>
          {/* Cart Icon */}
          <div className="relative">
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-primary"
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
        {/* Mobile Menu Button and Cart Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-primary"
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
          <button
            className="text-gray-700 hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `py-3 font-bold text-sm tracking-wide border-b border-gray-100 ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            {/* Mobile Eco Badge */}
            <div className="flex items-center py-3 mt-2">
              <LeafIcon className="h-4 w-4 text-primary mr-1" />
              <span className="text-xs font-medium text-primary">
                Eco-Friendly Initiative
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
