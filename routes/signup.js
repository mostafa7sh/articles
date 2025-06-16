import express from 'express'
import * as loginControllers from '../controllers/login.js'

const router = express.Router();

router.get('/', loginControllers.showSignUpPage);
router.post('/', loginControllers.signUp);

export {
    router
}