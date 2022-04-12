import { Link } from 'react-router-dom'

// Components
import TaskCard from '../../../components/Cards/TaskCard/TaskCard'

const TaskList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Task List</h1>
      </section>
      <div className='add-btn' >
        <Link to='/tasks/new'><button >Add Task</button></Link>
        </div>
      <section className="card-container">
        {props.tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
          />
        ))}
      </section>
    </>
  )
}

export default TaskList