import {fakedata} from "../../Data/FakeData";
import fire from '../../config/Fire';
import firebase from "firebase";
import axios from 'axios';

export const GET_TOURNAMENTS = "[tournaments] GET_TOURNAMENTS";
export const TOURNAMENTS_LOADING = " [tournaments] TOURNAMENTS_LOADING";
export const TOURNAMENTS_ERROR = " [tournaments] TOURNAMENTS_ERROR";

export const tournamentsAsync = () => {
    return (dispatch, getState) => {
        dispatch(tournamentLoading(true));
        // setTimeout(() => {
        //   dispatch(getTournaments(fakedata.tournaments))
        //   dispatch(tournamentLoading(false));
        // }, 900)

          //get all tournaments mongo
        // axios
        // .get('http://localhost:9000/alltournaments', )
        // .then((tournaments) => {
        //   dispatch(getTournaments(tournaments));
        //   dispatch(tournamentLoading(false))
        // }).catch((error) => {
        //   dispatch(tournamentLoading(false))
        //   dispatch(tournamentError(error));
        //   console.log("mongodb get tournament error")
        // })
        
        fire.database()
        .ref('tournaments').on('value', (snapshot) => {
          console.log(snapshot.val());
          dispatch(getTournaments(snapshot.val()));
          dispatch(tournamentLoading(false));
        })
        
      };
};

export const getTournaments = (payload) => {
  return {
    type: GET_TOURNAMENTS, 
    payload
  }; 
};
 
export const tournamentLoading = (payload) => {
  return { 
    type: TOURNAMENTS_LOADING,
    payload
  }; 
};

export const tournamentError = (payload) => {
    return {
      type: TOURNAMENTS_ERROR,
      payload
    };
  };