import React from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';

const Blogs = () => {
    return (
        <div className='px-8 py-6'>

            <div>
                <h2 className='text-4xl font-bold text-left'>OUR BEST<span className='text-orange-400'>ARTICLES</span></h2>
            </div>

            <div className='md:flex itmes-center justify-between py-10'>
                <div>
                    <select name="other categories" id="" className='border border-gray-400 rounded px-4 py-2'>
                        <option value="Other" selected>Other categories</option>
                        <option value="Other">Other</option>
                        <option value="Other">Other</option>
                    </select>
                    <select name="other tags" id="" className='border border-gray-400 rounded px-4 py-2 mx-2'>
                        <option value="Other" selected>Other tags</option>
                        <option value="Other">Other</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className='my-2'>
                    <select name="other tags" id="" className='border border-gray-400 rounded px-4 py-2 mx-2'>
                        <option value="Other" selected>Filter</option>
                        <option value="Other">Other</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-4 md:px-10'>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3  gap-4 md:px-10 my-10'>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                </div>
            </div>


            <div class="flex items-center justify-center my-10">
                <div class="flex mr-4">
                    <a href="#" class="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-md">&laquo; </a>
                </div>
                <a href="#" class="inline-block px-4 py-2 mr-2 font-medium text-gray-700 bg-gray-200 rounded-md">1</a>
                <a href="#" class="inline-block px-4 py-2 mr-2 font-medium text-gray-700 hover:text-white hover:bg-gray-500 rounded-md">2</a>
                <a href="#" class="inline-block px-4 py-2 mr-2 font-medium text-gray-700 hover:text-white hover:bg-gray-500 rounded-md">3</a>
                <a href="#" class="inline-block px-4 py-2 mr-2 font-medium text-gray-700 hover:text-white hover:bg-gray-500 rounded-md">4</a>
                <div class="flex ml-4">
                    <a href="#" class="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-md ml-2"> &raquo;</a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;