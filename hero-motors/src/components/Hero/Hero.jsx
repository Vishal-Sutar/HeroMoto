import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-2xl animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience The Road Like Never Before</h1>
          <p className="text-xl text-gray-300 mb-8">Discover the perfect blend of power, performance and innovation with Hero Motors.</p>
           <Link to="/models"> <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300 transform hover:scale-105">
            Explore Models <FiArrowRight className="ml-2" />
          </button></Link>
        </div> 
      </div>
    </div>
  )
}

export default Hero