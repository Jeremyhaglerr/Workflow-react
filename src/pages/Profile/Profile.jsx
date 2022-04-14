import TaskCard from "../../components/Cards/TaskCard/TaskCard";
import IssueCard from '../../components/Cards/IssueCard/IssueCard'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  const myTasks = props.tasks.filter(task => task.profile_id === props.user.id)
  const myIssues = props.issues.filter(issue => issue.profile_id === props.user.id)

  return (
    <>
      <section className="page-header">
        <h1>My Tasks</h1>
        <div className='add-btn' >
          <Link to='/tasks/new'><img src="add-btn-2.png" alt="add task" /></Link>
        </div>
      </section>
      <section className="card-container">
        {myTasks?.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
          />
        ))}
      </section>
      <section className="page-header">
        <h1>My Issues</h1>
        <div className='add-btn' >
          <Link to='/issues/new'><img src="add-btn-2.png" alt="add issue" /></Link>
        </div>
      </section>
      <section className="card-container">
        {myIssues?.map((issue) => (
          <IssueCard
            issue={issue}
            key={issue.id}
          />
        ))}
      </section>
    </>
  );
}

export default Profile;