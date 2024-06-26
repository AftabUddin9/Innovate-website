import React from 'react'
import Lottie from 'react-lottie';


const InnosphereComponent = ({ toggle }) => {
    const innosphereDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: innosphereAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <div className={`${toggle === 4 ? "block " : "hidden"}`}>
            <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                <div className='w-full 2xl:w-1/2'>
                    <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>InnoSphere is a premier research firm dedicated to advancing knowledge and driving innovation across various industries. Our team of researchers and analysts conducts in-depth studies and provides actionable insights that help businesses make informed decisions and stay ahead of the curve. With a focus on excellence and integrity, we are committed to delivering high-quality research solutions that drive growth and success for our clients.</p>
                    <button className=' hover:text-white font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>InnoSphere</button>
                </div>
                <div className='w-full 2xl:w-1/2 2xl:p-4'>
                    <Lottie options={innosphereDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div>
        </div>
    )
}

export default InnosphereComponent