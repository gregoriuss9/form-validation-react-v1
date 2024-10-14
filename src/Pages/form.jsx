import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import RadioButton from "../components/Radio Button";
const FormPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-lg border rounded-xl border-black px-8 py-7">
        <form action="">
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
          <label htmlFor="Email" className="block">
            Write Anything
          </label>
          <input
            type="text"
            placeholder="Enter your text here"
            className="border border-black mb-3"
          />
          <label htmlFor="option" className="block">
            Select an option below
          </label>
          <select
            name="option"
            id="option"
            placeholder="Select Options"
            className="border border-black mb-3"
          >
            <option value="0">This is not a valid option</option>
            <option value="1">This is the only valid option</option>
            <option value="2">None of the above</option>
          </select>
          <label htmlFor="date" className="block">
            Choose a Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="border border-black mb-3"
          />
          <div className="flex gap-x-3 mb-3">
            <input type="checkbox" className="block" />
            <label htmlFor="checkbox" className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              debitis voluptatibus cum nesciunt tempore maxime temporibus iste
              nisi sint perferendis?
            </label>
          </div>
        </form>
        {/* <button className="border border-red-500 w-full">Submit</button> */}
        <Button type="submit" padding="p-2">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormPage;
