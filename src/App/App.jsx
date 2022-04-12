import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

//Components
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'
import NavBar from '../components/NavBar/NavBar'
import TaskList from '../pages/Lists/TaskList/TaskList'
import TaskForm from '../pages/Forms/TaskForm/TaskForm'
import IssueList from '../pages/Lists/IssueList/IssueList'
import IssueForm from '../pages/Forms/IssueForm/IssueForm'
import Signup from '../pages/Signup/Signup'

//Services
import * as authService from '../services/authService'
import * as taskService from '../services/taskService'
import * as issueService from '../services/issueService'

const App = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [issues, setIssues] = useState([])

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

  const addIssue = async (issueData) => {
    const issue = await issueService.create(issueData)
    setIssues([...issues, issue])
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await taskService.getAll()
      setTasks(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await issueService.getAll()
      setIssues(data)
    }
    fetchData()
  }, [])

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
          path="/tasks"
          element={user ? <TaskList tasks={tasks} /> : <Navigate to="/login" />}
        />
        <Route
          path="/tasks/new"
          element={user ? <TaskForm addTask={addTask} /> : <Navigate to="/login" />}
        />
        <Route
          path="/issues"
          element={user ? <IssueList issues={issues} /> : <Navigate to="/login" />}
        />
        <Route
          path="/issues/new"
          element={user ? <IssueForm addIssue={addIssue} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App