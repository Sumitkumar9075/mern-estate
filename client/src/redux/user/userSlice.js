import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state)=>{
            state.loading= true;
        },
        updateUserSuccess : (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error= null
        },
        updateUserFailure:(state, action) =>{
            state.error = action.payload;
            state.loading = false 
        },
        deleteUserStart: (state)=>{
           
            state.loading = true;
           

        },
        deleteUserSuccess: (state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;

        },
        deleteUserFailure: (state)=>{
            
            state.loading = false;
            state.error = action.payload;

        },
        SignOutUserStart: (state)=>{
           
            state.loading = true;
           

        },
        SignOutUserSuccess: (state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;

        },
        SignOutUserFailure: (state)=>{
            
            state.loading = false;
            state.error = action.payload;

        }
    }
});

export const { signInStart, signInSuccess, signInFailure , updateUserFailure , updateUserSuccess , updateUserStart ,deleteUserFailure , deleteUserSuccess ,deleteUserStart , SignOutUserFailure ,SignOutUserSuccess ,SignOutUserStart} = userSlice.actions;

export default userSlice.reducer;