import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Label from "../components/Label";
import RadioButton from "../components/Radio Button";
const FormPage = () => {
  const options = [
    { value: 0, label: "This is not a valid option" },
    { value: 1, label: "This is the only valid option" },
    { value: 2, label: "None of the above" },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen py-2 px-3">
      <div className="w-full max-w-lg border rounded-xl border-black px-8 py-7">
        <form action="" className="mb-12">
          <Label htmlFor="username">Username</Label>
          <Input type="text" placeholder="Enter email or username" />
          <Label htmlFor="email">Email</Label>
          <Input type="email" />
          <Label htmlFor="empty"></Label>
          <div className="flex flex-row gap-x-2 mt-6">
            <Input
              type="tel"
              width="w-4/5"
              placeholder="Enter a phone number"
            />
            <Button width="w-1/5">Verify</Button>
          </div>
          <Label htmlFor="idNumber">Personal ID Number </Label>
          <Input type="text" placeholder="Enter Valid ID Number" />
          <div className="flex flex-row mb-3 justify-between">
            <RadioButton id="male" name="gender" value="male">
              Male
            </RadioButton>
            <RadioButton id="female" name="gender" value="female">
              Female
            </RadioButton>
          </div>
          <Label htmlFor="freeText">Write Anything</Label>
          <Input type="text" placeholder="Enter your text here" />
          <Label htmlFor="option">Select an option below</Label>
          <Dropdown name="option" options={options} />
          <Label htmlFor="date">Choose a Date</Label>
          <Input
            type="date"
            placeholder="Select date"
            onBlur={(e) => {
              console.log(e.target.value);
              console.log(typeof e.target.value);
            }}
            onFocus={(e) => {
              console.log(e.target.value);
              console.log(typeof e.target.value);
            }}
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
