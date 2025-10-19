export function roundToCents(n: number) {
  return Math.round(n * 100) / 100
}
type Props = {
  total: number // the price currently shown
  originalPrice?: number // optional: original item price
  serviceFeeFlat?: number // default 2.00
  baseRate?: number // default 0.90 when originalPrice present
  className?: string
}
export default function PriceWithBreakdown({
  total,
  originalPrice,
  serviceFeeFlat = 2.0,
  baseRate = 0.9,
  className = '',
}: Props) {
  let baseCost = 0
  if (typeof originalPrice === 'number') {
    baseCost = roundToCents(originalPrice * baseRate)
    // ensure math consistency with total if total provided
    const recomputedTotal = roundToCents(baseCost + serviceFeeFlat)
    if (Math.abs(recomputedTotal - total) > 0.01) {
      // fall back to deriving base from total to guarantee equality
      baseCost = roundToCents(total - serviceFeeFlat)
    }
  } else {
    baseCost = roundToCents(total - serviceFeeFlat)
  }
  return (
    <div
      className={`flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2 ${className}`}
    >
      <div className="text-2xl font-bold text-primary">${total.toFixed(2)}</div>
      <div className="text-sm text-gray-600">
        (Service Fee: ${serviceFeeFlat.toFixed(2)} + Base Cost: $
        {baseCost.toFixed(2)})
        <span
          aria-label="Fee explanation"
          title="Service Fee keeps the platform running; Base Cost reflects the item's original price and handling."
          className="ml-1 inline-block rounded-full w-4 h-4 text-[10px] text-center leading-4 bg-accent text-gray-900 cursor-help"
        >
          i
        </span>
      </div>
    </div>
  )
}
