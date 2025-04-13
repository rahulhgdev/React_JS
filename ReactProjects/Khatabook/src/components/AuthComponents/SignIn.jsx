// src/pages/SignUp.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const { session, signIn, loading } = useAuth();

  // if login then -> dashboard
  useEffect(() => {
    if (session) {
      navigate('/dashboard');
    }
  }, [navigate, session])

  const togglePass = () => {
    setShowPass(!showPass);
  }
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      await signIn(email, password);
      navigate('/dashboard');  // Redirect to the dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 signInPage">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@xyz.com" required />
              </div>
              <div className='relative'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                {showPass ? <FaEye onClick={togglePass} className='absolute right-3 top-[42px] text-neutral-200' />
                  : <FaRegEyeSlash onClick={togglePass} className='absolute right-3 top-[42px] text-neutral-200' />}
              </div>
              <button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account? <Link to="/signup" className="font-medium text-blue-600 underline dark:text-blue-500">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
