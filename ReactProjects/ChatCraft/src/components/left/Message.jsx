import React, { useContext, useState } from 'react';
import { BsSend, BsTrash3 } from "react-icons/bs";
import { UserContext } from '../../context/userContext';

const Message = () => {
  const { sender, receiver, senderImage, receiverImage } = useContext(UserContext);
  const [activeParticipant, setActiveParticipant] = useState('sender');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Sender', time: '10:30 AM', message: 'Hey! how are you?' },
    { id: 2, sender: 'Receiver', time: '10:30 AM', message: 'fine and u?' },
    { id: 3, sender: 'Sender', time: '10:30 AM', message: 'good where do you live now?' },
    { id: 4, sender: 'Receiver', time: '10:30 AM', message: 'Langkawi and u?' },
    { id: 5, sender: 'Sender', time: '10:30 AM', message: 'Georgetown Penang and have you switched company?' },
    { id: 6, sender: 'Receiver', time: '10:30 AM', message: "yes I've switched 2 months ago and where do you work now?" },
    { id: 7, sender: 'Sender', time: '10:30 AM', message: 'same company looking for switch' }
  ]);

  // Function to get current time in 12-hour format
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  // Handle Messages
  const handleMessage = (activeParticipant) => {
    if (!message.trim()) return;
    const id = Date.now();
    const senderName = activeParticipant === 'sender' ? sender : receiver;
    const currentTime = getCurrentTime();
    
    const newMessage = {
      id,
      sender: senderName,
      time: currentTime,
      message: message.trim()
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Auto switch participants after message sent
    if(activeParticipant === 'sender'){
      setActiveParticipant('receiver');
    }else{
      setActiveParticipant('sender');
    }
    
    console.log(`Message sent by ${senderName} at ${currentTime}: ${message}`);
  };

  // handle delete message
  const handleDelete = (id) => {
      
  }

  return (
    <div className="flex flex-col gap-5 py-4">
      <h4 className="text-lg font-semibold">Compose Messages</h4>

      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
        <div className="flex gap-4">
          <div 
            onClick={() => setActiveParticipant('sender')}
            className={`flex border rounded-lg px-4 py-2 gap-3 items-center flex-1 cursor-pointer transition-colors ${
              activeParticipant === 'sender'
                ? 'bg-[#2563EB] text-white border-[#2563EB]' 
                : 'border-slate-200 hover:bg-[#2563EB] hover:text-white'
            }`}
          >
            <img src={senderImage} alt="Sender Image" className='h-8 w-8 rounded-full' />
            <span className='text-base'>{sender}</span>
          </div>
          <div 
            onClick={() => setActiveParticipant('receiver')}
            className={`flex border rounded-lg px-4 py-2 gap-3 items-center flex-1 cursor-pointer transition-colors ${
              activeParticipant === 'receiver' 
                ? 'bg-[#2563EB] text-white border-[#2563EB]' 
                : 'border-slate-200 hover:bg-[#2563EB] hover:text-white'
            }`}
          >
            <img src={receiverImage} alt="Receiver Image" className='h-8 w-8 rounded-full' />
            <span className='text-base'>{receiver}</span>
          </div>
        </div>

        {/* Message section */}
        <div className="flex gap-3 items-center">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleMessage(activeParticipant)}
            className='border border-slate-200 text-heading text-sm rounded-lg h-9 focus:ring-brand focus:border-brand w-full px-3 py-2.5 shadow-xs placeholder:text-body' 
            placeholder={`Sending message as ${activeParticipant}...`} 
          />
          <BsSend className='cursor-pointer' onClick={()=>handleMessage(activeParticipant)} size={22} />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className='text-sm font-semibold'>Message history</h4>
          <div className="max-h-64 overflow-y-auto border border-slate-200 rounded-lg p-2">

            {messages.map((msg) => (
              <div key={msg.id} className="flex items-center justify-between space-y-2 group">
                <div className="flex-1">
                  <span className="text-xs mr-2 font-semibold">{msg.sender}</span>
                  <span className="text-xs">{msg.time}</span>
                  <p className="msg text-sm">{msg.message}</p>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BsTrash3 onClick={() => handleDelete(msg.id)} className='cursor-pointer hover:text-red-600 transition-colors' />
                </div>
              </div>
            ))}

          </div>
          <div className="flex justify-center gap-3 rounded-lg border border-slate-200 py-2 cursor-pointer group">
            <BsTrash3 size={20} className='group-hover:text-red-600 transition-colors'/>
            <span className='text-sm font-semibold group-hover:text-red-600 transition-colors'>Clear all messages</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message