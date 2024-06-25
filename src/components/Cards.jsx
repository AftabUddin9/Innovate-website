import React from 'react'
import cardImg from '../assets/images.png'

const Cards = () => {
    const cardDetails = [
        { imgSource: cardImg, heading: '2021', sub: 'Establishment year' },
        { imgSource: cardImg, heading: '8', sub: 'Concerns' },
        { imgSource: cardImg, heading: '300+', sub: 'Clients' },
        { imgSource: cardImg, heading: '1500+', sub: 'projects Completed' },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-12 px-3 sm:px-5 md:px-10 2xl:px-[135px] max-w-[1366px] mx-auto mb-12 w-full'>
            {
                cardDetails.map((items, index) =>
                    <div key={index} className='flex flex-col relative group'>
                        <div className='flex h-36 justify-left gap-3 shadow-xl py-12 pt-0 pl-0 relative'>
                            {/* card image */}
                            <div className='bg-bgPrimary w-[76px] rounded-br-xl h-[76px]'>
                                <img className='h-70 w-70' src={items.imgSource} />
                            </div>
                            {/* card heading and sub */}
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-[#525f81] text-[30px]'>{items.heading}</h3>
                                <p className='text-[#586176] text-[16px] font-[400]'>{items.sub}</p>
                            </div>
                        </div>
                        <div className='absolute left-0 bottom-0 h-[4px] bg-[#971b1f] w-0 group-hover:w-full transition-[width] ease duration-300' />
                    </div>
                )
            }
        </div>
    )
}

export default Cards