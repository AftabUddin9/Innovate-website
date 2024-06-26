import React from 'react';

import Overview from './Overview';
import Gradient from './Gradient';
import Cards from './Cards';
import AboutUs from './AboutUs';
import OurConcerns from './OurConcerns';


const Home = () => {

    return (
        <div>
            {/* navbar and overview and gradient*/}
            <div className='w-full bg-center relative'>
                <Overview />
                <Gradient />
            </div>

            {/* portfolio */}
            <Cards />

            <div className='px-3 sm:px-5 md:px-10 2xl:px-[135px] max-w-[1366px] mx-auto flex flex-col gap-20 my-20'>
                {/* about us */}
                <AboutUs />

                {/* concerns */}
                <OurConcerns />
            </div>
        </div>
    )
}

export default Home