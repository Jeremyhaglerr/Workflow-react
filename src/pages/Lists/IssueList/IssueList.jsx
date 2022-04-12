import '../../../styles/List.css'

// Components
import IssueCard from '../../../components/Cards/IssueCard/IssueCard'

const IssueList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Issues List</h1>
      </section>
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