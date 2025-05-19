import { FaShieldAlt, FaCogs, FaGasPump, FaBiking } from 'react-icons/fa'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow observe-me">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Reliability",
      description: "Hero bikes have a reputation for being reliable and durable."
    },
    {
      icon: <FaCogs className="text-4xl mb-4 text-blue-600" />,
      title: "Affordability",
      description: "Many Hero models are priced competitively, making them accessible to a wide range of riders."
    },
    {
      icon: <FaGasPump className="text-4xl mb-4 text-blue-600" />,
      title: "Eco-Friendly Options",
      description: "Hybrid and electric models for a sustainable future with eco-friendly."
    },
    {
      icon: <FaBiking className="text-4xl mb-4 text-blue-600" />,
      title: "Fuel Efficiency",
      description: "Hero bikes are designed to be fuel-efficient, with offering impressive mileage figures."
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 observe-me">Why Choose Hero Motors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features