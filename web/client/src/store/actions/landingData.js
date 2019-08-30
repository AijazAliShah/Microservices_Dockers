import { fakedata } from "../../Data/FakeData";
import fire from '../../config/Fire';
import firebase from "firebase";
import axios from 'axios';

export const GET_TOURNAMENT_LANDING_DATA = "[tournaments] GET_TOURNAMENT_LANDING_DATA";
export const GET_PLAYERS_LANDING_DATA = "[tournaments] GET_PLAYERS_LANDING_DATA";
export const LANDING_LOADING = " [tournaments] LANDING_LOADING";
export const LANDING_ERROR = " [tournaments] LANDING_ERROR";

export const landingAsync = () => {
  return (dispatch, getState) => {
    dispatch(landingLoading(true));

    setTimeout(() => {
     // dispatch(getLandingTournaments(fakedata.tournaments)); //top 4
      dispatch(getLandingPlayers(fakedata.players)); //top 4 
      dispatch(landingLoading(false));
    }, 900)

    //get all players mongo
    // axios
    // .get('http://localhost:9000/allplayers', )
    // .then((players) => {
    //   dispatch(getLandingPlayers(players));
    //   dispatch(landingLoading(false))
    // }).catch((error) => {
    //   dispatch(landingLoading(false))
    //   dispatch(landingError(error));
    //   console.log("mongodb get player error")
    // })


    //get all tournaments mongo
    // axios
    // .get('http://localhost:9000/alltournaments', )
    // .then((tournaments) => {
    //   dispatch(getLandingTournaments(tournaments));
    //   dispatch(landingLoading(false))
    // }).catch((error) => { 
    //   dispatch(landingLoading(false))
    //   dispatch(landingError(error));
    //   console.log("mongodb get tournament error")
    // })

    fire.database()
      .ref('tournaments').on('value', (snapshot) => {
        console.log(snapshot.val());
         dispatch(getLandingTournaments(snapshot.val()));
         dispatch(landingLoading(false));
      })
      // .then(() => {
      //   dispatch(landingLoading(false))
      // })
      // .catch((error) => {
      //   dispatch(landingLoading(false))
      //   dispatch(landingError(error));
      //   console.log("firebase error")
      // });

      // fire.database()
      // .ref('users').on('value', (snapshot) => {
      //   console.log(snapshot.val());
      //   dispatch(getLandingPlayers(snapshot.val()));
      //   dispatch(landingLoading(false));
      // })
      //.then(() => {
      //   dispatch(landingLoading(false))
      // })
      // .catch((error) => {
      //   dispatch(landingLoading(false))
      //   dispatch(landingError(error));
      //   console.log("firebase error")
      // }) 

   };
};

export const getLandingTournaments = (payload) => {
  return {
    type: GET_TOURNAMENT_LANDING_DATA,
    payload
  };
};

export const getLandingPlayers = (payload) => {
  return {
    type: GET_PLAYERS_LANDING_DATA,
    payload
  };
};

export const landingLoading = (payload) => {
  return {
    type: LANDING_LOADING,
    payload
  };
};

export const landingError = (payload) => {
  return {
    type: LANDING_ERROR,
    payload
  };
}; 