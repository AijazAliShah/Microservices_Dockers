import { CREATE_TOURNAMENT, CREATE_TOURNAMENT_LOADING, CREATE_TOURNAMENT_ERROR} from "../actions";

const defaultState = {
  tournament: null,
  loading: false,
  userType: 0,
  error: ''
};

export default (state = defaultState, action) => {
    switch (action.type) { 
      case CREATE_TOURNAMENT:
        return {
            ...state,
            tournament: action.payload,
            // userType: action.payload.type
        }; 
        case CREATE_TOURNAMENT_LOADING: 
          return {
              ...state,
              loading: action.payload
          };
        case CREATE_TOURNAMENT_ERROR: 
          return {
              ...state,
              error: action.payload,
          };
      default:
        return state;
    }
};
