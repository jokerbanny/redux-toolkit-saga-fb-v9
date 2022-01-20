import { userResetPasswordStart } from '../redux/slices/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
function ResetPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const query = useQuery()
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(userResetPasswordStart(query.get('oobCode'), password))
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(query.get('mode'), query.get('oobCode'))

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setPassword(e.target.value)}
          vlaue={password}
        />
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default ResetPassword
