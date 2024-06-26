import React from 'react'
import { useState } from 'react';

import Banners from '../components/OurConcerns/Banners';

import nextGenAnim from '../assets/animation/nextGenAnim.json';
import innovateAnim from '../assets/animation/innovateAnim.json';
import inventaAnim from '../assets/animation/inventaAnim.json';
import innosphereAnim from '../assets/animation/innosphereAnim.json';
import findJobAnim from '../assets/animation/findJobAnim.json';


const OurConcerns = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id)
    };

    const data = [
        { tab: 1, butname: "NextGen Tech", anim: nextGenAnim, text: "NextGen Tech is a dynamic software company dedicated to pushing the boundaries of technology. We specialize in crafting innovative software solutions that drive efficiency, productivity, and success for businesses of all sizes. With a passion for cutting-edge technology, we are committed to delivering tailored software solutions that exceed expectations and propel businesses into the future." },
        { tab: 2, butname: "Innovate Digital", anim: innovateAnim, text: "Innovate Digital is a leading digital marketing agency that helps businesses thrive in the online world. Our team of experts specializes in creating strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions. With a focus on innovation and creativity, we deliver customized solutions that elevate brands and deliver measurable results in the ever-evolving digital landscape." },
        { tab: 3, butname: "Inventa", anim: inventaAnim, text: "Inventa is your trusted partner in the world of dropshipping. We provide comprehensive dropshipping solutions that streamline supply chain operations and maximize efficiency for businesses worldwide. With a commitment to innovation and excellence, we empower businesses to expand their reach and achieve success in today's competitive marketplace." },
        { tab: 4, butname: "InnoSphere", anim: innosphereAnim, text: "InnoSphere is a premier research firm dedicated to advancing knowledge and driving innovation across various industries. Our team of researchers and analysts conducts in-depth studies and provides actionable insights that help businesses make informed decisions and stay ahead of the curve. With a focus on excellence and integrity, we are committed to delivering high-quality research solutions that drive growth and success for our clients." },
        { tab: 5, butname: "Find a Job", anim: findJobAnim, text: "Find a Job is your go-to destination for career opportunities. As a leading job portal, we connect talented individuals with their dream jobs and help businesses find the perfect candidates for their teams. With user-friendly features and a vast database of job listings, we make the job search process simple, efficient, and rewarding for both job seekers and employers alike." },
    ]

    const targetTab = data.find(item => item.tab === toggle);

    const anim = targetTab ? targetTab.anim : null;
    const butname = targetTab ? targetTab.butname : null;
    const text = targetTab ? targetTab.text : null;

    return (
        <div id="concerns">
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

                <Banners anim={anim} butname={butname} text={text} />
            </div>
        </div>
    )
}

export default OurConcerns