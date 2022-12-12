import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext } from 'react'
const EditForm = () => {
    const {updateEmployee} = useContext(EmployeeContext);

  return (
    <Form>
        <Form.Group>
            <Form.Control type='Text' placeholder='Name * '  name="name" required/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='email' placeholder='Email * ' name="email"  required/>
        </Form.Group>

        <Form.Group>
            <Form.Control as='textarea' placeholder='Address * ' name="address" rows={3}/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' name="phone" required/>
        </Form.Group>

        <Button variant='success' type='submit'>Edit Employee</Button>
    </Form>
  )
}

export default EditForm;
