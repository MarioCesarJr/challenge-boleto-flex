import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CustomerController from './app/controllers/CustomerController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/customers/:id', CustomerController.show);
routes.post('/customers', upload.single('image'), CustomerController.store);

export default routes;
