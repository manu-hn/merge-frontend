import { removeUserFromFeed } from '@/store/slices/feedSlice';
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();



  const handleRequest = async (status, requestId) => {
    try {
      const response = await axios.post(BASE_URL + `request/send/${status}/${requestId}`, {}, { withCredentials: true, });
      console.log(response?.data);
      dispatch(removeUserFromFeed(requestId));

      // todo : Use it for toast
      // if (response?.data?.success) {
      //   console.log(response?.data?.message)
      // }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="card bg-base-300 w-96 shadow-sm mx-auto my-[2%]">
      <figure className='h-[50dvh]'>
        <img
          className='w-full h-full'
          src={user?.photoUrl}
          alt="User Profile Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user?.firstName + " " + user?.lastName}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <div className='flex flex-wrap gap-[1.5%]'>{user?.interests?.map((interest) => (
          <p className='bg-gray-700 rounded-lg text-center hover:scale-105 px-[2%] py-[1%]' key={interest}>{interest}</p>
        ))}</div>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={() => handleRequest('ignored', user?._id)}>Ignore</button>
          <button className="btn btn-primary" onClick={() => handleRequest('interested', user?._id)}>Interested</button>


        </div>
      </div>
    </div>
  )
}

export default UserCard