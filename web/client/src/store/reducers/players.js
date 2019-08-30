import { GET_PLAYERS, PLAYERS_LOADING, PLAYERS_ERROR } from "../actions";

const players = {
  entities: [],
  loading: false,
  error: false

};

export default (state = players, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        entities: action.payload,
      };
      case PLAYERS_LOADING:
      return {
          ...state,
          loading: action.payload
      };
      case PLAYERS_ERROR:
      return { 
          ...state,
          error: action.payload
      };
    default:
      return state;
  } 
};
