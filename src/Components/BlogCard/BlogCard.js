import React from 'react';
import image from "../../Assets/images/blog.jpg";
import { BsFillShareFill } from 'react-icons/bs';

const BlogCard = () => {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='rounded h-[400px] overflow-hidden'>

            <div className='h-full bg-[#ffa50075]  flex flex-col justify-between hover:justify-around  py-4 '>

                <div className=' flex justify-between px-4 py-2'>
                    <div>
                        <span className='mx-2 bg-red-200  px-4 rounded '>Toys</span>
                        <span className='mx-2 bg-red-200  px-4 rounded '>Toys</span>
                    </div>
                    <a href="_#" className='text-white'> <BsFillShareFill></BsFillShareFill> </a>
                </div>

                <div className=' text-left  px-4'>
                    <span className='text-gray-300'>20 Nov, 2022</span>
                    <h2 className='py-2 text-white font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente quae architecto quaerat accusantium ullam.</h2>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores beatae omnis adipisci necessitatibus fugit, iusto quod excepturi praesentium aspernatur optio temporibus culpa facere quos, accusantium voluptatem. Fugiat, illum qui. </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;