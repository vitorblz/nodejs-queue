import { Router } from 'express';
import emailSend from './controller/Email';

const routes = Router();

routes.post('/envio', emailSend);

export default routes;
