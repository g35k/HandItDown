import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'secondary' | 'destructive' | 'ghost'
type Size = 'default' | 'sm' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const base =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  default: 'bg-violet-600 text-white hover:bg-violet-700 focus-visible:ring-violet-600',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400',
  destructive: 'bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-600',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-900 focus-visible:ring-slate-400',
}

const sizes: Record<Size, string> = {
  default: 'h-9 px-4',
  sm: 'h-8 px-3',
  lg: 'h-11 px-6 text-base',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
)
Button.displayName = 'Button'
