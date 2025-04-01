import React from 'react'
import Header from './Header'
import TransHistory from './TransHistory'
import InputModal from './InputModal'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logOutImg from '../assets/signout.svg'
import Footer from './Footer'

const Dashboard = () => {
  const navigate = useNavigate();
  const { session, signOut } = useAuth();

  console.log(session);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Signout error", error);
    }
  }

  return (
    <div className="bg-[rgb(63,94,251)] min-h-dvh h-[-webkit-fill-available] md:h-dvh pt-5 md:pt-10 px-4 relative mainDiv">
      <div className="flex items-center justify-center gap-4 mb-4">
        <h3 className='text-[18px] font-semibold text-white'>Welcome, {session?.user?.email} </h3>
        <img className='text-red cursor-pointer' onClick={handleSignOut} type="button" src={logOutImg} height="45" width="45" />
      </div>
      <div className="bg-[#fffbc8] place-self-center w-[345px] md:w-[424px] max-w-lg p-5 pt-4 min-h-auto rounded-xl">
        <Header />
        <TransHistory />
        <InputModal />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard