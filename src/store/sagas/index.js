import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails';
import { Types as ModalDetailsTypes } from '../ducks/modal';

import { getPlaylists } from './playlists';
import { getPlaylistDetails } from './playlistDetails';
import { createPlaylist } from './createPlaylist';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails),
    takeLatest(ModalDetailsTypes.GET_REQUEST, createPlaylist),
  ]);
}
