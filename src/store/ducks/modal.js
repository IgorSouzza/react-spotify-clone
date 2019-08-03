export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
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
    default:
      return state;
  }
}

export const Creators = {
  openModal: () => ({ type: Types.OPEN }),
  closeModal: () => ({ type: Types.CLOSE }),
};
