import React from 'react'
import Navigation from './Navigation'
import ChatWindow from './ChatWindow'

const Layout = () => {
  return (
    <>
   <div className='flex'>

   <Navigation />
   <ChatWindow />
   </div>

    </>
  )
}

export default Layout