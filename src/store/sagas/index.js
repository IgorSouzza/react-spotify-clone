import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails';
import { Types as CreatePlaylistTypes } from '../ducks/createPlaylist';
import { Types as LoginTypes } from '../ducks/login';

import { getPlaylists } from './playlists';
import { getPlaylistDetails } from './playlistDetails';
import { createPlaylist } from './createPlaylist';
import { login, register } from './login';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails),
    takeLatest(CreatePlaylistTypes.GET_REQUEST, createPlaylist),
    takeLatest(LoginTypes.GET_REQUEST_LOGIN, login),
    takeLatest(LoginTypes.GET_REQUEST_REGISTER, register),
  ]);
}
