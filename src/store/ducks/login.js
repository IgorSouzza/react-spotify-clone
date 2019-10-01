export const Types = {
  GET_REQUEST_LOGIN: 'login/GET_REQUEST',
  GET_SUCCESS_LOGIN: 'login/GET_SUCCESS',
  GET_REQUEST_REGISTER: 'register/GET_REQUEST',
  GET_SUCCESS_REGISTER: 'register/GET_SUCCESS',
};

const INITIAL_STATE = {
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST_LOGIN:
      return { ...state, loading: true };
    case Types.GET_SUCCESS_LOGIN:
      return { ...state, loading: false };
    case Types.GET_REQUEST_REGISTER:
      return { ...state, loading: true };
    case Types.GET_SUCCESS_REGISTER:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.GET_REQUEST_LOGIN,
    payload: { data },
  }),
  registerRequest: data => ({
    type: Types.GET_REQUEST_REGISTER,
    payload: { data },
  }),
  loginSuccess: () => ({ type: Types.GET_SUCCESS_LOGIN }),
  registerSuccess: () => ({ type: Types.GET_SUCCESS_REGISTER }),
};
