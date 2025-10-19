import { LoaderIcon } from 'lucide-react'
import type { MouseEvent } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void   // <-- accept event
  type?: 'button' | 'submit' | 'reset'
  className?: string
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark disabled:bg-primary/50',
    secondary: 'bg-accent text-gray-900 hover:bg-accent-dark disabled:bg-accent/50',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:text-gray-400',
  }
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  }
  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}                    // now typed as (e) => void
      disabled={disabled || isLoading}
    >
      {isLoading && <LoaderIcon className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  )
}
