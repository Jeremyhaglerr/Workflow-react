import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// Services
import { getOne } from '../../../services/taskService'

const TaskDetails = (props) => {
  const { id } = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setTask(data.task)
    }
    fetchOne()
  }, [id])

  if (!task) return <h1>Loading</h1>

  return (
    <>
      <section className="task-container">
        <div className="task-details">
          <h1>{task.title}</h1>
          <p>{task.project}</p>
          <p>{task.description}</p>
          {task.profile_id === props.user.id ?
          <>
          <Link to={`/tasks/${task.id}/edit`} ><button>Edit</button></Link>
          <button onClick={() => props.deleteTask(task.id)} >Delete</button>
          </>
          :
          <></>
          }
        </div>
      </section>
    </>
  )
}

export default TaskDetails