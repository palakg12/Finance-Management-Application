const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
//   getMe,
//   forgotPassword,
//   OtpVerify,
} = require('../controllers/authController')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
// router.get('/me', protect, getMe)
// router.post("/forgot", protect,forgotPassword );
// router.post("/forgot/verify", protect, OtpVerify);



module.exports = router