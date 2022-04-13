import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services
import { getOne } from '../../../services/issueService'

// Components
import IssueInput from './IssueInput'

const TaskForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    id ? props.updateIssue(form) : props.addIssue(form)
    navigate(`/`)
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.issue.id,
        title: data.issue.title,
        project: data.issue.project,
        error: data.issue.error,
        description: data.issue.description
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <section className="container">
        <div className="page-header">
          {id
            ? <h1>Edit Issue</h1>
            : <h1>Add Issue</h1>
          }
        </div>
        <form onSubmit={handleSubmit}>
          <IssueInput form={form} handleChange={handleChange} />
          <br />
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
    </>
  )
}

export default TaskForm