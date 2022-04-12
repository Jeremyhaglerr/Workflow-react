import { Link } from 'react-router-dom'

const IssueCard = (props) => {

  return (
    <Link to={`/issues/${props.issue.id}`} className="card">
      <div className="card-content">
        <h2 className="card-title">{props.issue.name}</h2>
        <p>{props.issue.error}</p>
        <p><small>{props.issue.description}</small></p>
      </div>
    </Link>
  )
}

export default IssueCard