const CatInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="title">Title</label>
      <input
        value={form.title ? form.title : ''} onChange={handleChange} id="title"
        required name="title" type="text" placeholder="Title" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
    </>
  )
}

export default CatInput