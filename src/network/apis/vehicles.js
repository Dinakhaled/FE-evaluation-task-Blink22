import { axiosInstance } from "./index";

const getVehicles = async () => {
  return await axiosInstance.get("/vehicles");
};

const deleteVehicle = async (id) => {
  return await axiosInstance.delete(`/vehicles/${id}`);
};

const editVehicle = async (data) => {
  return await axiosInstance.put(`/vehicles/${data.id}`, data);
};

export default { getVehicles, deleteVehicle, editVehicle };
