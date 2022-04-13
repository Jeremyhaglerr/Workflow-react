import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div className='nav-logo' >
            <img src="https://cdn-icons-png.flaticon.com/512/2593/2593065.png" height='48' alt="logo" />
          </div>
          <div className='nav-links' >
            <Link to="/tasks">All Tasks</Link>
            <Link to="/issues" >All Issues</Link>
            <Link to="/" >Profile</Link>
            <Link to="" onClick={handleLogout}><img src="https://cdn-icons-png.flaticon.com/512/351/351835.png" height='36' alt="log out" /></Link>
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
