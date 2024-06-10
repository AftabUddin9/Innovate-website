import React from 'react';
import Navbar from './Navbar';
import Overview from './Overview';
import Gradient from './Gradient';
import Cards from './Cards';
import AboutUs from './AboutUs';
import OurConcerns from './OurConcerns';
import Footer from './Footer';

const Home = () => {

    return (
        <>
            {/* whole body */}
            <div className='flex flex-col'>

                {/* navbar and overview and gradient*/}
                <div className='w-full bg-center relative'>
                    <Navbar />
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
            <Footer />
        </>
    )
}

export default Home