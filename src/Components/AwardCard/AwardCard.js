import React from 'react';
import image from "../../Assets/icons/1.png";

const AwardCard = ({border}) => {
    return (
        <div className={`py-6 ${border && 'border-x-2'}`}>
            <img src={image} className='block mx-auto' alt="" />
            <h2 className='text-[#2B1F48] font-bold text-2xl'>Beast Article</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores libero, odit alias delectus ex laboriosam voluptas similique ullam est sapiente.</p>
        </div>
    );
};

export default AwardCard;