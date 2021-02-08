import { axiosInstance } from "./index";

const getVehicles = async () => {
  return await axiosInstance.get("/vehicles");
};

const deleteVehicle = async (id) => {
  return await axiosInstance.delete(`/vehicles/${id}`);
};

export default { getVehicles, deleteVehicle };
