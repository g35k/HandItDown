import { Link } from 'react-router-dom'
import {
  BookOpenIcon,
  BookmarkIcon,
  HeartIcon,
  LeafIcon,
  RecycleIcon,
  ZapIcon,
  GlobeIcon,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { SectionHeader } from '../components/SectionHeader'
import { SustainabilityCard } from '../components/SustainabilityCard'
export function Home() {
  const features = [
    {
      icon: <BookOpenIcon className="h-8 w-8 text-primary" />,
      title: 'FIND TEXTBOOKS',
      description:
        'Search our eco-friendly collection of donated textbooks by course or professor. Reserve the ones you need for your classes.',
    },
    {
      icon: <BookmarkIcon className="h-8 w-8 text-accent" />,
      title: 'DONATE BOOKS',
      description:
        'Pay it forward by donating your used textbooks and reduce waste while helping future students taking the course.',
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-primary" />,
      title: 'STUDENT ADVICE',
      description:
        "Browse or contribute to our collection of course-specific advice from students who've been there before.",
    },
  ]
  // Sustainability metrics
  const sustainabilityMetrics = [
    {
      title: 'CO₂e Avoided',
      value: '12,450',
      unit: 'kg of carbon dioxide equivalent',
      icon: <LeafIcon className="h-10 w-10" />,
      tooltipText:
        'Estimated carbon emissions avoided by reusing textbooks instead of producing new ones.',
    },
    {
      title: 'Items Diverted',
      value: '3,250+',
      unit: 'textbooks kept out of landfills',
      icon: <RecycleIcon className="h-10 w-10" />,
      tooltipText:
        'Total number of items that have been reused through our platform instead of being discarded.',
    },
    {
      title: 'Energy Saved',
      value: '85,600',
      unit: 'kWh of energy conserved',
      icon: <ZapIcon className="h-10 w-10" />,
      tooltipText:
        'Energy saved by avoiding the production of new textbooks and materials.',
    },
  ]
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              Sustainability starts with students
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Hand It Down is a student-run platform where you can find donated
              textbooks, share your used books, and join our movement toward a
              more sustainable campus community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/find">
                <Button variant="secondary" size="lg">
                  Find Textbooks
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" size="lg" className="bg-white">
                  Donate a Book
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <GlobeIcon className="h-5 w-5 text-green-200 mr-2" />
              <p className="text-sm text-green-200">
                Every book reused saves approximately 3.8kg of CO₂
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Sustainability Metrics Section */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Environmental Impact"
            subtitle="Together, we're making education more sustainable."
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
          <div className="text-center mt-8 py-4 bg-white rounded-lg border border-green-100 shadow-sm">
            <div className="flex justify-center mb-2">
              <div className="h-6 w-6 text-primary" />
            </div>
            <p className="text-gray-700">
              Join our green initiative and be part of the solution.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How It Works"
            subtitle="Our platform makes it easy to find, donate, and learn from other students while reducing waste."
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-green-500">
              <div className="p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">3,250+</p>
                <p className="text-green-200 uppercase text-sm tracking-wide">
                  Textbooks Exchanged
                </p>
              </div>
              <div className="p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">$156,000</p>
                <p className="text-green-200 uppercase text-sm tracking-wide">
                  Student Savings
                </p>
              </div>
              <div className="p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">1,800+</p>
                <p className="text-green-200 uppercase text-sm tracking-wide">
                  Student Advice Shared
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Ready to Go Green?"
            subtitle="Join our community of eco-conscious students making a difference."
            className="text-center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/find">
              <Button variant="primary" size="lg">
                Find Textbooks
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="secondary" size="lg">
                Donate a Book
              </Button>
            </Link>
            <Link to="/advice">
              <Button variant="outline" size="lg">
                Browse Advice
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center">
            <LeafIcon className="h-5 w-5 text-primary mr-2" />
            <p className="text-sm text-gray-600">
              Every donation makes our campus greener
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
