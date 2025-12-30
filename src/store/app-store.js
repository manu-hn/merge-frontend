import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "@/store/slices/user-slice";
import FeedSlice from "@/store/slices/feedSlice";


const appStore = configureStore({
    reducer : {
        user : UserSlice,
        feed : FeedSlice,
    }
});

export default appStore;