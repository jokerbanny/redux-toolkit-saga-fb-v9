import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'

import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
