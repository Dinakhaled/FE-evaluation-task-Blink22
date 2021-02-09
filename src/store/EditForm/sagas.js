import { call, put } from "redux-saga/effects";
import API from "../../network/apis/vehicles";
import { getVehiclesRequest } from "../vehicles/actions";

export function* editVehicleSaga({ payload }) {
  try {
    yield call(API.editVehicle, payload);
    yield put(getVehiclesRequest());
  } catch (err) {
    console.log(err);
  }
}
