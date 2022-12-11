import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext } from 'react'
const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext);

    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [address,setAddress] = useState("");
    // const [phone,setPhone] = useState("");

    const [newEmployee,setNewEmployee]= useState({
        name:"",email:"", address:"",phone:""
    })
    const {name,email,address,phone} = newEmployee;
    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addEmployee(name,email,address,phone)
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' value={name} name="name" onChange={e=>onInputChange(e)} required/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='email' placeholder='Email * ' value={email} name="email"  onChange={e=>onInputChange(e)} required/>
        </Form.Group>

        <Form.Group>
            <Form.Control as='textarea' placeholder='Address * ' value={address} name="address"  onChange={e=>onInputChange(e)} rows={3}/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' value={phone} name="phone"  onChange={e=>onInputChange(e)} required/>
        </Form.Group>

        <Button variant='success' type='submit'>Add New Employee</Button>
    </Form>
  )
}

export default AddForm;
