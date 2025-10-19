import { useState, useMemo } from 'react'
import { SearchIcon, ShoppingCartIcon, XIcon } from 'lucide-react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Card } from '../components/Card'
import { SectionHeader } from '../components/SectionHeader'

// ---------- Types ----------
export type Availability = 'inStock' | 'lowStock' | 'outOfStock'
export type Category = 'textbooks' | 'electronics' | 'equipment'
export type Condition = 'New' | 'Excellent' | 'Good' | 'Fair'

export interface Material {
  id: string
  title: string
  author: string
  course: string
  professor: string
  price: number
  image: string
  availability: Availability
  isbn: string
  category: Category
  department: string
  courseNumber: string
  condition: Condition
  description: string
  advice: { text: string; date: string }[]
}

// ---------- Data ----------
const sampleMaterials: Material[] = [
  {
    id: '1',
    title: 'Digital Logic and Computer Organization',
    author: 'M. Morris Mano & Charles R. Kime',
    course: 'CSC 137',
    professor: 'Nikrouz Faroughi',
    price: 118.5,
    image:
      'https://m.media-amazon.com/images/I/81Qvp-lCzbL._UF1000,1000_QL80_.jpg',
    availability: 'inStock',
    isbn: '9780071836906',
    category: 'textbooks',
    department: 'CSC',
    courseNumber: '137',
    condition: 'Good',
    description:
      'Foundational coverage of digital logic, combinational and sequential circuits, and computer organization concepts with worked examples.',
    advice: [
      { text: 'Master Karnaugh maps and timing diagrams early—labs build on them.', date: 'Aug 28, 2025' },
      { text: 'Bring a notebook for step-by-step state machine derivations.', date: 'Aug 22, 2025' },
    ],
  },
  {
    id: '2',
    title: 'Guide to Computer Forensics & Investigations (Text Only)',
    author: 'Bill Nelson, Amelia Phillips, Christopher Steuart',
    course: 'CSC 153',
    professor: 'Daniel Hammon',
    price: 220.75,
    image:
      'https://images.bwbcovers.com/128/GUIDE-TO-COMPUTER-FORENSICS-INVESTIGATIO-Nelson-Bill-9781285060033.jpg',
    availability: 'lowStock',
    isbn: '9780357672884',
    category: 'textbooks',
    department: 'CSC',
    courseNumber: '153',
    condition: 'Excellent',
    description:
      'Practical introduction to digital evidence handling, forensic tools, legal considerations, and report writing for investigations.',
    advice: [{ text: 'Practice writing clear chain-of-custody notes—grading emphasizes documentation.', date: 'Sep 3, 2025' }],
  },
  {
    id: '3',
    title: 'Raspberry Pi 4 Model B (Used)',
    author: 'Raspberry Pi Foundation',
    course: 'CSC 191/195',
    professor: 'Various',
    price: 44.0,
    image: 'https://vilros.com/cdn/shop/files/ANGLE_f29aeb51-d8e1-4974-9695-2550fcf0bbf4.jpg?v=1715279373',
    availability: 'lowStock',
    isbn: '',
    category: 'electronics',
    department: 'CSC',
    courseNumber: 'ALL',
    condition: 'Good',
    description:
      'Used Raspberry Pi 4 (4GB). Power-tested and flashed with the latest Raspberry Pi OS. MicroSD not included.',
    advice: [
      { text: 'Bring a proper 5V/3A USB-C power supply to avoid throttling.', date: 'Aug 29, 2025' },
    ],
  },
  {
    id: '7',
    title: 'Fundamentals of Database Systems',
    author: 'Ramez Elmasri & Shamkant B. Navathe',
    course: 'CSC 134',
    professor: 'Ying Jin',
    price: 218.25,
    image:
      'https://www.pearson.com/store//pmccommercewebservices/v2/medias/size-W370-A1030-00-25-97-A103000259753-A103000259753-Lrg.jpg?context=bWFzdGVyfGltYWdlc3wyNTkyNDR8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oMWUvaGRjLzE0MjgyNDY0MDAyMDc4L3NpemVfVzM3MF8vQTEwMzAvMDAvMjUvOTcvQTEwMzAwMDI1OTc1My9BMTAzMDAwMjU5NzUzX0xyZy5qcGd8ZDNkMGQ5MTk1YjNhYzI1ODliZDQ5ZTllMGM5YTgzNDc4MTA3ZTY4ZmZjOGFhZDVlYzFkYzMyMWNiZjdjMDdkMQ',
    availability: 'inStock',
    isbn: '9780133970777',
    category: 'textbooks',
    department: 'CSC',
    courseNumber: '134',
    condition: 'Good',
    description:
      'Comprehensive coverage of ER modeling, relational algebra, SQL, normalization, and fundamentals of transactions and indexing.',
    advice: [{ text: 'Do the normalization exercises at the end of Chapter 15 until you can do them without notes.', date: 'Aug 30, 2025' }],
  },
  {
    id: '5',
    title: 'Algorithms (4th Edition)',
    author: 'Robert Sedgewick & Kevin Wayne',
    course: 'CSC 130',
    professor: 'Matthew Phillips',
    price: 67.5,
    image:
      'https://m.media-amazon.com/images/I/61-8ZU7X3UL._AC_UF1000,1000_QL80_.jpg',
    availability: 'outOfStock', // showcase the "Out of Stock" path
    isbn: '9780321573513',
    category: 'textbooks',
    department: 'CSC',
    courseNumber: '130',
    condition: 'Fair',
    description:
      'Classic text on algorithm design and analysis with visualizations and Java implementations for sorting, graphs, and more.',
    advice: [{ text: 'Implement merge, quick, and heap sort from scratch—coding quizzes favor hands-on practice.', date: 'Sep 1, 2025' }],
  },
  {
    id: '6',
    title: 'Arduino Starter Kit (Used)',
    author: 'Arduino',
    course: 'CSC 301',
    professor: 'Various',
    price: 29.95,
    image: 'https://m.media-amazon.com/images/I/618sDG9BuPL._AC_UF894,1000_QL80_.jpg',
    availability: 'lowStock',
    isbn: '',
    category: 'electronics',
    department: 'CSC',
    courseNumber: '301',
    condition: 'Good',
    description:
      'Pre-owned Arduino starter kit with board, USB cable, and essential components. Parts counted and sanitized; box may show wear.',
    advice: [
      { text: 'Run the Blink sketch to verify the board and cable right away.', date: 'Sep 2, 2025' },
    ],
  },
  {
    id: '7',
    title: 'Data Structures: Abstraction and Design Using Java',
    author: 'Elliot B. Koffman & Paul A. T. Wolfgang',
    course: 'CSC 131',
    professor: 'Abeer Abdel Khaleq',
    price: 123.75,
    image:
      'https://m.media-amazon.com/images/I/515BH5lzs6L._UF1000,1000_QL80_.jpg',
    availability: 'lowStock',
    isbn: '9781119703617',
    category: 'textbooks',
    department: 'CSC',
    courseNumber: '131',
    condition: 'Good',
    description:
      'Object-oriented approach to data structures including lists, stacks, queues, trees, and hash tables with analysis and Java examples.',
    advice: [{ text: 'Compare Big-O for each ADT operation—flashcards help before the midterm.', date: 'Aug 27, 2025' }],
  },
  {
    id: '4',
    title: 'TI-84 Plus CE Graphing Calculator (Used)',
    author: 'Texas Instruments',
    course: 'Multiple courses',
    professor: 'Various',
    price: 59.99,
    image: 'https://i5.walmartimages.com/asr/25347529-d276-4c8f-820e-4fbc7906d438.ca90f4fa5a64300d1feaaa4592a38b6d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    availability: 'lowStock',
    isbn: '',
    category: 'electronics',
    department: 'MATH',
    courseNumber: 'ALL',
    condition: 'Good',
    description:
      'Used TI-84 Plus CE. Tested, factory reset, minor cosmetic wear. Ideal for algebra, calculus, and statistics.',
    advice: [
      { text: 'Charge fully before exams; proctors may check battery level.', date: 'Aug 31, 2025' },
    ],
  },
  {
    id: '9',
    title: 'Building Java Programs: A Back to Basics Approach',
    author: 'Stuart Reges & Marty Stepp',
    course: 'CSC 20',
    professor: 'Gita Faroughi',
    price: 129.93,
    image:
      'https://m.media-amazon.com/images/I/91LclcuA1mL._AC_UF1000,1000_QL80_.jpg',
    availability: 'inStock',
    isbn: '9780135471944',
    category: 'textbooks',
    department: 'CSC',
    courseNumber: '20',
    condition: 'Excellent',
    description:
      'Introductory Java text focusing on problem solving, control flow, methods, arrays, objects, and style through lots of practice.',
    advice: [{ text: 'Type out the chapter exercises rather than copy-paste—you’ll catch syntax patterns faster.', date: 'Aug 25, 2025' }],
  },
  {
    id: '10',
    title: 'Honest Work: A Business Ethics Reader',
    author: 'Joanne B. Ciulla, Clancy Martin, & Robert C. Solomon',
    course: 'PHIL 103',
    professor: 'Joshua Carboni',
    price: 92.24,
    image:
      'https://m.media-amazon.com/images/I/51ZeuvFFjhL._AC_UF1000,1000_QL80_.jpg',
    availability: 'inStock',
    isbn: '9780197617052',
    category: 'textbooks',
    department: 'PHIL',
    courseNumber: '103',
    condition: 'Good',
    description:
      'Curated readings on workplace ethics, corporate responsibility, whistleblowing, and professional integrity with case discussions.',
    advice: [{ text: 'Skim each case first, then read the theory—class debates expect you to apply frameworks.', date: 'Sep 4, 2025' }],
  },
  {
    id: '11',
    title: 'Lab Safety Goggles (Used)',
    author: 'Safety First',
    course: 'CHEM 101, BIO 101',
    professor: 'Various',
    price: 6.5,
    image: 'https://m.media-amazon.com/images/I/71WeM393D7L.jpg',
    availability: 'inStock',
    isbn: '',
    category: 'equipment',
    department: 'CHEM',
    courseNumber: '101',
    condition: 'Fair',
    description:
      'Pre-owned chemical splash goggles, sanitized and inspected. ANSI Z87.1 compliant; straps may show light wear.',
    advice: [
      { text: 'Anti-fog spray helps a lot during longer labs.', date: 'Sep 3, 2025' },
    ],
  },
  
]

