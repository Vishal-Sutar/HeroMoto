import { FaHistory, FaAward, FaUsers, FaMapMarkerAlt, FaBiking} from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const About = () => {
  const milestones = [
    { year: '1985', event: 'Founded in India with a vision for innovative vehicles' },
    { year: '1992', event: 'Launched our first mass-market by introducing Splendor' },
    { year: '2001', event: 'Opened first international manufacturing plant' },
    { year: '2010', event: 'Introduced our first hybrid vehicle' },
    { year: '2018', event: 'Launched the Hero Vida, our first all-electric model' },
    { year: '2023', event: 'Celebrated 5 million vehicles sold worldwide' }
  ]

  const stats = [
    { value: '38', label: 'Years in Business', icon: <FaHistory className="text-3xl text-blue-600" /> },
    { value: '5M+', label: 'Vehicles Sold', icon: <FaBiking className="text-3xl text-blue-600" /> },
    { value: '150+', label: 'Industry Awards', icon: <FaAward className="text-3xl text-blue-600" /> },
    { value: '10K+', label: 'Employees Worldwide', icon: <FaUsers className="text-3xl text-blue-600" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Hero Motors</h1>
          <p className="text-xl max-w-2xl mx-auto">Driving innovation in the automotive industry since 1985.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in India in 1985, Hero Motors began with a simple mission: to build vehicles that combine performance, reliability, and innovative design. 
              What started as a small operation with just 50 employees has grown into a global automotive leader.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've remained committed to pushing boundaries in automotive technology while maintaining the highest standards of quality. 
              From our first sedan to our latest electric vehicles, every Hero Motors vehicle reflects our dedication to excellence.
            </p>
            <p className="text-gray-600">
              Today, with manufacturing facilities on three continents and vehicles sold in over 60 countries, we continue to innovate while staying true to our roots.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80" 
              alt="Hero Motors Factory" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Milestones</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div className={`flex-1 bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <p>{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <h3 className="font-bold">Kolhapur, India</h3>
              </div>
              <p className="text-gray-600">Corporate Headquarters</p>
              <p className="text-gray-600">1234 Auto Drive</p>
              <p className="text-gray-600">Phone: (800) 555-HERO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <h3 className="font-bold">Pune, India</h3>
              </div>
              <p className="text-gray-600">European Operations</p>
              <p className="text-gray-600">5678 Motor Strasse</p>
              <p className="text-gray-600">Phone: +49 30 1234567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <h3 className="font-bold">Sangali, India</h3>
              </div>
              <p className="text-gray-600">Asia-Pacific Headquarters</p>
              <p className="text-gray-600">9012 Qiche Road</p>
              <p className="text-gray-600">Phone: +86 21 87654321</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About