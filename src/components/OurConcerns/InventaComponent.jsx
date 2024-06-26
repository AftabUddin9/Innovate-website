import React from 'react'
import Lottie from 'react-lottie';


const InventaComponent = ({ toggle }) => {
    const inventaDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: inventaAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <div className={`${toggle === 3 ? "block " : "hidden"}`}>
            <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                <div className='w-full 2xl:w-1/2'>
                    <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>Inventa is your trusted partner in the world of dropshipping. We provide comprehensive dropshipping solutions that streamline supply chain operations and maximize efficiency for businesses worldwide. With a commitment to innovation and excellence, we empower businesses to expand their reach and achieve success in today's competitive marketplace.</p>
                    <button className=' hover:text-white font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>Inventa</button>
                </div>
                <div className='w-full 2xl:w-1/2 2xl:p-4'>
                    <Lottie options={inventaDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div>
        </div>
    )
}

export default InventaComponent