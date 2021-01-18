import * as bcrypt from "bcryptjs";

const PasswordService = {
  doHash: async (plaintextPassword: string): Promise<string> => {
    return await bcrypt.hash(plaintextPassword, 5);
  },
  doCompare: async (
    plaintextPassword: string,
    hash: string,
  ): Promise<boolean> => {
    return await bcrypt.compare(plaintextPassword, hash);
  },
};
export default PasswordService;
