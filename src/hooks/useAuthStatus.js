import { useEffect, useState, useRef } from 'react'
import { auth } from '../database/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { setAuth } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const isMounted = useRef(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true)
          dispatch(setAuth(user))
        }
        setCheckingStatus(false)
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  return { loggedIn, checkingStatus }
}
