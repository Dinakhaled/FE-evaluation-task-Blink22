import * as types from "./types";

export const isEditFormOpen = (data) => ({
  type: types.IS_EDIT_FORM_OPEN,
  payload: data,
});

export const editVehicleRequest = (data) => ({
  type: types.EDIT_VEHICLE_REQUEST,
  payload: data,
});
