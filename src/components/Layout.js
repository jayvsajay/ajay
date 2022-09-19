import React from 'react'
import Navbar from './Navbar'
import '../Styles/global.css'

function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
        {children}
        </div>

        <footer>

          <p>Copy right @ 2022</p>
        </footer>
    </div>
  )
}

export default Layout