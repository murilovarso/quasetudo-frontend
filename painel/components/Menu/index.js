import React from 'react'
import Link from 'next/link'

const Menu = ({ children }) => {
  return children
}

const MenuNav = ({ children }) => {
  return <nav className='mt-10'>{children}</nav>
}
const MenuNavItem = ({ children, href, Icon }) => {
  //
  // flex items-center mt-4 py-2 px-6 border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100
  return (
    <Link href={href}>
      <a className='flex items-center mt-4 py-2 px-6 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'>
        {Icon && <Icon className='h-5 w-5' />}
        <span className='mx-4'>{children}</span>
      </a>
    </Link>
  )
}

const MenuBrand = ({ children }) => {
  return (
    <div className='flex items-center justify-center mt-8'>
      <div className='flex items-center'>
        <span className='text-white text-2xl mx-2 font-semibold'>
          {children}
        </span>
      </div>
    </div>
  )
}
Menu.Brand = MenuBrand
Menu.Nav = MenuNav
Menu.NavItem = MenuNavItem

export default Menu
