import React from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'
const AddForm = () => {
  return (
    <Form>
        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' required/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='email' placeholder='Email * ' required/>
        </Form.Group>

        <Form.Group>
            <Form.Control as='textarea' placeholder='Address * ' rows={3}/>
        </Form.Group>

        <Form.Group>
            <Form.Control type='Text' placeholder='Name * ' required/>
        </Form.Group>

        <Button variant='success' type='submit'>Add New Employee</Button>
    </Form>
  )
}

export default AddForm;
