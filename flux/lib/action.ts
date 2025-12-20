"use server";

import { prisma } from "./db";

export const EmailValidationAction = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    return { exists: !!user };
  } catch (error) {
    console.log("Error checking email existence:", error);
    return { exists: false, error: "Error checking email existence" };
  }
};
