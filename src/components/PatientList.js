import React, { useEffect, useState } from 'react'
import {getpatient} from '../services/ApiService'
import AddPatient from './AddPatient'
import {addpatient, editpatient ,deletepatient, getdoctor} from '../services/ApiService'
import EditPatient  from './EditPatient'



const PatientList = () => {
    const [patients,setpatients]=useState([])
    const [showAddPatientform,setShowAddPatientform]=useState(false)
    const [showEditPatientform,setshowEditPatientform]=useState(false)
    const [selectEditData,setselectEditData]=useState()
    const[doctor,setdoctor]=useState([])

    useEffect(()=>{
        let mount=true
        getpatient()
        .then(res=>{ console.log(res);
            setpatients(res)
            return()=> mount=false
        })
    },[])

    useEffect(()=>{
      let mount=true
      getdoctor()
      .then(res=>{ console.log(res);
          setdoctor(res)
          return()=> mount=false
      })
  },[])

    const handleAddSubmit=(e)=>{
      addpatient(e.target)
      .then(res=>{
        setpatients(res)
      })
    }
    const handleEditBtn=(patient)=>{
      setselectEditData(patient)
      setshowEditPatientform(true)
      setShowAddPatientform(false)
    }

    const handleEditSubmit=(e,id)=>{
      editpatient(id,e.target)
      .then(res=>{
        setpatients(res)
      })
    }
    const handleDeleteBtn=(id)=>{
      deletepatient(id)
      .then(res=>{
        setpatients(patients.filter(p=>p.patient_id !== id))
      })
    }
    const handleCancelBtn=()=>{
      setshowEditPatientform(false)
    }
  return (
    <div className='container'>
      <h3 className='heading'> Patient List</h3>
      <table className='table' border={"2px"} cellPadding={'10px'}>
        <thead>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td> Blood</td>
                <td> Action</td>
            </tr>
        </thead>
        <tbody>
            {patients.map(patient=>{
                return <tr key={patient.patient_id}>
                    <td>{patient.first_name}</td>
                    <td>{patient.last_name}</td>
                    <td>{patient.blood}</td>
                    <td><button onClick={()=>handleEditBtn(patient)}>Edit</button><button onClick={()=>handleDeleteBtn(patient.patient_id)}>Delete</button></td>
                </tr>
            })
            }
    
        </tbody>
      </table>
    <button onClick={()=>setShowAddPatientform(true)}>Add New Patient</button>
    {showAddPatientform && <AddPatient handleAddSubmit={handleAddSubmit} handleCancelBtn={handleCancelBtn}/>}
    {showEditPatientform && <EditPatient handleEditSubmit={handleEditSubmit} selectEditData={selectEditData}/>}

    <h3> Doctor List</h3>
    <table border={"2px"} cellPadding={'10px'}>
        <thead>
            <tr>
                <td>Doctor Name</td>
                <td>Catagory</td>
            </tr>
        </thead>
        <tbody>
            {doctor.map(doctor=>{
                return <tr key={doctor.doctor_id}>
                    <td>{doctor.doctor_name}</td>
                    <td>{doctor.catagory}</td>
                </tr>
            })
            }
    
        </tbody>
      </table>
    </div>
      

    
  )
}

export default PatientList
