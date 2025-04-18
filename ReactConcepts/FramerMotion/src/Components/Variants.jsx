import React from 'react'
import { FaCircleUser, FaBell } from "react-icons/fa6";
import Sidebar from './Sidebar';
const Variants = () => {
    return (
        <div className='flex h-screen bg-white'>
            {/* Sidebar */}
            <Sidebar />

            <section className="Overview w-full">
                {/* Navbar */}
                <nav className='flex justify-between items-center shadow-lg h-10 p-4'>
                    <h2 className='text-lg text-neutral-800 font-semibold'>Overview</h2>
                    <div className="flex gap-4"><FaBell />
                        <FaCircleUser /></div>
                </nav>
                {/* Content */}
                <div className="content bg-neutral-200 h-full px-4">
                    <div className="analytics pt-5">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                            <div className="card1 bg-white p-4 flex flex-col mb-auto shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg">
                                <div className="flex justify-between">
                                    <span className='text-neutral-400 text-[8px]'>Total Users</span>
                                    <span className='p-1 rounded-md text-[8px] bg-blue-400 text-blue-700'>+12%</span>
                                </div>
                                <p className='font-bold text-lg text-black my-1'>2,453</p>
                                <span className='text-neutral-400 text-[8px]'>Increased by 257 since last month</span>
                            </div>
                            
                            <div className="card1 bg-white p-4 flex flex-col mb-auto shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg">
                                <div className="flex justify-between">
                                    <span className='text-neutral-400 text-[8px]'>Revenue</span>
                                    <span className='p-1 rounded-md text-[8px] bg-green-400 text-green-700'>+5%</span>
                                </div>
                                <p className='font-bold text-lg text-black my-1'>$45,247</p>
                                <span className='text-neutral-400 text-[8px]'>Increased by $3,257 since last month</span>
                            </div>

                            <div className="card1 bg-white p-4 flex flex-col mb-auto shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg">
                                <div className="flex justify-between">
                                    <span className='text-neutral-400 text-[8px]'>Active Sessions</span>
                                    <span className='p-1 rounded-md text-[8px] bg-yellow-400 text-yellow-600'>+5%</span>
                                </div>
                                <p className='font-bold text-lg text-black my-1'>1,325</p>
                                <span className='text-neutral-400 text-[8px]'>Increased by 103 since yesterday</span>
                            </div>

                            <div className="card1 bg-white p-4 flex flex-col mb-auto shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg">
                                <div className="flex justify-between">
                                    <span className='text-neutral-400 text-[8px]'>Conversion Rate</span>
                                    <span className='p-1 rounded-md text-[8px] bg-red-400 text-red-700'>-2%</span>
                                </div>
                                <p className='font-bold text-lg text-black my-1'>12.3%</p>
                                <span className='text-neutral-400 text-[8px]'>Decreased by 1.8% since last month</span>
                            </div>
                        </div>
                    </div>

                    <div className="activities py-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="card1 p-4 bg-white rounded-lg h-60 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ">
                                <h2 className='text-neutral-900 font-semibold text-[16px] mb-3'>User Activity</h2>
                                <div className="placeholder flex justify-center bg-neutral-200 h-[80%] rounded-md text-[10px] place-items-center text-neutral-400">Chart Placeholder</div>
                            </div>
                            <div className="card1 p-4 bg-white rounded-lg h-60 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ">
                                <h2 className='text-neutral-900 font-semibold text-[16px] mb-3'>Revenue Overview</h2>
                                <div className="placeholder flex justify-center bg-neutral-200  h-[80%] rounded-md text-[10px] place-items-center text-neutral-400">Chart Placeholder</div>
                            </div>
                        </div>
                    </div>

                    <div className="recent-activies">
                        <div className="bg-white w-full rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                            <div className="head p-4 shadow-md">
                                <h2 className='text-neutral-900 font-semibold text-[16px]'>Recent Activity</h2>
                            </div>
                            <div className='divide-y divide-neutral-150'>
                                <div className="flex p-4 justify-between items-center">
                                    <div className="userInfo flex gap-3 items-center">
                                        <FaCircleUser className='text-blue-500' />
                                        <div className="flex flex-col">
                                            <span className='text-neutral-800 text-[12px] mb-1'>User #1 created an issue</span>
                                            <span className='text-[8px] text-neutral-400'>2 hours ago</span>
                                        </div>
                                    </div>
                                    <button className='text-blue-600 text-[14px]'>View</button>
                                </div>
                                <div className="flex p-4 justify-between items-center">
                                    <div className="userInfo flex gap-3 items-center">
                                        <FaCircleUser className='text-blue-500' />
                                        <div className="flex flex-col">
                                            <span className='text-neutral-800 text-[12px] mb-1'>User #1 requested fix for module 27</span>
                                            <span className='text-[8px] text-neutral-400'>2 hours ago</span>
                                        </div>
                                    </div>
                                    <button className='text-blue-600 text-[14px]'>View</button>
                                </div>
                                <div className="flex p-4 justify-between items-center">
                                    <div className="userInfo flex gap-3 items-center">
                                        <FaCircleUser className='text-blue-500' />
                                        <div className="flex flex-col">
                                            <span className='text-neutral-800 text-[12px] mb-1'>User #1 raised a PR</span>
                                            <span className='text-[8px] text-neutral-400'>2 hours ago</span>
                                        </div>
                                    </div>
                                    <button className='text-blue-600 text-[14px]'>View</button>
                                </div>
                                <div className="flex p-4 justify-between items-center">
                                    <div className="userInfo flex gap-3 items-center">
                                        <FaCircleUser className='text-blue-500' />
                                        <div className="flex flex-col">
                                            <span className='text-neutral-800 text-[12px] mb-1'>User #1 PR merged</span>
                                            <span className='text-[8px] text-neutral-400'>2 hours ago</span>
                                        </div>
                                    </div>
                                    <button className='text-blue-600 text-[14px]'>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Variants