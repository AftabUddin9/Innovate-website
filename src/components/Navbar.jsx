import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
// import { Link } from 'react-scroll';
import logo from '../assets/innovate-logo.png'

const Navbar = () => {
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/#about" },
        { link: "Concerns", path: "/#concerns" },
        { link: "Career", path: "/joinUs" },
    ]
    return (
        <section className='bg-[#FFFFFF]'>
            <div className='px-[15px] xl:px-[50px] 2xl:px-[70px] max-w-[1366px] mx-auto'>
                <nav className='static bg-transparent shadow-none'>
                    <div className='flex items-center justify-between relative py-6'>
                        <Link to='/' className='p-0 sm:px-[10px]'>
                            <img src={logo} className='w-[150px] sm:w-[190px]' />
                        </Link>
                        {/* nav items */}
                        <div className='flex items-center xl:gap-x-4'>
                            <ul className='xl:flex items-center xl:gap-x-3 2xl:gap-x-5 hidden'>
                                {
                                    navItems.map(({ link, path }) => <Link to={path} className='hover:text-[#A73E42] group relative'><p className='block px-4 py-4 cursor-pointer'><span className='flex items-center'>{link}</span></p></Link>)
                                }
                            </ul>
                            <div className='flex items-center gap-x-2'>
                                <Link to='/#joinUs'>
                                    <button className="bg-[#E01F26] text-white xl:ml-5 2xl:ml-16 xs-inline-block px-7 py-2 rounded-l-full rounded-r-full hover:bg-[#971B1F] transition-all duration-100 gap-x-2">
                                        <span className='px-2 py-1'>Join Us</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar