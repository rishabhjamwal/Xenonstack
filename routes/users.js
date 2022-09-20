const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users_controller');


router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.get('/Log-out',usersController.logOut);
router.get('/profile',usersController.profile);
router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);

module.exports = router;