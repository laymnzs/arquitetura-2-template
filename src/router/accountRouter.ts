import express from "express";
import { AccountController } from "../controller/AccountController";


export const accountRouter = express.Router();

const accountController = new AccountController() 


accountRouter.get("/accounts", accountController.getAccounts)
accountRouter.get("/accounts/:id/balance", accountController.getAccountBalance)
accountRouter.post("/accounts", accountController.createAccount)
accountRouter.put("/accounts/:id/balance", accountController.editAccountBalance)

