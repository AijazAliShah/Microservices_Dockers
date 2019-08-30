import { fakedata } from "../../Data/FakeData";
import fire from '../../config/Fire';
import firebase from "firebase";
import axios from 'axios';

export const GET_ORGANIZER_TOURNAMENTS = " GET_ORGANIZER_TOURNAMENTS";
export const ORGANIZER_TOURNAMENTS_LOADING = "ORGANIZER_TOURNAMENTS_LOADING";
export const ORGANIZER_TOURNAMENTS_ERROR = "ORGANIZER_TOURNAMENTS_ERROR";

export const organizerTournamentsAsync = (id) => {
  return (dispatch, getState) => {
    dispatch(organizerTournamentsLoading(true));

    // setTimeout(() => {
    //  // dispatch(getLandingTournaments(fakedata.tournaments)); //top 4
    //   dispatch(getLandingPlayers(fakedata.players)); //top 4
    //   dispatch(landingLoading(false));
    // }, 900)

     //get all tournaments mongo
    axios
    .get('http://localhost:9000/alltournaments', id)
    .then((tournaments) => {
      dispatch(getOrganizerTournaments(tournaments));
      dispatch(organizerTournamentsLoading(false))
    }).catch((error) => { 
      dispatch(organizerTournamentsLoading(false))
      dispatch(organizerTournamentsError(error));
      console.log("mongodb get tournament error") 
    })

  };
};

export const getOrganizerTournaments = (payload) => {
  return {
    type: GET_ORGANIZER_TOURNAMENTS,
    payload
  };
};

export const organizerTournamentsLoading = (payload) => {
  return {
    type: ORGANIZER_TOURNAMENTS_LOADING,
    payload
  };
};

export const organizerTournamentsError = (payload) => {
  return {
    type: ORGANIZER_TOURNAMENTS_ERROR,
    payload
  };
}; 