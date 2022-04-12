import { Link } from 'react-router-dom'

// Components
import IssueCard from '../../../components/Cards/IssueCard/IssueCard'

const IssueList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Issues List</h1>
      </section>
        <div className='add-btn' >
        <Link to='/issues/new'><button >Add Issue</button></Link>
        </div>
      <section className="card-container">
        {props.issues.map((issue) => (
          <IssueCard
            issue={issue}
            key={issue.id}
          />
        ))}
      </section>
    </>
  )
}

export default IssueList