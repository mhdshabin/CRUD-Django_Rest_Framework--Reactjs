import React from 'react'

const EditPatient = ({handleEditSubmit,selectEditData}) => {
  return (
    <div>
      <h3>EDIT FORM:</h3>
      <form onSubmit={(e)=>handleEditSubmit(e,selectEditData.patient_id)}>
        First Name<input type='text' placeholder='enter the first name' name='first_name' defaultValue={selectEditData.first_name}></input>
        Last Name<input type='text' placeholder='enter the last name' name='last_name'defaultValue={selectEditData.last_name}></input>
        Blood Group<input type='text' placeholder='enter the blood group' name='blood'defaultValue={selectEditData.blood}></input>
        <button type="submit">EDIT</button>
      </form>
    </div>
  )
}

export default EditPatient
