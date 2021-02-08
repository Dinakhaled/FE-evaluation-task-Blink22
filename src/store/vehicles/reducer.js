import * as types from "./types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ACTIVE_VEHICLE:
      return { ...state, activeVehicle: action.payload };
    case types.GET_VEHICLES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
