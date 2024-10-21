const phoneValidator = (phoneNumber) => {
  const pattern = /[08][0-9]{7,11}$/;
  console.log(phoneNumber);

  if (phoneNumber && pattern.test(phoneNumber)) {
    // console.log("phone number valid");
    return true;
  } else {
    // console.log("phone number invalid");
    return false;
  }
};

export default phoneValidator;
