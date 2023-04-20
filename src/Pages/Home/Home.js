import React from 'react';
import heroImg from "../../Assets/images/hero.png";
import { Link } from 'react-router-dom';
import SectionTitile from '../../Components/SectionTitile/SectionTitile';
import AwardCard from '../../Components/AwardCard/AwardCard';


const Home = () => {
    return (
        <div>
            {/* Hero */}
            <div className='sm:flex justify-between items-center px-8 py-10 md:h-[80vh]'>
                <div className=' w-full sm:w-1/2  text-left'>
                    <h2 className='text-4xl uppercase font-bold'> a little <span className='text-orange-400'>about us</span></h2>

                    <p className='py-2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa soluta possimus blanditiis, tempora eveniet distinctio praesentium velit at sapiente magnam quae minima voluptatum asperiores, debitis similique, non dolores in. Dicta est, magnam sit asperiores veniam repellendus fNesciunt quae corrupti itaque natus iste nulla?</p>
                    <p className='py-2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa soluta possimus blanditiis, tempora eveniet distinctio praesentium velit at sapiente magnam quae minima voluptatum asperiores, debitis similique, non dolores in. Dicta est, magnam sit asperiores veniam repellendus fNesciunt quae corrupti itaque natus iste nulla?</p>
                    <ul className='py-4 '>
                        <li>*<b>A wounderfull </b> has take position of me.</li>
                        <li>*<b>A wounderfull </b> has take position of me.</li>
                        <li>*<b>A wounderfull </b> has take position of me.</li>
                    </ul>
                    <Link to="/" class="px-10 text-gray-200 bg-orange-400 hover:bg-orange-500 hover:text-white py-2 rounded-md text-sm font-medium">Sign up</Link>
                </div>
                <div className=' my-4 sm:my-0 w-full sm:w-1/2 flex justify-center  sm:justify-end '>
                    <img className='rounded-xl' src={heroImg} alt="" />
                </div>
            </div>


            {/* Award */}

            <div>
                <SectionTitile first='OUR' second='AWARDS' sub='this is our Awards. lots of Yoiu cant imagine '></SectionTitile>

                <div className='md:grid grid-cols-3 gap-4 my-10 mx-2 py-10 px-2 rounded shadow-lg sm:mx-24 bg-white'>
                    <AwardCard></AwardCard>
                    <AwardCard border={true}></AwardCard>
                    <AwardCard></AwardCard>
                </div>
            </div>
        </div>
    );
};

export default Home;