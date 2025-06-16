import express from 'express'
import * as loginControllers from '../controllers/login.js'

const router = express.Router();

router.get('/', loginControllers.showLoginPage);
router.post('/', loginControllers.login);

export {
    router
}