// Departments for dropdown (CSC instead of CS; added PHIL)
const departments = [
  { value: 'ALL', label: 'All Departments' },
  { value: 'ART', label: 'ART - Art' },
  { value: 'BIO', label: 'BIO - Biology' },
  { value: 'CHEM', label: 'CHEM - Chemistry' },
  { value: 'CSC', label: 'CSC - Computer Science' },
  { value: 'MATH', label: 'MATH - Mathematics' },
  { value: 'PHIL', label: 'PHIL - Philosophy' },
  { value: 'PSY', label: 'PSY - Psychology' },
]

// ---------- Component ----------
export function FindTextbooks() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<Record<Category, boolean>>({
    textbooks: true,
    electronics: true,
    equipment: true,
  })
  const [inStockOnly, setInStockOnly] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState('ALL')
  const [courseNumber, setCourseNumber] = useState('')
  const [selectedItem, setSelectedItem] = useState<Material | null>(null)

  const handleCategoryChange = (category: Category) => {
    setSelectedCategories((prev) => ({ ...prev, [category]: !prev[category] }))
  }

  const filteredMaterials = useMemo(() => {
    return sampleMaterials.filter((material) => {
      // category
      if (!selectedCategories[material.category]) return false
      // availability (exclude only outOfStock when toggled)
      if (inStockOnly && material.availability === 'outOfStock') return false
      // department
      if (selectedDepartment !== 'ALL' && material.department !== selectedDepartment) return false
      // course number (allow items marked 'ALL')
      if (courseNumber && material.courseNumber !== courseNumber && material.courseNumber !== 'ALL') return false
      // search (title, course, prof, isbn)
      if (searchTerm) {
        const s = searchTerm.toLowerCase()
        return (
          material.title.toLowerCase().includes(s) ||
          material.course.toLowerCase().includes(s) ||
          material.professor.toLowerCase().includes(s) ||
          material.isbn.toLowerCase().includes(s)
        )
      }
      return true
    })
  }, [inStockOnly, selectedCategories, selectedDepartment, courseNumber, searchTerm])

  const addToCart = (id: string) => {
    console.log(`Added item ${id} to cart`)
    // Hook into your cart state/localStorage/backend here
  }

  const handleItemClick = (material: Material) => setSelectedItem(material)
  const closeModal = () => setSelectedItem(null)

  return (
    <div className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Find Materials"
          subtitle="Browse our eco-friendly collection of textbooks, electronics, and equipment"
        />
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by keyword, product name, course code, or ISBN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              className="pl-10"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="md:w-64">
            <Card>
              <Card.Header className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden text-gray-500 hover:text-gray-700"
                >
                  {showFilters ? 'Hide' : 'Show'}
                </button>
              </Card.Header>

              {showFilters && (
                <Card.Body>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Category</h4>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.textbooks}
                            onChange={() => handleCategoryChange('textbooks')}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span>Textbooks</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.electronics}
                            onChange={() => handleCategoryChange('electronics')}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span>Electronics</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.equipment}
                            onChange={() => handleCategoryChange('equipment')}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span>Equipment</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Course</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Department</label>
                          <select
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                          >
                            {departments.map((dept) => (
                              <option key={dept.value} value={dept.value}>
                                {dept.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Course Number</label>
                          <Input
                            type="text"
                            placeholder="e.g. 137"
                            value={courseNumber}
                            onChange={(e) => setCourseNumber(e.target.value)}
                            fullWidth
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Availability</h4>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={inStockOnly}
                          onChange={() => setInStockOnly(!inStockOnly)}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span>In Stock Only</span>
                      </label>
                    </div>
                  </div>
                </Card.Body>
              )}
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {filteredMaterials.length > 0 ? (
              <div>
                <p className="text-gray-600 mb-4">Found {filteredMaterials.length} items</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMaterials.map((material) => (
                    <div key={material.id} onClick={() => handleItemClick(material)} className="cursor-pointer">
                      <Card className="h-full transition-transform hover:translate-y-[-4px] hover:shadow-md">
                        <div className="relative pt-[75%] bg-gray-100">
                          <img
                            src={material.image}
                            alt={material.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                material.availability === 'inStock'
                                  ? 'bg-green-100 text-green-800'
                                  : material.availability === 'lowStock'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {material.availability === 'inStock'
                                ? 'In Stock'
                                : material.availability === 'lowStock'
                                ? 'Low Stock'
                                : 'Out of Stock'}
                            </span>
                          </div>
                        </div>
                        <Card.Body>
                          <h3 className="font-bold text-lg mb-1 line-clamp-2">{material.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {material.author}</p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-gray-500">{material.course}</p>
                              <p className="text-xs text-gray-500">
                                {material.professor.startsWith('Various') ? material.professor : `Prof. ${material.professor}`}
                              </p>
                            </div>
                            <p className="font-bold text-lg text-blue-600">${material.price.toFixed(2)}</p>
                          </div>
                          <div className="mt-4">
                            <Button
                              variant="primary"
                              fullWidth
                              onClick={(e) => {
                                e.stopPropagation()
                                addToCart(material.id)
                              }}
                              disabled={material.availability === 'outOfStock'}
                            >
                              <ShoppingCartIcon className="h-4 w-4 mr-2" />
                              {material.availability === 'outOfStock' ? 'Out of Stock' : 'Add to Cart'}
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Card className="text-center py-12">
                <Card.Body>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No materials found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-auto object-cover" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-lg text-gray-700 mb-2">by {selectedItem.author}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="bg-blue-50 px-3 py-1.5 rounded-md">
                      <span className="text-xs text-gray-500">Course</span>
                      <p className="font-medium text-gray-900">{selectedItem.course}</p>
                    </div>
                    <div className="bg-blue-50 px-3 py-1.5 rounded-md">
                      <span className="text-xs text-gray-500">Condition</span>
                      <p className="font-medium text-gray-900">{selectedItem.condition}</p>
                    </div>
                    <div className="bg-blue-50 px-3 py-1.5 rounded-md">
                      <span className="text-xs text-gray-500">Availability</span>
                      <p className="font-medium text-gray-900">
                        {selectedItem.availability === 'inStock'
                          ? 'In Stock'
                          : selectedItem.availability === 'lowStock'
                          ? 'Low Stock'
                          : 'Out of Stock'}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-700">{selectedItem.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Student Advice</h3>
                    {selectedItem.advice && selectedItem.advice.length > 0 ? (
                      <div className="space-y-3">
                        {selectedItem.advice.map((item, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-md">
                            <p className="text-gray-800 italic mb-1">"{item.text}"</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No advice has been shared for this item yet.</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-blue-600">${selectedItem.price.toFixed(2)}</span>
                    <Button
                      variant="primary"
                      onClick={() => addToCart(selectedItem.id)}
                      disabled={selectedItem.availability === 'outOfStock'}
                    >
                      <ShoppingCartIcon className="h-4 w-4 mr-2" />
                      {selectedItem.availability === 'outOfStock' ? 'Out of Stock' : 'Add to Cart'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
