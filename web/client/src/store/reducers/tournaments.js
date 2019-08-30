import { GET_TOURNAMENTS, TOURNAMENTS_LOADING, TOURNAMENTS_ERROR } from "../actions";

const tournaments = {
  entities: [],
  loading: false,
  error: false

};

export default (state = tournaments, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS:
      return {
        ...state,
        entities: action.payload,
      };
      case TOURNAMENTS_LOADING:
      return {
          ...state,
          loading: action.payload
      };
      case TOURNAMENTS_ERROR:
      return {
          ...state,
          error: action.payload
      }; 
    default:
      return state; 
  }
};
