import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import aboutUsAnim from '../assets/animation/aboutUsAnim.json';
import ourVisionAnim from '../assets/animation/ourVisionAnim.json';
import ourMissionAnim from '../assets/animation/ourMissionAnim.json';

const AboutUs = () => {
    const [toggle, setToggle] = useState(1)

    const aboutUsDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutUsAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }
    const ourVisionDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ourVisionAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }
    const ourMissionDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ourMissionAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }

    function updateToggle(id) {
        setToggle(id)
    }


    return (
        <div id="about" className='flex flex-col 2xl:flex-row justify-center h-full'>
            <div className='flex flex-col gap-12 2xl:gap-0 w-full 2xl:w-1/2'>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='uppercase text-[16px] font-normal text-[#E64D53] font-outfit'>About Us</h3>
                    <p className='text-[28px] 2xl:text-[39px] text-center font-bold 2xl:p-12 2xl:pt-2 text-[#313e5b] font-outfit'>Innovation, integrity, and individuality define us impeccably.</p>
                </div>
                <div className='flex flex-col 2xl:flex-row items-start'>
                    <div className='flex flex-row 2xl:flex-col 2xl:ml-9 2xl:mb-0 mb-6 items-center gap-3 w-full 2xl:w-[31%] px-6'>
                        <button onClick={() => updateToggle(1)} className='text-[19px] font-bold text-[#313e5b] hover:text-white hover:bg-[#971B1F] w-full py-1 px-3 rounded-lg whitespace-nowrap xs:text-nowrap focus:bg-[#E01F26] focus:text-white'>About Us</button>
                        <button onClick={() => updateToggle(2)} className='text-[19px] font-bold text-[#313e5b] hover:text-white hover:bg-[#971B1F] w-full py-1 px-3 rounded-lg whitespace-nowrap xs:text-nowrap focus:bg-[#E01F26] focus:text-white'>Our Vision</button>
                        <button onClick={() => updateToggle(3)} className='text-[19px] font-bold text-[#313e5b] hover:text-white hover:bg-[#971B1F] w-full py-1 px-3 rounded-lg whitespace-nowrap xs:text-nowrap focus:bg-[#E01F26] focus:text-white'>Our Mission</button>
                    </div>
                    {/* description for about us */}
                    <div className={toggle === 1 ? "show-content" : "content"}>
                        <div className='w-full 2xl:w-[69%]'>
                            <div className='text-[16px] font-normal text-[#525f81] leading-8'>
                                <p className='line-clamp-[8]'>At Innovate International Ltd., we are pioneers in technology, driving innovation across various sectors. From ecommerce solutions to job portals, research services, dropshipping platforms, digital marketing expertise, textile software, online news outlets, and agency services, we cater to diverse industries with tailored solutions.</p>
                                <br />
                                <button className='text-[#313e5b] hover:text-white focus:outline-none text-[16px] font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-4 mt-5 rounded-xl'>See more</button>
                            </div>
                        </div>
                    </div>
                    {/* description for vision */}
                    <div className={toggle === 2 ? "show-content" : "content"}>
                        <div className='w-full 2xl:w-[69%]'>
                            <div className='text-[16px] font-normal text-[#525f81] leading-8'>
                                <p className='line-clamp-[8]'>Our vision is to revolutionize the tech landscape by providing cutting-edge solutions that empower businesses to thrive in the digital age. We aspire to be leaders in innovation, reshaping industries and setting new standards for excellence.</p>
                                <br />
                                <button className='text-[#313e5b] hover:text-white focus:outline-none text-[16px] font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-4 mt-5 rounded-xl'>See more</button>
                            </div>
                        </div>
                    </div>
                    {/* description for mission */}
                    <div className={toggle === 3 ? "show-content" : "content"}>
                        <div className='w-full 2xl:w-[69%]'>
                            <div className='text-[16px] font-normal text-[#525f81] leading-8'>
                                <p className='line-clamp-[8]'>Our mission is to deliver exceptional value to our clients by leveraging our expertise and creativity to solve complex challenges. We are committed to delivering innovative, reliable, and sustainable solutions that drive growth, efficiency, and success for our clients in every sector we serve.</p>
                                <br />
                                <button className='text-[#313e5b] hover:text-white focus:outline-none text-[16px] font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-4 mt-5 rounded-xl'>See more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* animation */}
            {/* about us */}
            <div className={toggle === 1 ? "show-content" : "content"}>
                <div className='w-full flex justify-center 2xl:w-1/2'>
                    <div className='w-full p-2'>
                        <Lottie options={aboutUsDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                    </div>
                </div>
            </div>
            {/* vision */}
            <div className={toggle === 2 ? "show-content" : "content"}>
                <div className='w-full flex justify-center 2xl:w-1/2'>
                    <div className='w-full p-2'>
                        <Lottie options={ourVisionDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                    </div>
                </div>
            </div>
            {/* mission  */}
            <div className={toggle === 3 ? "show-content" : "content"}>
                <div className='w-full flex justify-center 2xl:w-1/2'>
                    <div className='w-full p-2'>
                        <Lottie options={ourMissionDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs