import { Router } from 'express';

import users from './users';
import authentication from './authentication';

const router = Router();

export default (): Router => {
  authentication(router);
  users(router);
  return router;
};
