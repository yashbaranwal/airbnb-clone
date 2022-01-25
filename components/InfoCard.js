import { HeartIcon} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const InfoCard = ({location, title, price, star, img, total, description}) => {
  return( 
        <div className='flex px-4 py-3 first:border-t border-b hover:opacity-80 hover:shadow-lg cursor-pointer
        transition duration-500 ease-out'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image 
                    className='rounded-2xl'
                    src={img}
                    alt={description}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex flex-col pl-5 flex-grow'>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className='h-5' />
                </div>
                <h4 className='text-xl'>{title}</h4>
                <div className='w-10 pt-2 border-b' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex items-end pt-5 justify-between '>
                    <p className='flex items-center'><StarIcon className='h-5 text-red-400' />{star}</p>
                    <div>
                        <p className='font-semibold text-lg pb-2'>{price}</p>
                        <p className='font-extralight text-right'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default InfoCard;
