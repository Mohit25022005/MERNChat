import { Router } from "express";
import { getAllUsers, userSignup,userLogin } from "../controllers/user-controllers.js";
import { signupValidator,validate } from "../utils/validators.js";
import { loginValidator } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/",getAllUsers);
userRoutes.post("/signup",validate(signupValidator),userSignup);
userRoutes.post("/login",validate(loginValidator),userLogin);
export default userRoutes;
