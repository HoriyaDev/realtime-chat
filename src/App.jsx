import { useState } from 'react'
import SignUp from './pages/login/SignUp'
import Login from './pages/login/Login'
import Home from './pages/Home'
import { createBrowserRouter , RouterProvider } from 'react-router-dom' 
function App() {

  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/signup",
      element:<SignUp />
    },
    {
      path:"/home",
      element:<Home />
    }
  ])
 

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
