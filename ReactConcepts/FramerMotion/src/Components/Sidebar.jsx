import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaBuildingColumns, FaCircleUser, FaChartPie, FaWrench } from "react-icons/fa6";
import {motion, stagger} from 'motion/react'
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    const links = [
        {
            name: 'Home',
            href: '/',
            icon: <FaBuildingColumns />
        },
        {
            name: 'Analytics',
            href: '/',
            icon: <FaChartPie />
        },
        {
            name: 'User',
            href: '/',
            icon: <FaCircleUser />
        },
        {
            name: 'Settings',
            href: '/',
            icon: <FaWrench />
        },
    ]

    // Variants
    const sidebarVariant = {
        open: {
            width: "16rem"
        },
        closed: {
            width: "4.5rem"
        }
    }

    const childVariant = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y:-20
        }
    }

    const parentVariant = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },
        closed: {
            transition:{
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }


    return (
        <motion.section
        initial={false}
        animate={isOpen ? "open" : "closed"}
        transition={{duration: 0.3}}
        className="sidebar border-r h-full">
            <motion.div
            variants={sidebarVariant}
            className="flex flex-col p-4">
                <div className="flex items-center gap-3 justify-between">
                    <h2 className={`text-lg text-neutral-800 ${!isOpen && 'sr-only'}`}>Dashboard</h2>
                    <button
                        onClick={toggleSidebar}
                        className='bg-white p-2 </li> rounded-full shadow-md hover:bg-gray-100 focus:outline-none'
                    >
                        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
                    </button>
                </div>

                <div className="relative">
                    <nav className="pt-5">
                        <motion.ul
                        variants={parentVariant}
                        className="space-y-2">
                            {
                                links.map((link) => (
                                    <motion.li 
                                    variants={childVariant}
                                    key={link.name}>
                                        <a
                                            href={link.href}
                                            className='flex items-center gap-3 p-2 text-gray-700 rounded hover:bg-gray-200'
                                            title={!isOpen ? link.name : ''}
                                        >{link.icon}{isOpen && link.name}</a>
                                    </motion.li>
                                ))
                            }
                        </motion.ul>
                    </nav>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Sidebar