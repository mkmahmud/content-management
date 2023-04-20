import React from 'react';
import logo from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='border-t-4 border-orange-400 px-8'>
            <div className='md:flex items-center justify-between py-6 ' >
                <Link to='/' class="flex  items-center" >
                    <div>
                        <img class="h-10 w-10" src={logo} alt="Logo" />
                    </div>
                    <div className='text-left px-2 leading-none font-bold'>
                        <h2>Con<span className='text-orange-400'>t</span>ent <br /> Ma<span className='text-orange-400'>nag</span>ement</h2>
                    </div>
                </Link>

                <div class="ml-10  flex items-baseline flex-col md:flex-row space-x-4">
                    <Link to="/home" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link to="/about" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                    <Link to="/blog" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                    <Link to="/page" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Page</Link>
                    <Link to="/contact" class="text-gray-800 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>

                <div className="icons flex space-x-2">
                    <a href="_#">       <BsFacebook></BsFacebook></a>
                    <a href="_#">       <BsInstagram></BsInstagram></a>
                    <a href="_#">       <BsLinkedin></BsLinkedin> </a>
                    <a href="_#">       <BsTwitter></BsTwitter> </a>
                </div>

            </div>
            <div className='md:flex justify-between itmes-center border-t-2 py-4'>
                <p>copyright &copy; content management 2023</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;