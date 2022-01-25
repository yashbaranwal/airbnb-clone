import Image from 'next/image';
import React, { useState } from 'react';
import { SearchIcon, MenuIcon, UsersIcon, GlobeAltIcon, UserCircleIcon } from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'; 
import { useRouter } from 'next/router';

const Header = ({placeholder}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleSearch = () =>{
        router.push({
            pathname:"/search",
            query:{
                location: searchTerm,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests: noOfGuests 
            }
        });
    }

    const resetInput = () =>{
        setSearchTerm("");
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    return (
        <header className='sticky top-0 p-5 md:px-10 z-50 shadow-md bg-white grid grid-cols-3'>
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit='contain'
                    objectPosition="left"
                    alt="airbnb logo"
                />
            </div>
            <div className='flex rounded-full md:border-2 items-center md:shadow-sm py-2'>
                <input className='outline-none flex-grow ml-5 bg-transparent text-sm 
                text-gray-600 placeholder-gray-400'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text" 
                    placeholder={placeholder || 'Start your search'} />
                <SearchIcon className='hidden md:inline-flex h-8 cursor-pointer md:mx-2 
                bg-red-400 rounded-full text-white p-2' />
            </div>
            <div className='flex items-center space-x-4 text-gray-400 justify-end'>
                <p className='hidden md:inline-flex cursor-pointer hover:text-gray-500'>
                Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer hover:text-gray-500' />
                <div className='flex items-center space-x-2 border-2 hover:border-gray-500 
                p-2 rounded-full cursor-pointer'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {searchTerm && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        rangeColors={["#FD5B51"]}
                        // minDate={new Date()}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h3 className='text-2xl flex-grow font-semibold'>No. of Guests</h3>
                        <UsersIcon className='h-5' />
                        <input 
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                            value={noOfGuests} 
                            type="number" 
                            onChange={e => setNoOfGuests(e.target.value)}
                            min={1}
                        />
                    </div> 
                    <div className='flex'>
                        <button className='flex-grow text-gray-400' onClick={resetInput}>Cancel</button>
                        <button onClick={() => handleSearch()} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

