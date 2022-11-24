import React, { useState } from 'react'
import { Image, Form, Button } from 'react-bootstrap';
import { BsPencil, BsCheckLg, BsTrash2Fill } from 'react-icons/bs';

function UserTable(props) {
  const employee = props.employee
  const [editEmployee, setEditEmployee] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({});

  const handleEditEmployeeClick = (e) => {
    setEditedEmployee(employee);
    setEditEmployee(true);
  }

  const handleEditEmployeeChange = (e) => {
    setEditedEmployee({
      ...editedEmployee,
      [e.target.name]: e.target.value

    });
  }

  const handleEditEmployeeSubmit = (e) => {
    props.editEmployeeSubmit(editedEmployee);
    setEditEmployee(false);
  }


  return (
    <tr key={employee.empID}>
      <td>{employee.empPicture ?
        <Image fluid roundedCircle styles={{ height: '40px', width: '40px' }} src={employee.empPicture} alt="Employee" />
        :
        <Image fluid roundedCircle src="https://via.placeholder.com/40" alt="Employee" />
      }</td>

      {editEmployee ?
        <td><Form.Control type="text" name="empFirstName" value={editedEmployee.empFirstName} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empFirstName}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empLastName" value={editedEmployee.empLastName} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empLastName}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empUsername" value={editedEmployee.empUsername} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empUsername}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empDOB" value={editedEmployee.empDOB} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empDOB}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empPhone" value={editedEmployee.empPhone} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empPhone}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empSalary" value={editedEmployee.empSalary} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empSalary}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empHourly" value={editedEmployee.empHourly} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empHourly}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empStartDate" value={editedEmployee.empStartDate} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empStartDate}</td>
      }
      {editEmployee ?
        <td><Form.Control type="text" name="empEndDate" value={editedEmployee.empEndDate} onChange={handleEditEmployeeChange} /></td>
        :
        <td>{employee.empEndDate ? employee.empEndDate : 'N/A'}</td>
      }

      {editEmployee ?
        <td><Form.Control as="select" name="empSatus" value={editedEmployee.empStatus} onChange={handleEditEmployeeChange}>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Control>
        </td>
        :
        <td>{employee.empStatus ? 'True' : 'False'}</td>
      }
      {editEmployee ?
        <td>
          <Button type="button" variant="success" onClick={handleEditEmployeeSubmit}><BsCheckLg /></Button>
        </td>
        :
        <td>
          <Button type="button" variant="primary" onClick={handleEditEmployeeClick}><BsPencil /></Button>
        </td>
      }

      <td>
        <Button type="button" variant="danger" onClick={() => props.deleteEmployee(employee.empID)}><BsTrash2Fill /></Button>
      </td>

    </tr>
  )
}

export default UserTable