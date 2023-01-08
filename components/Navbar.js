import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src='/logo.png' width={128} height={77}/>
        </div>
        <Link className='link' href="/">Home</Link>
        <Link className='link' href="/about">About</Link>
        <Link className='link' href="/ninjas">Ninja Listing</Link>
    </nav>
  )
}

export default Navbar