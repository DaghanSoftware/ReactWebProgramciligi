import React from "react";
import { useContext, useState,useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from "./EditForm";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
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
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
        <button
          onClick={handleShow}
          className="btn text-warning btn-act"
          data-toggle="modal"
        >
          <i className="material-icons">
            &#xE254;
          </i>
        </button>
        </OverlayTrigger>
        
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
        <button
          onClick={() => deleteEmployee(employees.id)}
          className="btn text-danger btn-act"
          data-toggle="modal"
        >
          <i className="material-icons">
            &#xE872;
          </i>
        </button>
        </OverlayTrigger>
        
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
