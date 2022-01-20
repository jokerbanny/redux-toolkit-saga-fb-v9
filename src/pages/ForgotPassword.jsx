import { userForgotPasswordStart } from '../redux/slices/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(userForgotPasswordStart(email))
      console.log(`password hass send to ${email} success`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          vlaue={email}
        />
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default ForgotPassword
