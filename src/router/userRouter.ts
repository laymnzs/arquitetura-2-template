// Criar a pasta src/router e conf o rot userRouter;

//Refatorar o arq index.ts p/ implementar middleware de users;

//Prática 1)

import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController() // instancieiou p/ ter acesso aos métodos


userRouter.get("/", userController.getUsers) // próximo caminho dps de users, virá a barra
userRouter.post("/", userController.createUser)





