// src/components/CheckoutSummary.tsx
import { Card } from './Card'

type Item = {
  id: string
  title: string
  author?: string
  price: number
  originalPrice?: number
  serviceFee?: number
  baseCost?: number
  quantity: number
}

type Props = {
  items: Item[]
  subtotal: number
  tax: number
}

export function CheckoutSummary({ items, subtotal, tax }: Props) {
  const total = subtotal + tax

  return (
    <Card>
      <Card.Header>
        <h3 className="text-lg font-bold">Order Summary</h3>
      </Card.Header>

      <Card.Body>
        <div className="space-y-4">
          {/* line items */}
          <div className="space-y-2">
            {items.map((it) => (
              <div key={it.id} className="flex justify-between text-sm text-gray-700">
                <span>
                  {it.title} <span className="text-gray-500">× {it.quantity}</span>
                </span>
                <span>${(it.price * it.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* totals */}
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
