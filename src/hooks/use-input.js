import { useState } from "react";

const useInput = (inputType) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouch, setEnteredValueTouch] = useState(false);

  const enteredValueIsValid =
    inputType === "name"
      ? enteredValue.trim() !== ""
      : enteredValue.includes("@");
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouch;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = () => {
    setEnteredValueTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouch(false);
  };

  const touch = () => {
    setEnteredValueTouch(true);
  };

  const valueInputClasses = valueInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return {
    enteredValue,
    valueInputClasses,
    enteredValueIsValid,
    valueInputChangeHandler,
    valueInputBlurHandler,
    valueInputIsInvalid,
    touch,
    reset,
  };
};

export default useInput;
