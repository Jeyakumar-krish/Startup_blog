import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {auth} from '@/auth'

const Navbar = async  () => {
  const session = await auth()  
    return (
   <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
    <nav className="flex justify-between items-center">
        <Link href="/">
        <Image src="/logo.jpg" alt="" width={44} height={30}/> 
        </Link>
        <div className='flex items-center gap-5'>

        </div>
    </nav>
   </header>

  )
}

export default Navbar