import React, { useState } from 'react'
import senderImg from '../../assets/users/avatar.jpg';
import receiverImg from '../../assets/users/chernobyl.jpg';
import { CgSoftwareUpload } from "react-icons/cg";

const UserSettings = () => {
  const [sender, setSender] = useState('Rahul');
  const [receiver, setReceiver] = useState('Manoj');
  const [senderOnline, setSenderOnline] = useState(true);
  const [receiverOnline, setReceiverOnline] = useState(false);

  // Handler for image upload
  const handleImageUpload = (userType) => {
    // TODO: Implement image upload functionality
    console.log(`Upload image for ${userType}`);
  };

  return (
    <div className="flex flex-col gap-5 py-4">
      <h4 className="text-lg font-semibold">User settings</h4>

      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
        {/* Sender Section */}
        <h3 className="text-[#1E3A8A] text-sm font-bold">Sender</h3>
        <div className="flex gap-4">
          <div className="avatar relative">
            <img 
              src={senderImg} 
              alt="Sender Avatar" 
              className="h-15 w-15 rounded-full cursor-pointer" 
            />
            <CgSoftwareUpload 
              className="absolute right-0 bottom-2 cursor-pointer hover:text-[#2563EB] transition-colors" 
              onClick={() => handleImageUpload('sender')}
              title="Upload sender image"
            />
          </div>
          <div className="userInfo flex-1">
            <input
              id="sender-name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              type="text" 
              className="border border-slate-200 text-heading text-sm rounded-lg h-9 focus:ring-brand focus:border-brand w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
              placeholder="Name" 
              aria-label="Sender name"
            />
            <label htmlFor="sender-online" className="flex items-center gap-2 text-sm pt-1.5 cursor-pointer">
              <input 
                id="sender-online"
                className="rounded cursor-pointer" 
                type="checkbox" 
                checked={senderOnline}
                onChange={(e) => setSenderOnline(e.target.checked)}
                aria-label="Sender online status"
              />
              <span className="select-none text-[12px]">Online Status</span>
            </label>
          </div>
        </div>

        {/* Receiver Section */}
        <h3 className="text-[#1E3A8A] text-sm font-bold">Receiver</h3>
        <div className="flex gap-4">
          <div className="avatar relative">
            <img 
              src={receiverImg} 
              alt="Receiver Avatar" 
              className="h-15 w-15 rounded-full cursor-pointer" 
            />
            <CgSoftwareUpload 
              className="absolute right-0 bottom-2 cursor-pointer hover:text-[#2563EB] transition-colors" 
              onClick={() => handleImageUpload('receiver')}
              title="Upload receiver image"
            />
          </div>
          <div className="userInfo flex-1">
            <input
              id="receiver-name"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              type="text" 
              className="border border-slate-200 text-heading text-sm rounded-lg h-9 focus:ring-brand focus:border-brand w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
              placeholder="Name"
              aria-label="Receiver name"
            />
            <label htmlFor="receiver-online" className="flex items-center gap-2 text-sm pt-1.5 cursor-pointer">
              <input 
                id="receiver-online"
                className="rounded cursor-pointer" 
                type="checkbox"
                checked={receiverOnline}
                onChange={(e) => setReceiverOnline(e.target.checked)}
                aria-label="Receiver online status"
              />
              <span className="select-none text-[12px]">Online Status</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSettings