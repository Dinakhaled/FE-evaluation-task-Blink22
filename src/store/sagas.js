import { takeEvery } from "redux-saga/effects";
import * as vehiclesTypes from "./vehicles/types";
import * as vehiclesSagas from "./vehicles/sagas";

export function* watchAll() {
  yield takeEvery(
    vehiclesTypes.GET_VEHICLES_REQUEST,
    vehiclesSagas.fetchVehicles
  );
  yield takeEvery(
    vehiclesTypes.DELETE_VEHICLE_REQUEST,
    vehiclesSagas.deleteVehicle
  );
}
