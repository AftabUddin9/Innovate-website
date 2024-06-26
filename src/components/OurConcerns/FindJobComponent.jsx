import React from 'react'
import Lottie from 'react-lottie';
import findJobAnim from '../../assets/animation/findJobAnim.json';

const FindJobComponent = ({ toggleVal5 }) => {
    const findJobDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: findJobAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <div className={toggleVal5}>
            <div className='flex 2xl:flex-row flex-col justify-center items-center'>
                <div className='w-full 2xl:w-1/2'>
                    <p className='text-[16px] font-normal text-[#525f81] leading-8 p-2 2xl:-mt-12 mt-6'>Find a Job is your go-to destination for career opportunities. As a leading job portal, we connect talented individuals with their dream jobs and help businesses find the perfect candidates for their teams. With user-friendly features and a vast database of job listings, we make the job search process simple, efficient, and rewarding for both job seekers and employers alike.</p>
                    <button className=' hover:text-white font-normal border-2 border-[#FCB8A6] hover:border-[#E01F26] hover:bg-[#E01F26] h-10 px-2 mt-8 rounded-lg flex items-center gap-1'>Find a Job</button>
                </div>
                <div className='w-full 2xl:w-1/2 2xl:p-4'>
                    <Lottie options={findJobDefaultOptions} height={500} width={500} className={"w-100% h-100% overflow-hidden m-auto outline-none"} role='button' aria-label='animation' tabIndex='0' />
                </div>
            </div>
        </div>
    )
}

export default FindJobComponent