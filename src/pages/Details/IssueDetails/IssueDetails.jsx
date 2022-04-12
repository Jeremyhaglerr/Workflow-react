import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
      <section className="task-container">
        <div className="task-details">
          <h1>{issue.title}</h1>
          <p>{issue.error}</p>
          <p>{issue.description}</p>
        </div>
      </section>
    </>
  )
}

export default IssueDetails