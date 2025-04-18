import React, { useState } from 'react'
import logo from '../assets/framer-motion.svg';
import close from '../assets/close.svg';
import message from '../assets/message.svg';
import plus from '../assets/plus.svg';

import { AnimatePresence, motion } from 'motion/react'
const Card = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
        <AnimatePresence>
            {isOpen && (
                    <motion.div 
                    initial={
                        {opacity: 0, scale: 0.98, filter: "blur(10px)"}
                    }
                    animate={
                        {opacity: 1, scale: 1, filter: "blur(0px)"}
                    }
                    exit={
                        {opacity: 0, scale: 0.98, filter: "blur(10px)"}
                    }
                    transition={
                        {duration: 0.3, ease: "easeInOut"}
                    }
                    className='h-screen flex items-center justify-center bg-gray-50'>
                        <div className="card flex flex-col w-72 h-[29rem] p-5 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ">
                            <h2 className='font-bold text-md'>Framer Motion</h2>
                            <p className='text-neutral-600 mt-2 text-[12px]'>Motion for React offers a number of ways to animate your UI.</p>
                            <div className="flex items-center justify-center">
                                <button onClick={ () => setIsOpen(!isOpen)} className='flex items-center gap-2 text-[10px] mt-4 px-2 py-1 rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                                    <img src={logo} className='h-4 w-4' alt="Framer motion logo" />
                                    Framer Motion
                                    <img src={close} className='h-5 w-5' alt="Framer motion logo" />
                                </button>
                            </div>
                            <div className='bg-gray-100 mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 relative'>
                                {/* motion starts */}
                                <motion.div
                                    initial={
                                        { opacity: 0, scale: 0.98, filter: "blur(10px)" }
                                    }
                                    whileHover={
                                        { opacity: 1, scale: 1.05, filter: "blur(0px)" }
                                    }
                                    transition={
                                        { duration: 0.3, ease: "easeInOut" }
                                    }
                                    className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200">
                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                            <img src={message} alt="Message Icon" className='w-4 h-4 text-neutral-600' />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-[8px] font-bold text-neutral-600'>A robust animation library</p>
                                            <p className="text-neutral-400 text-[8px] mt-1">Free and open-source animation library.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                            <img src={message} alt="Message Icon" className='w-4 h-4 text-neutral-600' />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-[8px] font-bold text-neutral-600'>A robust animation library</p>
                                            <p className="text-neutral-400 text-[8px] mt-1">Free and open-source animation library.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                            <img src={message} alt="Message Icon" className='w-4 h-4 text-neutral-600' />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-[8px] font-bold text-neutral-600'>A robust animation library</p>
                                            <p className="text-neutral-400 text-[8px] mt-1">Free and open-source animation library.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 p-4">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                            <img src={message} alt="Message Icon" className='w-4 h-4 text-neutral-600' />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-[8px] font-bold text-neutral-600'>A robust animation library</p>
                                            <p className="text-neutral-400 text-[8px] mt-1">Free and open-source animation library.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 p-3 items-center justify-center">
                                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                            <img src={plus} alt="Message Icon" className='w-3 h-3 text-neutral-600 cursor-pointer' />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-[8px] font-bold text-neutral-600'>Create project</p>
                                        </div>
                                    </div>
                                </motion.div>
                                {/* motion ends */}
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
        </>

    )
}

export default Card