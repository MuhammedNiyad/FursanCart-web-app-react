import { Button, Form, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getUserId } from "../../helpers/loggedUser";
import { useAddDeliveryAddress, useEditAddress } from "../../utils/apis";

const AddAddressModal = ({ setOpen, setAddress, address }: any) => {
  const { mutate: addAddress } = useAddDeliveryAddress();
  const { mutate: editaddress } = useEditAddress();
  

  const handleOnFinish = (values: any) => {
    // console.log(values);
    const data = {
      ...values,
      pincode: parseInt(values.pincode),
      userId: getUserId(),
    };
    if (address) {
      editaddress({ id: address.id, data }, {
        onSuccess() {
          setAddress(data);
          setOpen(false);
          message.success("Edited delivery address");
        },
        onError() {
          message.error('conform to fill all the fields')
        }
      })
    }else{
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
    }
  };

  return (
    <div>
      <Form onFinish={handleOnFinish}
        initialValues={{
          fullName: address?.fullName,
          phone: address?.phone,
          state: address?.state,
          city: address?.city,
          pincode: address?.pincode,
          houseNoOrBuildingName: address?.houseNoOrBuildingName,
          type: address?.type,
          landmark:address?.landmark,
          address: address?.address,
      }}>
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
          label="House/Build No"
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
            placeholder="select options"
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
