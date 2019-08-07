export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
};

const INITIAL_STATE = {
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),
  loginSuccess: () => ({ type: Types.GET_SUCCESS }),
};
