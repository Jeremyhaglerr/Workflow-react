import { Link } from 'react-router-dom'

const TaskCard = (props) => {

  return (
    <div className="card">
      <Link to={`/tasks/${props.task.id}`}>
        <h2 className="card-title">{props.task.title}</h2>
        <p><small>{props.task.project}</small></p>
      </Link>
    </div>
  )
}

export default TaskCard