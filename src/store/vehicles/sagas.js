import { put, call } from "redux-saga/effects";
import API from "../../network/apis/vehicles";
import { getVehicles } from "./actions";

export function* fetchVehicles() {
  try {
    const response = yield call(API.getVehicles);
    yield put(getVehicles(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteVehicle({ payload }) {
  try {
    yield call(API.deleteVehicle, payload);
  } catch (err) {
    console.log(err);
  }
}
