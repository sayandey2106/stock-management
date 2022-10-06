import { SET_ALL_USER } from "../../constants/user/userConstants";

  const initial_state = {



  };
  export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case SET_ALL_USER:
            return state = { ...state, state: action.payload };
      default:
        return state;
    }
  }
  