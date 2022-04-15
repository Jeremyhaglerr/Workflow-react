import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
      {props.user ?
        <nav>
          <ul className="sidenav">
            <li><Link to="/"><img className='logo' src="logo.png" alt="home" /><br /><span>Home</span></Link></li>
            <li><Link to="/profile"><img className='profile' src="profile.png" alt="" /><br /><span>Profile</span></Link></li>
            <li><Link to="/tasks"> <img src="task.png" alt="tasks" /><br /><span>All Tasks</span></Link></li>
            <li><Link to="/issues"> <img src="issue.png" alt="issues" /><br /><span>All Issues</span></Link></li>
            <li><Link to="" onClick={props.handleLogout}><img  src="logout.png" alt="log out" /><br /><span>Logout</span></Link></li>
          </ul>
        </nav>
        :
        <nav>
          <ul className="sidenav">
           <li><Link to="/"><img className='logo' src="logo.png" alt="home" /><br /><span>Home</span></Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
