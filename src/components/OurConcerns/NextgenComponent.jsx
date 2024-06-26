import React from 'react'
import Lottie from 'react-lottie';
import nextGenAnim from '../../assets/animation/nextGenAnim.json';

const NextgenComponent = ({ toggleVal1, toggle }) => {
    console.log(toggleVal1)
    const nextGenDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: nextGenAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <>

            <div className={`&{toggle===1? "flex ":"hidden"}`}>
                <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                    <div className='w-full 2xl:w-1/2'>
                        <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>NextGen Tech is a dynamic software company dedicated to pushing the boundaries of technology. We specialize in crafting innovative software solutions that drive efficiency, productivity, and success for businesses of all sizes. With a passion for cutting-edge technology, we are committed to delivering tailored software solutions that exceed expectations and propel businesses into the future.</p>
                        <button className=' hover:text-white font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>NextGen Tech</button>
                    </div>
                    <div className='w-full 2xl:w-1/2 2xl:p-4'>
                        <Lottie options={nextGenDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default NextgenComponent;