import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { Button } from '../components/Button'
//import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { SectionHeader } from '../components/SectionHeader'
import PriceWithBreakdown from '../components/PriceWithBreakdown'

// ---- Types ----
type Availability = 'inStock' | 'lowStock' | 'outOfStock'
type AdviceItem = { text: string; date: string }
interface Textbook {
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
  isbn: string
}

// ---- Sample data ----
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
      {
        text: "Focus on chapters 3-5 for the midterm, they're heavily weighted.",
        date: 'Aug 15, 2023',
      },
      {
        text: 'The online practice quizzes are extremely helpful for exam prep.',
        date: 'Jul 10, 2023',
      },
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
    advice: [
      {
        text: "Do all the odd-numbered practice problems, they're similar to exam questions.",
        date: 'Sep 5, 2023',
      },
    ],
    isbn: '9781337613927',
  },
]

// ---- Component ----
export function TextbookDetails() {
  const { id } = useParams<{ id: string }>()
  const textbook = sampleTextbooks.find((book) => book.id === id)

  const addToCart = () => {
    if (id) console.log(`Added textbook ${id} to cart`)
  }

  if (!textbook) {
    return (
      <div className="bg-gray-50 w-full min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
            <p className="mb-6">
              The item you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/find">
              <Button variant="primary">Browse Materials</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const availabilityLabel: Record<Availability, string> = {
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
  }

  const availabilityVariant = {
    inStock: 'inStock',
    lowStock: 'lowStock',
    outOfStock: 'outOfStock',
  } as const

  const originalPrice = textbook.price * 4

  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/find"
            className="inline-flex items-center text-primary hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Materials
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-6">
                <img
                  src={textbook.image}
                  alt={textbook.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <Badge
                variant={availabilityVariant[textbook.availability]}
                className="text-sm px-3 py-1"
              >
                {availabilityLabel[textbook.availability]}
              </Badge>
              {textbook.isbn && (
                <p className="mt-2 text-sm text-gray-500">
                  ISBN: {textbook.isbn}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <SectionHeader title={textbook.title} />
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">by {textbook.author}</p>
              <p className="text-gray-600 mb-4">
                {textbook.edition} • Published {textbook.year} •{' '}
                {textbook.publisher}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="bg-primary-light px-3 py-1.5 rounded-md">
                  <span className="text-xs text-gray-500">Course</span>
                  <p className="font-medium text-gray-900">{textbook.course}</p>
                </div>
                <div className="bg-primary-light px-3 py-1.5 rounded-md">
                  <span className="text-xs text-gray-500">Professor</span>
                  <p className="font-medium text-gray-900">
                    Prof. {textbook.professor}
                  </p>
                </div>
                <div className="bg-primary-light px-3 py-1.5 rounded-md">
                  <span className="text-xs text-gray-500">Condition</span>
                  <p className="font-medium text-gray-900">
                    {textbook.condition}
                  </p>
                </div>
              </div>

              {/* Price Display and Breakdown */}
              <div className="mb-8 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <PriceWithBreakdown
                    total={textbook.price}
                    originalPrice={originalPrice}
                  />
                  <Button
                    variant="primary"
                    onClick={addToCart}
                    disabled={textbook.availability === 'outOfStock'}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {textbook.availability === 'outOfStock'
                      ? 'Out of Stock'
                      : 'Add to Cart'}
                  </Button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">
                    Compared to new price: ${originalPrice.toFixed(2)}
                  </p>
                  <div className="bg-primary-light/30 px-3 py-2 rounded text-sm">
                    <span className="font-medium text-primary-dark">
                      You save:
                    </span>{' '}
                    ${(originalPrice - textbook.price).toFixed(2)} (
                    {Math.round(
                      ((originalPrice - textbook.price) / originalPrice) * 100
                    )}
                    % off)
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
