import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "@/store/slices/user-slice";


const appStore = configureStore({
    reducer : {
        user : UserSlice
    }
});

export default appStore;