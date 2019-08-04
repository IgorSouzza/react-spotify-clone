import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ModalActions } from '../ducks/modal';
import { Creators as PlaylistsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* createPlaylist(data) {
  try {
    const { payload } = data;
    const response = yield call(api.post, '/playlists', {
      title: payload.data.title,
      description: payload.data.description,
      thumbnail: payload.data.album,
    });

    const responseGet = yield call(api.get, '/playlists');

    yield put(ModalActions.postModalDataSuccess(response.data));
    yield put(PlaylistsActions.getPlaylistsSuccess(responseGet.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível cadastrar a playlist'));
    yield put(ModalActions.closeModal());
  }
}
