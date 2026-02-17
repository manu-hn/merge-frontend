import { addToConnections } from '@/store/slices/connectionsSlice';
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MyConnections = () => {

  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch();


  async function fetchMyConnections() {
    if (connections) return;
    try {
      const response = await axios.get(BASE_URL + "user/connections", { withCredentials: true });
      dispatch(addToConnections(response?.data?.data));

    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  }

  useEffect(() => {

    fetchMyConnections()
  }, [])


  if (!connections) return null;

  if (connections.length === 0) return <section className='min-h-[calc(100vh-30vh)] flex justify-center items-center'>
    <h2>No Connectiond Found</h2>
  </section>
  return (
    <article className='w-full flex justify-center min-h-[calc(100vh-45vh)] items-center'>
      <section className={`w-[95%] h-[72.5vh] flex flex-col gap-y-4 my-[2%]`}>
        {
          connections?.map((item) => (
            <div key={item?._id} className={`bg-base-300 p-[2%] w-2/5 flex gap-[2%] rounded-lg mx-auto`}>
              <div className='w-[75%]'>
                <img className={`h-44 w-44 rounded-full`} src={`${item?.photoUrl}`} alt={`${item?.firstName} Photo`} />
              </div>
              <div className='w-full'>
                <h2>{item?.firstName + " " + item?.lastName} </h2>
                {item?.age && item?.gender && <p>age : {item?.age}  {item?.gender}</p>}
                <p>{item?.emailId}</p>

                <p>Interests :</p>
                <div className='w-full flex flex-wrap justify-evenly gap-[2%] gap-y-2'>
                  {item?.interests?.map((interest) => (<p className={'p-[1.5%] bg-slate-700 rounded-lg'} key={interest}>{interest}</p>))}
                </div>
              </div>
            </div>))
        }
      </section>

    </article>
  )
}

export default MyConnections