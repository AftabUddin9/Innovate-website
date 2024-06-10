import React from 'react'
import backgroundImg from '../assets/footerImage.jpg'
import innovateFooterLogo from '../assets/innovateFooter.png'
import basisLogo from '../assets/footerlogoBasis.jpeg'
import microsoftLogo from '../assets/footerlogoMicrosoft.jpeg'

const Footer = () => {
    return (
        <section className='bg-center bg-cover' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className='w-full h-full bg-[#000000b9]'>
                <div className='px-3 sm:px-5 md:px-10 2xl:px-[135px] max-w-[1366px] mx-auto'>
                    <div className='flex flex-col xl:flex-row justify-between gap-12 py-12 md:py-14'>
                        <div className='max-w-96'>
                            <img className='w-40' src={innovateFooterLogo} />
                            <p className='pt-6 pb-4 text-sm text-[#d1d5db]'>Innovate International Ltd. is a premier Technology and Marketing Company dedicated to providing clients with comprehensive solutions for their research, marketing, and technology requirements. In addition to these core services, we proudly oversee several sister concerns, enhancing our ability to meet diverse needs across various sectors</p>
                            <div className='mt-3 flex items-center gap-3'>
                                <img className='w-32' src={basisLogo} />
                                <img className='w-32' src={microsoftLogo} />
                            </div>
                        </div>
                        <div className='text-[#d1d5db]'>
                            <h2 className='text-xl font-semibold'>Contact Information</h2>
                            <p className='pt-3 pb-4 text-sm'>Feel free to contact & reach us.</p>
                            <div className='pb-2'>
                                <p className='text-lg'>Canada HQ:</p>
                                <p className='text-sm'>Canada Drive, Toronto, Canada</p>
                            </div>
                            <p className='text-lg pb-'>Bangladesh</p>
                            <div>
                                <p>Branch 1:</p>
                                <div className='text-sm flex items-center gap-x-2'>
                                    <p>House-17, Road-06, Sector-01, Uttara. Dhaka-1230</p>
                                </div>
                            </div>
                            <div className='pt-1 pb-3'>
                                <p>Branch 2:</p>
                                <div className='text-sm flex items-center gap-x-2'>
                                    <p>House- 73, Abdul Mannaf Soroni, Gulshan- Badda Link Road, Dhaka-1212</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#d1d5db] text-center py-5 border-t border-slate-200 mt-5 flex gap-1 items-center justify-center text-sm'>
                        <span className=' flex gap-1 items-center justify-center'> Copyright 2024 </span>
                        <a className='text-[#E01F26]'>Innovate International Ltd.</a>
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer