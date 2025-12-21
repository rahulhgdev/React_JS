import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const { session, signUpNewUser } = UserAuth();
    const navigate = useNavigate();
    console.log(session);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await signUpNewUser(email, password);
            if(result.success){
                navigate('/dashboard');
            }
        } catch (error) {
            setError("an error occurred");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>
            <form onSubmit={handleSignUp} className='max-w-md m-auto pt-24'>
                <h2 className='font-bold pb-2'>Signup today!</h2>
                <p>Already have an account? <Link to="/signin">Sign in!</Link></p>
                <div className="flex flex-col py-4">
                    <input
                        type="email"
                        placeholder='Email'
                        className='p-3 mt-6'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className='p-3 mt-6'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' disabled={loading} className='w-full mt-6'>Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp