import { combineReducers } from "redux";
import SideMenu from "./sideMenu/reducer";
import Vehicles from "./vehicles/reducer";

export default combineReducers({
  SideMenu,
  Vehicles,
});
