import Image from 'next/image';
import React from 'react';

const LargeCard = ({img, title, description, buttonText}) => {
  return (
            <section className='relative py-16'>
                <div className='relative h-96 min-w-[300px]'>
                    <Image 
                        className='rounded-2xl'
                        src={img}
                        alt="cover"
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className='absolute top-32 left-12'>
                    <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                    <p>{description}</p>
                    <button className='bg-gray-900  text-white py-2 px-4 rounded-lg mt-5'>{buttonText}</button>
                </div>
            </section>


        );
};

export default LargeCard;
