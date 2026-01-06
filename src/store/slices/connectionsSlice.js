import { createSlice } from '@reduxjs/toolkit';

const myCOnnectionSlice =createSlice({
    name : "connections",
    initialState : null,
    reducers : {
        addToConnections : (state, action)=>action.payload,
    }
});


export const {addToConnections} = myCOnnectionSlice.actions;

export default myCOnnectionSlice.reducer;