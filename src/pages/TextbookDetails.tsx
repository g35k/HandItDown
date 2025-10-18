import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Bookmark, ShoppingCart } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { SectionHeader } from '../components/SectionHeader'

type Availability = 'inStock' | 'lowStock' | 'outOfStock'

type AdviceItem = { text: string; date: string }

type Textbook = {
  id: string
  title: string
  author: string
  course: string
  professor: string
  price: number
  image: string
  availability: Availability
  edition: string
  publisher: string
  year: number
  condition: string
  description: string
  advice: AdviceItem[]
  isbn?: string
}

// ✅ Typed array (no `as const` on availability)
const sampleTextbooks: Textbook[] = [
  {
    id: '1',
    title: 'Introduction to Psychology',
    author: 'David G. Myers',
    course: 'PSY 101',
    professor: 'Johnson',
    price: 25.99,
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    availability: 'inStock',
    edition: '12th Edition',
    publisher: 'Worth Publishers',
    year: 2021,
    condition: 'Good',
    description:
      "This acclaimed introductory psychology textbook takes a 'scientific' approach to the study of human behavior and mental processes.",
    advice: [
      { text: "Focus on chapters 3-5 for the midterm, they're heavily weighted.", date: 'Aug 15, 2023' },
      { text: 'The online practice quizzes are extremely helpful for exam prep.', date: 'Jul 10, 2023' },
    ],
    isbn: '9781319132101',
  },
  {
    id: '2',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    course: 'MATH 201',
    professor: 'Smith',
    price: 35.5,
    image:
      'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80',
    availability: 'lowStock',
    edition: '9th Edition',
    publisher: 'Cengage Learning',
    year: 2020,
    condition: 'Excellent',
    description:
      "This best-selling calculus textbook has been updated for the needs of today's students with added examples and exercises.",
    advice: [{ text: "Do all the odd-numbered practice problems, they're similar to exam questions.", date: 'Sep 5, 2023' }],
    isbn: '9781337613927',
  },
]

export function TextbookDetails() {
  const { id } = useParams<{ id: string }>()

  const textbook = sampleTextbooks.find((b) => b.id === id)

  const addToCart = () => {
    console.log(`Added textbook ${id} to cart`)
  }

  if (!textbook) {
    return (
      <div className="bg-gray-50 w-full min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Item Not Found</h2>
            <p className="mb-6">The item you're looking for doesn't exist or has been removed.</p>
            <Link to="/find">
              <Button variant="primary">Browse Materials</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const AVAILABILITY_LABEL: Record<Availability, string> = {
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
  }

  // Assuming your <Badge> supports 'inStock' | 'lowStock' | 'outOfStock' variants
  const AVAILABILITY_BADGE: Record<Availability, 'inStock' | 'lowStock' | 'outOfStock'> = {
    inStock: 'inStock',
    lowStock: 'lowStock',
    outOfStock: 'outOfStock',
  }

  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/find" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Materials
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <img src={textbook.image} alt={textbook.title} className="h-auto w-full object-cover" />
              </div>

              <Badge variant={AVAILABILITY_BADGE[textbook.availability]} className="px-3 py-1 text-sm">
                {AVAILABILITY_LABEL[textbook.availability]}
              </Badge>

              {textbook.isbn && <p className="mt-2 text-sm text-gray-500">ISBN: {textbook.isbn}</p>}
            </div>
          </div>

          <div className="lg:col-span-2">
            <SectionHeader title={textbook.title} />

            <div className="mb-6">
              <p className="mb-2 text-lg text-gray-700">by {textbook.author}</p>
              <p className="mb-4 text-gray-600">
                {textbook.edition} • Published {textbook.year} • {textbook.publisher}
              </p>

              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="rounded-md bg-blue-50 px-3 py-1.5">
                  <span className="text-xs text-gray-500">Course</span>
                  <p className="font-medium text-gray-900">{textbook.course}</p>
                </div>
                <div className="rounded-md bg-blue-50 px-3 py-1.5">
                  <span className="text-xs text-gray-500">Professor</span>
                  <p className="font-medium text-gray-900">Prof. {textbook.professor}</p>
                </div>
                <div className="rounded-md bg-blue-50 px-3 py-1.5">
                  <span className="text-xs text-gray-500">Condition</span>
                  <p className="font-medium text-gray-900">{textbook.condition}</p>
                </div>
              </div>

              <div className="mb-8 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${textbook.price.toFixed(2)}</span>

                <Button
                  variant="primary"
                  onClick={addToCart}
                  disabled={textbook.availability === 'outOfStock'}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {textbook.availability === 'outOfStock' ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-lg font-bold">Description</h3>
                <p className="text-gray-700">{textbook.description}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 flex items-center text-lg font-bold">
                <Bookmark className="mr-2 h-5 w-5 text-orange-500" />
                Student Advice
              </h3>

              {textbook.advice.length > 0 ? (
                <div className="space-y-4">
                  {textbook.advice.map((item, idx) => (
                    <Card key={idx}>
                      <Card.Body>
                        <p className="mb-2 italic text-gray-800">"{item.text}"</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <Card.Body className="py-6 text-center">
                    <p className="text-gray-500">No advice has been shared for this item yet.</p>
                  </Card.Body>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
