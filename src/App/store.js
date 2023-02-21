import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Post/postSlice";

export default configureStore({
    reducer: {
        posts: postReducer
    }
})