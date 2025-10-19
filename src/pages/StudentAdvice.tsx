import React, { useState } from 'react'
import { Button } from '../components/Button'
import { TextArea } from '../components/TextArea'
import { Card } from '../components/Card'
import { SectionHeader } from '../components/SectionHeader'
import { AdviceCard } from '../components/AdviceCard'
import { Input } from '../components/Input'
import { SearchIcon } from 'lucide-react'
// Sample data - in a real app this would come from an API
const sampleAdvice = [
  {
    id: '1',
    advice:
      'Always review the lecture slides before starting the homework assignments.',
    course: 'CS 101',
    date: 'Aug 15, 2023',
  },
  {
    id: '2',
    advice:
      'Form a study group early in the semester. The final exam is comprehensive and challenging.',
    course: 'CHEM 301',
    date: 'Jul 22, 2023',
  },
  {
    id: '3',
    advice:
      'Do all the practice problems in the textbook, even the optional ones.',
    course: 'MATH 201',
    date: 'Sep 5, 2023',
  },
  {
    id: '4',
    advice:
      "Office hours are extremely helpful for the research paper. Don't wait until the last minute.",
    course: 'ENG 210',
    date: 'Aug 30, 2023',
  },
  {
    id: '5',
    advice:
      'The midterm focuses heavily on chapters 3-5. Make sure to study those thoroughly.',
    course: 'PSY 101',
    date: 'Sep 12, 2023',
  },
  {
    id: '6',
    advice:
      'Record the lectures if possible. The professor covers material not in the slides.',
    course: 'BIO 202',
    date: 'Aug 8, 2023',
  },
  {
    id: '7',
    advice:
      'The group project is worth 30% of your grade. Choose your partners wisely.',
    course: 'BUS 305',
    date: 'Jul 19, 2023',
  },
  {
    id: '8',
    advice:
      "Start the final paper at least two weeks before it's due. It requires a lot of research.",
    course: 'HIST 101',
    date: 'Sep 1, 2023',
  },
]
export function StudentAdvice() {
  const [advice, setAdvice] = useState('')
  const [course, setCourse] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [adviceList, setAdviceList] = useState(sampleAdvice)
  const [searchTerm, setSearchTerm] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!advice.trim() || !course.trim()) return
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      const newAdvice = {
        id: Date.now().toString(),
        advice,
        course,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      }
      setAdviceList([newAdvice, ...adviceList])
      setAdvice('')
      setCourse('')
      setIsSubmitting(false)
    }, 1000)
  }
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setHasSearched(true)
  }
  const filteredAdvice = adviceList.filter((item) => {
    if (!searchTerm) return true
    return (
      item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.advice.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Advice"
          subtitle="Browse and share advice from students who've taken these courses before"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <Card.Header>
                <h3 className="text-lg font-bold">Share Your Advice</h3>
              </Card.Header>
              <Card.Body>
                <form onSubmit={handleSubmit}>
                  <TextArea
                    label="Your Advice"
                    id="advice"
                    placeholder="Share a helpful tip for future students..."
                    value={advice}
                    onChange={(e) => setAdvice(e.target.value)}
                    maxLength={100}
                    showCounter
                    rows={3}
                    required
                    fullWidth
                  />
                  <Input
                    label="Course Code"
                    id="course"
                    type="text"
                    placeholder="e.g. MATH 101"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSubmitting}
                    fullWidth
                    className="mt-4"
                  >
                    Submit Advice
                  </Button>
                </form>
              </Card.Body>
            </Card>
            <Card className="mt-6">
              <Card.Header>
                <h3 className="text-lg font-bold">Search Advice</h3>
              </Card.Header>
              <Card.Body>
                <form onSubmit={handleSearch}>
                  <div className="relative mb-4">
                    <Input
                      type="text"
                      placeholder="Search by course code or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      fullWidth
                      className="pl-10"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                  <Button type="submit" variant="secondary" fullWidth>
                    Search Advice
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
          <div className="lg:col-span-2">
            {hasSearched ? (
              filteredAdvice.length > 0 ? (
                <div>
                  <p className="mb-4 text-gray-600">
                    Found {filteredAdvice.length} results
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredAdvice.map((item) => (
                      <AdviceCard
                        key={item.id}
                        advice={item.advice}
                        course={item.course}
                        date={item.date}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <Card className="text-center py-12">
                  <Card.Body>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No advice found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or be the first to share
                      advice for this course!
                    </p>
                  </Card.Body>
                </Card>
              )
            ) : (
              <Card className="text-center py-12">
                <Card.Body>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Search for advice
                  </h3>
                  <p className="text-gray-600">
                    Use the search panel to find advice for specific courses or
                    topics.
                  </p>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
