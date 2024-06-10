import React from 'react'
import Lottie from 'react-lottie';
import aboutUsAnim from '../assets/animation/aboutUsAnim.json';

const AboutUs = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutUsAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }
    return (
        <div id='about' className='flex flex-col 2xl:flex-row justify-center h-full'>
            <div className='flex flex-col gap-12 2xl:gap-0 w-full 2xl:w-1/2'>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='uppercase text-[16px] font-normal text-[#E64D53] font-outfit'>About Us</h3>
                    <p className='text-[28px] 2xl:text-[39px] text-center font-bold 2xl:p-12 2xl:pt-2 text-[#313e5b] font-outfit'>Innovation, integrity, and individuality define us impeccably.</p>
                </div>
                <div className='flex flex-col 2xl:flex-row items-start'>
                    <div className='flex flex-row 2xl:flex-col 2xl:ml-9 2xl:mb-0 mb-6 items-center gap-3 w-full 2xl:w-[31%] px-6'>
                        <button className='text-[19px] font-bold text-[#313e5b] hover:text-white hover:bg-[#E01F26] w-full py-1 px-3  rounded-lg text-wrap xs:text-nowrap bg-[#E01F26]'>About Us</button>
                        <button className='text-[19px] font-bold text-[#313e5b] hover:text-white hover:bg-[#E01F26] w-full py-1 px-3  rounded-lg text-wrap xs:text-nowrap bg-[#E01F26]'>Our Vision</button>
                        <button className='text-[19px] font-bold text-[#313e5b] hover:text-white hover:bg-[#E01F26] w-full py-1 px-3  rounded-lg text-wrap xs:text-nowrap bg-[#E01F26]'>Our Mission</button>
                    </div>
                    <div className='w-full 2xl:w-[69%]'>
                        <div className='text-[16px] font-normal text-[#525f81] leading-8'>
                            At Innovate International Ltd., we are pioneers in technology, driving innovation across various sectors. From ecommerce solutions to job portals, research services, dropshipping platforms, digital marketing expertise, textile software, online news o...
                            <br />
                            <button className='text-[#313e5b] hover:text-white focus:outline-none text-[16px] font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-4 mt-5 rounded-xl'>See more</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* animation */}
            <div className='w-full flex justify-center 2xl:w-1/2'>
                <div className='w-full p-2'>
                    <Lottie options={defaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs