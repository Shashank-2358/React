import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className='top-0 sticky'>
      <nav className='bg-white border-gray-700 px-4 lg:px-6 py-2.5'>
          <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
              <Link to="/" className="flex items-center">
                <img className='w-12 h-10 object-cover' src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nbyUyMGtzfGVufDB8fDB8fHww" alt="logo" />
              </Link>
              <div className='flex items-center lg:order-2'>
                <Link to="#"
                  className="text-zinc-700 hover:bg-zinc-800 hover:text-zinc-100 focus:ring-red-900/50 font-medium rounded-lg text-lg px-4 py-2 focus:outline-none"
                > Log in</Link>
                 <Link to="#"
                  className="text-zinc-700 hover:bg-zinc-800 focus:ring-red-900/50 hover:text-zinc-100 font-medium rounded-lg text-lg px-4 py-2 focus:outline-none"
                > Get started</Link>
              </div>
              <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
                  <ul className='flex flex-wrap mt-4 ml-5 p-2 lg:flex-row '>
                    <li>
                      <NavLink to="/" className={({isActive})=>`block py-2 pr-3 duration-200 ${isActive ? "text-orange-700":"text-zinc-600"} border-gray-400 hover:bg-gray-200 lg:hover:bg-transparent`}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={({isActive})=>`block py-2 pr-3 duration-200 ${isActive ? "text-orange-700":"text-zinc-600"} border-gray-400 hover:bg-gray-200 hover:text-orange-700`}>
                       About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user" className={({isActive})=>`block py-2 pr-3 duration-200 ${isActive ? "text-orange-700":"text-zinc-600"} border-gray-400 hover:bg-gray-200 hover:text-orange-700`}>
                        User
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/git" className={({isActive})=>`block py-2 pr-3 duration-200 ${isActive ? "text-orange-700":"text-zinc-600"} border-gray-400 hover:bg-gray-200 hover:text-orange-700`}>
                        Git Hub
                      </NavLink>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>

    </header>
  )
}

export default Header