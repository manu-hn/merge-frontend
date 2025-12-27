import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/slices/user-slice';
import { BASE_URL } from '@/utils/constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [emailId, setEmailId] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();


  async function handleFormSubmit(eve){
    eve.preventDefault();
    try {
      const response = await axios.post(BASE_URL+'login', 
        {emailId, password}, 
        {withCredentials : true,});

      dispatch(loginUser(response.data.data));
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <section className={`flex justify-center items-center p-10 text-[4vw] md:text-[2vw] lg:text-[1.5vw]`}>
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="text-center text-[1.5em] font-semibold">Login</h2>

          <div className="card-actions ">
            <form onSubmit={handleFormSubmit} className='w-full'>
              <div className={`flex flex-col`}>
                <label htmlFor="emailId">Email ID</label>
                <input onChange={(e)=>setEmailId(e.target.value)} value={emailId} 
                className='border border-white/30 p-[2%] rounded-lg'
                type="email" id={'emailId'} placeholder='Enter your email' />
              </div>
              <div className={`flex flex-col`}>
                <label htmlFor="password">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} 
                 className='border border-white/30 p-[2%] rounded-lg'
                type="password" id={'password'} placeholder='Enter your password' />
              </div>

              <button type='submit' className="btn btn-primary my-[2%]">Login</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;