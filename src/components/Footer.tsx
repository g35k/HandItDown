import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold">HAND IT DOWN</h3>
            <p className="text-sm text-gray-300">
              A student-run textbook exchange platform helping to make education
              more affordable and sustainable.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="mb-3 text-lg font-bold">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/find"
                  className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 focus-visible:ring-offset-gray-800 rounded"
                >
                  Find Textbooks
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 focus-visible:ring-offset-gray-800 rounded"
                >
                  Donate a Book
                </Link>
              </li>
              <li>
                <Link
                  to="/advice"
                  className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 focus-visible:ring-offset-gray-800 rounded"
                >
                  Student Advice
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-3 text-lg font-bold">CONTACT</h3>
            <p className="text-sm text-gray-300">
              Questions or feedback? Reach out to us at{' '}
              <a
                href="mailto:contact@handitdown.edu"
                className="text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 focus-visible:ring-offset-gray-800 rounded"
              >
                contact@handitdown.edu
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hand It Down. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
