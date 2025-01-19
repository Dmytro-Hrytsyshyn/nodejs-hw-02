import { Router } from 'express';
import * as authController from '../controllers/auth.js';
import { validateBody } from '../utils/validateBody.js';
import { authRegisterSchema, authLoginSchema } from '../validation/auth.js';
import { ctrlWraper } from '../utils/ctrlWraper.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(authRegisterSchema),
  ctrlWraper(authController.registerController),
);

authRouter.post(
  '/login',
  validateBody(authLoginSchema),
  ctrlWraper(authController.loginController),
);

export default authRouter;
