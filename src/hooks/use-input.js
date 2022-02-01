import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.payload, isTouched: state.isTouched };
  } else if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  } else if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  } else if (action.type === "TOUCH") {
    return { value: state.value, isTouched: false };
  }
  return initialInputState;
};

const useInput = (inputType) => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid =
    inputType === "name"
      ? inputState.value.trim() !== ""
      : inputState.value.includes("@");
  const valueInputIsInvalid = !enteredValueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (event) => {
    dispatchInput({ type: "CHANGE", payload: event.target.value });
  };

  const valueInputBlurHandler = () => {
    dispatchInput({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  const touch = () => {
    dispatchInput({ type: "TOUCH" });
  };

  const valueInputClasses = valueInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return {
    enteredValue: inputState.value,
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
