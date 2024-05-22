import { Button, Form, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useAddDeliveryAddress } from "../../utils/apis";
import { getUserId } from "../../helpers/loggedUser";

const AddAddressModal = ({ setOpen, setAddress }: any) => {
  const { mutate: addAddress } = useAddDeliveryAddress();

  const handleOnFinish = (values: any) => {
    console.log(values);
    const data = {
      ...values,
      pincode: parseInt(values.pincode),
      userId: getUserId(),
    };

    addAddress(data, {
      onSuccess() {
        setAddress(data);
        setOpen(false);
        message.success("delivery address added");
      },
      onError() {
        message.error("Please fill the all fields");
      },
    });
  };

  return (
    <div>
      <Form onFinish={handleOnFinish}>
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter phone number" },
            { pattern: /^[0-9]+$/, message: "Please enter valid phone number" },
            { min: 10, message: "Phone number must be at least 10 digits" },
            { max: 10, message: "Phone number must be at most 10 digits" },
          ]}
          className="text-left"
        >
          <Input maxLength={10} />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please enter your state" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please enter your city" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pincode"
          name="pincode"
          rules={[
            { required: true, message: "Please enter your pin-code" },
            { pattern: /^[0-9]+$/, message: "Please enter valid pin number" },
            { min: 6, message: "Pin number must be at least 6 digits" },
            { max: 6, message: "Pin number must be at most 6 digits" },
          ]}
        >
          <Input type="tel" maxLength={6} />
        </Form.Item>
        <Form.Item
          label="Flat/Build No"
          name="houseNoOrBuildingName"
          rules={[
            {
              required: true,
              message: "Please enter your house/building number",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Building type"
          name="type"
          rules={[{ required: true, message: "Please select a building type" }]}
        >
          <Select
            showSearch
            placeholder="Select category"
            optionFilterProp="children"
            options={[
              { value: "Home", label: "Home" },
              { value: "Office", label: "Office" },
              { value: "Other", label: "Other" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Landmark"
          name="landmark"
          rules={[{ required: true, message: "Please enter a landmark" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item className="flex items-end justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddAddressModal;