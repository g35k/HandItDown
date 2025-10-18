import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
export function DonateBook() {
  const [advice, setAdvice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  if (submitted) {
    return <div className="bg-gray-50 w-full min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="text-center py-12">
            <Card.Body>
              <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You for Your Donation!
              </h3>
              <p className="text-gray-600 mb-3">
                Your donation has been registered. Please drop off your item at
                our campus location during operating hours.
              </p>
              <p className="text-blue-600 font-medium mb-6">
                Please check your email for a coupon code that can be used for
                your next purchase!
              </p>
              <Button variant="primary" onClick={() => window.location.href = '/'}>
                Return to Home
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>;
  }
  return <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <SectionHeader title="Donate Materials" subtitle="Help fellow students by donating your used textbooks, electronics, or equipment" />
        <div className="max-w-3xl mx-auto">
          <Card>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Item Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Item Title" id="title" type="text" required fullWidth />
                      <Input label="Brand/Author" id="author" type="text" required fullWidth />
                      <Input label="ISBN/Serial Number" id="isbn" type="text" helperText="If applicable" fullWidth />
                      <Input label="Edition/Model" id="edition" type="text" fullWidth />
                      <Input label="Course Code" id="course" type="text" placeholder="e.g. MATH 101" required fullWidth />
                      <Input label="Professor" id="professor" type="text" fullWidth />
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Item Type
                        </label>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
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
                        <input id="condition-excellent" name="condition" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                        <label htmlFor="condition-excellent" className="ml-3 block text-gray-700">
                          Excellent (Like new)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="condition-good" name="condition" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <label htmlFor="condition-good" className="ml-3 block text-gray-700">
                          Good (Minor wear)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="condition-fair" name="condition" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <label htmlFor="condition-fair" className="ml-3 block text-gray-700">
                          Fair (Some signs of use)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="condition-poor" name="condition" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <label htmlFor="condition-poor" className="ml-3 block text-gray-700">
                          Poor (Heavily used but functional)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">
                      Share Advice (Optional)
                    </h3>
                    <TextArea label="Course Advice" id="advice" placeholder="Share a helpful tip for future students using this item..." value={advice} onChange={e => setAdvice(e.target.value)} maxLength={100} showCounter rows={3} fullWidth helperText="Your advice will be shared with students who view this item" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Name" id="name" type="text" required fullWidth />
                      <Input label="Email" id="email" type="email" required fullWidth />
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <Button type="submit" variant="primary" isLoading={isSubmitting} fullWidth>
                      Submit Donation
                    </Button>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>;
}