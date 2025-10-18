// src/components/Card.tsx
import * as React from 'react'

type DivProps = React.HTMLAttributes<HTMLDivElement>

const CardRoot = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}
      {...props}
    />
  )
)
CardRoot.displayName = 'Card'

const Header = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`px-6 py-4 border-b border-gray-200 bg-gray-50 ${className}`}
      {...props}
    />
  )
)
Header.displayName = 'Card.Header'

const Body = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`px-6 py-4 ${className}`} {...props} />
  )
)
Body.displayName = 'Card.Body'

const Footer = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}
      {...props}
    />
  )
)
Footer.displayName = 'Card.Footer'

// ---- typed compound export ----
export type CardCompound = React.ForwardRefExoticComponent<
  DivProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: typeof Header
  Body: typeof Body
  Footer: typeof Footer
}

export const Card = Object.assign(CardRoot, { Header, Body, Footer }) as CardCompound
