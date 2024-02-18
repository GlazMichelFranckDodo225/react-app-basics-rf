import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h1>Student Details</h1>
        {/* <p>First Name : {props.firstName}</p>
        <p>Last Name : {props.lastName}</p>
        <p>Email : {props.email}</p> */}
        <p>First Name : {props.student.firstName}</p>
        <p>Last Name : {props.student.lastName}</p>
        <p>Email : {props.student.email}</p>
        <p>Skills : {props.skills}</p>
    </div>
  )
}

export default Student
