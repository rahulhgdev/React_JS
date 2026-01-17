import React, { useRef, useState } from 'react'
import senderImg from '../../assets/users/sender-img.png';
import receiverImg from '../../assets/users/receiver-img.png';
import { CgSoftwareUpload } from "react-icons/cg";

const UserSettings = () => {
  const [sender, setSender] = useState('Rahul');
  const [receiver, setReceiver] = useState('Manoj');
  const [senderOnline, setSenderOnline] = useState(true);
  const [receiverOnline, setReceiverOnline] = useState(false);
  const [senderImage, setSenderImage] = useState(senderImg);
  const [receiverImage, setReceiverImage] = useState(receiverImg);
 
  // Refs for file inputs
  const senderFileInputRef = useRef(null);
  const receiverFileInputRef = useRef(null);

  // Handler for image upload
  const handleImageUpload = (userType) => {
    if (userType === 'sender') {
      senderFileInputRef.current?.click();
    } else {
      receiverFileInputRef.current?.click();
    }
    console.log(`Upload image for ${userType}`);
  };

  // Handler for file selection
  const handleFileChange = (e, userType) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (userType === 'sender') {
          setSenderImage(reader.result);
        } else {
          setReceiverImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-5 py-4">
      <h4 className="text-lg font-semibold">User settings</h4>

      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
        {/* Hidden file inputs */}
        <input
          ref={senderFileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 'sender')}
          className="hidden"
        />
        <input
          ref={receiverFileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 'receiver')}
          className="hidden"
        />

        {/* Sender Section */}
        <h3 className="text-sm font-semibold">Sender</h3>
        <div className="flex gap-4">
          <div className="avatar relative">
            <img 
              src={senderImage} 
              alt="Sender Avatar" 
              className="h-15 w-15 rounded-full cursor-pointer" 
              onClick={() => handleImageUpload('sender')}
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
        <h3 className="text-sm font-semibold">Receiver</h3>
        <div className="flex gap-4">
          <div className="avatar relative">
            <img 
              src={receiverImage} 
              alt="Receiver Avatar" 
              className="h-15 w-15 rounded-full cursor-pointer" 
              onClick={() => handleImageUpload('receiver')}
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