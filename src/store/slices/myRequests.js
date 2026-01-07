import { createSlice } from "@reduxjs/toolkit";

const myRequestsSlice = createSlice({
    name : "requests",
    initialState : null,
    reducers : {
        setMyRequests : (state, action)=> action.payload,
        updateMyRerquests : (state, action) => {
            const requestId = action.payload;
            const newRequests = state.filter((request) => request._id !== requestId);
            return newRequests;
        }
    }
});

export const {setMyRequests, updateMyRerquests} = myRequestsSlice.actions;
export default myRequestsSlice.reducer;