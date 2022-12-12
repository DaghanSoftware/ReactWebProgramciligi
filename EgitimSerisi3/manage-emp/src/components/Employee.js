import React from "react";
import { useContext, useState,useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from "./EditForm";
const Employee = ({ employees }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    handleClose();
  },[employees])
  return (
    <React.Fragment>
      <td>{employees.name}</td>
      <td>{employees.email}</td>
      <td>{employees.address}</td>
      <td>{employees.phone}</td>
      <td>
        <button
          onClick={handleShow}
          className="btn text-warning btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => deleteEmployee(employees.id)}
          className="btn text-danger btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal
      size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      centered
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employees}></EditForm>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default Employee;
