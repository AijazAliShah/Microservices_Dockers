import { combineReducers } from 'redux';
import auth from './auth';
import tournaments from './tournaments';
import players from './players';
import landingData from './landingData';
import tournament from './tournament';
import createTournament from './createTournament';
import organizerTournaments from './organizerTournaments';


export default combineReducers({
    auth,
    tournaments,
    players,
    landingData,
    tournament,
    createTournament,
    organizerTournaments
})
