export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
  GET_REQUEST: 'modal/GET_REQUEST',
  GET_SUCCESS: 'modal/GET_SUCCESS',
};

const INITIAL_STATE = {
  opened: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, opened: true };
    case Types.CLOSE:
      return { ...state, opened: false };
    case Types.GET_REQUEST:
      return { ...state, opened: true };
    case Types.GET_SUCCESS:
      return { ...state, opened: false };
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
