import React from 'react'
import Lottie from 'react-lottie';
import nextGenAnim from '../assets/animation/nextGenAnim.json';

const OurConcerns = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: nextGenAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }
    return (
        <div>
            <h3 className='uppercase text-[16px] font-normal text-[#E64D53] text-center mb-8 font-outfit'>Our Concerns</h3>
            <div className='flex flex-col gap-4 -mb-2'>
                <div className='flex flex-wrap items-center justify-center gap-7'>
                    <div className='relative group'>
                        <button className='text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]'>NextGen Tech</button>
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] transition-all ease duration-300 w-5' />
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button className='text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]'>Innovate Digital</button>
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button className='text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]'>Inventa</button>
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button className='text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]'>InnoSphere</button>
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                    <div className='relative group'>
                        <button className='text-[18px] font-semibold text-[#313E5B] hover:text-[#E01F26]'>Find a Job</button>
                        <div className='absolute left-1/2 transform -translate-x-1/2 top-8 h-[2px] bg-[#E01F26] w-0 transition-all ease duration-300 group-hover:w-5' />
                    </div>
                </div>
                <div>
                    <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                        <div className='w-full 2xl:w-1/2'>
                            <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>NextGen Tech is a dynamic software company dedicated to pushing the boundaries of technology. We specialize in crafting innovative software solutions that drive efficiency, productivity, and success for businesses of all sizes. With a passion for cutting-edge technology, we are committed to delivering tailored software solutions that exceed expectations and propel businesses into the future.</p>
                            <button className=' hover:text-white font-normal border-2 border-borderPrimary hover:border-bgPrimary hover:bg-bgPrimary h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>NextGen Tech</button>
                        </div>
                        <div className='w-full 2xl:w-1/2 2xl:p-4'>
                            <Lottie options={defaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurConcerns