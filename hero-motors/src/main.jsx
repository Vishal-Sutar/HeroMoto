// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App'
// import Models from './pages/Models/Models'
// import Services from './pages/Services/Services'
// import About from './pages/About/About'
// import Contact from './pages/Contact/Contact'
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/models',
//     element: <Models />
//   },
//   {
//     path: '/services',
//     element: <Services />
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Models from './pages/Models/Models'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/models',
    element: <Models />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)