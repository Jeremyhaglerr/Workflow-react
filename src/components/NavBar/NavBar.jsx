import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
      {props.user ?
        <nav>
          <div className='nav-logo' >
            <img src="logo.png" height='72' alt="logo" />
          </div>
          <div className='nav-links' >
            <Link to="/tasks">All Tasks</Link>
            <Link to="/issues" >All Issues</Link>
            <Link to="/" ><img src="profile.png"  alt="profile" /></Link>
          </div>
        </nav>
        :
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
