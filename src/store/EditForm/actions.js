import * as types from "./types";

export const isEditFormOpen = (data) => ({
  type: types.IS_EDIT_FORM_OPEN,
  payload: data,
});
