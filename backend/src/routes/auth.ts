import { NextFunction, Request, Response } from "express";
import { AccountLoginScheam, AccountCreateScheam } from "../utils/index";

export const CreateAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const account_vaildated_data = AccountCreateScheam.parse(req.body);
    const { username, email, password } = account_vaildated_data;

    // logic for Create account
    // paswword Hasing  reamin and JWT token
    res.status(201).json({
      status: true,
      message: "Account Create Succesfully",
      data: {
        username,
        email,
      },
    });
    console.log(account_vaildated_data);
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    next(error);
  }
};
