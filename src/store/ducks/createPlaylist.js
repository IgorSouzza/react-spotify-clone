export const Types = {
  OPEN: 'createPlaylist/OPEN',
  CLOSE: 'createPlaylist/CLOSE',
  GET_REQUEST: 'createPlaylist/GET_REQUEST',
  GET_SUCCESS: 'createPlaylist/GET_SUCCESS',
};

const INITIAL_STATE = {
  opened: false,
  loading: false,
};

export default function createPlaylist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, opened: true, loading: false };
    case Types.CLOSE:
      return { ...state, opened: false, loading: false };
    case Types.GET_REQUEST:
      return { ...state, opened: true, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, opened: false, loading: true };
    default:
      return state;
  }
}

export const Creators = {
  openModal: () => ({ type: Types.OPEN }),
  closeModal: () => ({ type: Types.CLOSE }),
  postModalDataRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),
  postModalDataSuccess: () => ({ type: Types.GET_SUCCESS }),
};
