import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';
import player from './player';
import modal from './modal';

export default combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
  modal,
});
