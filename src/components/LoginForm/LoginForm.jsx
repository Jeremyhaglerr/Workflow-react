import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="form-input" >
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Please Enter Your Email"
        />
      </div>
      <br />
      <div className="form-input" >
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="PLease Enter Your Password"
        />
      </div>
      <br />
        <button className='btn' >Log In</button>
        <Link to="/">
          <br />
          <button className='btn delete' >Cancel</button>
        </Link>
    </form>
    </>
  )
}

export default LoginForm
