import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    enteredValue: enteredName,
    valueInputClasses: nameInputClasses,
    enteredValueIsValid: enteredNameIsValid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    valueInputIsInvalid: nameInputIsInvalid,
    touch: setNameTouch,
    reset: resetNameInput,
  } = useInput("name");

  const {
    enteredValue: enteredEmail,
    valueInputClasses: emailInputClasses,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    valueInputIsInvalid: emailInputIsInvalid,
    touch: setEmailTouch,
    reset: resetEmailInput,
  } = useInput("email");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameTouch();
    setEmailTouch();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          type="text"
          id="name"
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">Email must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
