import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "@/store/slices/user-slice";
import FeedSlice from "@/store/slices/feedSlice";
import ConnectionsSlice from "@/store/slices/connectionsSlice";


const appStore = configureStore({
    reducer : {
        user : UserSlice,
        feed : FeedSlice,
        connections : ConnectionsSlice,
    }
});

export default appStore;