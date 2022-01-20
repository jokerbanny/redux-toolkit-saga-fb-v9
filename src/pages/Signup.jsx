import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import {
  googleSignupSigninStart,
  userSignupStart,
} from '../redux/slices/authSlice'

function Signup() {
  const { loggedIn } = useAuthStatus()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userSignupStart({ name, email, password }))
    navigate('/profile')
  }

  useEffect(() => {
    if (loggedIn) {
      navigate('/profile')
    }
  }, [loggedIn, navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Form Sigup</h1>
          <div>
            <input
              type='text'
              id='name'
              placeholder='Name'
              onChange={handleChange('name')}
              value={name}
            />
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
            <button type='submit'>Signup</button>
            <Link to='/signin'>
              <button type='button'>Signin</button>
            </Link>
          </div>
        </div>
        {/* Google oAuth */}
        <button
          type='button'
          onClick={() => dispatch(googleSignupSigninStart())}
        >
          Google Sigup
        </button>
        <button type='button'>Facebook Sigup</button>
      </form>
    </div>
  )
}

export default Signup
