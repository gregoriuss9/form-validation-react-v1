import { useContext, useState } from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import RadioButton from "../components/Radio Button";
import SwitchButton from "../components/Switch Button";
import Datepicker from "../components/Datepicker";
import { DarkMode } from "../context/DarkMode";
import darkMode from "../helpers/darkMode";
import phoneValidator from "../helpers/phoneValidator";
const FormPage = () => {
  const options = [
    { value: 0, label: "This is not a valid option" },
    { value: 1, label: "This is the only valid option" },
    { value: 2, label: "None of the above" },
  ];
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    username: null,
    email: null,
    phoneNumber: null,
    idNumber: null,
    gender: null,
    notes: null,
    dropdown: null,
    date: null,
  });

  const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const verifyPhoneNumber = () => {
    setIsPhoneNumberVerified(phoneValidator(formData.phoneNumber));
    setShowIcon(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const form = e.target;
    // const credential = form.credential;
    // console.log(credential);
    console.log(formData);
  };
  return (
    <div
      className={`flex justify-center items-center min-h-screen py-2 px-3 `}
      style={{ backgroundColor: `${darkMode(isDarkMode).mainColor}` }}
    >
      <div
        className="w-full max-w-lg border rounded-3xl  px-8 py-7"
        style={{
          border: `1px solid ${darkMode(isDarkMode).secondaryColor}`,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter username"
            name="username"
            label="Username"
            onChange={(e) => {
              setFormData({ ...formData, username: e?.target?.value });
            }}
          />
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            label="Email"
            onChange={(e) => {
              setFormData({ ...formData, email: e?.target?.value });
            }}
          />

          <div className="flex flex-row gap-x-2 mt-6">
            <div className="flex flex-col w-4/5">
              <Input
                type="text"
                marginBottom={
                  isPhoneNumberVerified || !formData.phoneNumber
                    ? "mb-3"
                    : "mb-0"
                }
                name="phone"
                value={formData.phoneNumber}
                onChange={(e) => {
                  setIsPhoneNumberVerified(true);
                  setShowIcon(false);
                  setFormData({ ...formData, phoneNumber: e?.target?.value });
                }}
                placeholder="Enter a phone number"
                validator={isPhoneNumberVerified || !formData.phoneNumber}
                showIcon={showIcon}
                errorMessages={
                  isPhoneNumberVerified || !formData.phoneNumber
                    ? ""
                    : "Invalid phone number format"
                }
              />
            </div>
            <Button
              width="w-1/5"
              type="button"
              onClick={verifyPhoneNumber}
              disabled={!formData.phoneNumber ? true : false}
            >
              Verify
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Enter Valid ID Number"
            name="idNumber"
            label="Personal ID Number"
            onChange={(e) => {
              setFormData({ ...formData, idNumber: e?.target?.value });
            }}
          />
          <div className="flex flex-row mt-3 mb-3 justify-between">
            <RadioButton
              id="male"
              name="gender"
              value="male"
              onChange={(e) => {
                setFormData({ ...formData, gender: e?.target?.value });
              }}
            >
              Male
            </RadioButton>
            <RadioButton
              id="female"
              name="gender"
              value="female"
              onChange={(e) => {
                setFormData({ ...formData, gender: e?.target?.value });
              }}
            >
              Female
            </RadioButton>
            <SwitchButton
              onClick={(e) => {
                setIsDarkMode(e?.target?.checked);
              }}
            ></SwitchButton>
          </div>

          <Input
            type="text"
            placeholder="Enter your text here"
            name="notes"
            label="Write Anything"
            onChange={(e) => {
              setFormData({ ...formData, notes: e?.target?.value });
            }}
          />
          <Dropdown
            name="option"
            options={options}
            label="Select an option below"
            handleChange={(e) => {
              const index = e?.target?.selectedIndex;
              const label = e?.target?.options[index]?.label;
              const value = e?.target?.value;
              setFormData({ ...formData, dropdown: { value, label } });
            }}
          />
          <Datepicker
            name="date"
            label="Choose a Date"
            placeholder="Select date"
            onChange={(e) => {
              console.log(e?.target?.value);
              setFormData({ ...formData, date: e?.target?.value });
            }}
          />
          <Checkbox
            name="tnc"
            onClick={(e) => {
              setIsAgreed(e.target.checked);
            }}
            label="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          />
          <div className="mb-12"></div>
          <Button type="submit" padding="p-2" disabled={!isAgreed}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
