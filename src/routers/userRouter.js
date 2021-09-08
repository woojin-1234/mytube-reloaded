import express from "express";
import { edit, remove, logout, seeUser, login } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", seeUser);

export default userRouter;