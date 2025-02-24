import {createStore} from "redux"
import { createSlice,configureStore } from "@reduxjs/toolkit"

const storeCreate = (state={counter:0},action)=>{
    if(action.type ==="incrementby5"){
        return{counter:state.counter+5,
        }
    }
    if(action.type ==="decrementby5"){
        return{counter:state.counter-5,
        }
    }
    return state
}

const initialAuthState ={
    isAuthenticate:false,
}
const authSlice =createSlice({

        name:"authentication",
        initialState:initialAuthState,
        reducers:{
            login(state){
                state.isAuthenticate=true;

            },
            logout(state){
                state.isAuthenticate=false
            },
        }



      });



const store = configureStore({
    reducer:{auth:authSlice.reducer}
})
export const AuthAction =authSlice.actions;
export default store;