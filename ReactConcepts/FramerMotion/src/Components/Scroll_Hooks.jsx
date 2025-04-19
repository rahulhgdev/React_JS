import React, { useRef, useState } from 'react'
import { FaAffiliatetheme, FaArrowUpRightDots, FaBookTanakh, FaCircleRadiation, FaDemocrat } from "react-icons/fa6";
import img1 from '../assets/Scroll_Hooks/image1.jpg'
import img2 from '../assets/Scroll_Hooks/image2.jpg'
import img3 from '../assets/Scroll_Hooks/image3.jpg'
import img4 from '../assets/Scroll_Hooks/image4.jpg'
import img5 from '../assets/Scroll_Hooks/image5.jpg'
import { useMotionValueEvent, useScroll, useTransform, motion, useMotionTemplate, useSpring } from 'motion/react'

const Scroll_Hooks = () => {
    const features = [
        {
            icon: <FaAffiliatetheme className='w-6 h-6 text-neutral-400' />,
            title: 'The Whispering Locket',
            desc: 'A seemingly ordinary antique locket holds a secret that only its wearer can hear, leading them on an unexpected and mysterious journey.',
            content: (
                <div>
                    <img
                        src={img1}
                        height={250}
                        width={250}
                        className='rounded-lg'
                    />
                </div>
            )
        },
        {
            icon: <FaArrowUpRightDots className='w-6 h-6 text-neutral-400' />,
            title: 'Chromatic Dreams of the Silent City',
            desc: 'Generations of a family have lived under the sprawling branches of an ancient banyan tree, each life intertwined with its mystical presence and the secrets it holds within its roots.',
            content: (
                <div>
                    <img
                        src={img2}
                        height={250}
                        width={250}
                        className='rounded-lg'
                    />
                </div>
            )
        },
        {
            icon: <FaBookTanakh className='w-6 h-6 text-neutral-400' />,
            title: "Beneath the Banyan's Shadow",
            desc: 'In a metropolis where sound has vanished, a young artist discovers they can paint dreams into vibrant, audible realities, but this power draws unwanted attention.',
            content: (
                <div>
                    <img
                        src={img3}
                        height={250}
                        width={250}
                        className='rounded-lg'
                    />
                </div>
            )
        },
        {
            icon: <FaCircleRadiation className='w-6 h-6 text-neutral-400' />,
            title: 'The Cartographer of Lost Memories',
            desc: 'In a world where memories can be physically mapped and traded, a cartographer stumbles upon an uncharted recollection that could unravel the fabric of their society.',
            content: (
                <div>
                    <img
                        src={img4}
                        height={250}
                        width={250}
                        className='rounded-lg'
                    />
                </div>
            )
        },
        {
            icon: <FaDemocrat className='w-6 h-6 text-neutral-400' />,
            title: 'Echoes in the Obsidian Mirror',
            desc: "A dark and reflective mirror doesn't just show appearances; it whispers forgotten conversations and reveals glimpses into possible futures, tempting those who gaze too long.",
            content: (
                <div>
                    <img
                        src={img5}
                        height={250}
                        width={250}
                        className=''
                    />
                </div>
            )
        }
    ]

    const containerRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgColors = ['#4d194d', '#004052', '#69583c', '#2e3b5c', '#3d1e6d'];
    const [background, setBackground] = useState(bgColors[0]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * bgColors.length);
        setBackground(bgColors[finalValue]);
    })

    return (
        <motion.div
        ref={containerRef}
        animate= {
            {background}
        }
        transition={
            {duration: 0.5, ease: "easeInOut"}
        }
        className='min-h-screen flex items-center justify-center bg-neutral-900'>
            <div className="flex flex-col gap-10 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                    <Card key={index} feature={feature} />
                ))}
            </div>
        </motion.div>
    )
}

const Card = ({ feature }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]  // Motion will track when -> [start = element end = viewport, start = viewport end=element]
    })

    // useTransform - Create a MotionValue that transforms the output of another MotionValue by mapping it from one range of values into another.
    const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

    const translateText = useSpring(useTransform(scrollYProgress, [0, 1], [100, -200]),
        {
            stiffness: 100,
            damping: 20,
            mass: 1
        }
    );
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

     // To check motion tracking or not
     useMotionValueEvent(blur, "change", (latest) => {
        console.log("motion value: ", latest); // tracks in 0-100% i.e. motion value: 0-1
    });

    return (
        <div
            ref={ref}
            key={feature.title} className='grid grid-cols-2 gap-10 py-40'>
            <motion.div
                style={
                    {
                        filter: useMotionTemplate`blur(${blur}px)`,
                        scale,
                    }
                }
                className='flex justify-center flex-col gap-5'>
                {feature.icon}
                <h2 className='text-white text-4xl font-bold'>{feature.title}</h2>
                <p className='text-neutral-400'>{feature.desc}</p>
            </motion.div>
            <motion.div
                style={
                    {
                        y: translateText,
                        opacity: opacityContent
                    }
                }
            >
                {feature.content}
            </motion.div>
        </div>
    )
}

export default Scroll_Hooks