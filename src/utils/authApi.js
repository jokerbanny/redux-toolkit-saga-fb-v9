import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../database/firebase'

// User Signup
export const userSingupApi = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const user = userCredential.user

  updateProfile(auth.currentUser, {
    displayName: name,
  })

  const userCopy = { name, email, password }
  userCopy.timestamp = serverTimestamp()

  await setDoc(doc(db, 'users', user.uid), userCopy)

  return auth.currentUser
}

// User  Sginin
export const userSigninApi = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  if (userCredential.user) {
    return auth.currentUser
  }
}

// User Signin
export const signinApi = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  if (userCredential.user) {
    return auth.currentUser
  }
}

// User Signup & Signin With Google
export const googleSignupSignin = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user

  // Check for user
  const docRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(docRef)

  // If user, doesn't exist, create user
  if (!docSnap.exists()) {
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
    })
  }
  return auth.currentUser
}

// User Sign In & SignUp With Facebook
// export const facebookOAuthApi = async () => {
//   const auth = getAuth()
//   const provider = new FacebookAuthProvider()
//   const result = await signInWithPopup(auth, provider)
//   const user = result.user

//   // Check for user
//   const docRef = doc(db, 'users', user.uid)
//   const docSnap = await getDoc(docRef)

//   // If user, doesn't exist, create user
//   if (!docSnap.exists()) {
//     await setDoc(doc(db, 'users', user.uid), {
//       name: user.displayName,
//       email: user.email,
//       timestamp: serverTimestamp(),
//     })
//   }

//   return auth.currentUser
// }

// User Logout
export const userLogoutApi = async () => {
  await auth.signOut()
  return
}

// User Forgot Password
export const userForgotPasswordApi = async (email) => {
  await sendPasswordResetEmail(auth, email)
  return
}

export const userRetsetPasswordApi = async (oobCode, newPassword) => {
  confirmPasswordReset(auth, oobCode, newPassword)
  return
}
