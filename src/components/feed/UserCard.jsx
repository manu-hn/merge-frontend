import React from 'react'

const UserCard = ({ user }) => {

  return (
    <div className="card bg-base-300 w-96 shadow-sm mx-auto">
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
          <div className="badge badge-outline">Ignore</div>
          <div className="badge badge-outline">Interested</div>
        </div>
      </div>
    </div>
  )
}

export default UserCard