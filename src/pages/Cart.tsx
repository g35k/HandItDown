import { useState } from 'react';
import { Link } from 'react-router-dom';
import { XIcon, ShoppingCartIcon, TrashIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
// Sample cart items - in a real app this would come from state/context
const initialCartItems = [{
  id: '1',
  title: 'Introduction to Psychology',
  author: 'David G. Myers',
  price: 25.99,
  image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  quantity: 1
}, {
  id: '4',
  title: 'TI-84 Plus CE Graphing Calculator',
  author: 'Texas Instruments',
  price: 89.99,
  image: 'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  quantity: 1
}];
export function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // Calculate total
  const total = subtotal - discount;
  // Handle quantity changes
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  // Handle item removal
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  // Handle coupon application
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'student10') {
      setDiscount(subtotal * 0.1);
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };
  return <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <SectionHeader title="Your Cart" subtitle="Review your items before checkout" />
        {cartItems.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-bold">
                    Cart Items ({cartItems.length})
                  </h3>
                </Card.Header>
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => <div key={item.id} className="p-4 flex flex-col sm:flex-row">
                      <div className="sm:w-24 sm:h-24 h-32 w-full mb-4 sm:mb-0 mr-4 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-gray-900">
                            {item.title}
                          </h4>
                          <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500" aria-label="Remove item">
                            <XIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          by {item.author}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border rounded-md">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border-r hover:bg-gray-100" aria-label="Decrease quantity">
                              -
                            </button>
                            <span className="px-4 py-1">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border-l hover:bg-gray-100" aria-label="Increase quantity">
                              +
                            </button>
                          </div>
                          <p className="font-bold text-blue-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>)}
                </div>
                <Card.Footer className="flex justify-between items-center">
                  <button onClick={() => setCartItems([])} className="text-red-500 hover:text-red-700 flex items-center">
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                  <Link to="/find">
                    <Button variant="outline">Continue Shopping</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-bold">Order Summary</h3>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {couponApplied && <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex space-x-2">
                        <Input placeholder="Coupon Code" value={couponCode} onChange={e => setCouponCode(e.target.value)} disabled={couponApplied} fullWidth />
                        <Button variant="outline" onClick={applyCoupon} disabled={couponApplied || !couponCode}>
                          Apply
                        </Button>
                      </div>
                      {couponApplied && <p className="text-sm text-green-600 mt-1">
                          Coupon applied successfully!
                        </p>}
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" fullWidth>
                    Proceed to Checkout
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div> : <Card className="text-center py-12">
            <Card.Body>
              <div className="mx-auto w-16 h-16 text-gray-400 mb-4">
                <ShoppingCartIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/find">
                <Button variant="primary">Browse Materials</Button>
              </Link>
            </Card.Body>
          </Card>}
      </div>
    </div>;
}