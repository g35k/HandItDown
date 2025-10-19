import { Card } from './Card'
interface AdviceCardProps {
  advice: string
  course: string
  date: string
}
export function AdviceCard({ advice, course, date }: AdviceCardProps) {
  return (
    <Card className="h-full">
      <Card.Body>
        <p className="text-gray-800 italic mb-3">"{advice}"</p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{course}</span>
          <span>{date}</span>
        </div>
      </Card.Body>
    </Card>
  )
}
