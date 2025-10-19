import React, { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Card } from './Card'
interface BillingFormProps {
  onSubmit: (formData: any) => void
  isSubmitting?: boolean
}
export function BillingForm({
  onSubmit,
  isSubmitting = false,
}: BillingFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = {
          ...prev,
        }
        delete newErrors[name]
        return newErrors
      })
    }
  }
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required'
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits'
    }
    if (!formData.cardExpiry.trim()) {
      newErrors.cardExpiry = 'Expiry date is required'
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.cardExpiry)) {
      newErrors.cardExpiry = 'Expiry date must be MM/YY format'
    }
    if (!formData.cardCvv.trim()) {
      newErrors.cardCvv = 'CVV is required'
    } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
      newErrors.cardCvv = 'CVV must be 3 or 4 digits'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }
  return (
    <Card>
      <Card.Header>
        <h3 className="text-lg font-bold">Billing Information</h3>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                fullWidth
                required
              />
              <Input
                label="Last Name"
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                fullWidth
                required
              />
              <div className="md:col-span-2">
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  fullWidth
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium mb-3">Billing Address</h4>
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Address"
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
                fullWidth
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="City"
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                  fullWidth
                  required
                />
                <Input
                  label="State"
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  error={errors.state}
                  fullWidth
                  required
                />
                <Input
                  label="ZIP Code"
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={handleChange}
                  error={errors.zipCode}
                  fullWidth
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium mb-3">Payment Information</h4>
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Card Number"
                id="cardNumber"
                name="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                error={errors.cardNumber}
                fullWidth
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Expiry Date"
                  id="cardExpiry"
                  name="cardExpiry"
                  type="text"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  error={errors.cardExpiry}
                  fullWidth
                  required
                />
                <Input
                  label="CVV"
                  id="cardCvv"
                  name="cardCvv"
                  type="text"
                  placeholder="123"
                  value={formData.cardCvv}
                  onChange={handleChange}
                  error={errors.cardCvv}
                  fullWidth
                  required
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isSubmitting}
          >
            Complete Purchase
          </Button>
        </form>
      </Card.Body>
    </Card>
  )
}
