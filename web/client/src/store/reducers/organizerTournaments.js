import { GET_ORGANIZER_TOURNAMENTS, ORGANIZER_TOURNAMENTS_LOADING, ORGANIZER_TOURNAMENTS_ERROR } from "../actions";

const landingData = {
  tournamentsEntities: [], 
  loading: false,
  error: false

};

export default (state = landingData, action) => {
  switch (action.type) {
    case GET_ORGANIZER_TOURNAMENTS:
      return {
        ...state,
        tournamentsEntities: action.payload,
      };
    case ORGANIZER_TOURNAMENTS_LOADING:
    return {
        ...state,
        loading: action.payload
    }; 
    case ORGANIZER_TOURNAMENTS_ERROR:
    return {
        ...state,
        error: action.payload
    };
    default:
      return state;
  }
};
