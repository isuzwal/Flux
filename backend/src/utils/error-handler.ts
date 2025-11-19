import   {  z }  from  "zod"

import {ErrorResponse } from "./error-types";

export const ErrorHandler = (error: unknown):ErrorResponse => {
  if (error instanceof z.ZodError) {
    return {
      success:false,
      statusCode: 400,
      message: "Validation  failed",
      error: error.message
    };
  }

  if (error instanceof Error) {
    return {
      success:false,
      statusCode: 400,
      message: "Email or username already exist",
      error: error.message,
    };
  }
  return {
    success:false,
    statusCode: 500,
    message: "Internal server error",
  };
};
