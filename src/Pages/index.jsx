import { useContext } from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import RadioButton from "../components/Radio Button";
import SwitchButton from "../components/Switch Button";
import { DarkMode } from "../context/DarkMode";
import darkMode from "../helpers/darkMode";
const FormPage = () => {
  const options = [
    { value: 0, label: "This is not a valid option" },
    { value: 1, label: "This is the only valid option" },
    { value: 2, label: "None of the above" },
  ];
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
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
        <form action="" className="mb-12">
          <Input
            type="text"
            placeholder="Enter email or username"
            name="credential"
            label="Username"
          />
          <Input type="email" name="email" label="Email" />
          <div className="flex flex-row gap-x-2 mt-6">
            <Input
              type="tel"
              width="w-4/5"
              name="phone"
              placeholder="Enter a phone number"
            />
            <Button width="w-1/5">Verify</Button>
          </div>
          <Input
            type="text"
            placeholder="Enter Valid ID Number"
            name="idNumber"
            label="Personal ID Number"
          />
          <div className="flex flex-row mt-3 mb-3 justify-between">
            <RadioButton id="male" name="gender" value="male">
              Male
            </RadioButton>
            <RadioButton id="female" name="gender" value="female">
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
          />
          <Dropdown
            name="option"
            options={options}
            label="Select an option below"
          />
          <Input
            type="date"
            name="date"
            label="Choose a Date"
            placeholder="Select date"
            onBlur={() => {}}
            onFocus={() => {}}
          />
          <Checkbox label="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." />
        </form>
        <Button type="submit" padding="p-2">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormPage;
