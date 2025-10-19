import { Link } from 'react-router-dom'
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">HAND IT DOWN</h3>
            <p className="text-sm text-gray-300">
              A student-run textbook exchange platform helping to make education
              more affordable and sustainable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">QUICK LINKS</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/find" className="text-gray-300 hover:text-white">
                  Find Materials
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/advice" className="text-gray-300 hover:text-white">
                  Advice
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">SUSTAINABILITY</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  Campus Initiatives
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">CONTACT</h3>
            <p className="text-sm text-gray-300">
              Questions or feedback? Reach out to us at{' '}
              <a
                href="mailto:contact@handitdown.edu"
                className="text-accent hover:underline"
              >
                contact@handitdown.edu
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hand It Down. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
