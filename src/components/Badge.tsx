// src/components/Badge.tsx
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils' // or use your own join if you prefer

export type BadgeVariant =
  | 'inStock'
  | 'lowStock'
  | 'outOfStock'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const VARIANT: Record<BadgeVariant, string> = {
  inStock: 'bg-emerald-100 text-emerald-800',
  lowStock: 'bg-amber-100 text-amber-800',
  outOfStock: 'bg-rose-100 text-rose-800',
  info: 'bg-slate-100 text-slate-800',
  success: 'bg-emerald-100 text-emerald-800',
  warning: 'bg-amber-100 text-amber-800',
  error: 'bg-rose-100 text-rose-800',
}

export function Badge({ variant = 'info', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        VARIANT[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
