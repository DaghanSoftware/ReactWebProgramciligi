import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext } from 'react'
const EditForm = ({theEmployee}) => {
    const {updateEmployee} = useContext(EmployeeContext);
    const employee = theEmployee;
    const id = employee.id

    const [name,setName] = useState(employee.name);
    const [email,setEmail] = useState(employee.email);
    const [address,setAddress] = useState(employee.address);
    const [phone,setPhone] = useState(employee.phone);

    const updatedEmployee = {id,name,email,address,phone}

    const handleSubmit = (e)=>{
        e.preventDefault();
        updateEmployee(id,updatedEmployee);
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' value={name} onChange={(e)=>setName(e.target.value)} name="name" required/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='email' placeholder='Email * ' value={email} onChange={(e)=>setEmail(e.target.value)} name="email"  required/>
        </Form.Group>

        <Form.Group>
            <Form.Control as='textarea' placeholder='Address * ' value={address} onChange={(e)=>setAddress(e.target.value)} name="address" rows={3}/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='Text' placeholder='Name * '  value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone" required/>
        </Form.Group>

        <Button variant='success' type='submit'>Edit Employee</Button>
    </Form>
  )
}

export default EditForm;
