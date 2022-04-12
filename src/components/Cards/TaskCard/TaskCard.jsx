import { Link } from 'react-router-dom'

const TaskCard = (props) => {

  return (
    <Link to={`/tasks/${props.task.id}`} className="card">
      <div className="card-content">
        <h2 className="card-title">{props.task.title}</h2>
        <p><small>{props.task.description}</small></p>
      </div>
    </Link>
  )
}

export default TaskCard