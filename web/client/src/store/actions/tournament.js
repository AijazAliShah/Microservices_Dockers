import { fakedata } from "../../Data/FakeData";
import fire from '../../config/Fire';
import firebase from "firebase";
import axios from 'axios';

export const GET_TOURNAMENT = "[tournament] GET_TOURNAMENT";
export const TOURNAMENT_LOADING = " [tournament] TOURNAMENT_LOADING";
export const TOURNAMENT_ERROR = " [tournament] TOURNAMENT_ERROR";

export const tournamentAsync = (id) => {

  return (dispatch, getState) => {
    dispatch(tournamentLoading(true));

    //get tournament mongo
    // axios
    // .get('http://localhost:9000/gettournament', id)
    // .then((tournament) => {
    //   dispatch(getTournament(tournament));
    //   dispatch(tournamentLoading(false))
    // }).catch((error) => { 
    //   dispatch(tournamentLoading(false))
    //   dispatch(tournamentError(error));
    //   console.log("mongodb get tournament error")
    // })

    fire.database()
        .ref(`tournaments/${id}`).once('value').then((snapshot) => {
            console.log("t value 0000000000000000000000")
            console.log(snapshot.val());
            dispatch(getTournament(snapshot.val()));
            dispatch(tournamentLoading(false));
    })

  };
};

export const getTournament = (payload) => {
  return {
    type: GET_TOURNAMENT,
    payload
  };
};

export const tournamentLoading = (payload) => {
  return {
    type: TOURNAMENT_LOADING,
    payload
  };
};

export const tournamentError = (payload) => {
  return {
    type: TOURNAMENT_ERROR,
    payload
  };
};