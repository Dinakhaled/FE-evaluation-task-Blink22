import * as types from "./types";

export const setMenuStatus = (data) => ({
  type: types.IS_MENU_OPEN,
  payload: data,
});
