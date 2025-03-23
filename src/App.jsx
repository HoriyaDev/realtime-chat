import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer, Bounce, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/Home'

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/home",
      element: <Home />
    }
  ])

  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  )
}

export default App
