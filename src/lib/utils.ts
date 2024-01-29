import bcrypt from "bcryptjs";

//hash String or password
export const hashString = async (useValue: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(useValue, salt);
  return hashedpassword;
};
