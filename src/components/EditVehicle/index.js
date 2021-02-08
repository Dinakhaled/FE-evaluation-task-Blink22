import React from "react";
import Modal from "../Modal";
import { Input, Select } from "antd";
import { Formik, Form } from "formik";
import { VEHICLES } from "./data";
import DatePicker from "../DatePicker/Date";
import TimePicker from "../TimePicker";

const { Option } = Select;

const EditVehicle = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Modal isOpen={false} title="Edit Fuel Entry">
        <Formik>
          <Form>
            <div className="mb-3">
              <label className="label">Vehicle</label>
              <Select
                defaultValue="Select one"
                className="w-100 mb-2"
                onChange={handleChange}
              >
                {VEHICLES.map((vehicle, i) => (
                  <Option key={i} value={vehicle}>
                    {vehicle}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="field-grid mb-3">
              <div>
                <label className="label">Start Date</label>
                <div className="field-grid">
                  <DatePicker />
                  <TimePicker />
                </div>
              </div>
              <div>
                <label className="label">Odometer</label>
                <Input suffix="Kms" className="field" />
              </div>
            </div>

            <div className="field-grid mb-3">
              <div>
                <label className="label">Volume</label>
                <Input suffix="Ltrs" className="field" />
              </div>
              <div>
                <label className="label">Fuel Type (optional)</label>
                <Select
                  defaultValue="Select one"
                  className="w-100 mb-2"
                  onChange={handleChange}
                >
                  <Option>1</Option>
                  <Option>2</Option>
                  <Option>3</Option>
                </Select>
              </div>
            </div>

            <div className="field-grid mb-3">
              <div>
                <label className="label">Filling Type (optional)</label>
                <Select
                  defaultValue="Select one"
                  className="w-100 mb-2"
                  onChange={handleChange}
                >
                  <Option>1</Option>
                  <Option>2</Option>
                  <Option>3</Option>
                </Select>
              </div>
              <div></div>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default EditVehicle;
