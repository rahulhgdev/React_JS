import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

  const navigate = useNavigate();
  const { session, signOut } = UserAuth();

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
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <button onClick={handleSignOut} className='hover:cursor-pointer border inline-block px-4 py-3 mt-4'>Sign Out</button>
    </div>
  )
}

export default Dashboard