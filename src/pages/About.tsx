import { Link } from 'react-router-dom'
import {
  BookIcon,
  LeafIcon,
  RecycleIcon,
  MailIcon,
  HelpCircleIcon,
  UsersIcon,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { SectionHeader } from '../components/SectionHeader'
export function About() {
  const missionPoints = [
    {
      icon: <BookIcon className="h-8 w-8 text-primary" />,
      title: 'Affordable Education',
      description:
        'We believe education should be accessible to all students, regardless of financial background. By facilitating textbook exchanges, we help reduce the financial burden of higher education.',
    },
    {
      icon: <LeafIcon className="h-8 w-8 text-primary" />,
      title: 'Environmental Sustainability',
      description:
        'Every reused textbook means one less new book that needs to be produced, reducing carbon emissions and conserving resources. Our platform helps minimize the environmental impact of educational materials.',
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-primary" />,
      title: 'Student Community',
      description:
        'We foster a community where students help each other through shared resources and advice. By connecting students across semesters, we create a collaborative educational environment.',
    },
  ]
  const howItWorksSteps = [
    {
      number: '01',
      title: 'Find Materials',
      description:
        'Browse our collection of donated textbooks, electronics, and equipment. Filter by course, professor, or department to find exactly what you need.',
    },
    {
      number: '02',
      title: 'Reserve Items',
      description:
        'Reserve the items you need and proceed to checkout. Pay only a small service fee plus base cost—much less than buying new.',
    },
    {
      number: '03',
      title: 'Donate Your Items',
      description:
        "When you're done with your materials, donate them back to the platform. You'll receive a unique kiosk code to complete your drop-off.",
    },
    {
      number: '04',
      title: 'Share Advice',
      description:
        'Help future students by sharing your experience and advice about courses and materials. Your insights make a difference!',
    },
  ]
  return (
    <div className="bg-gray-50 w-full">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About Hand It Down
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make education more affordable and
              sustainable through student-to-student resource sharing and
              reducing our environmental footprint.
            </p>
            <div className="inline-flex items-center justify-center bg-primary-light rounded-full px-4 py-2">
              <RecycleIcon className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Reuse. Reduce. Recycle.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Mission"
            subtitle="Creating a more equitable and sustainable campus through resource sharing"
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {missionPoints.map((point, index) => (
              <Card key={index}>
                <Card.Body className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How It Works"
            subtitle="A simple process designed for busy students"
            className="text-center"
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-xl font-bold text-gray-900">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Sustainability Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Sustainability Methodology"
            subtitle="How we calculate our environmental impact"
            className="text-center"
          />
          <div className="max-w-3xl mx-auto mt-8">
            <Card>
              <Card.Body className="p-6">
                <div className="flex items-start mb-6">
                  <RecycleIcon className="h-8 w-8 text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Our Calculations</h3>
                    <p className="text-gray-600 mb-4">
                      We calculate the environmental impact of textbook reuse
                      based on research from the Book Industry Environmental
                      Council and the Environmental Paper Network. Each textbook
                      reused instead of newly produced saves approximately:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>3.8 kg of CO₂ emissions</li>
                      <li>26.4 kWh of energy</li>
                      <li>2 kg of solid waste</li>
                      <li>13.8 gallons of water</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary-light p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    Our sustainability metrics are updated quarterly based on
                    the total number of textbooks and materials exchanged
                    through our platform. We're committed to transparency in our
                    methodology and continuously refining our calculations as
                    better data becomes available.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Get In Touch"
            subtitle="Have questions or suggestions? We'd love to hear from you."
            className="text-center"
          />
          <div className="mt-8 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
              <MailIcon className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg mb-6">
              Email us at{' '}
              <a
                href="mailto:contact@handitdown.edu"
                className="text-primary font-medium hover:underline"
              >
                contact@handitdown.edu
              </a>
            </p>
            <Link to="/donate">
              <Button variant="primary" size="lg">
                Donate a Book
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            className="text-center"
          />
          <div className="max-w-3xl mx-auto mt-8">
            <Card>
              <Card.Body className="divide-y divide-gray-200">
                <div className="py-4">
                  <div className="flex items-start">
                    <HelpCircleIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">
                        How do I donate a textbook?
                      </h3>
                      <p className="text-gray-600">
                        Visit our Donate page, fill out the form with your
                        book's details, and submit. You'll receive a unique
                        kiosk code to use when dropping off your donation at one
                        of our campus kiosks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="flex items-start">
                    <HelpCircleIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">
                        Where are the kiosks located?
                      </h3>
                      <p className="text-gray-600">
                        Our kiosks are located in the Student Union, Library,
                        and each major academic building. After generating a
                        donation code, you'll be able to view a map of all kiosk
                        locations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="flex items-start">
                    <HelpCircleIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">
                        How is the price determined for used materials?
                      </h3>
                      <p className="text-gray-600">
                        Our pricing includes a flat service fee plus a base cost
                        that's calculated based on the original price and
                        condition of the item. This ensures fair pricing while
                        keeping the platform sustainable.
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
