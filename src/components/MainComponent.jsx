import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

const MainComponent = () => {
    return (
        <div>
            {/* whole body */}
            <div className='flex flex-col'>
                {/* navbar */}
                <div className='w-full bg-center relative'>
                    <Navbar />
                </div>
                <Home />
            </div>
            <Footer />
        </div>
    )
}

export default MainComponent