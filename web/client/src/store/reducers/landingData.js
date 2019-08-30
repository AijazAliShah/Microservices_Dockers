import { GET_TOURNAMENT_LANDING_DATA, GET_PLAYERS_LANDING_DATA, LANDING_LOADING, LANDING_ERROR } from "../actions";

const landingData = {
  tournamentsEntities: [], 
  playersEntities: [],
  loading: false,
  error: false

};

export default (state = landingData, action) => {
  switch (action.type) {
    case GET_TOURNAMENT_LANDING_DATA:
      return {
        ...state,
        tournamentsEntities: action.payload,
      };
    case GET_PLAYERS_LANDING_DATA:
      return {
        ...state,
        playersEntities: action.payload,
      };
      case LANDING_LOADING:
      return { 
          ...state,
          loading: action.payload
      }; 
      case LANDING_ERROR:
      return {
          ...state,
          error: action.payload
      };
    default:
      return state;
  }
};
