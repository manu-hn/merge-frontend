import { addFeed } from '@/store/slices/feedSlice';
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UsedCard from './UserCard';
const FeedPage = () => {
  const dispatch = useDispatch();
  const {userFeed} = useSelector((state)=>state.feed)

  const fetchUseresFeed = async ()=>{
    if(userFeed) return;
    try {
      const response = await axios.get(BASE_URL+'user/feed',{withCredentials : true,});
    
      dispatch(addFeed(response?.data?.data));
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
    fetchUseresFeed();
  },[])

  if(!userFeed) return ;
  if(userFeed?.length <= 0) return <div className='text-center flex justify-center mt-10 text-gray-500 min-h-[calc(100vh-35vh)]'>
    <p className='text-center'>No User Available</p>
  </div>;
  return userFeed && (
    <section className='min-h-screen'>
          {
        userFeed && (
           <UsedCard  user={userFeed?.[0]} />
        )
      }
    
    </section>
  )
}

export default FeedPage;