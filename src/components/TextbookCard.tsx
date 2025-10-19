import { Link } from 'react-router-dom'
import { Badge } from './Badge'
import { Card } from './Card'
interface TextbookCardProps {
  id: string
  title: string
  author: string
  course: string
  professor: string
  price: number
  image: string
  availability: 'inStock' | 'lowStock' | 'outOfStock'
}
export function TextbookCard({
  id,
  title,
  author,
  course,
  professor,
  price,
  image,
  availability,
}: TextbookCardProps) {
  const availabilityLabel = {
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
  }
  return (
    <Link to={`/textbook/${id}`}>
      <Card className="h-full transition-transform hover:translate-y-[-4px] hover:shadow-md">
        <div className="relative pt-[75%] bg-gray-100">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={availability}>
              {availabilityLabel[availability]}
            </Badge>
          </div>
        </div>
        <Card.Body>
          <h3 className="font-bold text-lg mb-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">by {author}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">{course}</p>
              <p className="text-xs text-gray-500">Prof. {professor}</p>
            </div>
            <p className="font-bold text-lg text-blue-600">
              ${price.toFixed(2)}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}
