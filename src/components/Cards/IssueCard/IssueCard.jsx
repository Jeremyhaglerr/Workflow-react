import { Link } from 'react-router-dom'

const IssueCard = (props) => {

  return (
      <div className="card">
    <Link to={`/issues/${props.issue.id}`}>
        <h2 className="card-title">{props.issue.title}</h2>
        <p><small>{props.issue.project}</small></p>
    </Link>
      </div>
  )
}

export default IssueCard