import React from 'react'

const UsedCard = ({user}) => {
    console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={user?.photoUrl}
      alt="User Profile Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {user?.firstName + " " + user?.lastName}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Ignore</div>
      <div className="badge badge-outline">Interested</div>
    </div>
  </div>
</div>
  )
}

export default UsedCard