import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueInputClasses: firstNameInputClasses,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    valueInputIsInvalid: firstNameInputIsInvalid,
    touch: setFirstNameTouch,
    reset: resetFirstNameInput,
  } = useInput("name");

  const {
    enteredValue: enteredLastName,
    valueInputClasses: lastNameInputClasses,
    enteredValueIsValid: enteredLastNameIsValid,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    valueInputIsInvalid: lastNameInputIsInvalid,
    touch: setLastNameTouch,
    reset: resetLastNameInput,
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

  if (
    enteredEmailIsValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEmailTouch();
    setFirstNameTouch();
    setLastNameTouch();

    if (!formIsValid) {
      return;
    }

    resetEmailInput();
    resetFirstNameInput();
    resetLastNameInput();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            type="text"
            id="name"
            value={enteredFirstName}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type="text"
            id="name"
            value={enteredLastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="name"
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
