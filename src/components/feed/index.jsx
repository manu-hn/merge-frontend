import { addFeed } from '@/store/slices/feedSlice';
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UsedCard from './UsedCard';

const FeedPage = () => {
  const dispatch = useDispatch();
  const {userFeed} = useSelector((state)=>state.feed)

  const fetchUseresFeed = async ()=>{
    // if(userFeed) return;
    try {
      const response = await axios.get(BASE_URL+'user/feed',{withCredentials : true,});
    console.log("User Feed : ", response.data);
      dispatch(addFeed(response?.data?.data));
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
    fetchUseresFeed();
  },[])
  return userFeed && (
    <div>
      {
        userFeed?.map((item)=>(
          <UsedCard key={item._id} user={{...item}} />
        ))
      }
      <UsedCard />
    </div>
  )
}

export default FeedPage;