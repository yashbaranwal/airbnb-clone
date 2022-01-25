import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

const Search = ({searchResults}) => {
  const router = useRouter();
  const {location, startDate, endDate, guests} = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  console.log(searchResults,"search results")
  return( 
        <div>
            <Header
                placeholder = {`${location} | ${range} | ${guests} guests`}             
             />
            <main className='flex'>
              <section className='flex-grow py-14 px-6'>
                <p className='text-xs'>300+ stays - {range} - for {guests} guests</p>
                <h3 className='text-3xl font-semibold pb-5'>Stays in {location}</h3>
                <div className='hidden lg:inline-flex mb-5 space-x-3 mt-4 whitespace-nowrap text-gray-800'>
                  <p className='button'>Cancellation Flexibility</p>
                  <p className='button'>Type of Place</p>
                  <p className='button'>Price</p>
                  <p className='button'>Rooms and Beds</p>
                  <p className='button'>More Filters</p>
                </div>
                <div className='flex flex-col'>
                  {searchResults?.map(({location, title, price, star, img, total, description}) => (
                    <InfoCard
                        key={location}
                        img={img}
                        location={location}
                        title={title}
                        price={price}
                        star={star}
                        total={total}
                        description={description}
                    />
                  ))}
                </div>
              </section>
            </main>
            <Footer />
        </div>
  );
};

export default Search;

export async function getServerSideProps(){
  const searchResults = await fetch("https://links.papareact.com/isz")
  .then(res => res.json())

  return{
    props:{
      searchResults: searchResults
    }
  }
}
