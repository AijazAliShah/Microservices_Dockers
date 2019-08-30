import {fakedata} from "../../Data/FakeData";
import axios from 'axios';

export const GET_PLAYERS = "[players] GET_PLAYERS";
export const PLAYERS_LOADING = " [tournaments] PLAYERS_LOADING";
export const PLAYERS_ERROR = " [tournaments] PLAYERS_ERROR";

export const playersAsync = () => {
    return (dispatch, getState) => {
        dispatch(playersLoading(true));
        setTimeout(() => {
          dispatch(getPlayers(fakedata.players))
          dispatch(playersLoading(false));
        }, 900)

         //get all players mongo
          // axios
          // .get('http://localhost:9000/allplayers', )
          // .then((players) => {
          //   dispatch(getPlayers(players));
          //   dispatch(playersLoading(false))
          // }).catch((error) => {
          //   dispatch(playersLoading(false))
          //   dispatch(playersError(error));
          //   console.log("mongodb get player error")
          // })
          
        // fire.database()
        // .ref('users').on('value', (snapshot) => {
        //   console.log(snapshot.val());
        //   dispatch(getPlayers(snapshot.val()));
        //   dispatch(playersLoading(false));
        // })
        
      };
};

export const getPlayers = (payload) => {
  return { 
    type: GET_PLAYERS,
    payload
  }; 
};
 
export const playersLoading = (payload) => {
  return {
    type: PLAYERS_LOADING,
    payload
  };
};

export const playersError = (payload) => {
    return {
      type: PLAYERS_ERROR,
      payload
    };
  };