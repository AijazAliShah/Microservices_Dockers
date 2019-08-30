import { LOGIN, AUTH_LOADING, SIGNUP, AUTH_ERROR } from "../actions";

const defaultState = {
  user: null,
  loading: false,
  userType: 0,
  error: ''
};

export default (state = defaultState, action) => {
    switch (action.type) { 
      case LOGIN:
        return {
            ...state,
            user: action.payload,
            // userType: action.payload.type
        }; 
        case AUTH_LOADING: 
          return {
              ...state,
              loading: action.payload
          }; 
        case SIGNUP:  
          return { 
              ...state,
              user: action.payload,
          }; 
        case AUTH_ERROR: 
          return {
              ...state,
              error: action.payload,
          };
      default: 
        return state;
    }
};
