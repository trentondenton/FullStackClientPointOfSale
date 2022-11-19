import React from 'react'
import { Table, Image, Form } from 'react-bootstrap';

function UserTable(props) {
  const employees = props.employee
  return (
    <Table variant="dark" striped bordered hover>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>DOB</th>
          <th>Phone</th>
          <th>Pay</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Employee</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.empID}>
            <td>{employee.empPicture ?
              <Image fluid roundedCircle src={employee.empPicture} alt="Employee" /> :
              <Image fluid roundedCircle src="https://via.placeholder.com/40" alt="Employee" />
            }</td>
            <td>{employee.empFirstName}</td>
            <td>{employee.empLastName}</td>
            <td>{employee.empUsername}</td>
            <td>{employee.empDOB}</td>
            <td>{employee.empPhone}</td>
            <td>{employee.empSalary ? employee.empSalary : employee.empHourly}</td>
            <td>{employee.empStartDate}</td>
            <td>{employee.empEndDate ? employee.empEndDate : 'N/A'}</td>
            <td className="m-auto">{employee.empStatus ?
              <Form.Check aria-label="Current Employee" checked disabled />
              :
              <Form.Check aria-label="Past Employee" disabled />
            }</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UserTable