/* eslint-disable */
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const borderObj = { border: '1px solid gray', outline: 'none', padding: '0.5rem', borderRadius: '0.375rem' }
  const user = useSelector((state) => state.user);
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    age: '',
    interests: [],
    photoUrl: '',
  });



  useEffect(() => {
    if (!user) return;

    setUserForm({
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      emailId: user.emailId ?? '',
      age: user.age ?? '',
      interests: user.interests ?? [],
      photoUrl: user.photoUrl ?? '',
    });
  }, [user]);



  function onChangeHandler(eve) {
    const { id, value } = eve.target;
    setUserForm((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  async function updateUserDetails(eve){
    eve.preventDefault();
    try {
      const response = await axios.patch(BASE_URL+'profile/edit',{...userForm, gender : user.gender, interests : user.interests},{withCredentials : true,});
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
      <div className="w-[80%] md:w-[70%] max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {user && (
          <form onSubmit={updateUserDetails} className='flex bg-base-300 p-[2%] rounded-lg justify-between gap-[2.5%]'>
            <section className="  rounded-lg shadow-md w-full">
              <div className='flex flex-col'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={userForm.firstName}
                  style={borderObj}
                  className={'border border-gray-200 ring- outline-gray-300 p-2 rounded-md'}
                  id={'firstName'} placeholder='First Name' onChange={onChangeHandler} />


              </div>
              <div className='flex flex-col'>
                <label htmlFor="lastName">Last Name</label>
                <input style={borderObj} type="text" value={userForm.lastName} onChange={onChangeHandler}
                  id={'lastName'} placeholder='Last Name' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="age">Age</label>

                <input style={borderObj} type="number" value={userForm.age} onChange={onChangeHandler}
                  id={'age'} placeholder='Age' />
              </div>
              <div className='flex flex-col' >
                <label htmlFor="emailId">Email ID</label>
                <input style={borderObj} type="email" value={userForm.emailId} onChange={onChangeHandler}
                  id={'emailId'} placeholder='Email ID' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="photoUrl">Profile Photo</label>

                <input style={borderObj} type="text" value={userForm.photoUrl} onChange={onChangeHandler}
                  id={'photoUrl'} placeholder='Profile Photo' />
              </div>
            </section>
            <div>
              <div className='h-[40vh] w-[40vh] flex justify-center items-center'>
                <img src={userForm.photoUrl} alt={`${user.firstName} Photo`} className='w-full h-full' />
              </div>
              <div className='my-[2%] w-full flex justify-center'>
                <button className='bg-primary px-[3%] py-[1%] rounded-lg text-white font-semibold cursor-pointer'>
                  Save
                </button>
              </div>
            </div>
          </form>

        )}
      </div>
    </section>
  )
}

export default ProfilePage;