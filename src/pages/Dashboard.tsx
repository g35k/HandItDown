import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { SectionHeader } from '../components/SectionHeader'
import { Badge } from '../components/Badge'
import { SustainabilityCard } from '../components/SustainabilityCard'
import { LeafIcon, RecycleIcon, ZapIcon, ClockIcon } from 'lucide-react'
export function Dashboard() {
  // Sample user data - in a real app this would come from an API
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    reservations: [
      {
        id: 'res1',
        bookTitle: 'Introduction to Psychology',
        course: 'PSY 101',
        reservedDate: 'Sep 10, 2023',
        pickupBy: 'Sep 17, 2023',
        status: 'ready' as const,
      },
      {
        id: 'res2',
        bookTitle: 'Principles of Microeconomics',
        course: 'ECON 101',
        reservedDate: 'Sep 5, 2023',
        pickupBy: 'Sep 12, 2023',
        status: 'pending' as const,
      },
    ],
    donations: [
      {
        id: 'don1',
        bookTitle: 'Calculus: Early Transcendentals',
        course: 'MATH 201',
        donationDate: 'Aug 15, 2023',
        status: 'available' as const,
      },
      {
        id: 'don2',
        bookTitle: 'Organic Chemistry',
        course: 'CHEM 301',
        donationDate: 'Jul 22, 2023',
        status: 'reserved' as const,
      },
    ],
    advice: [
      {
        id: 'adv1',
        text: 'Always review the lecture slides before starting the homework assignments.',
        course: 'CS 101',
        date: 'Aug 15, 2023',
      },
      {
        id: 'adv2',
        text: 'Form a study group early in the semester. The final exam is comprehensive and challenging.',
        course: 'CHEM 301',
        date: 'Jul 22, 2023',
      },
    ],
  }
  // Sustainability metrics data
  const sustainabilityMetrics = [
    {
      title: 'CO₂e Avoided',
      value: '42.3',
      unit: 'kg of carbon dioxide equivalent',
      icon: <LeafIcon className="h-10 w-10" />,
      tooltipText:
        'Estimated carbon emissions avoided by reusing textbooks instead of producing new ones.',
    },
    {
      title: 'Items Diverted',
      value: '11',
      unit: 'textbooks kept out of landfills',
      icon: <RecycleIcon className="h-10 w-10" />,
      tooltipText:
        'Total number of items that have been reused through our platform instead of being discarded.',
    },
    {
      title: 'Energy Saved',
      value: '290.4',
      unit: 'kWh of energy conserved',
      icon: <ZapIcon className="h-10 w-10" />,
      tooltipText:
        'Energy saved by avoiding the production of new textbooks and materials.',
    },
  ]
  // Kiosk codes data
  const kioskCodes = [
    {
      code: 'A7K3Q',
      item: 'Calculus: Early Transcendentals',
      generatedDate: 'Sep 15, 2023',
      expiryDate: 'Sep 16, 2023',
      status: 'active' as const,
    },
    {
      code: 'P9R2T',
      item: 'Organic Chemistry',
      generatedDate: 'Aug 28, 2023',
      expiryDate: 'Aug 29, 2023',
      status: 'expired' as const,
    },
  ]
  const kioskStatusVariants = {
    active: 'success' as const,
    expired: 'error' as const,
  }
  const kioskStatusLabels = {
    active: 'Active',
    expired: 'Expired',
  }
  const reservationStatusLabels = {
    ready: 'Ready for Pickup',
    pending: 'Processing',
    completed: 'Completed',
    cancelled: 'Cancelled',
  }
  const reservationStatusVariants = {
    ready: 'success' as const,
    pending: 'warning' as const,
    completed: 'info' as const,
    cancelled: 'error' as const,
  }
  const donationStatusLabels = {
    available: 'Available',
    reserved: 'Reserved',
    unavailable: 'No Longer Available',
  }
  const donationStatusVariants = {
    available: 'inStock' as const,
    reserved: 'warning' as const,
    unavailable: 'outOfStock' as const,
  }
  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <SectionHeader title="Your Dashboard" />
          <div className="mt-4 md:mt-0">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
        {/* Sustainability Impact Section */}
        <Card className="mb-8">
          <Card.Header className="bg-primary-light flex justify-between items-center">
            <h3 className="text-lg font-bold">Your Sustainability Impact</h3>
            <div className="flex items-center bg-white px-3 py-1 rounded-full">
              <LeafIcon className="h-4 w-4 text-primary mr-1" />
              <span className="text-xs font-medium text-primary">Eco Hero</span>
            </div>
          </Card.Header>
          <Card.Body className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sustainabilityMetrics.map((metric, index) => (
                <SustainabilityCard
                  key={index}
                  title={metric.title}
                  value={metric.value}
                  unit={metric.unit}
                  icon={metric.icon}
                  tooltipText={metric.tooltipText}
                />
              ))}
            </div>
          </Card.Body>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-1">
            <Card.Header>
              <h3 className="text-lg font-bold">Profile</h3>
            </Card.Header>
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold text-xl">
                    {userData.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{userData.name}</h4>
                  <p className="text-gray-600">{userData.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-100 rounded-md p-3">
                  <p className="text-2xl font-bold text-primary">
                    {userData.reservations.length}
                  </p>
                  <p className="text-sm text-gray-600">Reservations</p>
                </div>
                <div className="bg-gray-100 rounded-md p-3">
                  <p className="text-2xl font-bold text-accent">
                    {userData.donations.length}
                  </p>
                  <p className="text-sm text-gray-600">Donations</p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="lg:col-span-2">
            <Card.Header className="bg-primary-light">
              <h3 className="text-lg font-bold">Activity Summary</h3>
            </Card.Header>
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-md p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Total Saved</p>
                  <p className="text-2xl font-bold text-primary">$62.50</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Books Reserved</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Books Donated</p>
                  <p className="text-2xl font-bold text-accent">2</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* Kiosk Codes Section */}
        <Card className="mb-8">
          <Card.Header className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Kiosk Codes</h3>
            <Button variant="outline" size="sm">
              Generate New Code
            </Button>
          </Card.Header>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Generated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expires
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {kioskCodes.map((code) => (
                  <tr key={code.code}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-mono text-sm font-medium text-gray-900">
                        {code.code}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{code.item}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {code.generatedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {code.expiryDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={kioskStatusVariants[code.status]}>
                        <div className="flex items-center">
                          {code.status === 'active' && (
                            <ClockIcon className="h-3 w-3 mr-1" />
                          )}
                          {kioskStatusLabels[code.status]}
                        </div>
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {kioskCodes.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">You have no kiosk codes.</p>
            </div>
          )}
        </Card>
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <Card.Header>
              <h3 className="text-lg font-bold">Your Reservations</h3>
            </Card.Header>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Book
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reserved Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pickup By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.reservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {reservation.bookTitle}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {reservation.course}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {reservation.reservedDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {reservation.pickupBy}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          variant={
                            reservationStatusVariants[reservation.status]
                          }
                        >
                          {reservationStatusLabels[reservation.status]}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {userData.reservations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">You have no reservations yet.</p>
                <Button variant="primary" className="mt-4">
                  Find Textbooks
                </Button>
              </div>
            )}
          </Card>
          <Card>
            <Card.Header>
              <h3 className="text-lg font-bold">Your Donations</h3>
            </Card.Header>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Book
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Donation Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.donations.map((donation) => (
                    <tr key={donation.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {donation.bookTitle}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {donation.course}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {donation.donationDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          variant={donationStatusVariants[donation.status]}
                        >
                          {donationStatusLabels[donation.status]}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {userData.donations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  You have not donated any books yet.
                </p>
                <Button variant="primary" className="mt-4">
                  Donate a Book
                </Button>
              </div>
            )}
          </Card>
          <Card>
            <Card.Header>
              <h3 className="text-lg font-bold">Your Advice</h3>
            </Card.Header>
            <Card.Body>
              {userData.advice.length > 0 ? (
                <div className="space-y-4">
                  {userData.advice.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-gray-50 rounded-md border border-gray-200"
                    >
                      <p className="text-gray-800 italic mb-2">"{item.text}"</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{item.course}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    You have not shared any advice yet.
                  </p>
                  <Button variant="primary" className="mt-4">
                    Share Advice
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
