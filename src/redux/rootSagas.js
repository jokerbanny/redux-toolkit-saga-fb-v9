import { fork, all, takeEvery } from 'redux-saga/effects'
import {
  onUserSignupStartAsync,
  onUserSigninStartAsync,
  onGoogleSignupSigninStartAsync,
  onUserLogoutStartAsync,
  onUserForgotPasswordStartAsync,
  onUserResetPasswordStartAsync,
} from './sagas/authSaga'

// User Signup
function* onUserSignup() {
  yield takeEvery('users/userSignupStart', onUserSignupStartAsync)
}

// User Signin
function* onUserSignin() {
  yield takeEvery('users/userSigninStart', onUserSigninStartAsync)
}

// User Signup & Signin With Google
function* onGooleSignupSingin() {
  yield takeEvery(
    'users/googleSignupSigninStart',
    onGoogleSignupSigninStartAsync
  )
}

// User Logout
function* onUserLogout() {
  yield takeEvery('users/userLogoutStart', onUserLogoutStartAsync)
}

// User Forgot Password
function* onUserForgotPassword() {
  yield takeEvery(
    'users/userForgotPasswordStart',
    onUserForgotPasswordStartAsync
  )
}

// User Reset Password
function* onUserResetPassword() {
  yield takeEvery('users/userResetPasswordStart', onUserResetPasswordStartAsync)
}

const allSagas = [
  fork(onUserSignup),
  fork(onUserSignin),
  fork(onGooleSignupSingin),
  fork(onUserLogout),
  fork(onUserForgotPassword),
  fork(onUserResetPassword),
]

export default function* rootSagas() {
  yield all([...allSagas])
}
