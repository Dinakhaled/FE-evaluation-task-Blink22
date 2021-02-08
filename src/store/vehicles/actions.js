import * as types from "./types";

export const activeVehicle = (data) => ({
  type: types.ACTIVE_VEHICLE,
  payload: data,
});

export const getVehiclesRequest = () => ({
  type: types.GET_VEHICLES_REQUEST,
});

export const getVehicles = (data) => ({
  type: types.GET_VEHICLES,
  payload: data,
});

export const deleteVehicleRequest = (data) => ({
  type: types.DELETE_VEHICLE_REQUEST,
  payload: data,
});
