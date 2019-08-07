import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';
import { Creators as errorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists', {
      headers: { authorization: `Bearer ${window.localStorage.getItem('token')}` },
    });
    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    if (err.response.status === 401) {
      window.location = '/login';
    } else {
      yield put(errorActions.setError('Não foi possível obter as playlists'));
    }
  }
}
