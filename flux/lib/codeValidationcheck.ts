// check the code is  prent in the db and match with it or not
// check it still vaild or not
//

import { prisma } from "./db";

export const CodeValidationCheck = async (code: string) => {
  if (!code) {
    return { success: false, error: "Reset code required" };
  }
  try {
    const codeCheck = await prisma.passwordResetcode.findUnique({
      where: { code: code },
    });

    if (!codeCheck) {
      return { success: false, error: "Invalid reset code" };
    }
    //check it is expired or not
    if (codeCheck.expiresAt < new Date()) {
      await prisma.passwordResetcode.delete({
        where: { code: code },
      });
      return { success: false, error: "Reset code has expired" };
    }

    return { success: true, verified: true, message: "Reset code is valid" };
  } catch (error) {
    console.log("Error verifying code:", error);
    return { success: false, error: "Failed to verify code" };
  }
};
