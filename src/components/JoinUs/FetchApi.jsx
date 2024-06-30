import { useState } from "react"
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

const FetchApi = () => {

    const [jobinfo, setJobinfo] = useState([]);

    useEffect(() => {
        axios.get('https://api.innovate.llc/api/v1/jobs/getAllJobs')
            .then(res => { setJobinfo(res.data.data) })
            .catch(err => console.log(err))
    }, [])

    const [moreDetail, setMoreDetail] = useState(null);
    const toggle = (i) => {
        setMoreDetail(moreDetail === i ? null : i);
    };

    return (
        <>
            {jobinfo.map((data, i) => {
                return (
                    <div key={i} className='border gap-6 bg-white p-6 flex flex-col rounded-xl'>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                            <div className=''>
                                <div className='flex items-center gap-x-3 text-[18px] font-semibold font-outfit'>
                                    <i>B</i>
                                    <h1>{data.title}</h1>
                                </div>
                                <div className='flex items-center mt-4 gap-x-5'>
                                    <div className='bg-[#fdf7f7] px-4 py-[6px] capitalize rounded-md text-xs sm:text-sm font-semibold'>{data.jobType}</div>
                                    <div className='bg-[#fdf7f7] px-4 py-[6px] rounded-md text-xs sm:text-sm font-semibold'>{data.branch}</div>
                                </div>
                            </div>
                            <div className='md:flex md:flex-col p-2 md:justify-center md:items-center gap-4 mt-3 md:mt-0'>
                                <p className='flex w-full items-center gap-x-2 font-semibold'>$ {data.salary ? data.salary : "Industry Standard"}</p>
                                <div className='w-full mt-5 md:mt-0'>
                                    <Link to={data.applyLink} className='px-4 sm:px-8 py-2 sm:py-2.5 bg-[#E01F26] hover:bg-[#971B1F] text-sm font-semibold text-white leading-[20px] rounded-[24px] mt-5 md:mt-0'>
                                        APPLY NOW
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-6'>
                                <div className='block relative w-full'>
                                    <button onClick={() => toggle(i)} className='w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors flex items-center justify-start gap-4 border-none font-outfit'>{moreDetail === i ? '-' : '+'} More Details</button>
                                    {moreDetail === i && (
                                        <div className="overflow-hidden h-auto">
                                            <div className="block w-full py-4 antialiased pl-9 pt-0 mt-0 text-[16px] font-normal font-outfit text-[#525f81]">
                                                <div className="font-outfit">
                                                    {data.companyDetails}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

        </>
    )
}

export default FetchApi