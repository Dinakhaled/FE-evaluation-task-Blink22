import React from "react";
import Modal from "../Modal";
import { Input, Select } from "formik-antd";
import { Formik, Form, ErrorMessage } from "formik";
import { VEHICLES } from "./data";
import DatePicker from "../DatePicker/Date";
import TimePicker from "../TimePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  editVehicleRequest,
  isEditFormOpen,
} from "../../store/EditForm/actions";
import { VALIDATION_SCHEMA } from "./validations";
import moment from "moment";

const { Option } = Select;

const EditVehicle = () => {
  const dispatch = useDispatch();
  const activeVehicle = useSelector((state) => state.Vehicles.activeVehicle);
  const isEditFormOpenFlag = useSelector(
    (state) => state.EditForm.isEditFormOpen
  );

  const handleCancel = () => {
    dispatch(isEditFormOpen(false));
  };

  const handleEditSubmit = (values) => {
    dispatch(isEditFormOpen(false));

    const data = {
      ...values,
      id: activeVehicle.id,
      key: activeVehicle.key,
      vehicle: {
        title: values.vehicle,
        status: activeVehicle.vehicle.status,
      },
      date: moment(
        `${moment(values.date).format("MM-DD-YYYY")} ${moment(
          values.time
        ).format("hh:mm A")}`
      ).unix(),
      cost: {
        title: activeVehicle.cost.title,
        subTitle: activeVehicle.cost.subTitle,
      },
    };
    dispatch(editVehicleRequest(data));
  };

  return (
    <>
      <Formik
        initialValues={{
          vehicle: activeVehicle?.vehicle?.title,
          date: moment(activeVehicle?.date * 1000).format("MM/DD/YYYY"),
          time: activeVehicle?.date * 1000,
          totalKm: activeVehicle?.totalKm,
          volume: activeVehicle?.volume,
          fuelType: "",
          fillingType: "",
        }}
        validationSchema={VALIDATION_SCHEMA}
        enableReinitialize
      >
        {({ isValid, isSubmitting, values }) => (
          <Form>
            <Modal
              isOpen={isEditFormOpenFlag}
              title="Edit Fuel Entry"
              handleCancel={handleCancel}
              handleOk={() => handleEditSubmit(values)}
              disabled={!isValid || isSubmitting}
            >
              <div className="mb-3">
                <label className="label">Vehicle</label>
                <Select
                  placeholder="Select one"
                  className="w-100 mb-2"
                  name="vehicle"
                >
                  {VEHICLES.map((vehicle, i) => (
                    <Option key={i} value={vehicle}>
                      {vehicle}
                    </Option>
                  ))}
                </Select>
                <span className="error-text mt-2 d-block">
                  <ErrorMessage name="vehicle" />
                </span>
              </div>
              <div className="field-grid mb-3">
                <div>
                  <label className="label">Start Date</label>
                  <div className="field-grid">
                    <DatePicker name="date" />
                    <TimePicker name="time" />
                  </div>
                </div>
                <div>
                  <label className="label">Odometer</label>
                  <Input suffix="Kms" className="field" name="totalKm" />
                  <span className="error-text mt-2 d-block">
                    <ErrorMessage name="totalKm" />
                  </span>
                </div>
              </div>

              <div className="field-grid mb-3">
                <div>
                  <label className="label">Volume</label>
                  <Input suffix="Ltrs" className="field" name="volume" />
                  <span className="error-text mt-2 d-block">
                    <ErrorMessage name="volume" />
                  </span>
                </div>
                <div>
                  <label className="label">Fuel Type (optional)</label>
                  <Select
                    placeholder="Select one"
                    className="w-100 mb-2"
                    name="fuelType"
                  >
                    {[5, 6, 7, 8].map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="field-grid mb-3">
                <div>
                  <label className="label">Filling Type (optional)</label>
                  <Select
                    placeholder="Select one"
                    className="w-100 mb-2"
                    name="fillingType"
                  >
                    {[1, 2, 3, 4].map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div></div>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditVehicle;
