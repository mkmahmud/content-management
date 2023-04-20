import React from 'react';

const SectionTitile = ({ first, second, sub }) => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>{first} <span className='text-orange-400'>{second}</span></h2>
            <p>{sub}</p>
        </div>
    );
};

export default SectionTitile;