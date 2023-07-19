const express = require('express');
const cors = require('cors')
const {sendOTP, verifyOTP,sendMsg} = require('../controller/twilio-sms');
const router = express.Router();

router.use(cors());

router.route('/sendotp').post(sendOTP);
router.route('/verify-otp').post(verifyOTP);
router.route('/send-msg').post(sendMsg);
// router.route('/verify-otp').get(()=>{console.log("posting here. . .")});
module.exports = router