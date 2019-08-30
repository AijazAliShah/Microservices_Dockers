import fire from '../../config/Fire';
import firebase from "firebase";
import axios from 'axios';

export const CREATE_TOURNAMENT = "CREATE_TOURNAMENT";
export const CREATE_TOURNAMENT_LOADING = "CREATE_TOURNAMENT_LOADING";
export const CREATE_TOURNAMENT_ERROR = "CREATE_TOURNAMENT_ERROR";


export const createTournamentAsync = () => {
  return (dispatch, getState) => {
   
    dispatch(createTournamentLoading(true));

    const newTournament = {
      
    }

    axios
    .post('http://localhost:9000/posttournament', newTournament)
    .then((tournament) => {
      dispatch(createTournament(tournament));
      dispatch(createTournamentLoading(false))
    }).catch((error) => {
      dispatch(createTournamentLoading(false))
      dispatch(createTournamentError(error));
      console.log("mongodb create tournament error")
    })

  };
};


export const createTournament = (payload) => {
  return {
    type: CREATE_TOURNAMENT,
    payload
  };
};

export const createTournamentLoading = (payload) => {
  return {
    type: CREATE_TOURNAMENT_LOADING,
    payload
  };
};

export const createTournamentError = (payload) => {
  return {
    type: CREATE_TOURNAMENT_ERROR,
    payload
  };
};
