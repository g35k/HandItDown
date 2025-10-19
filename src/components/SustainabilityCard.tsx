import React from 'react'
import { InfoIcon } from 'lucide-react'
import { Card } from './Card'
interface SustainabilityCardProps {
  title: string
  value: string | number
  unit: string
  icon?: React.ReactNode
  tooltipText?: string
  className?: string
}
export function SustainabilityCard({
  title,
  value,
  unit,
  icon,
  tooltipText,
  className = '',
}: SustainabilityCardProps) {
  return (
    <Card className={`h-full border-green-100 ${className}`}>
      <Card.Body className="flex flex-col items-center text-center p-5">
        {icon && <div className="mb-3 text-primary">{icon}</div>}
        <div className="flex items-center mb-1">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mr-1">
            {title}
          </h3>
          {tooltipText && (
            <div className="group relative">
              <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
                {tooltipText}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          )}
        </div>
        <p className="text-3xl font-bold text-primary mb-1">{value}</p>
        <p className="text-sm text-gray-600">{unit}</p>
      </Card.Body>
    </Card>
  )
}
