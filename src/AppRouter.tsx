import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'

// pages
import { Home } from './pages/Home'
import { FindTextbooks } from './pages/FindTextbooks'
import { DonateBook } from './pages/DonateBook'
import { StudentAdvice } from './pages/StudentAdvice'
import { Dashboard } from './pages/Dashboard'
import { TextbookDetails } from './pages/TextbookDetails'
import { Cart } from './pages/Cart'
import { About } from './pages/About'
import { Billing } from './pages/Billing'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="find" element={<FindTextbooks />} />
        <Route path="donate" element={<DonateBook />} />
        <Route path="advice" element={<StudentAdvice />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="textbooks/:id" element={<TextbookDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="billing" element={<Billing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
