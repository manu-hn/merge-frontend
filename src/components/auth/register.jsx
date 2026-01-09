import { loginUser } from '@/store/slices/user-slice';
import { BASE_URL, REGISTRATION_FIELDS } from '@/utils/constants';
import axios from 'axios';
import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (eve) => {
    const { name, value } = eve.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  async function onFormSubmit(eve) {
    eve.preventDefault();
    try {
     const response = await axios.post(`${BASE_URL}register`, formData, { withCredentials: true });
     dispatch(loginUser(response.data.data));
     console.log(response);

     return navigate("/profile");

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <section className='card card-border'>
          <h2 className="text-center text-[1.5em] font-semibold">Sign Up</h2>

          {
            REGISTRATION_FIELDS?.map((item) => (<div className='flex flex-col' key={item?.id}>
              <label htmlFor={`${item?.id}`}>{item?.label}</label>
              {
                item?.type === "password" ? (
                  <div
                    className={`flex justify-between items-center rounded-lg ${isPasswordFieldFocused ? 'border-2 border-white  '
                      : 'border border-white/30'} `}>
                    <input onChange={handleOnChange} onFocus={() => setIsPasswordFieldFocused(true)} onBlur={() => setIsPasswordFieldFocused(false)}
                      className=' p-[2%] rounded-lg border-none outline-none ring-0'
                      type={`${!isPasswordVisible ? "password" : "text"}`} placeholder={item?.placeHolder}
                      required={item?.required} id={item?.id} name={item?.id} />
                    {item?.type === 'password' && (
                      <span onClick={() => setIsPasswordVisible((flag) => !flag)}
                        className='cursor-pointer px-2'>{isPasswordVisible ? <EyeClosed /> : <Eye />}</span>
                    )}
                  </div>
                ) : (

                  <input onChange={handleOnChange}
                    className='border border-white/30 p-[2%] rounded-lg'
                    type={`${item?.type}`} placeholder={item?.placeHolder}
                    required={item?.required} id={item?.id} name={item?.id} />
                )
              }


            </div>))
          }
        </section>
        <div className='my-[2%] flex justify-end items-center'>
          <button className='btn btn-primary'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register;