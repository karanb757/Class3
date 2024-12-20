import React from 'react'
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <h2>
              <Link to="/">sheriyans</Link>
            </h2>
          
            <div>
                <h4>
                  <Link to='/About'>
                  About
                  </Link>
                </h4>

                <h4>
                  <Link to='/Contact'>
                  Contact</Link>
                </h4>

                <h4>
                  <Link to='/Page'>
                  Page</Link>
                </h4>

                <h4>
                  <Link to='/Shop'>
                  Shop</Link>
                </h4>

            </div>
        </nav>
    </>
  )
}

export default Navbar