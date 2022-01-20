import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    isLoading: false,
    isError: null,
  },

  reducers: {
    // User Signup
    userSignupStart: (state) => {
      state.isLoading = true
    },
    userSignupSuccess: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
    userSignupError: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },

    // User Signin
    userSigninStart: (state) => {
      state.isLoading = true
    },
    userSigninSuccess: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
    userSigninError: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },

    // User Signin & SignUp With Google
    googleSignupSigninStart: (state) => {
      state.isLoading = true
    },
    googleSignupSigninSuccess: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
    googleSignupSigninError: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },

    // User Signin
    userLogoutStart: (state) => {
      state.isLoading = true
    },
    userLogoutSuccess: (state) => {
      state.user = null
      state.isLoading = false
    },
    userLogoutError: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },

    // User Fogot Password
    userForgotPasswordStart: (state) => {
      state.isLoading = true
    },
    userForgotPasswordSuccess: (state) => {
      state.isLoading = false
    },
    userForgotPasswordError: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },
    // User Reset Password
    userResetPasswordStart: (state) => {
      state.isLoading = true
    },
    userResetPasswordSuccess: (state) => {
      state.isLoading = false
    },
    userResetPasswordError: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },

    // Set User When User Login & Signup
    setAuth: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
  },
})

export const {
  userSignupStart,
  userSignupSuccess,
  userSignupError,
  userSigninStart,
  userSigninSuccess,
  userSigninError,
  googleSignupSigninStart,
  googleSignupSigninSuccess,
  googleSignupSigninError,
  userLogoutStart,
  userLogoutSuccess,
  userLogoutError,
  userForgotPasswordStart,
  userForgotPasswordSuccess,
  userForgotPasswordError,
  userResetPasswordStart,
  userResetPasswordSuccess,
  userResetPasswordError,
  setAuth,
} = authSlice.actions
export default authSlice.reducer
