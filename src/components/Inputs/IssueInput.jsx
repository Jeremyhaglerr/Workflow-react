const TaskInput = ({ form, handleChange }) => {
  return (
    <>
    <div className="form-input" >
      <input
        value={form.title ? form.title : ''} onChange={handleChange} id="title"
        required name="title" type="text" placeholder="Title" autoComplete="off"
      />
    </div>
      <br />
      <div className="form-input" >
      <input
        value={form.project ? form.project : ''} onChange={handleChange} id="project"
        required name="project" type="text" placeholder="Project" autoComplete="off"
      />
    </div>
      <br />
      <div className="form-input" >
      <input
        value={form.error ? form.error : ''} onChange={handleChange} id="error"
        required name="error" type="text" placeholder="Include associated error" autoComplete="off"
      />
      </div>
      <br />
      <div className="form-input" >
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      </div>
    </>
  )
}

export default TaskInput