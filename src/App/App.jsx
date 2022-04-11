import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

//Components
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'
import NavBar from '../components/NavBar/NavBar'
import TaskForm from '../pages/Forms/TaskForm/TaskForm'
import Signup from '../pages/Signup/Signup'

//Services
import * as authService from '../services/authService'
import * as taskService from '../services/taskService'

const App = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [issue, setIssue] = useState([])

  const [user, setUser] = useState(authService.getUser())

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const addTask = async (taskData) => {
    const task = await taskService.create(taskData)
    setTasks([...tasks, task])
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
      <Route
          path='/'
          element={user ? <Landing user={user} /> : <Navigate to='/login'/>}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/tasks/new"
          element={user ? <TaskForm addTask={addTask} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
