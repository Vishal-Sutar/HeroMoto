import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CarCarousel from './components/CarCarousel/CarCarousel'
import Features from './components/Features/Features'
import TestDriveCTA from './components/TestDriveCTA/TestDriveCTA'
import Footer from './components/Footer/Footer'

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.observe-me').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const cars = [
    {
      id: 1,
      name: 'Hero Mavrick',
      price: '₹1,99,500',
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/premia/acja/acja/bike-image/gallery-05.png',
      features: ['440 cc', '32 kmpl', '6 Speed Manual', '191 kg']
    },
    {
      id: 2,
      name: 'Hero Karizma XMR',
      price: '₹1,81,400',
      image: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/premia/content-fragments/karizma-xmr/assets/gallery/updated/5.webp',
      features: ['210 cc', '32 kmpl', '6 Speed Manual', '163.5 kg']
    },
    {
      id: 3,
      name: 'Hero Xpulse 210',
      price: '₹1,75,800',
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/premia/acaa/product-detail/image-gallery/xpulse-gallery-images/update/g-1-web.jpg',
      features: ['210 cc', '38 kmpl', '6 Speed Manual', '168 kg']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 observe-me">Our Featured Models</h2>
        <CarCarousel cars={cars} />
      </div>

      <Features />
      <TestDriveCTA />
      <Footer />
    </div>
  )
}

export default App