import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "@/store/slices/user-slice";
import FeedSlice from "@/store/slices/feedSlice";
import ConnectionsSlice from "@/store/slices/connectionsSlice";
import MyRequests from "@/store/slices/myRequests";


const appStore = configureStore({
    reducer : {
        user : UserSlice,
        feed : FeedSlice,
        connections : ConnectionsSlice,
        requests : MyRequests,
    }
});

export default appStore;