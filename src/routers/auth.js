import { Router } from 'express';
import * as authController from '../controllers/auth.js';
import { validateBody } from '../utils/validateBody.js';
import {
  authRegisterSchema,
  authLoginSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';
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

authRouter.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWraper(authController.sendResetEmailController),
);
authRouter.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  ctrlWraper(authController.resetPasswordController),
);

authRouter.post('/refresh', ctrlWraper(authController.refreshTokenController));

authRouter.post('/logout', ctrlWraper(authController.logoutController));

export default authRouter;
