/**
 * Function for Form Validations
 * @param {*} email
 * @param {*} password
 */
export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Please provid a valid Email";
  if (!isPasswordValid) return "Please provid a valid Password";

  return null;
};
