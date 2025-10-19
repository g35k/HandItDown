import { useEffect, useState } from 'react'
import { CopyIcon, CheckIcon, MapPinIcon } from 'lucide-react'
import { Card } from './Card'
import { Button } from './Button'
interface KioskCodeBannerProps {
  code: string
  expiryTime: Date
  onDone?: () => void
}
export function KioskCodeBanner({
  code,
  expiryTime,
  onDone,
}: KioskCodeBannerProps) {
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState('')
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = expiryTime.getTime() - new Date().getTime()
      if (difference <= 0) {
        setTimeLeft('Expired')
        return
      }
      const hours = Math.floor(difference / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setTimeLeft(`${hours}h ${minutes}m`)
    }
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)
    return () => clearInterval(timer)
  }, [expiryTime])
  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <Card className="bg-primary-light border-primary/20">
      <Card.Body className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            You're all set!
          </h3>
          <p className="text-gray-600 mb-4">
            Use this code at the kiosk to drop off your donation.
          </p>
          <div className="bg-white rounded-md border border-gray-200 p-4 mb-4 max-w-xs mx-auto">
            <div className="font-mono text-3xl font-bold tracking-wider text-center mb-1">
              {code}
            </div>
            <div className="text-sm text-gray-500">
              Code expires in {timeLeft}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
            <Button
              variant="outline"
              onClick={copyCode}
              className="flex items-center justify-center"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4 mr-2 text-primary" />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="w-4 h-4 mr-2" />
                  Copy Code
                </>
              )}
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center"
            >
              <MapPinIcon className="w-4 h-4 mr-2" />
              View Kiosk Locations
            </Button>
          </div>
          <Button variant="primary" onClick={onDone}>
            Done
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
