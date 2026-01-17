import React from 'react'
import senderImg from '../../assets/users/sender-img.png';
import receiverImg from '../../assets/users/receiver-img.png';
import { BsSend } from "react-icons/bs";

const Message = () => {
  return (
    <div className="flex flex-col gap-5 py-4">
      <h4 className="text-lg font-semibold">Compose Messages</h4>

      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
          <div className="flex gap-4">
            <div className="flex bg-[#7f9ceb] text-white rounded-lg px-4 py-2 gap-2 items-center flex-1 cursor-pointer">
              <img src={senderImg} alt="Sender Image" className='h-8 w-8 rounded-full' />
              <span className='text-base'>Rahul</span>
            </div>
            <div className="flex bg-[#7f9ceb] text-white rounded-lg px-4 py-2 gap-2 items-center flex-1 cursor-pointer">
              <img src={receiverImg} alt="Sender Image" className='h-8 w-8 rounded-full' />
              <span className='text-base'>Manoj</span>
            </div>
          </div>

          {/* Message section */}
          <div className="flex gap-3 items-center">
            <input type="text" className='border border-slate-200 text-heading text-sm rounded-lg h-9 focus:ring-brand focus:border-brand w-full px-3 py-2.5 shadow-xs placeholder:text-body' placeholder='Enter message here...' />
            <BsSend className='cursor-pointer' size={22}/>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className='text-sm font-semibold'>Message history</h4>
            <div className="min-h-64 overflow-y-auto border border-slate-200 rounded-lg p-2">
              
            </div>
          </div>

      </div>
    </div>
  )
}

export default Message