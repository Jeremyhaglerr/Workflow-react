import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// Services
import { getOne } from '../../../services/issueService'

const IssueDetails = (props) => {
  const { id } = useParams()
  const [issue, setIssue] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setIssue(data.issue)
    }
    fetchOne()
  }, [id])

  if (!issue) return <h1>Loading</h1>

  return (
    <>
      <section className="container">
        <div className="task-details">
          <h1>{issue.title}</h1>
          <p><span>Project: </span>{issue.project}</p>
          <p><span>Error: </span>{issue.error}</p>
          <p><span>Description: </span>{issue.description}</p>
          {issue.profile_id === props.user.id ?
          <>
          <Link to={`/issues/${issue.id}/edit`} ><button className='btn' >Edit</button></Link>
          <button className='btn' onClick={() => props.deleteIssue(issue.id)} >Delete</button>
          </>
          :
          <></>
          }
        </div>
      </section>
    </>
  )
}

export default IssueDetails