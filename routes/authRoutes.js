const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); // Registration route
router.post('/login', loginUser);       // Login route
router.get('/user', verifyToken, getUserInfo); // Protected route to get user info

module.exports = router;
