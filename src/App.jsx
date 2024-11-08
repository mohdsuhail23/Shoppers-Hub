import  {React , useState}  from 'react'
import './App.css'
import Header from './components/Header'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'



function App() {

  
  const router= createBrowserRouter([
    {
      path:'/',
      element: <><Header></Header> <Home></Home></>
    },
    {
      path:'/about',
      element: <><Header></Header> <About></About></>
    },
    {
      path:'/contact',
      element: <><Header></Header></>
    },
    {
      path:'/cart',
      element: <><Header></Header><Cart/></>
    },
    // {
    //   path: '/user/:username',
    //   element:<> <Header></Header> <User></User></>
    // }
  ])

  return (
    <>
    <RouterProvider router={router}/>
   <div>
  
{/* <Header/> */}

</div>

    </>
  )
}

export default App
