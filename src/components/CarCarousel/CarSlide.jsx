const CarSlide = ({ car, isActive }) => {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      <img 
        src={car.image} 
        alt={car.name} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white">
        <h3 className={`text-3xl md:text-5xl font-bold mb-2 transition-all duration-500 ${isActive ? 'translate-x-0' : '-translate-x-10'}`}>
          {car.name}
        </h3>
        <p className={`text-xl md:text-2xl mb-4 transition-all duration-500 delay-100 ${isActive ? 'translate-x-0' : '-translate-x-10'}`}>
          Starting at {car.price}
        </p>
        <ul className={`grid grid-cols-2 gap-2 mb-6 transition-all duration-500 delay-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          {car.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        {/* <button
          className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-500 delay-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        >
          Configure Now
        </button> */}
      </div>
    </div>
  )
}

export default CarSlide


