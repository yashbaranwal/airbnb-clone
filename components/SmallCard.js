import Image from 'next/image';
import React from 'react';

const SmallCard = ({img, location, distance}) => {
  return (
            <div className='flex items-center space-x-4 rounded-xl hover:bg-gray-100 cursor-pointer m-5 hover:scale-105 transition transform duration-200 ease-out'>
                <div className='relative h-16 w-16'>
                    <Image 
                        className='rounded-lg'
                        src={img}
                        layout="fill"
                        alt={location}
                    />
                </div>
                <div>
                    <h2>{location}</h2>
                    <h3 className='text-gray-500'>{distance}</h3>
                </div>
            </div>
        );
};

export default SmallCard;