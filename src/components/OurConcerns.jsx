import React from 'react'
import { useState } from 'react';

import NextgenComponent from './OurConcerns/NextgenComponent';
import InnovateComponent from './OurConcerns/InnovateComponent';
import InventaComponent from './OurConcerns/InventaComponent';
import InnosphereComponent from './OurConcerns//InnosphereComponent';
import FindJobComponent from './OurConcerns/FindJobComponent';


const OurConcerns = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id)
    };

    const toggleVal1 = toggle === 1 ? "show-content" : "content";
    const toggleVal2 = toggle === 2 ? "show-content" : "content";
    const toggleVal3 = toggle === 3 ? "show-content" : "content";
    const toggleVal4 = toggle === 4 ? "show-content" : "content";
    const toggleVal5 = toggle === 5 ? "show-content" : "content";

    return (
        <div>
            <h3 className='uppercase text-[16px] font-normal text-[#E64D53] text-center mb-8 font-outfit'>Our Concerns</h3>
            <div className='flex flex-col gap-4 -mb-2'>
                <div className='flex flex-wrap items-center justify-center gap-7'>
                    <div className='relative group'>
                        <button onClick={() => updateToggle(1)} className={`${toggle === 1 ? "text-[#E01F26]" : ""} text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]`}>NextGen Tech</button>
                        <div className={`${toggle === 1 ? "show-content" : "content"} absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] transition-all ease duration-300 w-5`} />
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button onClick={() => updateToggle(2)} className={`${toggle === 2 ? "text-[#E01F26]" : ""} text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]`}>Innovate Digital</button>
                        <div className={`${toggle === 2 ? "show-content" : "content"} absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] transition-all ease duration-300 w-5`} />
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button onClick={() => updateToggle(3)} className={`${toggle === 3 ? "text-[#E01F26]" : ""} text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]`}>Inventa</button>
                        <div className={`${toggle === 3 ? "show-content" : "content"} absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] transition-all ease duration-300 w-5`} />
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button onClick={() => updateToggle(4)} className={`${toggle === 4 ? "text-[#E01F26]" : ""} text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]`}>InnoSphere</button>
                        <div className={`${toggle === 4 ? "show-content" : "content"} absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] transition-all ease duration-300 w-5`} />
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button onClick={() => updateToggle(5)} className={`${toggle === 5 ? "text-[#E01F26]" : ""} text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]`}>Find a Job</button>
                        <div className={`${toggle === 5 ? "show-content" : "content"} absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] transition-all ease duration-300 w-5`} />
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                </div>
                {/* nextgen */}
                <NextgenComponent className={toggleVal1} toggle={toggle} />
                {/* innovate */}
                <InnovateComponent className={toggleVal1} toggle={toggle} />
                {/* inventa */}
                <InventaComponent className={toggleVal1} toggle={toggle} />
                {/* innosphere */}
                <InnosphereComponent className={toggleVal1} toggle={toggle} />
                {/* find a job */}
                <FindJobComponent className={toggleVal1} toggle={toggle} />
            </div>
        </div>
    )
}

export default OurConcerns