import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/slices/user-slice';
import { BASE_URL } from '@/utils/constants';
import { useNavigate } from 'react-router-dom';
import Register from './register';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(false);
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  async function handleFormSubmit(eve) {
    eve.preventDefault();
    try {
      const response = await axios.post(BASE_URL + 'login',
        { emailId, password },
        { withCredentials: true, });

      dispatch(loginUser(response.data.data));
      navigate("/feed")
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <section className={`flex justify-center bg-black items-center p-10 text-[4vw] md:text-[2vw] lg:text-[1.5vw] md:min-h-[calc(100vh-30vh)]`}>
      <div className='p-[2%] bg-base-300 card card-border w-96'>
        {
          isLoginForm ? (
            <div className="">
              <div className="card-body">
                <h2 className="text-center text-[1.5em] font-semibold">Login</h2>

                <div className="card-actions ">
                  <form onSubmit={handleFormSubmit} className='w-full'>
                    <div className={`flex flex-col my-2`}>
                      <label htmlFor="emailId">Email ID</label>
                      <input onChange={(e) => setEmailId(e.target.value)} value={emailId}
                        className='border border-white/30 p-[2%] rounded-lg'
                        type="email" id={'emailId'} placeholder='Enter your email' />
                    </div>
                    <div className={`flex flex-col my-2 relative`}>
                      <label htmlFor="password">Password</label>
                     <div className={`p-[2%] rounded-lg 
                      ${isPasswordFieldFocused ? 'border-2 border-white' : 'border border-white/30'}`}>
                       <input onFocus={() => setIsPasswordFieldFocused(true)} onBlur={() => setIsPasswordFieldFocused(false)}
                       onChange={(e) => setPassword(e.target.value)} value={password}
                        className={`border-none w-full focus:ring-0 focus:outline-none bg-transparent `}
                        type={isPasswordVisible ? "text" : "password"} id={'password'} placeholder='Enter your password' 
                        />
                    
                    {
                      isPasswordVisible ? (
                        <EyeOff onClick={() => setIsPasswordVisible(false)} className='absolute right-3 top-7 cursor-pointer' />
                      ) : (
                        <Eye onClick={() => setIsPasswordVisible(true)} className='absolute right-3 top-7 cursor-pointer' />
                      )
                    }
                   
                     </div>
                    </div>

                    <button type='submit' className="btn btn-primary my-[2%]">Login</button>

                  </form>
                </div>
              </div>

            </div>
          ) : (<Register />)
        }
        <div className='my-[2%] text-[0.7em] text-center'>
          {
            isLoginForm ? (
              <p>Don't have an account? <span onClick={() => setIsLoginForm(false)} className='text-blue-600 cursor-pointer'>Register</span></p>

            ) : (
              < p>Already have an account? <span onClick={() => setIsLoginForm(true)} className='text-blue-600 cursor-pointer'>Login</span></p>
            )
          }
        </div>
      </div>

    </section>
  )
}

export default Login;