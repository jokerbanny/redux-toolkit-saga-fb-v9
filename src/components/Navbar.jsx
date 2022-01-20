import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogoutStart } from '../redux/slices/authSlice'
function Navbar() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleLgout = () => {
    dispatch(userLogoutStart())
    navigate('/signin')
  }

  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        {user ? (
          <li>
            <span onClick={handleLgout}>Logout</span>
          </li>
        ) : (
          <div>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/signin'>Signin</Link>
            </li>

            <li>
              <Link to='/forgotpassword'>Forgot Password</Link>
            </li>
            <li>
              <Link to='/resetpassword'>Reset Password</Link>
            </li>
          </div>
        )}
      </ul>
    </>
  )
}

export default Navbar
