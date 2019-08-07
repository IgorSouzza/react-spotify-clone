import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';
import player from './player';
import createPlaylist from './createPlaylist';
import login from './login';

export default combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
  createPlaylist,
  login,
});
