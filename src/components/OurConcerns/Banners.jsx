import React from 'react'
import Lottie from 'react-lottie';


const Banners = ({ anim, butname, text }) => {
    const DefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: anim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <div className="block ">
            <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                <div className='w-full 2xl:w-1/2'>
                    <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>{text}</p>
                    <button className=' hover:text-white font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>{butname}</button>
                </div>
                <div className='w-full 2xl:w-1/2 2xl:p-4'>
                    <Lottie options={DefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div>
        </div>
    )
}

export default Banners;