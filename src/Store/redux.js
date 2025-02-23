import {createStore} from "redux"

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
const store = createStore(storeCreate);
export default store;