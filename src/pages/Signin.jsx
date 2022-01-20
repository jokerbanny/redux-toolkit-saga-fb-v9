import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  googleSignupSigninStart,
  userSigninStart,
} from '../redux/slices/authSlice'

function Signin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userSigninStart({ email, password }))
  }

  const { user } = useSelector((state) => state.users)

  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Form Signin</h1>
          <div>
            <input
              type='email'
              id='email'
              placeholder='Email'
              onChange={handleChange('email')}
              value={email}
            />
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Password'
              onChange={handleChange('password')}
              value={password}
            />
            <button
              type='button'
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              Show Password
            </button>
            <button type='submit'>Signin</button>
            <Link to='/signup'>
              <button type='button'>signup</button>
            </Link>
          </div>
        </div>
        {/* Google oAuth */}
        <button
          type='button'
          onClick={() => dispatch(googleSignupSigninStart())}
        >
          Google Signin
        </button>
        <button type='button'>Facebook Sigup</button>
      </form>
    </div>
  )
}

export default Signin
