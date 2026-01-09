import {createSlice} from '@reduxjs/toolkit';


const feedSlice = createSlice({
    name : 'feed',
    initialState : {
        userFeed : null,
    },
    reducers : {
        addFeed : (state, action)=>{
            state.userFeed = action.payload;
            return state;
        },
        removeUserFromFeed : (state,action )=>{
            const newFeed = state.userFeed.filter((item)=>item._id !== action.payload);
            state.userFeed = newFeed;
            return state;
        },
    }
});


export const {addFeed, removeUserFromFeed} = feedSlice.actions;
export default feedSlice.reducer;