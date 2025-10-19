import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { TextArea } from '../components/TextArea'
import { Card } from '../components/Card'
import { SectionHeader } from '../components/SectionHeader'
import { KioskCodeBanner } from '../components/KioskCodeBanner'
// Sample departments for dropdown
const departments = [
  {
    value: '',
    label: 'Select Department',
  },
  {
    value: 'ART',
    label: 'ART - Art',
  },
  {
    value: 'BIO',
    label: 'BIO - Biology',
  },
  {
    value: 'CHEM',
    label: 'CHEM - Chemistry',
  },
  {
    value: 'CS',
    label: 'CS - Computer Science',
  },
  {
    value: 'MATH',
    label: 'MATH - Mathematics',
  },
  {
    value: 'PSY',
    label: 'PSY - Psychology',
  },
]
export function DonateBook() {
  const [advice, setAdvice] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [kioskCode, setKioskCode] = useState('')
  // Generate a random 5-character alphanumeric code
  const generateKioskCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
  // Set expiry time to 24 hours from now
  const getExpiryTime = () => {
    const expiryTime = new Date()
    expiryTime.setHours(expiryTime.getHours() + 24)
    return expiryTime
  }
  const [expiryTime, setExpiryTime] = useState(getExpiryTime())
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setKioskCode(generateKioskCode())
      setExpiryTime(getExpiryTime())
    }, 1500)
  }
  const handleDone = () => {
    window.location.href = '/'
  }
  if (submitted) {
    return (
      <div className="bg-gray-50 w-full min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <KioskCodeBanner
            code={kioskCode}
            expiryTime={expiryTime}
            onDone={handleDone}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Donate Materials"
          subtitle="Help fellow students and the environment by donating your used textbooks, electronics, or equipment"
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Item Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Item Title"
                        id="title"
                        type="text"
                        required
                        fullWidth
                      />
                      <Input
                        label="Brand/Author"
                        id="author"
                        type="text"
                        fullWidth
                      />
                      <Input
                        label="ISBN/Serial Number"
                        id="isbn"
                        type="text"
                        helperText="If applicable"
                        fullWidth
                      />
                      <Input
                        label="Edition/Model"
                        id="edition"
                        type="text"
                        fullWidth
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Department
                        </label>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <Input
                        label="Course Number"
                        id="courseNumber"
                        type="text"
                        placeholder="e.g. 101"
                        required
                        fullWidth
                      />
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Item Type
                        </label>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                          <option value="textbook">Textbook</option>
                          <option value="electronics">Electronics</option>
                          <option value="equipment">Equipment</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Condition</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="condition-excellent"
                          name="condition"
                          type="radio"
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                          defaultChecked
                        />
                        <label
                          htmlFor="condition-excellent"
                          className="ml-3 block text-gray-700"
                        >
                          Excellent (Like new)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="condition-good"
                          name="condition"
                          type="radio"
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <label
                          htmlFor="condition-good"
                          className="ml-3 block text-gray-700"
                        >
                          Good (Minor wear)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="condition-fair"
                          name="condition"
                          type="radio"
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <label
                          htmlFor="condition-fair"
                          className="ml-3 block text-gray-700"
                        >
                          Fair (Some signs of use)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="condition-poor"
                          name="condition"
                          type="radio"
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <label
                          htmlFor="condition-poor"
                          className="ml-3 block text-gray-700"
                        >
                          Poor (Heavily used but functional)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">
                      Share Advice (Optional)
                    </h3>
                    <TextArea
                      label="Course Advice"
                      id="advice"
                      placeholder="Share a helpful tip for future students using this item..."
                      value={advice}
                      onChange={(e) => setAdvice(e.target.value)}
                      maxLength={100}
                      showCounter
                      rows={3}
                      fullWidth
                      helperText="Your advice will be shared with students who view this item"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Name"
                        id="name"
                        type="text"
                        required
                        fullWidth
                      />
                      <Input
                        label="Email"
                        id="email"
                        type="email"
                        required
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      fullWidth
                    >
                      Submit Donation
                    </Button>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
