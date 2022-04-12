const TaskInput = ({ form, handleChange }) => {
  return (
    <>
    <div className="form-input" >
      <label htmlFor="title">Title</label>
      <input
        value={form.title ? form.title : ''} onChange={handleChange} id="title"
        required name="title" type="text" placeholder="Title" autoComplete="off"
      />
    </div>
      <br />
      <div className="form-input" >
      <label htmlFor="description">Error</label>
      <input
        value={form.error ? form.error : ''} onChange={handleChange} id="error"
        required name="error" type="text" placeholder="Include associated error" autoComplete="off"
      />
      </div>
      <br />
      <div className="form-input" >
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      </div>
    </>
  )
}

export default TaskInput