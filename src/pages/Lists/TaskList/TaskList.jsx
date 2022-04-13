import { Link } from 'react-router-dom'

// Components
import TaskCard from '../../../components/Cards/TaskCard/TaskCard'

const TaskList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Task List</h1>
        <div className='add-btn' >
          <Link to='/tasks/new'><img src="add-btn.png" alt="add task" /></Link>
        </div>
      </section>
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