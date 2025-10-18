import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Welcome } from './pages/Welcome';
import { FindTextbooks } from './pages/FindTextbooks';
import { DonateBook } from './pages/DonateBook';
import { StudentAdvice } from './pages/StudentAdvice';
import { Dashboard } from './pages/Dashboard';
import { TextbookDetails } from './pages/TextbookDetails';
import { Cart } from './pages/Cart';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="find" element={<FindTextbooks />} />
          <Route path="donate" element={<DonateBook />} />
          <Route path="advice" element={<StudentAdvice />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="textbook/:id" element={<TextbookDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}