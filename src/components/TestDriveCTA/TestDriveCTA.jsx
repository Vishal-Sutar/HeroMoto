import { Link } from 'react-router-dom';

const TestDriveCTA = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Hero Motors?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a test drive today and feel the difference for yourself.</p>
          <Link to="./contact"><button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Book a Test Ride
          </button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default TestDriveCTA