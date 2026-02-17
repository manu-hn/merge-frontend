/* eslint-disable */
import { setMyRequests, updateMyRerquests } from '@/store/slices/myRequests';
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ConnectionRequests = () => {

    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);



    async function fetchMyRequests() {
        if (requests) return;
        try {
            const response = await axios.get(`${BASE_URL}user/requests/received`, { withCredentials: true });
            dispatch(setMyRequests(response.data?.data));

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMyRequests();
    }, []);

   async function reviewRequest(status, requestId){
    try {
        const response = await axios.post(`${BASE_URL}request/review/${status}/${requestId}`,{}, { withCredentials: true });
        dispatch(updateMyRerquests(requestId));
        console.log(response)

        // todo : refresh the requests automatically when review operation is performed
        
    } catch (error) {
        console.error(error)
    }
   }

    if (!requests) return null;

    if (requests.length === 0) return <section className='min-h-[calc(100vh-30vh)] flex justify-center items-center'>
     <h2>No Requests Found</h2>
  </section>
    
    return (
        <article className='w-full flex justify-center min-h-[calc(100vh-45vh)] items-center overflow-auto'>
            <section className={`w-[95%] my-[2%] h-[72.5vh] flex flex-col gap-y-4`}>
                {
                    requests?.map((item) => {
                        const { photoUrl, firstName, lastName, age, gender, emailId, interests } = item?.fromUserId;

                        return (
                            <div key={item?._id} className={`bg-base-300 p-[2%] w-2/5 flex gap-[2%] rounded-lg mx-auto`}>
                                <div className='w-[75%]'>
                                    <img className={`h-44 w-44 rounded-full`} src={`${photoUrl}`} alt={`${firstName} Photo`} />
                                </div>
                                <div className='w-full'>
                                    <h2>{firstName + " " + lastName} </h2>
                                    {age && gender && <p>age : {age}  {gender}</p>}
                                    <p>{emailId}</p>

                                    <p>Interests :</p>
                                    <div className='w-full flex flex-wrap justify-evenly gap-[2%] gap-y-2'>
                                        {interests?.map((interest) => (<p className={'p-[1.5%] bg-slate-700 rounded-lg'} key={interest}>{interest}</p>))}
                                    </div>

                                    <div className='flex my-[2%] gap-4 justify-end'>
                                        <button onClick={()=>reviewRequest('accepted', item?._id)} className="btn btn-primary">Accept</button>
                                        <button onClick={()=>reviewRequest('rejected', item?._id)} className="btn btn-secondary">Reject</button>
                                    </div>
                                </div>

                            </div>)
                    })
                }
            </section>

        </article>
    )
}

export default ConnectionRequests;