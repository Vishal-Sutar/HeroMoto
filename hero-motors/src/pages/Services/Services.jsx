import { FaTools, FaCarCrash, FaOilCan, FaCarBattery, FaCarAlt, FaKey } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Regular Maintenance",
      icon: <FaTools className="text-4xl text-blue-600" />,
      description: "Keep your vehicle running smoothly with our comprehensive maintenance services.",
      features: ["Oil changes", "Tire rotations", "Fluid checks", "Brake inspections"]
    },
    {
      id: 2,
      title: "Collision Repair",
      icon: <FaCarCrash className="text-4xl text-blue-600" />,
      description: "Expert repairs to restore your vehicle to its pre-accident condition.",
      features: ["Frame straightening", "Paint matching", "Parts replacement", "Insurance coordination"]
    },
    {
      id: 3,
      title: "Engine Services",
      icon: <FaOilCan className="text-4xl text-blue-600" />,
      description: "Complete engine diagnostics and repair services by certified technicians.",
      features: ["Engine diagnostics", "Timing belt replacement", "Cylinder head repair", "Complete rebuilds"]
    },
    {
      id: 4,
      title: "Electrical Systems",
      icon: <FaCarBattery className="text-4xl text-blue-600" />,
      description: "Diagnose and repair all electrical components in your vehicle.",
      features: ["Battery replacement", "Alternator repair", "Wiring issues", "Lighting systems"]
    },
    {
      id: 5,
      title: "Pre-Purchase Inspection",
      icon: <FaCarAlt className="text-4xl text-blue-600" />,
      description: "Thorough inspection before you buy a used vehicle.",
      features: ["150-point inspection", "Vehicle history report", "Test drive evaluation", "Detailed report"]
    },
    {
      id: 6,
      title: "Key Services",
      icon: <FaKey className="text-4xl text-blue-600" />,
      description: "Key replacement and programming for all makes and models.",
      features: ["Key fob replacement", "Transponder keys", "Remote start installation", "Programming"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">Comprehensive automotive services to keep your vehicle in peak condition.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {service.icon}
                <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Learn More
              </button> */}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-16">
          <h2 className="text-2xl font-bold mb-4">Schedule Your Service</h2>
          <p className="text-gray-600 mb-6">Book an appointment with our service department for expert care.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
            <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
            <select className="p-3 border rounded-lg">
              <option>Select Service</option>
              {services.map(service => (
                <option key={service.id}>{service.title}</option>
              ))}
            </select>
            <input type="date" className="p-3 border rounded-lg" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Schedule Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services