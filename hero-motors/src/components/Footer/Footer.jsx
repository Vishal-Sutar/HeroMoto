
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/assets/hero-white.jpg" class="h-10 w-10" alt="hero-logo"/>
              <span className="text-xl font-bold">HERO MOTORS</span>
            </div>
            <p className="text-gray-400">Redefining automotive excellence since 1985.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Models</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors" >Sport</li>
              <li className="text-gray-400 hover:text-white transition-colors" >Adventure</li>
              <li className="text-gray-400 hover:text-white transition-colors" >Electric</li>
              <li className="text-gray-400 hover:text-white transition-colors" >Scooter</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" >About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" >Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" >News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" >Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">1234 Auto Drive</li>
              <li className="text-gray-400">Detroit, MI 48201</li>
              <li className="text-gray-400">(800) 555-HERO</li>
              <li className="text-gray-400">info@heromotors.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hero Motors. All rights reserved. Created by Vishal Sutar.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer