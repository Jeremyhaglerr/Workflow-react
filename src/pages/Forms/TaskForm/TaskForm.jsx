import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../../styles/Form.css'

// Services
import { getOne } from '../../../services/taskService'

// Components
import TaskInput from './TaskInput'

const TaskForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    id ? props.updateTask(form) : props.addTask(form)
    navigate(`/`)
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.task.id,
        title: data.task.title,
        description: data.task.description
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
        {id
          ? <h1>Edit Task</h1>
          : <h1>Add Task</h1>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <TaskInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default TaskForm