import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Platforms = () => {

    const options = [
        {value: 'whatsapp', label: 'Whatsapp', icon: <FaWhatsapp />},
        {value: 'instagram', label: 'Instagram', icon: <FaInstagram />},
        {value: 'twitter', label: 'Twitter', icon: <FaTwitter />},
        {value: 'telegram', label: 'Telegram', icon: <FaTelegram />},
        {value: 'imessage', label: 'iMessage', icon: <FaApple />},
    ]

    const [platform, setPlatform] = useState(options[0].value);
    const [open, setOpen] = useState(false);

    const selected = options.find(o => o.value === platform);

    return (
        <div className="flex flex-col gap-5 py-4">
            <h4 className="text-lg font-semibold">Select Platform</h4>
            <div className="relative w-full">
                <button 
                    className="flex items-center w-full gap-2 p-2 border border-gray-300 rounded-md bg-white shadow-sm"
                    onClick={() => setOpen(o => !o)}
                >
                    {selected.icon}
                    <span>{selected.label}</span>
                    <span className="ml-auto">&#9662;</span>
                </button>
                {open && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {options.map(item => (
                            <div
                                key={item.value}
                                className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 ${platform === item.value ? 'bg-gray-200' : ''}`}
                                onClick={() => { setPlatform(item.value); setOpen(false); }}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Platforms