import { FaBiking, FaCogs, FaLeaf } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Models = () => {
  const vehicleTypes = [
    {
      id: 1,
      name: 'Normal',
      icon: <FaBiking className="text-4xl text-blue-600" />,
      models: [
        { name: 'Hero Splendor', price: '₹77,176', range: '70 kmpl', image: 'https://cdn.bikedekho.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor6594ef51310c8.jpg?imwidth=880' },
        { name: 'Hero HF Deluxe', price: '₹70,998', range: '70 kmpl', image: 'https://cdn.bikedekho.com/processedimages/hero/hf-delux-bs6/source/hf-delux-bs6658ebaf5c432f.jpg?imwidth=880' }
      ]
    },
    {
      id: 2,
      name: 'Sport',
      icon: <FaBiking className="text-4xl text-blue-600" />,
      models: [
        { name: 'Hero Xtreme 125R', price: '₹1,00,200', range: '66 kmpl', image: 'https://cdn.bikedekho.com/processedimages/hero/xtreme-125r/source/xtreme-125r681da729b49f9.jpg?imwidth=880' },
        { name: 'Hero Karizma XMR', price: '₹1,81,000', range: '41.55 kmpl', image: 'https://cdn.bikedekho.com/processedimages/hero/karizma-xmr-210/source/karizma-xmr-21064edbde79e29f.jpg?imwidth=880' }
      ]
    },
    {
      id: 3,
      name: 'Electric',
      icon: <FaLeaf className="text-4xl text-blue-600" />,
      models: [
        { name: 'Hero Vida V2', price: '₹74,998', range: '380 miles', image: 'https://cdn.bikedekho.com/processedimages/vida/vida-v2/source/vida-v26751ab16a07ef.jpg?imwidth=880' },
        { name: 'Hero Vida Z', price: '₹1,00,000', range: '420 miles', image: 'https://cdn.bikedekho.com/processedimages/vida/vida-z/source/vida-z678c8d6f00f7f.jpg?imwidth=880' }
      ]
    },
    {
      id: 4,
      name: 'Scooter',
      icon: <FaCogs className="text-4xl text-blue-600" />,
      models: [
        { name: 'Hero Xoom 110', price: '₹84,998', range: '53.4 kmpl', image: 'https://cdn.bikedekho.com/processedimages/hero/xoom-110/source/xoom-11063d8b13c50561.jpg?imwidth=880' },
        { name: 'Hero Destini 125', price: '₹91,000', range: '59 kmpl', image: 'https://cdn.bikedekho.com/processedimages/hero/destini/source/destini66dea4e2c11aa.jpg?imwidth=880' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Vehicle Models</h1>
          <p className="text-xl max-w-2xl mx-auto">Explore our diverse range of vehicles designed for every lifestyle and need.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {vehicleTypes.map(type => (
          <div key={type.id} className="mb-16">
            <div className="flex items-center mb-8">
              {type.icon}
              <h2 className="text-3xl font-bold ml-4">{type.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {type.models.map((model, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                  <img 
                    src={`${model.image}?auto=format&fit=crop&w=800&q=80`} 
                    alt={model.name} 
                    className="w-full h-50 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                    <div className="flex justify-between mb-4">
                      <span className="text-blue-600 font-bold">{model.price}</span>
                      <span className="text-gray-600">Range: {model.range}</span>
                    </div>
                    {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Models