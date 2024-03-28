import { hash } from "bcrypt";
const hashpassword = async (password) => {
  const hashpasswords = await hash(password, 12);
  return hashpasswords;
};
export default hashpassword;
