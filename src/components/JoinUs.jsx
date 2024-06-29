import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const JoinUs = () => {
    return (
        <div className='w-full font-outfit'>
            <div>
                <Navbar />
                <div className='bg-gradient-to-b from-transparent to-[rgb(249,248,248)]'>
                    <div className='px-3 sm:px-5 md:px-10 2xl:px-[135px] max-w-[1366px] mx-auto '>
                        <div>
                            <h2 className='font-outfit text-2xl sm:text-[28px] xl:text-[36px] 2xl:text-[39px] text-center md:text-left font-bold text-[#E01F26] pt-16 '>
                                Careers
                            </h2>
                            <p className='text-secondary mt-5 text-center md:text-left'>
                                Welcome to our Career Page! Here at Innovate International Ltd., we're not just building products and services; we're building a team of passionate individuals dedicated to innovation and excellence. Join us in shaping the future of technology and making a difference in the world. Explore our current opportunities and embark on an exciting journey with us!
                            </p>
                        </div>
                        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-4 my-12'>
                            <div className='flex flex-col gap-6'>
                                <div className='block relative w-full bg-white px-6 py-3 rounded-lg'>
                                    <button className='w-full py-4 border-b border-b-blue-gray-100 antialiased text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors text-blue-gray-900 flex items-center justify-start gap-4 border-none font-outfit'>
                                        X
                                        <span className='text-[16px] font-semibold text-[#313e5b]'>Why should you join us?</span>
                                    </button>
                                    <div className='overflow-hidden h-auto'>
                                        <div className='block w-full py-4 antialiased pl-9 pt-0 mt-0 text-[16px] h-44 font-normal font-outfit text-[#525f81]'>
                                            If you are looking for a company that provides the opportunity to flourish your talents and showcase your creativity with the highest amount of flexibility, then look no further. innovate international is here for you. Working with us will not only benefit you financially but also give a lifelong experience and help you develop your real-life skills as well. We ensure the utmost friendly environment for every single employee and consider the whole team as a family.
                                        </div>
                                    </div>
                                </div>
                                <div className='block relative w-full bg-white px-6 py-3 rounded-lg'>
                                    <button className='w-full py-4 border-b border-b-blue-gray-100 antialiased text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors text-blue-gray-900 flex items-center justify-start gap-4 border-none font-outfit'>
                                        -
                                        <span className='text-[16px] font-semibold text-[#313e5b]'>Whom do we look for?</span>
                                    </button>
                                    <div className='overflow-hidden h-auto'>
                                        <div className='block w-full py-4 antialiased pl-9 pt-0 mt-0 text-[16px] h-44 font-normal font-outfit text-[#525f81]'>
                                            Anyone, even you. Yes, if you are passionate about your work, if you are ready for taking up challenges and conquering them if you have the enthusiasm to learn new things as well as to share your wisdom if you are a person who believes in sharing interpersonal skills and growing together, then you are the perfect match that we are looking for.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='object-cover h-96 mx-auto' src='../../assets/images.png' />
                        </div>
                        <div className='pt-5 pb-12'>
                            <h2 className='font-outfit text-lg sm:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center md:text-left font-medium text-[#E01F26]'>
                                Benefits and Rewards
                            </h2>
                            <p className='text-secondary mt-2 text-center md:text-left'>
                                Working with Innovate International Ltd. provides you a great opportunity of developing your existing skills at the same time acquiring new ones. We believe a coherent team can bring out the best result. So, you will be improving your cooperation skills, learning to be supportive and respectful to each other, being empathetic and compassionate.Innovate International Ltd. always puts efforts to maintain a family-like relation within its team members, so that everyone feels more connected and become even more sincere towards their work. Apart from the intangible benefits, the tangible benefit which is the monetary one is also significant. We always prioritize the fact of appreciating people with everything they deserve. Moreover, you will get the chance to be mentored by people who are experienced in their respective fields. In every manner, Innovate International Ltd. has so many things to offer which you can carry for an eternal period of time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='class="bg-[#FAFAFA]"'>
                    <div className=' px-3 sm:px-5 md:px-10 2xl:px-[135px] max-w-[1366px] mx-auto  '>
                        <div className='flex justify-center'>
                            <p className='text-[30px] border-b-2 border-[#FCB8A6] text-[#E01F26] font-semibold text-center pt-8 pb-1 inline-block'>OPEN POSITIONS</p>
                        </div>
                        <div className='flex flex-col gap-5 pb-12 mt-6'>
                            <div className='border gap-6 bg-white p-6 flex flex-col rounded-xl'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                                    <div className=''>
                                        <div className='flex items-center gap-x-3 text-[18px] font-semibold font-outfit'>
                                            <i>B</i>
                                            <h1>UI/UX Design Intern</h1>
                                        </div>
                                        <div className='flex items-center mt-4 gap-x-5'>
                                            <div className='bg-[#fdf7f7] px-4 py-[6px] capitalize rounded-md text-xs sm:text-sm font-semibold'>internship</div>
                                            <div className='bg-[#fdf7f7] px-4 py-[6px] rounded-md text-xs sm:text-sm font-semibold'>Gulshan 1</div>
                                        </div>
                                    </div>
                                    <div className='md:flex md:flex-col p-2 md:justify-center md:items-center gap-4 mt-3 md:mt-0'>
                                        <p className='flex w-full items-center gap-x-2 font-semibold'>$ Industry Standard</p>
                                        <div className='w-full mt-5 md:mt-0'>
                                            <Link to='' className='px-4 sm:px-8 py-2 sm:py-2.5 bg-[#E01F26] hover:bg-[#971B1F] text-sm font-semibold text-white leading-[20px] rounded-[24px] mt-5 md:mt-0'>
                                                APPLY NOW
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-6'>
                                        <div className='block relative w-full'>
                                            <button className='w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors flex items-center justify-start gap-4 border-none font-outfit'>+ More Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JoinUs