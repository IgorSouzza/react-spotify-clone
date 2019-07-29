import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistDetailActions } from '../ducks/playlistDetails';
import { Creators as errorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(errorActions.setError('Não foi possível obter os detalhes da playlist'));
  }
}
