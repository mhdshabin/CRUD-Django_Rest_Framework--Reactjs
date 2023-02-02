
const AddPatient = ({handleAddSubmit,handleCancelBtn}) => {
  return (
    <div>
      <h3>ADD FORM:</h3>
      <form onSubmit={handleAddSubmit}>
        First Name<input type='text' placeholder='enter the first name' name='first_name'></input>
        Last Name<input type='text' placeholder='enter the last name' name='last_name'></input>
        Blood Group<input type='text' placeholder='enter the blood group' name='blood'></input>
        <button type="submit">ADD</button><button onClick={handleCancelBtn} >CANCEL</button>
      </form>
    </div>
  )
}

export default AddPatient
