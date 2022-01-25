import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
            <div className='relative h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[400px]'>
                <Image 
                    src="https://links.papareact.com/0fm"
                    layout='fill'
                    objectFit='cover'
                    alt="banner"
                />
                <div className='absolute top-1/2 w-full text-center'>
                    <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
                    <button className='text-purple-500 bg-white py-3 px-10 shadow-md hover:shadow-lg font-bold rounded-full my-2 active:scale-90 transition duration-150'>I&apos;m Flexible</button>
                </div>
            </div>
        );
};

export default Banner;
