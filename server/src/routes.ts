import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import usersController from './controllers/UsersController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();
const usersControllers = new usersController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

routes.post('/register', usersControllers.register);
routes.post('/authenticate', usersControllers.authenticate);

export default routes;