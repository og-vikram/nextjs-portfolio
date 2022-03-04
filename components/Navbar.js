import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const directory = "home";
    return (
        <nav className=''>
            <div className='wrapper h-12 md:h-16 flex items-center flex-row bg-gradient-to-r from-fuchsia-600 to-pink-600 w-full text-slate-50 flex-1 justify-between z-10'>
                <div className=''>
                    <Link href='/'>
                        <a className='px-4 md:px-8 py-4 text-base md:text-lg lg:text-xl font-mono'>cd /Users/vikram/{directory}</a>
                    </Link>
                </div>
                <span className='px-4 sm:hidden cursor-pointer' onClick={() => setShow(!show)}><FontAwesomeIcon icon={faBars} /></span>
                <ul className='hidden sm:flex flex-1 justify-end items-center pr-4 md:pr-8 lg:pr-12 gap-4 lg:gap-8 text-lg lg:text-xl'>
                    <Link href='/'><li className='font-outfit cursor-pointer text-opacity-70 hover:text-opacity-100'>home</li></Link>
                    <Link href='/about'><li className='font-outfit cursor-pointer'>about</li></Link>
                    <Link href='/setup'><li className='font-outfit cursor-pointer'>setup</li></Link>
                    <Link href='/contact'><li className='font-outfit cursor-pointer'>contact</li></Link>
                </ul>
            </div>
            {
                show ? <motion.div initial={{ y: -500 }} animate={{ y: 0 }} transition={{ duration: 0.1 }} className='mobile-menu transition-opacity duration-300 font-outfit'>
                    <Link href='/'><a className='mobile-home-selector block py-4 px-4 bg-navMenu text-white text-lg hover:bg-gradient-to-r from-fuchsia-600 to-pink-600'>home</a></Link>
                    <Link href='/about'><a className='mobile-about-selector block py-4 px-4 bg-navMenu text-white text-lg hover:bg-gradient-to-r from-fuchsia-600 to-pink-600'>about</a></Link>
                    <Link href='/setup'><a className='mobile-setup-selector block py-4 px-4 bg-navMenu text-white text-lg hover:bg-gradient-to-r from-fuchsia-600 to-pink-600'>setup</a></Link>
                    <Link href='/contact'><a className='mobile-contact-selector block py-4 px-4 bg-navMenu text-white text-lg hover:bg-gradient-to-r from-fuchsia-600 to-pink-600'>contact</a></Link>
                </motion.div> : null
            }

        </nav>
    )
}
