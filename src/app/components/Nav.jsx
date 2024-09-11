import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <ul className='flex justify-center bg-blue-900 p-3'>
        <li className='mx-2'><Link className='text-white' href="/">Home</Link></li>
        <li className='mx-2'><Link className='text-white' href="/about">About</Link></li>
        <li className='mx-2'><Link className='text-white' href="/map">Map</Link></li>
        <li className='mx-2'><Link className='text-white' href="/blog">Blog</Link></li>
        <li className='mx-2'><Link className='text-white' href="/contact">Contact</Link></li>
    </ul>
  )
}

export default Nav
