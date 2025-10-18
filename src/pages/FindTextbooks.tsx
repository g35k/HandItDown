import { useState } from 'react';
import { SearchIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
// Sample data - expanded to include electronics and equipment
const sampleMaterials = [{
  id: '1',
  title: 'Introduction to Psychology',
  author: 'David G. Myers',
  course: 'PSY 101',
  professor: 'Johnson',
  price: 25.99,
  image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  availability: 'inStock' as const,
  isbn: '9781319132101',
  category: 'textbooks'
}, {
  id: '2',
  title: 'Calculus: Early Transcendentals',
  author: 'James Stewart',
  course: 'MATH 201',
  professor: 'Smith',
  price: 35.5,
  image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80',
  availability: 'lowStock' as const,
  isbn: '9781337613927',
  category: 'textbooks'
}, {
  id: '3',
  title: 'Organic Chemistry',
  author: 'Paula Y. Bruice',
  course: 'CHEM 301',
  professor: 'Williams',
  price: 42.0,
  image: 'https://images.unsplash.com/photo-1532153259564-a5f24f261f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  availability: 'outOfStock' as const,
  isbn: '9780134042282',
  category: 'textbooks'
}, {
  id: '4',
  title: 'TI-84 Plus CE Graphing Calculator',
  author: 'Texas Instruments',
  course: 'Multiple courses',
  professor: 'Various',
  price: 89.99,
  image: 'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  availability: 'inStock' as const,
  isbn: '',
  category: 'electronics'
}, {
  id: '5',
  title: 'Arduino Starter Kit',
  author: 'Arduino',
  course: 'CS 301',
  professor: 'Anderson',
  price: 45.99,
  image: 'https://images.unsplash.com/photo-1553406830-ef409b93f3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  availability: 'lowStock' as const,
  isbn: '',
  category: 'electronics'
}, {
  id: '6',
  title: 'Lab Safety Goggles',
  author: 'Safety First',
  course: 'CHEM 101, BIO 101',
  professor: 'Various',
  price: 12.5,
  image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  availability: 'inStock' as const,
  isbn: '',
  category: 'equipment'
}, {
  id: '7',
  title: 'Art Supply Set - Acrylic Paints',
  author: 'Creative Arts',
  course: 'ART 202',
  professor: 'Garcia',
  price: 29.99,
  image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  availability: 'inStock' as const,
  isbn: '',
  category: 'equipment'
}, {
  id: '8',
  title: 'Lab Coat - Medium',
  author: 'Lab Essentials',
  course: 'Multiple science courses',
  professor: 'Various',
  price: 24.99,
  image: 'https://images.unsplash.com/photo-1581056771107-24ca5ef033ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  availability: 'inStock' as const,
  isbn: '',
  category: 'equipment'
}];
export function FindTextbooks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState({
    textbooks: true,
    electronics: true,
    equipment: true
  });
  const [inStockOnly, setInStockOnly] = useState(false);
  // Handle category filter changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategories({
      ...selectedCategories,
      [category]: !selectedCategories[category as keyof typeof selectedCategories]
    });
  };
  // Filter materials based on search term, categories, and availability
  const filteredMaterials = sampleMaterials.filter(material => {
    // Check if category is selected
    if (!selectedCategories[material.category as keyof typeof selectedCategories]) {
      return false;
    }
    // Check if material is in stock (when filter is applied)
    if (inStockOnly && material.availability === 'outOfStock') {
      return false;
    }
    // Check if search term matches title, course, professor, or ISBN
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return material.title.toLowerCase().includes(searchLower) || material.course.toLowerCase().includes(searchLower) || material.professor.toLowerCase().includes(searchLower) || material.isbn.includes(searchLower);
    }
    return true;
  });
  // Handle adding to cart
  const addToCart = (id: string) => {
    console.log(`Added item ${id} to cart`);
    // In a real app, this would update cart state and possibly store in localStorage/backend
  };
  return <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <SectionHeader title="Find Materials" subtitle="Search our collection of textbooks, electronics, and equipment" />
        <div className="mb-8">
          <div className="relative">
            <Input type="text" placeholder="Search by keyword, product name, course code, or ISBN..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} fullWidth className="pl-10" />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="md:w-64">
            <Card>
              <Card.Header className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Filters</h3>
                <button onClick={() => setShowFilters(!showFilters)} className="md:hidden text-gray-500 hover:text-gray-700">
                  {showFilters ? 'Hide' : 'Show'}
                </button>
              </Card.Header>
              {showFilters && <Card.Body>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Category</h4>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" checked={selectedCategories.textbooks} onChange={() => handleCategoryChange('textbooks')} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          <span>Textbooks</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" checked={selectedCategories.electronics} onChange={() => handleCategoryChange('electronics')} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          <span>Electronics</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" checked={selectedCategories.equipment} onChange={() => handleCategoryChange('equipment')} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                          <span>Equipment</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Availability</h4>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={inStockOnly} onChange={() => setInStockOnly(!inStockOnly)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span>In Stock Only</span>
                      </label>
                    </div>
                  </div>
                </Card.Body>}
            </Card>
          </div>
          {/* Results */}
          <div className="flex-1">
            {filteredMaterials.length > 0 ? <div>
                <p className="text-gray-600 mb-4">
                  Found {filteredMaterials.length} items
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMaterials.map(material => <Card key={material.id} className="h-full transition-transform hover:translate-y-[-4px] hover:shadow-md">
                      <div className="relative pt-[75%] bg-gray-100">
                        <img src={material.image} alt={material.title} className="absolute top-0 left-0 w-full h-full object-cover" />
                        <div className="absolute top-2 right-2">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${material.availability === 'inStock' ? 'bg-green-100 text-green-800' : material.availability === 'lowStock' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {material.availability === 'inStock' ? 'In Stock' : material.availability === 'lowStock' ? 'Low Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </div>
                      <Card.Body>
                        <h3 className="font-bold text-lg mb-1 line-clamp-2">
                          {material.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          by {material.author}
                        </p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">
                              {material.course}
                            </p>
                            <p className="text-xs text-gray-500">
                              {material.professor.startsWith('Various') ? material.professor : `Prof. ${material.professor}`}
                            </p>
                          </div>
                          <p className="font-bold text-lg text-blue-600">
                            ${material.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button variant="primary" fullWidth onClick={() => addToCart(material.id)} disabled={material.availability === 'outOfStock'}>
                            <ShoppingCartIcon className="h-4 w-4 mr-2" />
                            {material.availability === 'outOfStock' ? 'Out of Stock' : 'Add to Cart'}
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>)}
                </div>
              </div> : <Card className="text-center py-12">
                <Card.Body>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No materials found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filters to find what you're
                    looking for.
                  </p>
                </Card.Body>
              </Card>}
          </div>
        </div>
      </div>
    </div>;
}