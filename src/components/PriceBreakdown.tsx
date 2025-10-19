import { InfoIcon } from 'lucide-react'
interface PriceBreakdownProps {
  //originalPrice: number
  serviceFee: number
  baseCost: number
  className?: string
}
export function PriceBreakdown({
  //originalPrice,
  serviceFee,
  baseCost,
  className = '',
}: PriceBreakdownProps) {
  const total = serviceFee + baseCost
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm text-gray-600">Service Fee</span>
          <div className="group relative ml-1">
            <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
              The service fee keeps the platform running; base cost reflects
              item handling.
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-900">${serviceFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Base Cost</span>
        <span className="text-sm text-gray-900">${baseCost.toFixed(2)}</span>
      </div>
      <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
        <span className="font-medium">Total</span>
        <span className="font-bold text-primary">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
