import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorPay, verifyRazorpay } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/update-profile',upload.single('image'), authUser , updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/list-appointment', authUser ,listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/payment-razorpay', authUser, paymentRazorPay)
userRouter.post('/verify-razorpay', authUser, verifyRazorpay)
export default userRouter