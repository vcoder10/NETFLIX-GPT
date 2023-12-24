export const validate = (name, email, password) => {
  const nameRegex = /^[a-zA-Z ]*$/.test(name);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!nameRegex) return "Name is not Valid";
  if (!emailRegex) return "Invalid Email";
  if (!passwordRegex)
    return "Invalid Password,Password must be eight characters including one uppercase letter, one special character and alphanumeric characters";

  return null;
};
