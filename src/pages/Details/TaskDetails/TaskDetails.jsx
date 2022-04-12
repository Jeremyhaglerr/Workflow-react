import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
          <p>{task.description}</p>
        </div>
      </section>
    </>
  )
}

export default TaskDetails