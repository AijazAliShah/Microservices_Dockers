import { GET_TOURNAMENT, TOURNAMENT_LOADING, TOURNAMENT_ERROR } from "../actions";

const tournament = {
  entity: {},
  loading: false,
  error: false
};
 
export default (state = tournament, action) => {
  switch (action.type) {
    case GET_TOURNAMENT:
      return {
        ...state,
        entity: action.payload,
      };
      case TOURNAMENT_LOADING:
      return {
          ...state,
          loading: action.payload
      };
      case TOURNAMENT_ERROR:
      return {
          ...state,
          error: action.payload
      };  
    default:
      return state;
  }
};
