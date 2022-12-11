import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext } from 'react'
const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        addEmployee(name,email,address,phone)
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' value={name} onChange={e=>setName(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='email' placeholder='Email * ' value={email} onChange={e=>setEmail(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
            <Form.Control as='textarea' placeholder='Address * ' value={address} onChange={e=>setAddress(e.target.value)} rows={3}/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' value={phone} onChange={e=>setPhone(e.target.value)} required/>
        </Form.Group>

        <Button variant='success' type='submit'>Add New Employee</Button>
    </Form>
  )
}

export default AddForm;
