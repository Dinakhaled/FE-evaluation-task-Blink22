import { combineReducers } from "redux";
import SideMenu from "./sideMenu/reducer";
import Vehicles from "./vehicles/reducer";
import EditForm from "./EditForm/reducer";

export default combineReducers({
  SideMenu,
  Vehicles,
  EditForm,
});
