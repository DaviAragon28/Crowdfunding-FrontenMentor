import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const Menu = () => {
  const { openMenu } = useContext(AppContext)
  return (
    <div className={`fixed z-20 h-screen bottom-0 right-0 left-0  transition-all backdrop-brightness-50  pt-20 px-6 ${openMenu ?  'top-0' : '-top-[200%]'} md:hidden`}>
      <nav className='bg-white rounded-md shadow-xl'>
        <ul>
          <li className='px-8 py-5  font-medium border-b'>About</li>
          <li className='px-8 py-5  font-medium border-b'>Discover</li>
          <li className='px-8 py-5  font-medium'>Get Started</li>
        </ul>
      </nav>
    </div>
  )
}
