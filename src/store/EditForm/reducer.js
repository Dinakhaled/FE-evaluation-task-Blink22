import * as types from "./types";

const INITIAL_STATE = { isEditFormOpen: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.IS_EDIT_FORM_OPEN:
      return { ...state, isEditFormOpen: action.payload };
    default:
      return state;
  }
};
