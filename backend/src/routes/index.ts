import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const routes = Router();

routes.post('/signin', UsersController.signIn);

export default routes;
