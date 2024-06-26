import React from 'react'
import Lottie from 'react-lottie';
import innovateAnim from '../../assets/animation/innovateAnim.json';

const InnovateComponent = ({ toggleVal2 }) => {
    console.log(toggleVal2)
    const innovateDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: innovateAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <div className={toggleVal2}>
            <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                <div className='w-full 2xl:w-1/2'>
                    <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>Innovate Digital is a leading digital marketing agency that helps businesses thrive in the online world. Our team of experts specializes in creating strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions. With a focus on innovation and creativity, we deliver customized solutions that elevate brands and deliver measurable results in the ever-evolving digital landscape.</p>
                    <button className=' hover:text-white font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>Innovate Digital</button>
                </div>
                <div className='w-full 2xl:w-1/2 2xl:p-4'>
                    <Lottie options={innovateDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div>
        </div>
    )
}

export default InnovateComponent