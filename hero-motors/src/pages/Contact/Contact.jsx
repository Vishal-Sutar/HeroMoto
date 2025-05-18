import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or feedback.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">(800) 555-HERO</p>
                  <p className="text-gray-600">Monday-Friday: 8am-6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@heromotors.com</p>
                  <p className="text-gray-600">Customer Support: support@heromotors.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                  <p className="text-gray-600">1234 Auto Drive</p>
                  <p className="text-gray-600">Kolhapur, MH 416118</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 9am-7pm</p>
                  <p className="text-gray-600">Saturday: 10am-4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Book a Test Ride</option>
                    <option>General Inquiry</option>
                    <option>Vehicle Information</option>
                    <option>Service Appointment</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d638.0230598552529!2d74.13333219239057!3d18.487168081100982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747500784501!5m2!1sen!2sin" 
                width="100%" 
                height="450"
                style={{border:0 }}
                allowfullscreen="" 
                loading="lazy" 
                title="Hero Motors Headquarters Location"
                >
          </iframe>
          {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018607!2d-73.987844924164!3d40.74844047138915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623866428430!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            title="Hero Motors Headquarters Location"
          ></iframe> */}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact