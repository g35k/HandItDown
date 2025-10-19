import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, CheckCircleIcon } from 'lucide-react'
import { Button } from '../components/Button'
import { SectionHeader } from '../components/SectionHeader'
import { BillingForm } from '../components/BillingForm'
import { CheckoutSummary } from '../components/CheckoutSummary'
import { Card } from '../components/Card'
export function Billing() {
  //const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  // Sample cart items with price breakdown
  const cartItems = [
    {
      id: '6',
      title: 'Arduino Starter Kit (Used)',
      author: 'Arduino',
      price: 29.95,
      image: 'https://m.media-amazon.com/images/I/618sDG9BuPL._AC_UF894,1000_QL80_.jpg',
      quantity: 1,
    },
    {
      id: '7',
      title: 'Data Structures: Abstraction and Design Using Java',
      author: 'Elliot B. Koffman & Paul A. T. Wolfgang',
      price: 123.75,
      image: 'https://m.media-amazon.com/images/I/515BH5lzs6L._UF1000,1000_QL80_.jpg',
      quantity: 1,
    },
    
  ]
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  // Calculate tax (example: 8.25%)
  const tax = subtotal * 0.0825
  // Calculate total
  //const total = subtotal + tax
  const handleSubmit = (_formData: any) => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      setOrderNumber(`ORD-${Math.floor(100000 + Math.random() * 900000)}`)
    }, 2000)
  }
  if (isComplete) {
    return (
      <div className="bg-gray-50 w-full min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="text-center py-12">
            <Card.Body>
              <div className="mx-auto bg-primary-light rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You for Your Order!
              </h3>
              <p className="text-gray-600 mb-3">
                Your order has been confirmed. You'll receive a confirmation
                email shortly.
              </p>
              <div className="bg-gray-100 rounded-md p-4 max-w-xs mx-auto mb-6">
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="text-lg font-bold">{orderNumber}</p>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-2">
                  Your Sustainability Impact
                </h4>
                <p className="text-gray-600 mb-2">
                  By purchasing used materials, you've helped:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Save 7.6 kg of CO₂ emissions</li>
                  <li>• Conserve 52.8 kWh of energy</li>
                  <li>• Prevent 4 kg of waste from landfills</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="primary">Return to Home</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline">View Dashboard</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/cart"
            className="inline-flex items-center text-primary hover:text-primary-dark"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Cart
          </Link>
        </div>
        <SectionHeader title="Checkout" subtitle="Complete your purchase" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BillingForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
          <div className="lg:col-span-1">
            <CheckoutSummary items={cartItems} subtotal={subtotal} tax={tax} />
          </div>
        </div>
      </div>
    </div>
  )
}
