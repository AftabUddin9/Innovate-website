import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FetchApi from './JoinUs/FetchApi';

const data = [
    { question: 'Why should you join us?', answer: 'If you are looking for a company that provides the opportunity to flourish your talents and showcase your creativity with the highest amount of flexibility, then look no further. innovate international is here for you. Working with us will not only benefit you financially but also give a lifelong experience and help you develop your real-life skills as well. We ensure the utmost friendly environment for every single employee and consider the whole team as a family.' },
    { question: 'Whom do we look for?', answer: 'Anyone, even you. Yes, if you are passionate about your work, if you are ready for taking up challenges and conquering them if you have the enthusiasm to learn new things as well as to share your wisdom if you are a person who believes in sharing interpersonal skills and growing together, then you are the perfect match that we are looking for.' },
];

const JoinUs = () => {
    const [selected, setSelected] = useState(0);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    };

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
                                {data.map((item, index) => {
                                    return (
                                        <div key={index} className='block relative w-full bg-white px-6 py-3 rounded-lg'>
                                            <button onClick={() => toggle(index)} className='w-full py-4 border-b border-b-blue-gray-100 antialiased text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors text-blue-gray-900 flex items-center justify-start gap-4 border-none font-outfit'>
                                                {selected === index ? '+' : '-'}
                                                <span className='text-[16px] font-semibold text-[#313e5b]'>{item.question}</span>
                                            </button>
                                            <div className='overflow-hidden h-auto'>
                                                <div className={`${selected === index ? 'max-h-[999px] h-auto' : 'max-h-0 h-0'} block w-full py-[1.8] antialiased pl-9 pt-0 mt-0 text-[16px] h-44 font-normal font-outfit text-[#525f81`}>
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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
                    <div id='#joinUs' className=' px-3 sm:px-5 md:px-10 2xl:px-[135px] max-w-[1366px] mx-auto  '>
                        <div className='flex justify-center'>
                            <p className='text-[30px] border-b-2 border-[#FCB8A6] text-[#E01F26] font-semibold text-center pt-8 pb-1 inline-block'>OPEN POSITIONS</p>
                        </div>
                        <div className='flex flex-col gap-5 pb-12 mt-6'>
                            <FetchApi />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JoinUs