import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

// NOTE: named imports to match `export function X() {}` in each page file
import { Welcome } from './pages/Welcome'
import { FindTextbooks } from './pages/FindTextbooks'
import { DonateBook } from './pages/DonateBook'
import { StudentAdvice } from './pages/StudentAdvice'
import { Cart } from './pages/Cart'
import { TextbookDetails } from './pages/TextbookDetails'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/find" element={<FindTextbooks />} />
          <Route path="/donate" element={<DonateBook />} />
          <Route path="/advice" element={<StudentAdvice />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/textbooks/:id" element={<TextbookDetails />} />
          {/* Fallback to something safe so you don't render nothing */}
          <Route path="*" element={<Welcome />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
