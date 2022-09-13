import { AUTH } from "../constants/authConst";

const initial_state = {
    auth : true,
}

export default function reducer(state = initial_state, action){

    switch(action.type){
        case AUTH : 
        return state = { ...state, auth: action.payload };
        default:
      return state;
    }
}