import React, { useContext } from 'react';
import { BsSend, BsTrash3 } from "react-icons/bs";
import { UserContext } from '../../context/userContext';


const Message = () => {
  const { sender, receiver, senderImage, receiverImage } = useContext(UserContext);
  const messages = [
    { id: 1, sender: 'Sender', time: '10:30 AM', message: 'Hey! how are you?' },
    { id: 2, sender: 'Receiver', time: '10:30 AM', message: 'fine and u?' },
    { id: 3, sender: 'Sender', time: '10:30 AM', message: 'good where do you live now?' },
    { id: 4, sender: 'Receiver', time: '10:30 AM', message: 'Langkawi and u?' },
    { id: 5, sender: 'Sender', time: '10:30 AM', message: 'Georgetown Penang and have you switched company?' },
    { id: 6, sender: 'Receiver', time: '10:30 AM', message: "yes I've switched 2 months ago and where do you work now? yes I've switched 2 months ago and where do you work now?" },
    { id: 7, sender: 'Sender', time: '10:30 AM', message: 'same company looking for switch' }
  ];

  return (
    <div className="flex flex-col gap-5 py-4">
      <h4 className="text-lg font-semibold">Compose Messages</h4>

      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
        <div className="flex gap-4">
          <div className="flex bg-[#7f9ceb] text-white rounded-lg px-4 py-2 gap-2 items-center flex-1 cursor-pointer">
            <img src={senderImage} alt="Sender Image" className='h-8 w-8 rounded-full' />
            <span className='text-base'>{sender}</span>
          </div>
          <div className="flex bg-[#7f9ceb] text-white rounded-lg px-4 py-2 gap-2 items-center flex-1 cursor-pointer">
            <img src={receiverImage} alt="Sender Image" className='h-8 w-8 rounded-full' />
            <span className='text-base'>{receiver}</span>
          </div>
        </div>

        {/* Message section */}
        <div className="flex gap-3 items-center">
          <input type="text" className='border border-slate-200 text-heading text-sm rounded-lg h-9 focus:ring-brand focus:border-brand w-full px-3 py-2.5 shadow-xs placeholder:text-body' placeholder='Enter message here...' />
          <BsSend className='cursor-pointer' size={22} />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className='text-sm font-semibold'>Message history</h4>
          <div className="max-h-64 overflow-y-auto border border-slate-200 rounded-lg p-2">

            {messages.map((msg) => (
              <div key={msg.id} className="flex items-center justify-between space-y-2 group">
                <div className="flex-1">
                  <span className="text-xs mr-2 font-semibold">{msg.sender}</span>
                  <span className="text-xs">{msg.time}</span>
                  <div className="msg text-sm">{msg.message}</div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BsTrash3 className='cursor-pointer hover:text-red-600 transition-colors' />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Message