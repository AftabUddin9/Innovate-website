import React from 'react'
import Lottie from 'react-lottie';
import homeAnim from '../assets/animation/homeAnim.json';

const Overview = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: homeAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }
    return (
        <div className='flex flex-col gap-20 px-[25px] md:px-12 xl:px-[100px] 2xl:px-[135px] mb-28 mt-[30px] max-w-[1366px] mx-auto'>
            <div className='w-full xl:flex items-center justify-center' >
                <div className='flex flex-col gap-6 w-full xl:w-1/2'>
                    <h1 className='text-[32px] xl:text-[64px] font-bold text-[#313e5b] font-outfit'>We See Things Differently!</h1>
                    <p className='font-semibold text-[16px] text-[#525f81] leading-[30px]'>Welcome to Innovate International Ltd., where innovation meets expertise. Specializing in cutting-edge software, research solutions, dropshipping, and digital marketing tailored to your needs, we're your one-stop destination for all things tech. From launching job portals to powering e-commerce ventures, we redefine industries, empower businesses, and shape the digital landscape. Let's embark on a journey of digital transformation together.</p>
                </div>
                <div className='xl:w-1/2 p-4'>
                    <Lottie options={defaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div >
        </div>
    )
}

export default Overview;