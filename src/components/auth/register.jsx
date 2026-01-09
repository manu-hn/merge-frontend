import { REGISTRATION_FIELDS } from '@/utils/constants';
import React, { useState } from 'react'

const Register = () => {
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOnChange = (eve)=>{
    const {name, value} = eve.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function onFormSubmit(eve){
    eve.preventDefault();
    try {
      console.log("Form Data:", formData);
      
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
            REGISTRATION_FIELDS?.map((item)=>(<div className='flex flex-col' key={item?.id}>
              <label htmlFor={`${item?.id}`}>{item?.label}</label>
              {
                item?.type==="password" ? (
                   <div className='flex justify-between items-center rounded-lg border border-white/30'>
                <input onChange={handleOnChange} 
              className=' p-[2%] rounded-lg' 
              type={`${ !isPasswordVisible ? "password" : "text"}`} placeholder={item?.placeHolder} 
              required={item?.required} id={item?.id} nam={item?.id} />
              {item?.type === 'password' && (
                <span onClick={()=>setIsPasswordVisible((flag)=>!flag)} 
                className='cursor-pointer'>{isPasswordVisible ? "Hide" : "View"}</span>
              )}
            </div>
                ) : (

 <input onChange={handleOnChange} 
              className='border border-white/30 p-[2%] rounded-lg' 
              type={`${item?.type}`} placeholder={item?.placeHolder} 
              required={item?.required} id={item?.id} nam={item?.id} />
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