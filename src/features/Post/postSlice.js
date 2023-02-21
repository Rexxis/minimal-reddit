import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        getPosts: (state, action) => {
            state.posts.push(action.payload)
        }
    }
})

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;