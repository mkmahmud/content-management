import React, { useState } from 'react';
import logo from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };


    return (
        <nav class="bg-gray-100 border-b-4 border-orange-400">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">

                        <Link to='/' class="flex flex-shrink-0 items-center" >
                            <div>
                                <img class="h-10 w-10" src={logo} alt="Logo" />
                            </div>
                            <div className='text-left px-2 leading-none font-bold'>
                                <h2>Con<span className='text-orange-400'>t</span>ent <br /> Ma<span className='text-orange-400'>nag</span>ement</h2>
                            </div>
                        </Link>

                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <Link to="/" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/about" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                <Link to="/blogs" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                                <Link to="/page" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Page</Link>
                                <Link to="/contact" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:block">
                        <Link to="/" class="text-gray-200 bg-orange-400 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</Link>
                    </div>

                    <div class="-mr-2 flex md:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>

                            {
                                isMobileNavOpen
                                    ?
                                    <svg onClick={() => handleMobileNavToggle()} class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleMobileNavToggle()} class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>


                            }




                        </button>
                    </div>
                </div>
            </div>


            {
                isMobileNavOpen
                &&
                <div class={`md:hidden ${isMobileNavOpen ? "block" : "hidden"
                    } transition duration-300 ease-in-out`} id="mobile-menu" >
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/home" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/about" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to="/blog" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                        <Link to="/page" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Page</Link>
                        <Link to="/contact" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            }

        </nav>
    );
};

export default Navbar;