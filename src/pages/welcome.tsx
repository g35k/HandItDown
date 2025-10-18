import { Link } from 'react-router-dom';
import { BookOpenIcon, BookmarkIcon, HeartIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
export function Welcome() {
  const features = [{
    icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
    title: 'FIND TEXTBOOKS',
    description: 'Search our collection of donated textbooks by course or professor. Reserve the ones you need for your classes.'
  }, {
    icon: <BookmarkIcon className="h-8 w-8 text-orange-500" />,
    title: 'DONATE BOOKS',
    description: 'Pay it forward by donating your used textbooks and share advice with future students taking the course.'
  }, {
    icon: <HeartIcon className="h-8 w-8 text-blue-600" />,
    title: 'STUDENT ADVICE',
    description: "Browse or contribute to our collection of course-specific advice from students who've been there before."
  }];
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              Textbooks Shouldn't Break The Bank
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Hand It Down is a student-run platform where you can find donated
              textbooks, share your used books, and exchange advice with fellow
              students.
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
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="How It Works" subtitle="Our platform makes it easy to find, donate, and learn from other students." className="text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => <Card key={index} className="text-center">
                <Card.Body>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card.Body>
              </Card>)}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-500">
              <div className="p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">3,250+</p>
                <p className="text-blue-200 uppercase text-sm tracking-wide">
                  Textbooks Exchanged
                </p>
              </div>
              <div className="p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">$156,000</p>
                <p className="text-blue-200 uppercase text-sm tracking-wide">
                  Student Savings
                </p>
              </div>
              <div className="p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">1,800+</p>
                <p className="text-blue-200 uppercase text-sm tracking-wide">
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
          <SectionHeader title="Ready to Get Started?" subtitle="Join our community of students helping students." className="text-center" />
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
        </div>
      </section>
    </div>;
}