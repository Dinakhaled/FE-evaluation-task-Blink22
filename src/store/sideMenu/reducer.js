import * as types from "./types";

const INITIAL_STATE = {
  isMenuOpen: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.IS_MENU_OPEN:
      return { ...state, isMenuOpen: action.payload };
    default:
      return state;
  }
};
