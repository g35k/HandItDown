import React from 'react'
type BadgeVariant =
  | 'inStock'
  | 'lowStock'
  | 'outOfStock'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
interface BadgeProps {
  variant: BadgeVariant
  children: React.ReactNode
  className?: string
}
export function Badge({ variant, children, className = '' }: BadgeProps) {
  const variantClasses = {
    inStock: 'bg-green-100 text-green-800',
    lowStock: 'bg-yellow-100 text-yellow-800',
    outOfStock: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
