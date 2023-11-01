import {createSlice} from '@reduxjs/toolkit'

const initialState={
    currentUser:null,
    loading:false,
    error:null
}


const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{
        signInStart:(state,action)=>{
            state.loading=true
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false
            state.error=null
        },
        signInFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
        signOutSucess:(state,action)=>{
            state.currentUser=null
        }
    }

})

export const userReducer=userSlice.reducer
export const {signInStart,signInFailure,signInSuccess,signOutSucess}=userSlice.actions
export const userSelector=(state)=>state.user