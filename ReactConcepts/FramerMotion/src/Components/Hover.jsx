import React from 'react'
import { motion } from 'motion/react'
const Hover = () => {
  return (
    <div className='[preserve::1000px] [transform-style:preserve-3d] h-screen w-full flex justify-center items-center bg-neutral-900'
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat"
      }}
    >
      <motion.button
        // initial={{rotate:20, y:-20}}
        // animate={{rotate:0, y:0}}
        // transition={{duration:0.3, ease:"easeInOut"}}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,122,184,0.7)",
          y:-25
        }}
        whileTap={{
          y:50,
        }}
        style={{ translateZ: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='group relative text-neutral-500 py-4 px-12 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inest'>
          <span className='group-hover:text-cyan-500 transition-colors duration-300'>Framer Motion</span>
        <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  )
}

export default Hover