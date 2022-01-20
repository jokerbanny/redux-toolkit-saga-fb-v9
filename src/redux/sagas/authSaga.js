import { call, put } from 'redux-saga/effects'
import {
  userSingupApi,
  userSigninApi,
  googleSignupSignin,
  userLogoutApi,
  userForgotPasswordApi,
  userRetsetPasswordApi,
} from '../../utils/authApi'
import {
  userSignupSuccess,
  userSignupError,
  userSigninSuccess,
  userSigninError,
  googleSignupSigninSuccess,
  googleSignupSigninError,
  userLogoutSuccess,
  userLogoutError,
  userForgotPasswordSuccess,
  userForgotPasswordError,
  userResetPasswordSuccess,
  userResetPasswordError,
} from '../slices/authSlice'

// User Signup
export function* onUserSignupStartAsync({
  payload: { name, email, password },
}) {
  try {
    const user = yield call(userSingupApi, name, email, password)
    yield put(userSignupSuccess(user))
  } catch (error) {
    yield put(userSignupError(error.message))
  }
}

// User Signin
export function* onUserSigninStartAsync({ payload: { email, password } }) {
  try {
    const user = yield call(userSigninApi, email, password)
    yield put(userSigninSuccess(user))
  } catch (error) {
    yield put(userSigninError(error.message))
  }
}

// User Signin With Google
export function* onGoogleSignupSigninStartAsync() {
  try {
    const user = yield call(googleSignupSignin)
    yield put(googleSignupSigninSuccess(user))
  } catch (error) {
    yield put(googleSignupSigninError(error.message))
  }
}

// User Logout
export function* onUserLogoutStartAsync() {
  try {
    yield call(userLogoutApi)
    yield put(userLogoutSuccess())
  } catch (error) {
    yield put(userLogoutError(error.message))
  }
}

// User Forgot Password
export function* onUserForgotPasswordStartAsync({ payload: email }) {
  try {
    yield call(userForgotPasswordApi, email)
    yield put(userForgotPasswordSuccess())
  } catch (error) {
    yield put(userForgotPasswordError(error.message))
  }
}

// User Forgot Password
export function* onUserResetPasswordStartAsync({
  payload: { oobCode, newPassword },
}) {
  try {
    yield call(userRetsetPasswordApi, oobCode, newPassword)
    yield put(userResetPasswordSuccess())
  } catch (error) {
    yield put(userResetPasswordError(error.message))
  }
}
